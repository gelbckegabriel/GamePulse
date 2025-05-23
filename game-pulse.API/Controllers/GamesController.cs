using game_pulse.Interfaces;
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
        public async Task<IActionResult> GetCourtTopPlayers()
        {
            // TODO
            return Ok();
        }

        [HttpPost("getUserFilteredNextGames")]
        public async Task<IActionResult> GetUserFilteredNextGames()
        {
            // TODO
            return Ok();
        }
    }
}
