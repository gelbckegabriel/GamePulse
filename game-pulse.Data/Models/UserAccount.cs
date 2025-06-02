using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class UserAccount
{
    public int Id { get; set; }

    public string UserId { get; set; } = null!;

    public string Provider { get; set; } = null!;

    public string ProviderAccountId { get; set; } = null!;

    public string? AccessToken { get; set; }

    public string? RefreshToken { get; set; }

    public DateTime? TokenExpires { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual User User { get; set; } = null!;
}
