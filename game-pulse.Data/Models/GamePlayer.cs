using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace game_pulse.Data.Models;

public partial class GamePlayer
{
    public int GameId { get; set; }

    public string UserId { get; set; } = null!;

    public bool? Presence { get; set; }

    // TODO: CHANGE DATA TYPE TO DECIMAL INSTEAD OF INT
    // TODO: ATTEMPT TO SET A MAX VALUE TO 10.
    public int? PlayerGrade { get; set; }

    public virtual Game Game { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
