using game_pulse.Data.Contexts;
using game_pulse.Data.Models;
using game_pulse.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace game_pulse.Services
{
    public class CourtsService : ICourtsService
    {
        private readonly GamePulseDbContext _context;
        private readonly ILogger<CourtsService> _logger;

        public CourtsService(GamePulseDbContext context, ILogger<CourtsService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<List<Court>> GetCourtsAsync()
        {
            var courts = await _context.Courts
                .Include(c => c.Sports)
                .ToListAsync();

            foreach (var court in courts)
            {
                court.SportsAvailable = court.Sports.Select(s => s.Name).ToList();
            }

            return courts;
        }
    }
}
