namespace game_pulse.Interfaces.Models
{
    public class UserCreateModel
    {
        public string Id { get; set; } = null!;

        public string Name { get; set; } = null!;

        public string Nickname { get; set; } = null!;

        public int Xp { get; set; }

        public int FavoriteSport { get; set; }

        public string Email { get; set; } = null!;

        public string City { get; set; } = null!;

        public string State { get; set; } = null!;

        public string Country { get; set; } = null!;
    }
}
