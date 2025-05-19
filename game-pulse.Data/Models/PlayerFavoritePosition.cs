using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class PlayerFavoritePosition
{
    public int UserId { get; set; }

    public int SportId { get; set; }

    public int PositionId { get; set; }

    public DateOnly AddedAt { get; set; }

    public virtual SportsPosition Position { get; set; } = null!;

    public virtual Sport Sport { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
