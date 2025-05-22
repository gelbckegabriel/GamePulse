using game_pulse.Data.Contexts;
using game_pulse.Data.Models;
using game_pulse.Interfaces;
using game_pulse.Interfaces.Filters;
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

        public async Task<object> GetLocationsAsync(LocationsFilterModel filter)
        {
            var countries = new List<string>();
            var states = new List<string>();
            var cities = new List<string>();
            
            // FIND COUNTRIES
            countries = await _context.Courts
                .Select(c => c.Country.ToUpper())
                .Distinct()
                .ToListAsync();

            // FIND STATES (if country available)
            if (filter.Country != null)
            {
                states = await _context.Courts
                    .Where(c => c.Country == filter.Country.ToUpper())
                    .Select(c => c.State)
                    .Distinct()
                    .ToListAsync();
            }

            // FIND CITIES (if country and state available)
            if (filter.Country != null && filter.State != null)
            {
                cities = await _context.Courts
                    .Where(c => c.Country == filter.Country.ToUpper() && c.State == filter.State.ToUpper())
                    .Select(c => c.City)
                    .Distinct()
                    .ToListAsync();
            }

            var data = new
            {
                country = countries,
                state = states,
                city = cities
            };

            return data;
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

        public async Task<List<Court>> GetFilteredCourtsAsync(CourtsFilterModel filter)
        {
            var query = _context.Courts.AsQueryable();

            if (!string.IsNullOrEmpty(filter.Name))
                query = query.Where(c => c.Name == filter.Name);

            if (!string.IsNullOrEmpty(filter.City))
                query = query.Where(c => c.City == filter.City);

            if (!string.IsNullOrEmpty(filter.State))
                query = query.Where(c => c.State == filter.State);

            if (!string.IsNullOrEmpty(filter.Country))
                query = query.Where(c => c.Country == filter.Country);

            return await query.ToListAsync();
        }

        public async Task<Court?> GetFilteredCourtAsync(CourtsFilterModel filter)
        {
            var query = _context.Courts.AsQueryable();

            if (!string.IsNullOrEmpty(filter.Name))
                query = query.Where(c => c.Name == filter.Name);

            if (!string.IsNullOrEmpty(filter.City))
                query = query.Where(c => c.City == filter.City);

            if (!string.IsNullOrEmpty(filter.State))
                query = query.Where(c => c.State == filter.State);

            if (!string.IsNullOrEmpty(filter.Country))
                query = query.Where(c => c.Country == filter.Country);

            return await query.FirstOrDefaultAsync();
        }
    }
}
