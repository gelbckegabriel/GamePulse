using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace game_pulse.Data.Models;

public partial class Court
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string City { get; set; } = null!;

    [Column("state")]
    public string State { get; set; } = null!;

    public string Country { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string GMaps { get; set; } = null!;

    public virtual ICollection<Game> Games { get; set; } = new List<Game>();

    public virtual ICollection<Sport> Sports { get; set; } = new List<Sport>();
}
