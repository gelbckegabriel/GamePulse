using game_pulse.Data.Models;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace game_pulse.Data.Migrations
{
    /// <inheritdoc />
    public partial class InsertTestData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "user",
                columns: ["id", "name", "nickname", "xp", "favorite_sport", "created_at"],
                values: new object[,]
                {
                    { 1, "Rodiclenis Ordinex", "Clenis", 841, 2, DateTime.Parse("2025-05-23 21:36:33") },
                    { 2, "Simas Turbo", "Simado", 489, 1, DateTime.Parse("2025-05-23 21:37:00") },
                    { 3, "Robertina Santino", "Rosato", 1398, 3, DateTime.Parse("2025-05-23 21:37:38") },
                    { 4, "Jubileu Rodofilnei",  "Jubs", 297, 4, DateTime.Parse("2025-05-23 21:38:18") },
                });

            migrationBuilder.InsertData(
                table: "games",
                columns: ["id", "sport_id", "court_id", "game_time", "best_player_id"],
                values: new object[,]
                {
                    { 1, 1, 1, DateTime.Parse("2025-05-23 09:00:00"), 1 },
                    { 2, 1, 1, DateTime.Parse("2025-05-21 15:00:00"), null },
                    { 3, 1, 1, DateTime.Parse("2025-05-17 12:00:00"), null },
                    { 4, 1, 1, DateTime.Parse("2025-05-14 18:00:00"), 2 },
                    { 5, 1, 1, DateTime.Parse("2025-05-25 17:00:00"), 2 }
                });

            //migrationBuilder.AlterColumn<decimal>(
            //    name: "player_grade",
            //    table: "game_players",
            //    type: "numeric(2,2)",
            //    nullable: true,
            //    oldClrType: typeof(int),
            //    oldType: "integer");

            migrationBuilder.InsertData(
                table: "game_players",
                columns: ["game_id", "user_id", "presence", "player_grade"],
                values: new object[,]
                {
                    { 1, 1, true, 7 },
                    { 1, 2, true, 6 },
                    { 1, 3, true, 6 },
                    { 1, 4, false, null },
                    { 2, 4, true, 9 },
                    { 2, 3, true, 4 },
                    { 2, 2, true, 7 },
                    { 3, 1, true, 7 },
                    { 3, 2, true, 8 },
                    { 3, 3, true, 10 },
                    { 3, 4, true, 10 },
                    { 4, 4, true, null },
                    { 5, 1, false, null },
                    { 5, 2, true, null }
                });

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                "game_players",
                "game_id",
                [1, 2, 3, 4, 5]);

            //migrationBuilder.AlterColumn<int>(
            //    name: "player_grade",
            //    table: "game_players",
            //    type: "integer",
            //    nullable: true,
            //    oldClrType: typeof(decimal),
            //    oldType: "numeric(2, 2)");

            migrationBuilder.DeleteData(
                "games",
                "id",
                [1, 2, 3, 4, 5]);

            migrationBuilder.DeleteData(
                "user",
                "id",
                [1, 2, 3, 4]);
        }
    }
}
