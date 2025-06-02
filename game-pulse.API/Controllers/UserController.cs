using game_pulse.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace game_pulse.Controllers
{
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController(
            IUserService userService, 
            ILogger<UserController> logger
            ) : base(logger)
        {
            _userService = userService;
        }

        [HttpGet("GetUser/{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            var user = await _userService.GetUser(id);
            return Ok(user);
        }

        //[HttpPost("CreateUser")]
        //public async Task<IActionResult> CreateUser(UserCreateModel userDetails)
        //{
        //    var data = await _userService.;
        //    return Ok(data);
        //}
    }
}
