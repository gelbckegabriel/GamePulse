using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace game_pulse.Data.Migrations
{
    /// <inheritdoc />
    public partial class InsertSomeCourts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "state",
                table: "courts",
                type: "varchar(2)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "courts",
                columns: ["id", "name", "city", "state", "country", "address", "g_maps"],
                values: new object[,]
                {
                    { 1, "Parque Atuba", "Curitiba", "PR", "BR", "R. Pintor Ricardo Krieger, 550", "https://g.co/kgs/hfeVDyP" },
                    { 2, "Parque Barigui", "Curitiba", "PR", "BR", "Av. Cândido Hartmann, S/N", "https://g.co/kgs/qWXdu1c" },
                    { 3, "Jardim Botânico", "Curitiba", "PR", "BR", "R. Engo. Ostoja Roguski, 350", "https://g.co/kgs/HgKDJVN" },
                    { 4, "Praça Brigadeiro Eppinghaus", "Curitiba", "PR", "BR", "R. José de Alencar, 2231", "https://g.co/kgs/cfTNquJ" },
                    { 5, "Social Plaza", "Colombo", "PR", "BR", "R. Campo Largo, 114", "https://g.co/kgs/9Exen5Q" },
                    { 6, "Parque São José", "São José dos Pinhais", "PR", "BR", "Av. das Torres, 100", "https://g.co/kgs/rHwtzrk" }
                });

            migrationBuilder.InsertData(
                table: "court_sports",
                columns: ["court_id", "sport_id"],
                values: new object[,]
                {
                    { 1, 1 },
                    { 1, 2 },
                    { 1, 3 },
                    { 2, 1 },
                    { 2, 2 },
                    { 2, 3 },
                    { 3, 4 },
                    { 4, 1 },
                    { 4, 2 },
                    { 4, 3 },
                    { 5, 1 },
                    { 5, 2 },
                    { 6, 1 },
                    { 6, 2 },
                    { 6, 3 },
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.DeleteData(
            table: "court_sports",
            keyColumns: new[] { "court_id", "sport_id" },
            keyValues: new object[,]
            {
                 { 1, 1 },
                 { 1, 2 },
                 { 1, 3 },
                 { 2, 1 },
                 { 2, 2 },
                 { 2, 3 },
                 { 3, 4 },
                 { 4, 1 },
                 { 4, 2 },
                 { 4, 3 },
                 { 5, 1 },
                 { 5, 2 },
                 { 6, 1 },
                 { 6, 2 },
                 { 6, 3 },
            });

            //migrationBuilder.DeleteData(
            //    "court_sports",
            //    "court_id",
            //    [1, 2, 3, 4, 5, 6]
            //    );

            migrationBuilder.DeleteData(
                "courts",
                "id",
                [1, 2, 3, 4, 5, 6]
                );

            migrationBuilder.DropColumn(
                name: "state",
                table: "courts");
        }
    }
}
