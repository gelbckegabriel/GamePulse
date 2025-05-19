using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using game_pulse.Data.Models;

namespace game_pulse.Data.Contexts;

public partial class GamePulseDbContext : DbContext
{
    public GamePulseDbContext(DbContextOptions<GamePulseDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Court> Courts { get; set; }

    public virtual DbSet<Game> Games { get; set; }

    public virtual DbSet<GamePlayer> GamePlayers { get; set; }

    public virtual DbSet<PlayerFavoritePosition> PlayerFavoritePositions { get; set; }

    public virtual DbSet<Sport> Sports { get; set; }

    public virtual DbSet<SportsPosition> SportsPositions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserAccount> UserAccounts { get; set; }

    public virtual DbSet<UserInfo> UserInfos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Court>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("courts_pkey");

            entity.ToTable("courts");

            entity.HasIndex(e => e.City, "idx_courts_city");

            entity.HasIndex(e => e.Name, "idx_courts_name");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(150)
                .HasColumnName("address");
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .HasColumnName("city");
            entity.Property(e => e.Country)
                .HasMaxLength(2)
                .IsFixedLength()
                .HasColumnName("country");
            entity.Property(e => e.GMaps)
                .HasColumnType("character varying")
                .HasColumnName("g_maps");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");

            entity.HasMany(d => d.Sports).WithMany(p => p.Courts)
                .UsingEntity<Dictionary<string, object>>(
                    "CourtSport",
                    r => r.HasOne<Sport>().WithMany()
                        .HasForeignKey("SportId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("fk_court_sports_sport"),
                    l => l.HasOne<Court>().WithMany()
                        .HasForeignKey("CourtId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("fk_court_sports_court"),
                    j =>
                    {
                        j.HasKey("CourtId", "SportId").HasName("court_sports_pkey");
                        j.ToTable("court_sports");
                        j.IndexerProperty<int>("CourtId").HasColumnName("court_id");
                        j.IndexerProperty<int>("SportId").HasColumnName("sport_id");
                    });
        });

        modelBuilder.Entity<Game>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("games_pkey");

            entity.ToTable("games");

            entity.HasIndex(e => e.BestPlayerId, "idx_games_best_player_id");

            entity.HasIndex(e => e.CourtId, "idx_games_court");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BestPlayerId).HasColumnName("best_player_id");
            entity.Property(e => e.CourtId).HasColumnName("court_id");
            entity.Property(e => e.GameTime)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("game_time");
            entity.Property(e => e.SportId).HasColumnName("sport_id");

            entity.HasOne(d => d.BestPlayer).WithMany(p => p.Games)
                .HasForeignKey(d => d.BestPlayerId)
                .HasConstraintName("fk_games_best_player");

            entity.HasOne(d => d.Court).WithMany(p => p.Games)
                .HasForeignKey(d => d.CourtId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_games_court");

            entity.HasOne(d => d.Sport).WithMany(p => p.Games)
                .HasForeignKey(d => d.SportId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_games_sport");
        });

        modelBuilder.Entity<GamePlayer>(entity =>
        {
            entity.HasKey(e => new { e.GameId, e.UserId }).HasName("game_players_pkey");

            entity.ToTable("game_players");

            entity.Property(e => e.GameId).HasColumnName("game_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.PlayerGrade).HasColumnName("player_grade");
            entity.Property(e => e.Presence).HasColumnName("presence");

            entity.HasOne(d => d.Game).WithMany(p => p.GamePlayers)
                .HasForeignKey(d => d.GameId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_game_players_game");

            entity.HasOne(d => d.User).WithMany(p => p.GamePlayers)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_game_players_user");
        });

        modelBuilder.Entity<PlayerFavoritePosition>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.SportId }).HasName("player_favorite_position_pkey");

            entity.ToTable("player_favorite_position");

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.SportId).HasColumnName("sport_id");
            entity.Property(e => e.AddedAt).HasColumnName("added_at");
            entity.Property(e => e.PositionId).HasColumnName("position_id");

            entity.HasOne(d => d.Position).WithMany(p => p.PlayerFavoritePositions)
                .HasForeignKey(d => d.PositionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_pfp_position");

            entity.HasOne(d => d.Sport).WithMany(p => p.PlayerFavoritePositions)
                .HasForeignKey(d => d.SportId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_pfp_sport");

            entity.HasOne(d => d.User).WithMany(p => p.PlayerFavoritePositions)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_pfp_user");
        });

        modelBuilder.Entity<Sport>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("sports_pkey");

            entity.ToTable("sports");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .HasColumnName("name");
        });

        modelBuilder.Entity<SportsPosition>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("sports_positions_pkey");

            entity.ToTable("sports_positions");

            entity.HasIndex(e => e.SportId, "idx_sports_positions_sport_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .HasColumnName("name");
            entity.Property(e => e.SportId).HasColumnName("sport_id");

            entity.HasOne(d => d.Sport).WithMany(p => p.SportsPositions)
                .HasForeignKey(d => d.SportId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_sports_positions_sport");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("user_pkey");

            entity.ToTable("user");

            entity.HasIndex(e => e.Xp, "idx_user_xp");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.FavoriteSport).HasColumnName("favorite_sport");
            entity.Property(e => e.Name)
                .HasMaxLength(80)
                .HasColumnName("name");
            entity.Property(e => e.Nickname)
                .HasMaxLength(20)
                .HasColumnName("nickname");
            entity.Property(e => e.Xp).HasColumnName("xp");

            entity.HasOne(d => d.FavoriteSportNavigation).WithMany(p => p.Users)
                .HasForeignKey(d => d.FavoriteSport)
                .HasConstraintName("fk_favorite_sport");
        });

        modelBuilder.Entity<UserAccount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("user_accounts_pkey");

            entity.ToTable("user_accounts");

            entity.HasIndex(e => e.UserId, "idx_user_accounts_user_id");

            entity.HasIndex(e => new { e.Provider, e.ProviderAccountId }, "uq_provider_account").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AccessToken).HasColumnName("access_token");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("created_at");
            entity.Property(e => e.Provider)
                .HasMaxLength(30)
                .HasColumnName("provider");
            entity.Property(e => e.ProviderAccountId)
                .HasMaxLength(100)
                .HasColumnName("provider_account_id");
            entity.Property(e => e.RefreshToken).HasColumnName("refresh_token");
            entity.Property(e => e.TokenExpires)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("token_expires");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.UserAccounts)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_user_accounts_user");
        });

        modelBuilder.Entity<UserInfo>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("user_info_pkey");

            entity.ToTable("user_info");

            entity.HasIndex(e => e.Birthday, "idx_user_info_birthday");

            entity.HasIndex(e => e.City, "idx_user_info_city");

            entity.HasIndex(e => e.Country, "idx_user_info_country");

            entity.HasIndex(e => e.State, "idx_user_info_state");

            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("user_id");
            entity.Property(e => e.Address)
                .HasMaxLength(150)
                .HasColumnName("address");
            entity.Property(e => e.Birthday).HasColumnName("birthday");
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .HasColumnName("city");
            entity.Property(e => e.Country)
                .HasMaxLength(2)
                .IsFixedLength()
                .HasColumnName("country");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Phone)
                .HasMaxLength(30)
                .HasColumnName("phone");
            entity.Property(e => e.State)
                .HasMaxLength(2)
                .IsFixedLength()
                .HasColumnName("state");

            entity.HasOne(d => d.User).WithOne(p => p.UserInfo)
                .HasForeignKey<UserInfo>(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_user_info_user");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
