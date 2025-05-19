using System;
using System.Collections.Generic;

namespace game_pulse.Data.Models;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Nickname { get; set; } = null!;

    public int Xp { get; set; }

    public int? FavoriteSport { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual Sport? FavoriteSportNavigation { get; set; }

    public virtual ICollection<GamePlayer> GamePlayers { get; set; } = new List<GamePlayer>();

    public virtual ICollection<Game> Games { get; set; } = new List<Game>();

    public virtual ICollection<PlayerFavoritePosition> PlayerFavoritePositions { get; set; } = new List<PlayerFavoritePosition>();

    public virtual ICollection<UserAccount> UserAccounts { get; set; } = new List<UserAccount>();

    public virtual UserInfo? UserInfo { get; set; }
}
