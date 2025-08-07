namespace game_pulse.Interfaces.Models
{
    public class GameSubscribeModel
    {
        public int GameId { get; set; }

        public string UserId { get; set; } = null!;
    }
}
