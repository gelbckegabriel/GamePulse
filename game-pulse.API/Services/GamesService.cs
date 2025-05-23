using game_pulse.Data.Contexts;
using game_pulse.Interfaces;

namespace game_pulse.Services
{
    public class GamesService : IGamesService
    {
        private readonly GamePulseDbContext _context;
        private readonly ILogger<GamesService> _logger;

        public GamesService(GamePulseDbContext context, ILogger<GamesService> logger) 
        { 
            _context = context;
            _logger = logger;
        }
    }
}
