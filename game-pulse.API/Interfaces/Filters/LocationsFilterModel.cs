namespace game_pulse.Interfaces.Filters
{
    public class LocationsFilterModel
    {
        public string? Country { get; set; }
        public string? State { get; set; }
        public string? City { get; set; }

        public LocationsFilterModel(string country, string state, string city)
        {
            Country = country;
            State = state;
            City = city;
        }
    }
}
