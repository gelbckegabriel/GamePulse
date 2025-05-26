namespace game_pulse.Interfaces.Models
{
    public class GameDetails
    {
        public DateOnly Date { get; set; }

        public TimeOnly StartTime { get; set; }

        public TimeOnly EndTime { get; set; }

        public int CourtId { get; set; }

        public int SportId { get; set; }
    }
}
