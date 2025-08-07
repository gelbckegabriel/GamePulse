namespace game_pulse.Interfaces.Dto
{
    public class UserNextGamesDto
    {
        public int GameId { get; set; }

        public int CourtId { get; set; }

        public string CourtName { get; set; } = null!;

        public int SportId { get; set; }

        public string SportName { get; set; } = null!;

        public DateTime GameTime { get; set; }

        public string UserId { get; set; } = null!;

        public bool? Presence { get; set; }
    }
}
