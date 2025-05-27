namespace game_pulse.Interfaces.Dto
{
    public class UserNextGamesDto
    {
        public int CourtId { get; set; }

        public string Sport { get; set; } = null!;

        public DateTime GameTime { get; set; }

        public int UserId { get; set; }

        public bool? Presence { get; set; }
    }
}
