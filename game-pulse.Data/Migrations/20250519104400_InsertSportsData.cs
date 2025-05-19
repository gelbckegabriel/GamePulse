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

            // TODO: Add game positions (id, sport_id, name)
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                "sports",
                "id",
                [1, 2, 3, 4]
                );
        }
    }
}
