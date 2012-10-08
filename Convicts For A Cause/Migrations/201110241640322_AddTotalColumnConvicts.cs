namespace Convicts_For_A_Cause.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddTotalColumnConvicts : DbMigration
    {
        public override void Up()
        {
               AddColumn("Convicts", "Total", c => c.String(nullable: false, defaultValue: "0"));
        }
        
        public override void Down()
        {
        }
    }
}
