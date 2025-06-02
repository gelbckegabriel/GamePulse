using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Models;

namespace game_pulse.Interfaces
{
    public interface IUserService
    {
        public Task<UserDto> GetUser(string id);

        //public Task<bool> CreateUser(UserCreateModel userDetails);
    }
}
