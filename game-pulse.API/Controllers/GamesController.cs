using game_pulse.Interfaces;
using game_pulse.Interfaces.Filters;
using Microsoft.AspNetCore.Mvc;

namespace game_pulse.Controllers
{
    public class GamesController : BaseController
    {
        private readonly IGamesService _gamesService;

        public GamesController(
            IGamesService gamesService, 
            ILogger<GamesController> logger
            ) : base(logger)
        {
            _gamesService = gamesService;
        }

        [HttpPost("GetCourtTopPlayers")]
        public async Task<IActionResult> GetCourtTopPlayers(GamesFilterModel filter)
        {
            var data = await _gamesService.GetCourtTopPlayersAsync(filter);
            return Ok(data);
        }

        [HttpPost("GetUserNextGames")]
        public async Task<IActionResult> GetUserNextGames(GamesFilterModel filter)
        {
            var data = await _gamesService.GetUserNextGamesAsync(filter);
            return Ok(data);
        }

        [HttpPost("CreateGame")]
        public async Task<IActionResult> CreateGame(GamesFilterModel details)
        {
            // TODO
            return Ok();
        }

        [HttpPost("GetCourtGames")]
        public async Task<IActionResult> GetCourtGames(GamesFilterModel filter)
        {
            var data = await _gamesService.GetCourtGamesFilteredAsync(filter);
            return Ok(data);
        }
    }
}
