using game_pulse.Data.Models;
using game_pulse.Interfaces.Dto;

namespace game_pulse.Interfaces
{
    public interface ISportsService
    {
        public Task<List<SportsDto>> GetAllSports();

        public Task<List<string>> GetSportsPositions(int sport_id);
    }
}
