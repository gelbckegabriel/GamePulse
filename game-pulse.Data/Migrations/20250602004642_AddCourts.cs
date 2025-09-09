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
                    { 6, "Parque São José", "São José dos Pinhais", "PR", "BR", "Av. das Torres, 100", "https://g.co/kgs/rHwtzrk", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.769793594789!2d-49.202885099999996!3d-25.512722999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfa78b84b9d3f%3A0x465d8f7954a9f650!2zUGFycXVlIFPDo28gSm9zw6k!5e0!3m2!1sfr!2sbr!4v1747789508557!5m2!1sfr!2sbr" },
                    { 7, "Centro Esportivo Bacacheri - CEB", "Curitiba", "PR", "BR", "Rua Aviador Luiz Bergmann, 176", "https://share.google/6lY9QSsfdrd8p9Frz", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.3091774232958!2d-49.23580318831528!3d-25.39445937749109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce6775eb8e457%3A0x22d5680cffda0498!2sCentro%20Esportivo%20Bacacheri%20CEB!5e0!3m2!1spt-BR!2sbr!4v1757376615453!5m2!1spt-BR!2sbr" },
                    { 8, "Parque Bacacheri", "Curitiba", "PR", "BR", "R. Rodrigo de Freitas, 277", "https://share.google/1OFrhOcJNPjVzSGgE", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1802.1987086672923!2d-49.23179489334683!3d-25.39150439437324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce7abf334bc87%3A0xa1d270103602e551!2sParque%20Bacacheri%20-%20Acesso%20Rua%20Nicar%C3%A1gua!5e0!3m2!1spt-BR!2sbr!4v1757375664241!5m2!1spt-BR!2sbr" },
                    { 9, "Parque das Águas", "Pinhais", "PR", "BR", "Rod. Dep. João Leopoldo Jacomel, 8682", "https://share.google/FYXYjrFzDXongzURv", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921030.9015576931!2d-50.15610321664471!3d-25.61232674758677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcee23fd6a19bd%3A0x3d420db25d97cd14!2sParque%20das%20%C3%81guas!5e0!3m2!1spt-BR!2sbr!4v1757376807562!5m2!1spt-BR!2sbr" },
                    { 10, "Praça Nelson Monteiro", "Curitiba", "PR", "BR", "Xaxim, Curitiba", "https://share.google/bsCIURc0zVdXOnNE4", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14402.670546428852!2d-49.286846992141626!3d-25.516128838608786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb65d2b5b165%3A0xe22845c57db0ed86!2sPra%C3%A7a%20Nelson%20Monteiro%20-%20Xaxim%2C%20Curitiba%20-%20PR%2C%2081810-000!5e0!3m2!1spt-BR!2sbr!4v1757376859683!5m2!1spt-BR!2sbr" },
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
                    { 7, 1 },
                    { 7, 2 },
                    { 7, 3 },
                    { 8, 2 },
                    { 8, 3 },
                    { 9, 1 },
                    { 9, 2 },
                    { 9, 3 },
                    { 9, 4 },
                    { 10, 1 },
                    { 10, 2 },
                    { 10, 3 },
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
                 { 7, 1 },
                 { 7, 2 },
                 { 7, 3 },
                 { 8, 2 },
                 { 8, 3 },
                 { 9, 1 },
                 { 9, 2 },
                 { 9, 3 },
                 { 9, 4 },
                 { 10, 1 },
                 { 10, 2 },
                 { 10, 3 },
            });

            migrationBuilder.DeleteData(
                "courts",
                "id",
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        }
    }
}
