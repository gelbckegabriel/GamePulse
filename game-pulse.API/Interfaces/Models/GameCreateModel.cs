namespace game_pulse.Interfaces.Models
{
    public class GameCreateModel
    {
        public int CourtId { get; set; }

        public int SportId { get; set; }

        public DateOnly GameDate { get; set; }

        public TimeOnly GameTimeStart { get; set; }
    }
}
