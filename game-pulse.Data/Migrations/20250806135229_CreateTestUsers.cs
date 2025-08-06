using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace game_pulse.Data.Migrations
{
    /// <inheritdoc />
    public partial class CreateTestUsers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "user",
                columns: ["id", "name", "nickname", "xp", "favorite_sport", "created_at"],
                values: new object[,]
                {
                    { "testinguser1", "John Doe", "Doe", 1000, 1, DateTime.Now },
                    { "testinguser2", "Jane Smith", "Smith", 1500, 2, DateTime.Now },
                    { "testinguser3", "Alice Johnson", "AliJoe", 2000, 3, DateTime.Now },
                }
            );

            migrationBuilder.InsertData(
                table: "user_info",
                columns: ["user_id", "email", "phone", "birthday", "city", "state", "country", "address"],
                values: new object[,]
                {
                    { "testinguser1", "johndoe@example.com", null, null, "Curitiba", "PR", "BR", null },
                    { "testinguser2", "janesmith@example.com", null, null, "Curitiba", "PR", "BR", null },
                    { "testinguser3", "alicejohnson@example.com", null, null, "Curitiba", "PR", "BR", null },
                }
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user_info",
                keyColumn: "user_id",
                keyValues: new object[] { "testinguser1", "testinguser2", "testinguser3" }
            );

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "id",
                keyValues: new object[] { "testinguser1", "testinguser2", "testinguser3" }
            );
        }
    }
}
