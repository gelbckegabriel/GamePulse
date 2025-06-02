using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class UserInfo
{
    public string UserId { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Phone { get; set; }

    public DateOnly? Birthday { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }

    public string? Country { get; set; }

    public string? Address { get; set; }

    public virtual User User { get; set; } = null!;
}
