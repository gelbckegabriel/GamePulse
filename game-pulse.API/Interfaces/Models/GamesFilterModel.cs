namespace game_pulse.Interfaces.Filters
{
    public class GamesFilterModel
    {
        public int? CourtId { get; set; }

        public int? SportId { get; set; }

        public int? BestPlayerId { get; set; }

        public int? GameId { get; set; }

        public int? UserId { get; set; }

        public DateOnly? GameDate { get; set; }

        public TimeOnly? GameTimeStart { get; set; }

        public TimeOnly? GameTimeEnd { get; set; }
    }
}
