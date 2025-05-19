using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class Sport
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Game> Games { get; set; } = new List<Game>();

    public virtual ICollection<PlayerFavoritePosition> PlayerFavoritePositions { get; set; } = new List<PlayerFavoritePosition>();

    public virtual ICollection<SportsPosition> SportsPositions { get; set; } = new List<SportsPosition>();

    public virtual ICollection<User> Users { get; set; } = new List<User>();

    public virtual ICollection<Court> Courts { get; set; } = new List<Court>();
}
