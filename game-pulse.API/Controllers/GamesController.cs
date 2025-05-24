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

        [HttpPost("getCourtTopPlayers")]
        public async Task<IActionResult> GetCourtTopPlayers(GamesFilterModel filter)
        {
            var data = await _gamesService.GetCourtTopPlayersAsync(filter);
            return Ok(data);
        }

        [HttpPost("getUserFilteredNextGames")]
        public async Task<IActionResult> GetUserFilteredNextGames(GamesFilterModel filter)
        {
            var data = await _gamesService.GetUserFilteredNextGamesAsync(filter);
            return Ok(data);
        }
    }
}
