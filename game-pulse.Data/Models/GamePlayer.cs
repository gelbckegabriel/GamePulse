using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class GamePlayer
{
    public int GameId { get; set; }

    public int UserId { get; set; }

    public bool? Presence { get; set; }

    public int? PlayerGrade { get; set; }

    public virtual Game Game { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
