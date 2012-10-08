namespace Convicts_For_A_Cause.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class MyFirstCodeMigration : DbMigration
    {
        public override void Up()
        {

            AddColumn("PaymentRecords", "Message", c => c.String(nullable: false, defaultValue: ""));
            /*
            CreateTable(
                "Convicts",
                c => new
                    {
                        Email = c.String(nullable: false, maxLength: 128),
                        ConvictCode = c.String(),
                        Name = c.String(),
                        ProfileURL = c.String(),
                        TeamCode = c.String(),
                        TeamType = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Email);
            
            CreateTable(
                "PaymentRecords",
                c => new
                    {
                        paymentID = c.Int(nullable: false, identity: true),
                        PayerEmail = c.String(),
                        amount = c.Double(nullable: false),
                        ConvictEmail = c.String(),
                        TeamCode = c.String(),
                        PaymentType = c.String(),
                        Message = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.paymentID);
            
            CreateTable(
                "Teams",
                c => new
                    {
                        TeamCode = c.String(nullable: false, maxLength: 128),
                        TeamName = c.String(),
                        TeamURL = c.String(),
                        TeamType = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.TeamCode);
             */
            
        }
        
        public override void Down()
        {
            //DropTable("Teams");
            DropColumn("PaymentRecords", "Message");
            //DropTable("Convicts");
        }
    }
}
