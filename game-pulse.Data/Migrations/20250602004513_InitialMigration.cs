using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace game_pulse.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "courts",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    city = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    state = table.Column<string>(type: "text", nullable: false),
                    country = table.Column<string>(type: "character(2)", fixedLength: true, maxLength: 2, nullable: false),
                    address = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    g_maps = table.Column<string>(type: "character varying", nullable: false),
                    map = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("courts_pkey", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "sports",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "character varying(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("sports_pkey", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "court_sports",
                columns: table => new
                {
                    court_id = table.Column<int>(type: "integer", nullable: false),
                    sport_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("court_sports_pkey", x => new { x.court_id, x.sport_id });
                    table.ForeignKey(
                        name: "fk_court_sports_court",
                        column: x => x.court_id,
                        principalTable: "courts",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_court_sports_sport",
                        column: x => x.sport_id,
                        principalTable: "sports",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "sports_positions",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    sport_id = table.Column<int>(type: "integer", nullable: false),
                    name = table.Column<string>(type: "character varying(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("sports_positions_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_sports_positions_sport",
                        column: x => x.sport_id,
                        principalTable: "sports",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    id = table.Column<string>(type: "text", nullable: false),
                    name = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: false),
                    nickname = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    xp = table.Column<int>(type: "integer", nullable: false),
                    favorite_sport = table.Column<int>(type: "integer", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("user_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_favorite_sport",
                        column: x => x.favorite_sport,
                        principalTable: "sports",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "games",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    sport_id = table.Column<int>(type: "integer", nullable: false),
                    court_id = table.Column<int>(type: "integer", nullable: false),
                    game_time = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    best_player_id = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("games_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_games_best_player",
                        column: x => x.best_player_id,
                        principalTable: "user",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_games_court",
                        column: x => x.court_id,
                        principalTable: "courts",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_games_sport",
                        column: x => x.sport_id,
                        principalTable: "sports",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "player_favorite_position",
                columns: table => new
                {
                    user_id = table.Column<string>(type: "text", nullable: false),
                    sport_id = table.Column<int>(type: "integer", nullable: false),
                    position_id = table.Column<int>(type: "integer", nullable: false),
                    added_at = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("player_favorite_position_pkey", x => new { x.user_id, x.sport_id });
                    table.ForeignKey(
                        name: "fk_pfp_position",
                        column: x => x.position_id,
                        principalTable: "sports_positions",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_pfp_sport",
                        column: x => x.sport_id,
                        principalTable: "sports",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_pfp_user",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "user_accounts",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    user_id = table.Column<string>(type: "text", nullable: false),
                    provider = table.Column<string>(type: "character varying(30)", maxLength: 30, nullable: false),
                    provider_account_id = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    access_token = table.Column<string>(type: "text", nullable: true),
                    refresh_token = table.Column<string>(type: "text", nullable: true),
                    token_expires = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamp without time zone", nullable: true, defaultValueSql: "now()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("user_accounts_pkey", x => x.id);
                    table.ForeignKey(
                        name: "fk_user_accounts_user",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "user_info",
                columns: table => new
                {
                    user_id = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    phone = table.Column<string>(type: "character varying(30)", maxLength: 30, nullable: true),
                    birthday = table.Column<DateOnly>(type: "date", nullable: true),
                    city = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    state = table.Column<string>(type: "character(2)", fixedLength: true, maxLength: 2, nullable: true),
                    country = table.Column<string>(type: "character(2)", fixedLength: true, maxLength: 2, nullable: true),
                    address = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("user_info_pkey", x => x.user_id);
                    table.ForeignKey(
                        name: "fk_user_info_user",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "game_players",
                columns: table => new
                {
                    game_id = table.Column<int>(type: "integer", nullable: false),
                    user_id = table.Column<string>(type: "text", nullable: false),
                    presence = table.Column<bool>(type: "boolean", nullable: true),
                    player_grade = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("game_players_pkey", x => new { x.game_id, x.user_id });
                    table.ForeignKey(
                        name: "fk_game_players_game",
                        column: x => x.game_id,
                        principalTable: "games",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "fk_game_players_user",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_court_sports_sport_id",
                table: "court_sports",
                column: "sport_id");

            migrationBuilder.CreateIndex(
                name: "idx_courts_city",
                table: "courts",
                column: "city");

            migrationBuilder.CreateIndex(
                name: "idx_courts_name",
                table: "courts",
                column: "name");

            migrationBuilder.CreateIndex(
                name: "IX_game_players_user_id",
                table: "game_players",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "idx_games_best_player_id",
                table: "games",
                column: "best_player_id");

            migrationBuilder.CreateIndex(
                name: "idx_games_court",
                table: "games",
                column: "court_id");

            migrationBuilder.CreateIndex(
                name: "IX_games_sport_id",
                table: "games",
                column: "sport_id");

            migrationBuilder.CreateIndex(
                name: "IX_player_favorite_position_position_id",
                table: "player_favorite_position",
                column: "position_id");

            migrationBuilder.CreateIndex(
                name: "IX_player_favorite_position_sport_id",
                table: "player_favorite_position",
                column: "sport_id");

            migrationBuilder.CreateIndex(
                name: "idx_sports_positions_sport_id",
                table: "sports_positions",
                column: "sport_id");

            migrationBuilder.CreateIndex(
                name: "idx_user_xp",
                table: "user",
                column: "xp");

            migrationBuilder.CreateIndex(
                name: "IX_user_favorite_sport",
                table: "user",
                column: "favorite_sport");

            migrationBuilder.CreateIndex(
                name: "idx_user_accounts_user_id",
                table: "user_accounts",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "uq_provider_account",
                table: "user_accounts",
                columns: new[] { "provider", "provider_account_id" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "idx_user_info_birthday",
                table: "user_info",
                column: "birthday");

            migrationBuilder.CreateIndex(
                name: "idx_user_info_city",
                table: "user_info",
                column: "city");

            migrationBuilder.CreateIndex(
                name: "idx_user_info_country",
                table: "user_info",
                column: "country");

            migrationBuilder.CreateIndex(
                name: "idx_user_info_state",
                table: "user_info",
                column: "state");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "court_sports");

            migrationBuilder.DropTable(
                name: "game_players");

            migrationBuilder.DropTable(
                name: "player_favorite_position");

            migrationBuilder.DropTable(
                name: "user_accounts");

            migrationBuilder.DropTable(
                name: "user_info");

            migrationBuilder.DropTable(
                name: "games");

            migrationBuilder.DropTable(
                name: "sports_positions");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "courts");

            migrationBuilder.DropTable(
                name: "sports");
        }
    }
}
