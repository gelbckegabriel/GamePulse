using game_pulse.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace game_pulse.Controllers
{
    public class SportsController : Controller
    {
        private readonly ISportsService _sportsService;

        public SportsController(ISportsService sportsService)
        {
            _sportsService = sportsService;
        }

        [HttpGet("sports/sports")]
        public async Task<IActionResult> GetSports()
        {
            var sports = await _sportsService.GetAllSports();
            return Ok(sports);
        }
    }
}
