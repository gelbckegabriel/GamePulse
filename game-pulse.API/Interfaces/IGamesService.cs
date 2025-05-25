using game_pulse.Data.Models;
using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Filters;

namespace game_pulse.Interfaces
{
    public interface IGamesService
    {
        public Task<List<PlayersLeaderboardTableDto>> GetCourtTopPlayersAsync(GamesFilterModel filter);

        public Task<List<UserNextGamesDto>> GetUserFilteredNextGamesAsync(GamesFilterModel filter);
    }
}
