namespace game_pulse.Interfaces.Models
{
    public class GameCreateModel
    {
        public string UserId { get; set; } = null!;

        public int CourtId { get; set; }

        public int SportId { get; set; }

        public DateOnly GameDate { get; set; }

        public TimeOnly GameTimeStart { get; set; }
    }
}
