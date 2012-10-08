namespace Convicts_For_A_Cause.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddAnonymousColumn : DbMigration
    {
        public override void Up()
        {
             AddColumn("paymentRecords", "anonymous", c => c.Boolean(nullable: false, defaultValue: false));
        }
        
        public override void Down()
        {
            DropColumn("paymentRecords", "anonymous");
        }
    }
}
