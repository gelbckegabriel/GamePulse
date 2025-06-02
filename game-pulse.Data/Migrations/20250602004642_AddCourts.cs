using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace game_pulse.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddCourts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "courts",
                columns: ["id", "name", "city", "state", "country", "address", "g_maps", "map"],
                values: new object[,]
                {
                    { 1, "Parque Atuba", "Curitiba", "PR", "BR", "R. Pintor Ricardo Krieger, 550", "https://g.co/kgs/hfeVDyP", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.80313691373!2d-49.2078254!3d-25.377913499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce61cccc4aa8d%3A0xd94db68cd4cd4489!2sAtuba%20Park!5e0!3m2!1sfr!2sbr!4v1747789282878!5m2!1sfr!2sbr" },
                    { 2, "Parque Barigui", "Curitiba", "PR", "BR", "Av. Cândido Hartmann, S/N", "https://g.co/kgs/qWXdu1c", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.358798399686!2d-49.30723!3d-25.4262654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3df88cb5fa7%3A0x64ed421a45cf1e53!2sParque%20Barigui!5e0!3m2!1sfr!2sbr!4v1747789416168!5m2!1sfr!2sbr" },
                    { 3, "Jardim Botânico", "Curitiba", "PR", "BR", "R. Engo. Ostoja Roguski, 350", "https://g.co/kgs/HgKDJVN", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8546859352455!2d-49.2382445!3d-25.4431213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce500d5e96635%3A0x1a2d5ec5fddc5654!2sBotanical%20Garden%20of%20Curitiba!5e0!3m2!1sfr!2sbr!4v1747789452093!5m2!1sfr!2sbr" },
                    { 4, "Praça Brigadeiro Eppinghaus", "Curitiba", "PR", "BR", "R. José de Alencar, 2231", "https://g.co/kgs/cfTNquJ", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.6862882779296!2d-49.2524987!3d-25.415309599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4301b4615ef%3A0x3137371b0f80d71e!2sBrigadier%20Eppinghaus%20Square!5e0!3m2!1sfr!2sbr!4v1747789453932!5m2!1sfr!2sbr" },
                    { 5, "Social Plaza", "Colombo", "PR", "BR", "R. Campo Largo, 114", "https://g.co/kgs/9Exen5Q", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.4966493094666!2d-49.16480500000001!3d-25.354666299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce9003542e7a1%3A0x5deaea01c3c55c8c!2sSocial%20plaza!5e0!3m2!1sfr!2sbr!4v1747789505724!5m2!1sfr!2sbr" },
                    { 6, "Parque São José", "São José dos Pinhais", "PR", "BR", "Av. das Torres, 100", "https://g.co/kgs/rHwtzrk", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.769793594789!2d-49.202885099999996!3d-25.512722999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfa78b84b9d3f%3A0x465d8f7954a9f650!2zUGFycXVlIFPDo28gSm9zw6k!5e0!3m2!1sfr!2sbr!4v1747789508557!5m2!1sfr!2sbr" }
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

            migrationBuilder.DeleteData(
                "courts",
                "id",
                [1, 2, 3, 4, 5, 6]);
        }
    }
}
