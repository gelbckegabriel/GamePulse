using game_pulse.Data.Contexts;
using game_pulse.Interfaces;

namespace game_pulse.Services
{
    public class UserService : IUserService
    {
        private readonly GamePulseDbContext _context;
        private readonly ILogger<UserService> _logger;

        public UserService(GamePulseDbContext context, ILogger<UserService> logger)
        {
            _context = context;
            _logger = logger;
        }
    }
}
