using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace game_pulse.Data.Migrations
{
    /// <inheritdoc />
    public partial class InsertSportsData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "sports",
                columns: ["id", "name"],
                values: new object[,]
                {
                    { 1, "Basketball" },
                    { 2, "Football" },
                    { 3, "Volleyball" },
                    { 4, "Tennis" }
                });

            migrationBuilder.InsertData(
                table: "sports_positions",
                columns: ["id", "sport_id", "name"],
                values: new object[,]
                {
                    { 1, 1, "Point Guard" },
                    { 2, 1, "Shooting Guard" },
                    { 3, 1, "Small Forward" },
                    { 4, 1, "Power Forward" },
                    { 5, 1, "Center" },
                    { 6, 2, "Goalkeeper" },
                    { 7, 2, "Defender" },
                    { 8, 2, "Midfielder" },
                    { 9, 2, "Attacker" },
                    { 10, 3, "Outside Hitter" },
                    { 11, 3, "Opposite Hitter" },
                    { 12, 3, "Middle Blocker" },
                    { 13, 3, "Setter" },
                    { 14, 3, "Libero" },
                    { 15, 3, "Defensive Specialist" },
                    { 16, 4, "Singles Tennis" },
                    { 17, 4, "Doubles Tennis" },
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                "sports_positions",
                "id",
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                );

            migrationBuilder.DeleteData(
                "sports",
                "id",
                [1, 2, 3, 4]
                );
        }
    }
}
