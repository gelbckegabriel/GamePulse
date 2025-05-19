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

        [HttpGet("sports/sports_position/{id}")]
        public async Task<IActionResult> GetSportsPositions(int id)
        {
            var sports_positions = await _sportsService.GetSportsPositions(id);
            return Ok(sports_positions);
        }
    }
}
