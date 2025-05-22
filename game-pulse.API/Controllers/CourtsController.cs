using game_pulse.Interfaces;
using game_pulse.Interfaces.Filters;
using Microsoft.AspNetCore.Mvc;

namespace game_pulse.Controllers
{
    public class CourtsController : BaseController
    {
        private readonly ICourtsService _courtsService;

        public CourtsController(
            ICourtsService courtsService, 
            ILogger<CourtsController> logger
            ) : base(logger)
        {
            _courtsService = courtsService;
        }

        [HttpPost("getLocations")]
        public async Task<IActionResult> GetLocations(LocationsFilterModel filter)
        {
            var locations = await _courtsService.GetLocationsAsync(filter);
            return Ok(locations);
        }

        [HttpGet("getCourts")]
        public async Task<IActionResult> GetCourts()
        {
            var courts = await _courtsService.GetCourtsAsync();
            return Ok(courts);
        }

        [HttpPost("getFilteredCourts")]
        public async Task<IActionResult> GetFilteredCourts(CourtsFilterModel filter)
        {
            var courts = await _courtsService.GetFilteredCourtsAsync(filter);
            return Ok(courts);
        }

        [HttpPost("getFilteredCourt")]
        public async Task<IActionResult> GetFilteredCourt(CourtsFilterModel filter)
        {
            var courts = await _courtsService.GetFilteredCourtAsync(filter);
            return Ok(courts);
        }
    }
}
