using game_pulse.Data.Models;

namespace game_pulse.Interfaces
{
    public interface ISportsService
    {
        public Task<List<Sport>> GetAllSports();

        public Task<List<string>> GetSportsPositions(int sport_id);
    }
}
