using game_pulse.Data.Models;

namespace game_pulse.Interfaces.Dto
{
    public class GameInfoDto
    {
        public int Id { get; set; }

        public string BestPlayerName { get; set; } = null!;

        public string CourtName { get; set; } = null!;

        public string City { get; set; } = null!;

        public string Address { get; set; } = null!;

        public string GoogleMaps { get; set; } = null!;

        public string SportName { get; set; } = null!;

        public DateTime Time { get; set; }

        public List<GamePlayerDto> Players { get; set; } = null!;
    }
}
