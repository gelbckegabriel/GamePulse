using game_pulse.Services;

namespace game_pulse.Controllers
{
    public class UserController : BaseController
    {
        private readonly UserService _userService;

        public UserController(
            UserService userService, 
            ILogger<UserController> logger
            ) : base(logger)
        {
            _userService = userService;
        }
    }
}
