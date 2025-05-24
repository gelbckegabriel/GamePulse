using game_pulse.Data.Contexts;
using game_pulse.Data.Models;
using game_pulse.Interfaces;
using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Filters;
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

        public async Task<List<CourtTopPlayerDto>> GetCourtTopPlayersAsync(GamesFilterModel filter)
        {
            var data = await _context.GamePlayers
                .Where(gp => gp.Game.CourtId == filter.court_id)
                .GroupBy(gp => gp.UserId)
                .Select(grp => new CourtTopPlayerDto
                {
                    UserId = grp.Key,
                    AverageGrade = grp.Average(x => x.PlayerGrade)
                })
                .OrderByDescending(x => x.AverageGrade)
                .Take(5)
                .ToListAsync();

            data.ForEach(x => x.AverageGrade = Math.Round((double)x.AverageGrade, 1));

            return (data);
        }

        public async Task<List<UserNextGamesDto>> GetUserFilteredNextGamesAsync(GamesFilterModel filter)
        {
            var query = _context.GamePlayers
                .Where(gp => gp.UserId == filter.user_id)
                .Where(gp => gp.Game.GameTime > DateTime.Now)
                .AsQueryable();

            if (filter.court_id.HasValue)
                query = query.Where(gp => gp.Game.CourtId == filter.court_id);

            var data = await query
                .Select(gp => new UserNextGamesDto
                {
                    court_id = gp.Game.CourtId,
                    sport = gp.Game.Sport.Name,
                    game_time = gp.Game.GameTime,
                    user_id = gp.UserId,
                    presence = gp.Presence
                })
                .ToListAsync();

            return (data);
        }
    }
}
