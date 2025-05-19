using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class SportsPosition
{
    public int Id { get; set; }

    public int SportId { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<PlayerFavoritePosition> PlayerFavoritePositions { get; set; } = new List<PlayerFavoritePosition>();

    public virtual Sport Sport { get; set; } = null!;
}
