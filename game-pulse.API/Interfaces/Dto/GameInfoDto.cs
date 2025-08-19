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

        public DateTime DateTime { get; set; }

        public string DayOfWeek { get; set; } = null!;

        public string Date { get; set; } = null!;

        public string Time { get; set; } = null!;

        public List<GamePlayerDto> Players { get; set; } = null!;
    }
}
