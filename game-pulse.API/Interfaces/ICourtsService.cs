using game_pulse.Data.Models;
using game_pulse.Interfaces.Filters;

namespace game_pulse.Interfaces
{
    public interface ICourtsService
    {
        public Task<object> GetLocationsAsync(LocationsFilterModel filter);

        public Task<List<Court>> GetCourtsAsync();

        public Task<List<Court>> GetFilteredCourtsAsync(CourtsFilterModel filter);

        public Task<Court?> GetFilteredCourtAsync(CourtsFilterModel filter);
    }
}
