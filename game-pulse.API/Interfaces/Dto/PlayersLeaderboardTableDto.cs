namespace game_pulse.Interfaces.Dto
{
    public class PlayersLeaderboardTableDto
    {
        public string Name { get; set; } = null!;

        public string? Nickname { get; set; } = null!;

        public string Sport { get; set; } = null!;

        public int? Awards { get; set; }

        public int? Points { get; set; }

        public string? Color { get; set; } = null!;

        public double? Grade { get; set; }
    }
}
