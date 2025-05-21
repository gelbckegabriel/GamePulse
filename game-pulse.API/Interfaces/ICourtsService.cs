using game_pulse.Data.Models;

namespace game_pulse.Interfaces
{
    public interface ICourtsService
    {
        public Task<List<Court>> GetCourtsAsync();
    }
}
