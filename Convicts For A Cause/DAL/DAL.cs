using System;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.Infrastructure;
using System.Linq;

public class Convict
{
    [Key]
    public string Email { get; set;}
    public string ConvictCode { get; set; }
    public string Name { get; set; }
    public string ProfileURL { get; set; }
    public string TeamCode { get; set; }
    public string TeamType { get; set; }
    public string Total { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime ModifiedDate { get; set; }
}

public class ConvictReturnObject
{
    public Convict convict;
    public string status;
    public string errorMessage;
}
/*
public class Leaderboard
{
    [Key]
    public int ID { get; set; }
    public string ConvictCode { get; set; }
    public string TeamCode { get; set; }
    public string Total { get; set; }
    public string ConvictName { get; set; }
    public string TeamName { get; set; }
    public string RegistrationType { get; set; }
    public string TeamType { get; set; }
}
*/
public class PaymentRecord
{
    [Key]
    public int paymentID { get; set; }
    public string PayerEmail { get; set; } //email address of person making payment
    public double amount { get; set; }
    public string ConvictEmail{ get; set; } //email address of the convict
    public string TeamCode { get; set; }
    public string DonorName { get; set; }
    public string PaymentType { get; set; }
    public string Message { get; set; }
    public int TransactionID { get; set; } //Maps to EntityID in BusinessCatalyst
    public int InvoiceID { get; set; } //Maps to invoiceID in BusinessCatalyst
    public DateTime CreateDate { get; set; }
    public Boolean Anonymous { get; set; }
}

[Serializable]
public class PaymentDTO
{
    public PaymentRecord payment;
    public string status;
    public string errorMessage;
}

[Serializable]
public class Team
{
    [Key]
    public string TeamCode { get; set; }
    public string TeamName { get; set; }
    public string TeamURL { get; set; }
    public string TeamType { get; set; }
    public string Total { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime ModifiedDate { get; set; }
}

[Serializable]
public class TeamDTO
{
    public Team team;
    public string status;
    public string errorMessage;
}

public interface IConvictsContext
{
    IDbSet<Convict> Convicts { get; set; }
    IDbSet<PaymentRecord> Payments { get; set; }
    IDbSet<Team> Teams { get; set; }
        
}

public class ConvictsContext : DbContext, IConvictsContext
{
    public IDbSet<Convict> Convicts { get; set; }

    public IDbSet<PaymentRecord> Payments { get; set; }
    public IDbSet<Team> Teams { get; set; }
   // public DbSet<Leaderboard> Leaderboards { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        //Disable EDM Data Table checking as we are not using CodeFirst anymore. 
        
        modelBuilder.Conventions.Remove<IncludeMetadataConvention>();
    }
}