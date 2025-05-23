using game_pulse.Data.Models;

namespace game_pulse.Interfaces
{
    public interface IGamesService
    {
        public Task<List<GamePlayer>> GetCourtTopPlayersAsync();
    }
}
