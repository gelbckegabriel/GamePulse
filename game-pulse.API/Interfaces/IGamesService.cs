using game_pulse.Data.Models;
using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Filters;
using game_pulse.Interfaces.Models;

namespace game_pulse.Interfaces
{
    public interface IGamesService
    {
        public Task<List<PlayersLeaderboardTableDto>> GetCourtTopPlayersAsync(GamesFilterModel filter);

        public Task<List<CourtGameDto>> GetCourtGamesFilteredAsync(GamesFilterModel filter);

        public Task<List<UserNextGamesDto>> GetUserNextGamesAsync(GamesFilterModel filter);

        public Task<int> CreateGame(GameCreateModel details);

        public Task<GamePlayer> SubscribePlayerToGame(int gameId, string userId);
    }
}
