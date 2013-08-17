namespace Convicts_For_A_Cause.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Convicts",
                c => new
                    {
                        Email = c.String(nullable: false, maxLength: 128),
                        ConvictCode = c.String(),
                        Name = c.String(),
                        ProfileURL = c.String(),
                        TeamCode = c.String(),
                        TeamType = c.String(),
                        Total = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Email);
            
            CreateTable(
                "dbo.PaymentRecords",
                c => new
                    {
                        paymentID = c.Int(nullable: false, identity: true),
                        PayerEmail = c.String(),
                        amount = c.Double(nullable: false),
                        ConvictEmail = c.String(),
                        TeamCode = c.String(),
                        DonorName = c.String(),
                        PaymentType = c.String(),
                        Message = c.String(),
                        TransactionID = c.Int(nullable: false),
                        InvoiceID = c.Int(nullable: false),
                        CreateDate = c.DateTime(nullable: false),
                        Anonymous = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.paymentID);
            
            CreateTable(
                "dbo.Teams",
                c => new
                    {
                        TeamCode = c.String(nullable: false, maxLength: 128),
                        TeamName = c.String(),
                        TeamURL = c.String(),
                        TeamType = c.String(),
                        Total = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.TeamCode);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Teams");
            DropTable("dbo.PaymentRecords");
            DropTable("dbo.Convicts");
        }
    }
}
