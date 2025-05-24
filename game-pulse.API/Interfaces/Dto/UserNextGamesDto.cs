namespace game_pulse.Interfaces.Dto
{
    public class UserNextGamesDto
    {
        public int court_id { get; set; }

        public string sport { get; set; } = null!;

        public DateTime game_time { get; set; }

        public int user_id { get; set; }

        public bool? presence { get; set; }
    }
}
