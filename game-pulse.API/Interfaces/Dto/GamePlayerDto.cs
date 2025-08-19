namespace game_pulse.Interfaces.Dto
{
    public class GamePlayerDto
    {
        public string Id { get; set; } = null!;

        public string Name { get; set; } = null!;

        public string Nickname { get; set; } = null!;

        public int Xp { get; set; }
    }
}
