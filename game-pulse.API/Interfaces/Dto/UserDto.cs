namespace game_pulse.Interfaces.Dto
{
    public class UserDto
    {
        public string Id { get; set; }

        public string Name { get; set; } = null!;

        public string Nickname { get; set; } = null!;

        public int Xp { get; set; }

        public string? FavoriteSport { get; set; }

        public string Email { get; set; } = null!;

        public string City { get; set; } = null!;

        public string State { get; set; } = null!;

        public string? Address { get; set; }
    }
}
