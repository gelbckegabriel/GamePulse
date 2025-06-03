using game_pulse.Data.Contexts;
using game_pulse.Data.Models;
using game_pulse.Interfaces;
using game_pulse.Interfaces.Dto;
using game_pulse.Interfaces.Models;
using Microsoft.EntityFrameworkCore;

namespace game_pulse.Services
{
    public class UserService : IUserService
    {
        private readonly GamePulseDbContext _context;
        private readonly ILogger<UserService> _logger;

        public UserService(GamePulseDbContext context, ILogger<UserService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<UserDto> GetUser(string id)
        {
            var user = await _context.Users
                .Include(u => u.UserInfo)
                .Where(u => u.Id == id)
                .Select(u => new UserDto
                {
                    Id = u.Id,
                    Name = u.Name,
                    Nickname = u.Nickname,
                    Xp = u.Xp,
                    FavoriteSport = u.FavoriteSportNavigation.Name,
                    Email = u.UserInfo.Email,
                    City = u.UserInfo.City,
                    State = u.UserInfo.State,
                    Address = u.UserInfo.Address
                })
                .FirstOrDefaultAsync();

            return user;
        }

        public async Task<bool> CreateUser(UserCreateModel userDetails)
        {
            var user = new User
            {
                Id = userDetails.Id,
                Name = userDetails.Name,
                Nickname = userDetails.Nickname,
                Xp = userDetails.Xp,
                FavoriteSport = userDetails.FavoriteSport,
                CreatedAt = DateTime.Now
            };

            var userInfo = new UserInfo
            {
                UserId = userDetails.Id,
                Email = userDetails.Email,
                City = userDetails.City,
                State = userDetails.State,
                Country = userDetails.Country
            };

            _context.Users.Add(user);
            _context.UserInfos.Add(userInfo);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
