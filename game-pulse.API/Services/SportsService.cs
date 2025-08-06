using game_pulse.Data.Contexts;
using game_pulse.Data.Models;
using game_pulse.Interfaces;
using game_pulse.Interfaces.Dto;
using Microsoft.EntityFrameworkCore;

namespace game_pulse.Services
{
    public class SportsService : ISportsService
    {
        private readonly GamePulseDbContext _context;
        private readonly ILogger<SportsService> _logger;

        public SportsService(GamePulseDbContext context, ILogger<SportsService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<List<SportsDto>> GetAllSports()
        {
            return await _context.Sports
               .OrderBy(s => s.Id)
               .Select(s => new SportsDto
               {
                   Id = s.Id,
                   SportName = s.Name
               }
               ).ToListAsync();
        }

        public async Task<List<string>> GetSportsPositions(int sports_id)
        {
            return await _context.SportsPositions
                .Where(p => p.SportId == sports_id)
                .Select(p => p.Name)
                .ToListAsync();
        }
    }
}
