using game_pulse.Data.Contexts;
using game_pulse.Data.Models;
using game_pulse.Interfaces;
using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Filters;
using game_pulse.Interfaces.Models;
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

        public async Task<GameInfoDto> GetGameInfo(int gameId)
        {
            var game = await _context.Games
                .Where(g => g.Id == gameId)
                .Include(g => g.Court)
                .ThenInclude(g => g.Sports)
                .Select(g => new GameInfoDto
                {
                    Id = g.Id,
                    BestPlayerName = g.BestPlayer != null ? g.BestPlayer.Name : "No best player",
                    CourtName = g.Court.Name,
                    City = $"{g.Court.City}, {g.Court.State}",
                    Address = g.Court.Address,
                    GoogleMaps = g.Court.GMaps,
                    SportName = g.Sport.Name,
                    DateTime = g.GameTime,
                    Date = g.GameTime.ToString("dd/MM/yyyy"),
                    Time = g.GameTime.ToString("HH:mm"),
                    DayOfWeek = g.GameTime.ToString("dddd"),
                    Players = g.GamePlayers.Select(gp => new GamePlayerDto
                    {
                        Id = gp.User.Id,
                        Name = gp.User.Name,
                        Nickname = gp.User.Nickname,
                        Xp = gp.User.Xp
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            //if (game == null) return null;

            return game;

        }

        public async Task<List<PlayersLeaderboardTableDto>> GetCourtTopPlayers(GamesFilterModel filter)
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

        public async Task<List<CourtGameDto>> GetCourtGamesFiltered(GamesFilterModel filter)
        {
            var query = _context.Games
                .Include(g => g.Court)
                .ThenInclude(g => g.Sports)
                .Where(g => DateOnly.FromDateTime(g.GameTime) == filter.GameDate)
                .Where(g => 
                    TimeOnly.FromDateTime(g.GameTime) >= filter.GameTimeStart &&
                    TimeOnly.FromDateTime(g.GameTime) <= filter.GameTimeEnd
                )
                .OrderBy(g => g.GameTime)
                .AsQueryable();

            if (filter.CourtId.HasValue)
                query = query.Where(g => g.CourtId == filter.CourtId);

            if (filter.SportId.HasValue)
                query = query.Where(g => g.SportId == filter.SportId);

            var games = await query
                .Select(g => new CourtGameDto
                {
                    GameId = g.Id,
                    CourtName = g.Court.Name,
                    Sport = g.Sport.Name,
                    GameTime = g.GameTime,
                    Players = g.GamePlayers.Select(gp => new GamePlayerDto
                    {
                        Id = gp.User.Id,
                        Name = gp.User.Name,
                        Nickname = gp.User.Nickname,
                        Xp = gp.User.Xp
                    }).ToList()
                })
                .ToListAsync();

            return games; 
        }

        public async Task<List<UserNextGamesDto>> GetUserGames(GamesFilterModel filter, bool isUpcoming = true)
        {
            var query = _context.GamePlayers
                .Where(gp => gp.UserId == filter.UserId)
                .AsQueryable();

            if (filter.CourtId.HasValue)
                query = query.Where(gp => gp.Game.CourtId == filter.CourtId);

            query = isUpcoming
                ? query.Where(gp => gp.Game.GameTime > DateTime.Now).OrderBy(gp => gp.Game.GameTime)
                : query.Where(gp => gp.Game.GameTime < DateTime.Now).OrderByDescending(gp => gp.Game.GameTime);

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

        public async Task<bool> UnsubscribePlayerFromGame(int gameId, string userId)
        {
            var user = await _context.GamePlayers
                .Where(gp => gp.GameId == gameId && gp.UserId == userId)
                .FirstOrDefaultAsync();

            if (user != null)
            {
                _context.GamePlayers.Remove(user);

                await _context.SaveChangesAsync();
            }

            return true;
        }
    }
}
