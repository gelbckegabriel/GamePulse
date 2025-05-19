using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class Game
{
    public int Id { get; set; }

    public int SportId { get; set; }

    public int CourtId { get; set; }

    public DateTime GameTime { get; set; }

    public int? BestPlayerId { get; set; }

    public virtual User? BestPlayer { get; set; }

    public virtual Court Court { get; set; } = null!;

    public virtual ICollection<GamePlayer> GamePlayers { get; set; } = new List<GamePlayer>();

    public virtual Sport Sport { get; set; } = null!;
}
