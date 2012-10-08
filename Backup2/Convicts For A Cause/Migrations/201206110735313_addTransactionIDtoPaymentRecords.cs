namespace Convicts_For_A_Cause.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class addTransactionIDtoPaymentRecords : DbMigration
    {
        public override void Up()
        {
            AddColumn("PaymentRecords", "TransactionID", c => c.Int(nullable: false,defaultValue:0));
        }
        
        public override void Down()
        {
            DropColumn("PaymentRecords", "TransactionID");
        }
    }
}
