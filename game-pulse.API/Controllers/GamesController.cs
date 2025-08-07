using game_pulse.Interfaces;
using game_pulse.Interfaces.Filters;
using game_pulse.Interfaces.Models;
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
        public async Task<IActionResult> CreateGame(GameCreateModel details)
        {
            // Create game.
            var data = await _gamesService.CreateGame(details);

            // Subscribe creator of the game to play.
            await _gamesService.SubscribePlayerToGame(data, details.UserId);

            return Ok(data);
        }

        [HttpPost("GetCourtGames")]
        public async Task<IActionResult> GetCourtGames(GamesFilterModel filter)
        {
            var data = await _gamesService.GetCourtGamesFilteredAsync(filter);
            return Ok(data);
        }
    }
}
