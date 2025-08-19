using game_pulse.Data.Models;
using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Filters;
using game_pulse.Interfaces.Models;

namespace game_pulse.Interfaces
{
    public interface IGamesService
    {
        public Task<int> CreateGame(GameCreateModel details);

        public Task<GameInfoDto> GetGameInfo(int gameId);

        public Task<GamePlayer> SubscribePlayerToGame(int gameId, string userId);

        public Task<bool> UnsubscribePlayerFromGame(int gameId, string userId);

        public Task<List<PlayersLeaderboardTableDto>> GetCourtTopPlayers(GamesFilterModel filter);

        public Task<List<CourtGameDto>> GetCourtGamesFiltered(GamesFilterModel filter);

        public Task<List<UserNextGamesDto>> GetUserNextGames(GamesFilterModel filter, bool isUpcoming = true);
    }
}
