using game_pulse.Interfaces;
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

        [HttpGet("getCourts")]
        public async Task<IActionResult> GetCourts()
        {
            var courts = await _courtsService.GetCourtsAsync();
            return Ok(courts);
        }
    }
}
