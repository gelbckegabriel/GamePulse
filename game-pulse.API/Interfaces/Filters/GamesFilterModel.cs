namespace game_pulse.Interfaces.Filters
{
    public class GamesFilterModel
    {
        public int? court_id { get; set; }

        public int? sport_id { get; set; }

        public int? best_player_id { get; set; }

        public int? game_id { get; set; }

        public int? user_id { get; set; }

        public DateTime? game_time { get; set; }
    }
}
