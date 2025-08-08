using game_pulse.Data.Contexts;
using game_pulse.Data.Models;
using game_pulse.Interfaces;
using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Filters;
using game_pulse.Interfaces.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace game_pulse.Services
{
    // TODO: INTEGER WILL NEED TO BE A FLOAT ON PLAYER_GRADE (GAME_PLAYERS)
    public class GamesService : IGamesService
    {
        private readonly GamePulseDbContext _context;
        private readonly ILogger<GamesService> _logger;

        public GamesService(GamePulseDbContext context, ILogger<GamesService> logger) 
        { 
            _context = context;
            _logger = logger;
        }

        public async Task<List<PlayersLeaderboardTableDto>> GetCourtTopPlayersAsync(GamesFilterModel filter)
        {
            var data = await _context.GamePlayers
                .Where(gp => gp.Game.CourtId == filter.CourtId)
                .Include(gp => gp.User)
                .ThenInclude(u => u.FavoriteSportNavigation)
                .GroupBy(gp => gp.UserId)
                .Select(grp => new PlayersLeaderboardTableDto
                {
                    Name = grp.First().User.Name,
                    Nickname = grp.First().User.Nickname,
                    Sport = grp.First().User.FavoriteSportNavigation.Name,
                    Grade = grp.Average(x => x.PlayerGrade)
                })
                .OrderByDescending(x => x.Grade)
                .Take(5)
                .ToListAsync();

            data.ForEach(x => x.Grade = Math.Round((double)x.Grade, 1));

            return (data);
        }

        public async Task<List<CourtGameDto>> GetCourtGamesFilteredAsync(GamesFilterModel filter)
        {
            var query = _context.Games
                .Include(g => g.Court)
                .ThenInclude(g => g.Sports)
                .Where(g => g.CourtId == filter.CourtId)
                .Where(g => DateOnly.FromDateTime(g.GameTime) == filter.GameDate)
                .Where(g => 
                    TimeOnly.FromDateTime(g.GameTime) >= filter.GameTimeStart &&
                    TimeOnly.FromDateTime(g.GameTime) <= filter.GameTimeEnd
                )
                .OrderBy(g => g.GameTime)
                .AsQueryable();

            if (filter.CourtId.HasValue)
                query = query.Where(g => g.CourtId == filter.CourtId);

            var games = await query
                .Select(g => new CourtGameDto
                {
                    GameId = g.Id,
                    CourtName = g.Court.Name,
                    Sport = g.Sport.Name,
                    GameTime = g.GameTime,
                    Players = g.GamePlayers.Select(gp => new GamePlayerDto
                    {
                        Name = gp.User.Name,
                        Nickname = gp.User.Nickname,
                        Xp = gp.User.Xp
                    }).ToList()
                })
                .ToListAsync();

            return games; 
        }

        public async Task<List<UserNextGamesDto>> GetUserGamesAsync(GamesFilterModel filter, bool isUpcoming = true)
        {
            var query = _context.GamePlayers
                .Where(gp => gp.UserId == filter.UserId)
                .AsQueryable();

            if (filter.CourtId.HasValue)
                query = query.Where(gp => gp.Game.CourtId == filter.CourtId);

            query = isUpcoming
                ? query.Where(gp => gp.Game.GameTime > DateTime.Now)
                : query.Where(gp => gp.Game.GameTime < DateTime.Now);

            query = query.OrderBy(gp => gp.Game.GameTime);

            var data = await query
                .Select(gp => new UserNextGamesDto
                {
                    GameId = gp.Game.Id,
                    CourtId = gp.Game.CourtId,
                    CourtName = gp.Game.Court.Name,
                    SportId = gp.Game.Sport.Id,
                    SportName = gp.Game.Sport.Name,
                    GameTime = gp.Game.GameTime,
                    UserId = gp.UserId,
                    Presence = gp.Presence
                })
                .ToListAsync();

            return (data);
        }

        public async Task<int> CreateGame(GameCreateModel details)
        {
            var gameDateTime = details.GameDate.ToDateTime(details.GameTimeStart);

            var courtGame = new Game
            {
                CourtId = details.CourtId,
                SportId = details.SportId,
                GameTime = gameDateTime,
                BestPlayerId = null
            };

            _context.Games.Add(courtGame);
            await _context.SaveChangesAsync();

            return courtGame.Id;
        }

        public async Task<GamePlayer> SubscribePlayerToGame(int gameId, string userId)
        {
            var gamePlayer = new GamePlayer
            {
                GameId = gameId,
                UserId = userId,
                Presence = true,
                PlayerGrade = null
            };

            _context.GamePlayers.Add(gamePlayer);
            await _context.SaveChangesAsync();

            return gamePlayer;
        }
    }
}
