using game_pulse.Data.Models;

namespace game_pulse.Interfaces.Dto
{
    public class CourtGameDto
    {
        public int GameId { get; set; }

        public string CourtName { get; set; } = null!;

        public string Sport { get; set; } = null!;

        public DateTime GameTime { get; set; }

        public List<GamePlayerDto> Players { get; set; } = null!;
    }
}
