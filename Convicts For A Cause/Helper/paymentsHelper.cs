using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;
using System.Text;

namespace Convicts_For_A_Cause
{

    [DataContract]
    public class DonationMessage
    {
        [DataMember]
        internal string message;
        [DataMember]
        internal string date;
    }
     

    /// <summary>
    /// Provides CRUD methods to interact with payments table
    /// </summary>
    public class paymentsHelper
    {

        public class PaymentRecordCSVExporter
        {
            public static void WriteToCSV(List<PaymentRecord> paymentList)
            {
                string attachment = "attachment; filename=paymentRecords.csv";
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.ClearHeaders();
                HttpContext.Current.Response.ClearContent();
                HttpContext.Current.Response.AddHeader("content-disposition", attachment);
                HttpContext.Current.Response.ContentType = "text/csv";
                HttpContext.Current.Response.AddHeader("Pragma", "public");
                WriteColumnName();
                foreach (PaymentRecord paymentRecord in paymentList)
                {
                    WritePaymentInfo(paymentRecord);
                }
                HttpContext.Current.Response.End();
            }

            private static void WritePaymentInfo(PaymentRecord paymentRecord)
            {
                StringBuilder stringBuilder = new StringBuilder();
                AddComma(paymentRecord.paymentID.ToString(), stringBuilder);
                AddComma(paymentRecord.CreateDate.ToString(), stringBuilder);
                AddComma(paymentRecord.DonorName, stringBuilder);
                AddComma(paymentRecord.PayerEmail, stringBuilder);
                AddComma(paymentRecord.ConvictEmail, stringBuilder);
                AddComma(paymentRecord.PaymentType, stringBuilder);
                AddComma(paymentRecord.amount.ToString(), stringBuilder);
                HttpContext.Current.Response.Write(stringBuilder.ToString());
                HttpContext.Current.Response.Write(Environment.NewLine);
            }

            private static void AddComma(string value, StringBuilder stringBuilder)
            {
                if (value == null ){value = " ";}
                stringBuilder.Append(value.Replace(',', ' '));
                stringBuilder.Append(", ");
            }

            private static void WriteColumnName()
            {
                string columnNames = "Payment ID, Payment Date, Donor Name, Donor Email, Receipient Email, Payment Type, Amount";
                HttpContext.Current.Response.Write(columnNames);
                HttpContext.Current.Response.Write(Environment.NewLine);
            }
        }

        public static string getAllDonations()
        {
            string returnStr = "{'status':'true'";

            returnStr += ", 'messages': [ ";

            ConvictsContext db = new ConvictsContext();

            var found = from payments in db.Payments
                        join convicts in db.Convicts on payments.ConvictEmail equals convicts.Email
                        orderby payments.CreateDate descending
                        select new
                        {
                            Payments = payments,
                            Convicts = convicts
                        };

            if (found.Count() == 0)
            {
                returnStr = "{'status':'false'}";

            }
            else
            {

                int i = 0;
                foreach (var p in found)
                {
                    if (string.IsNullOrEmpty(p.Payments.DonorName))
                        continue;

                    if (p.Payments.Anonymous)
                        p.Payments.DonorName = "Anonymous";

                    i++;
                    DonationMessage d = new DonationMessage();
                    d.date = "" + p.Payments.CreateDate.ToShortDateString() + " " + p.Payments.CreateDate.ToShortTimeString();

                    if (p.Payments.PaymentType == "convict donation" || p.Payments.PaymentType == "cash donation")
                    {
                        d.message = p.Payments.DonorName + " posted $" + p.Payments.amount + " bail to " + p.Convicts.Name + "";

                        returnStr += "{'date': '" + d.date + "','url': '" + p.Convicts.ProfileURL + "','message': '" + d.message + "'},";
                    }
                    if (p.Payments.PaymentType == "team donation")
                    {
                        Team t = Helper.getTeamDetails(p.Convicts.TeamCode);
                        if (t != null)
                        {
                        d.message = p.Payments.DonorName + " posted a $" + p.Payments.amount + " bail to team " + t.TeamName;

                        returnStr += "{'date': '" + d.date + "','url': '" + t.TeamURL + "','message': '" + d.message + "'},";
                        }
                    }
                    else if (p.Payments.PaymentType == "team member registration" || p.Payments.PaymentType == "convict registration" || p.Payments.PaymentType == "team registration")
                    {
                        d.message = p.Convicts.Name + " has been jailed and fined $" + p.Payments.amount;

                        returnStr += "{'date': '" + d.date + "','url': '" + p.Convicts.ProfileURL + "','message': '" + d.message + "'},";
                    }
                    else if (p.Payments.PaymentType == "general donation")
                    {
                        d.message = p.Payments.DonorName + " posted $" + p.Payments.amount + " towards " + p.Convicts.Name + " bail.";

                        returnStr += "{'date': '" + d.date + "','url': '" + p.Convicts.ProfileURL + "','message': '" + d.message + "'},";
                    }
                    if (i == 10)
                    {
                        break;
                    }

                }

                returnStr += "]";
                returnStr += "}";
                return returnStr;
            }
            return "{'status':'false'}";
        }

        public static PaymentDTO AddPayment(string PaymentEmail, string ReceipientEmail, Double amount, string message, string paymentType, Boolean anonymous, DateTime paymentDate, int transactionID, int invoiceID)
        {
            
            ConvictsContext db = new ConvictsContext();

            PaymentRecord payment = new PaymentRecord();
            payment.PayerEmail = PaymentEmail;
            payment.amount = amount;
            payment.TeamCode = Helper.getTeamCode(ReceipientEmail);
            payment.ConvictEmail = ReceipientEmail;
            payment.PaymentType = paymentType;
            payment.Message = message;
            payment.CreateDate = paymentDate;
            payment.Anonymous = anonymous;
            payment.TransactionID = transactionID;
            payment.InvoiceID = invoiceID;
            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                db.Payments.Add(payment);
                db.SaveChanges();
                returnStatus = "true";

            }
            catch (Exception ex)
            {
                returnStatus = "false";
                errorMessage = ex.Message ;
            }

            PaymentDTO returnobj = new PaymentDTO();
            returnobj.status =  returnStatus;
            returnobj.errorMessage = errorMessage;

            return returnobj;
        }

        public static PaymentDTO AddPayment(string PaymentEmail, string DonorName, string ReceipientEmail, Double amount, string message, string paymentType, Boolean anonymous, DateTime paymentDate, int transactionID, int invoiceID)
        {

            ConvictsContext db = new ConvictsContext();

            PaymentRecord payment = new PaymentRecord();
            payment.PayerEmail = PaymentEmail;
            payment.DonorName = DonorName;
            payment.amount = amount;
            payment.TeamCode = Helper.getTeamCode(ReceipientEmail);
            payment.ConvictEmail = ReceipientEmail;
            payment.PaymentType = paymentType;
            payment.Message = message;
            payment.CreateDate = paymentDate;
            payment.Anonymous = anonymous;
            payment.TransactionID = transactionID;
            payment.InvoiceID = invoiceID;
            string returnStatus = "false";
            string errorMessage = "";

            try
            {
                db.Payments.Add(payment);
                db.SaveChanges();
                returnStatus = "true";

            }
            catch (Exception ex)
            {
                returnStatus = "false";
                errorMessage = ex.Message;
            }

            PaymentDTO returnobj = new PaymentDTO();
            returnobj.status = returnStatus;
            returnobj.errorMessage = errorMessage;

            return returnobj;
        }

        public static string getConvictTotal(string email)
        {
            string returnValue = "0";

            string[] searchEmail = new string[] { email };

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from payments in db.Payments
                        where searchEmail.Contains(payments.ConvictEmail)
                        select payments;

            if (found.Count() == 0)
            {
                returnValue = "0";  
            }
            else
            {
               returnValue = found.Sum(P => P.amount).ToString();
            }
            return returnValue;
        }


        public static string getConvictDonations(string convictCode)
        {
            string returnStr = "{'status':'true'";

            returnStr += ", 'messages': [ ";


            Convict foundConvict = Helper.getConvictDetails(convictCode);
            string[] searchEmail = new string[] { foundConvict.Email };

          
            ConvictsContext db = new ConvictsContext();
          
            var found = from payments in db.Payments
                        where searchEmail.Contains(payments.ConvictEmail)
                        orderby payments.CreateDate descending
                        select payments;

            if (found.Count() == 0)
            {
                returnStr =  "{'status':'false'}";
            }
            else
            {

                var count = 0;
                foreach (var p in found)
                {
                    
                    DonationMessage d = new DonationMessage();
                    d.date = "" + p.CreateDate.ToShortDateString();

                    if (string.IsNullOrEmpty(p.DonorName))
                        continue;

                    if (p.Anonymous)
                        p.DonorName = "Anonymous";

                    if (count > 0)
                    {
                        returnStr += ",";
                    }
                    count++;

                    if (p.PaymentType == "convict donation" || p.PaymentType == "cash donation")
                    {
                        d.message = p.DonorName + " posted a $" + p.amount + " bail: " + p.Message ;
               
                        returnStr += "{'date': '" + d.date +"','message': '" + d.message + "'}";
                    }
                    if (p.PaymentType == "team donation")
                    {
                        d.message = p.DonorName + " posted a $" + p.amount + " bail to " + foundConvict.Name + "%27s team: " + p.Message;

                        returnStr += "{'date': '" + d.date + "','message': '" + d.message + "'}";
                    }
                    else if (p.PaymentType == "team member registration" || p.PaymentType == "convict registration" || p.PaymentType == "team registration")
                    {
                        d.message = foundConvict.Name + " has been jailed and fined $" + p.amount;
                    
                        returnStr += "{'date': '" + d.date + "','message': '" + d.message + "'}";
                    }
                    else if (p.PaymentType == "general donation")
                    {
                        d.message = p.DonorName + " posted a $" + p.amount + " bail.";
            
                        returnStr += "{'date': '" + d.date + "','message': '" + d.message + "'}";
                    }
                     
                }
                
                returnStr += "]";
                returnStr += "}";
                return returnStr;
            }
            return "{'status':'false'}";
        }

        public static List<PaymentRecord> getAllPayments()
        {
            ConvictsContext db = new ConvictsContext();
            List<PaymentRecord> found = (from payments in db.Payments
                                             orderby payments.CreateDate descending
                                             select payments).ToList();
            return found;
        }

        public static PaymentRecord getLastPayment()
        {
            PaymentRecord returnValue = null;

           
            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = (from payments in db.Payments
                         orderby payments.CreateDate descending
                         select payments);

            if (found == null )
            {
                returnValue = null;
            }
            else
            {
                returnValue = found.First<PaymentRecord>();
            }
            return returnValue;
        }

        public static string getTeamDonations(string teamCode)
        {
            string returnStr = "{'status':'true'";

            returnStr += ", 'messages': [ ";

            ConvictsContext db = new ConvictsContext();

            var found = from payments in db.Payments
                        where teamCode.Contains(payments.TeamCode)
                        orderby payments.CreateDate descending
                        select payments;

            if (found.Count() == 0)
            {
                returnStr = "{'status':'false'}";
                return returnStr;
            }
            else
            {


                foreach (var p in found)
                {
                    if (string.IsNullOrEmpty(p.DonorName))
                        continue;

                    if (p.Anonymous)
                        p.DonorName = "Anonymous";

                    DonationMessage d = new DonationMessage();
                    d.date = "" + p.CreateDate.ToShortDateString() + " " + p.CreateDate.ToShortTimeString();

                    if (p.PaymentType == "convict donation" || p.PaymentType == "cash donation")
                    {
                        Convict foundConvict = Helper.getConvictDetailsByEmail(p.ConvictEmail);
                        d.message = p.DonorName + " posted a $" + p.amount + " bail: " + p.Message;

                        returnStr += "{'date': '" + d.date + "','message': '" + d.message + "'},";
                    }
                    else if (p.PaymentType == "team donation")
                    {
                        Convict foundConvict = Helper.getConvictDetailsByEmail(p.ConvictEmail);
                        d.message = p.DonorName + " posted a $" + p.amount + " bail: " + p.Message;

                        returnStr += "{'date': '" + d.date + "','message': '" + d.message + "'},";
                    }
                    else if (p.PaymentType == "team registration" || p.PaymentType == "convict registration" || p.PaymentType == "team member registration")
                    {
                        Convict foundConvict = Helper.getConvictDetailsByEmail(p.ConvictEmail);
                        d.message = foundConvict.Name + " has been jailed and fined $" + p.amount;

                        returnStr += "{'date': '" + d.date + "','message': '" + d.message + "'},";
                    }
                    else if (p.PaymentType == "general donation")
                    {
                        d.message = p.DonorName + " posted a $" + p.amount + " bail.";

                        returnStr += "{'date': '" + d.date + "','message': '" + d.message + "'},";
                    }

                }

                returnStr += "]";
                returnStr += "}";
                return returnStr;
            }
            //return "{'status':'false'}";
        }


        public static string getTeamTotal(string teamCode)
        {
           string returnValue = "0";
            
            //string teamCode = Helper.getTeamCode(email);

            string[] searchTeamCode = new string[] { teamCode };

            ConvictsContext db = new ConvictsContext();

            var found = from payments in db.Payments
                        where searchTeamCode.Contains(payments.TeamCode)
                        select payments;

            if (found.Count() == 0)
            {
                returnValue = "0"; 
            }
            else
            {
                returnValue = found.Sum(P => P.amount).ToString();
            }
            return returnValue;
        }

        public static string getEventTotal()
        {
            string returnValue = "0";

            ConvictsContext db = new ConvictsContext();

            var found = from payments in db.Payments
                        select payments;

            if (found.Count() == 0)
            {
                returnValue = "0";
            }
            else
            {
                returnValue = Math.Round(found.Sum(P => P.amount)).ToString();
            }
            return returnValue;
        }



        public static string getTopConvictLeaders()
        {
            string returnStr = "{'status':'true'";

            returnStr += ", 'convicts': [ ";

            ConvictsContext db = new ConvictsContext();    

            var found = (from convicts in db.Convicts.ToList()
                         where convicts.TeamType == null 
                        orderby Double.Parse( convicts.Total) descending
                        select convicts).ToList();
            {

            if (found.Count() == 0)
            {
                returnStr = "{'status':'false'}";
                return returnStr;
            }
            else
                for (int i = 0; i <= 4 && i != found.Count(); i++)
                {
                    returnStr += "{'url': '" +found[i].ProfileURL  + "','message': '" +  found[i].Name + " - $" + found[i].Total + "'},";
                }

            }
            returnStr += "]";
            returnStr += "}";
            return returnStr;
        }

        public static string getConvictLeaderboard()
        {
            string returnStr = "{'status':'true'";

            returnStr += ", 'convicts': [ ";

            ConvictsContext db = new ConvictsContext();


            var found = (from convicts in db.Convicts.ToList()
                         where convicts.TeamType == null 
                         orderby Double.Parse(convicts.Total) descending
                         select convicts).ToList();
            {

                if (found.Count() == 0)
                {
                    returnStr = "{'status':'false'}";
                    return returnStr;
                }
                else
                    foreach (var convict in found)
                    {
                        returnStr += "{'url': '" + convict.ProfileURL + "','name': '" + convict.Name + "','total': '" + convict.Total + "'},";
                    }

            }
            returnStr += "]";
            returnStr += "}";
            return returnStr;
        }

        
        public static string getTopTeamLeaders(string teamType)
        {
            string returnStr = "{'status':'true'";

            returnStr += ", 'teams': [ ";

            ConvictsContext db = new ConvictsContext();


            var found = (from teams in db.Teams.ToList()
                         where teams.TeamType == teamType
                         orderby Double.Parse(teams.Total) descending
                         select teams).ToList();
            {
  
                if (found.Count() == 0)
                {
                    returnStr = "{'status':'false'}";
                    return returnStr;
                }
                else
                    for (int i = 0; i <= 4 && i != found.Count(); i++)
                    {
                        returnStr += "{'url': '" + found[i].TeamURL + "','message': '" + found[i].TeamName + " - $" + found[i].Total + "'},";
                    }

            }
            returnStr += "]";
            returnStr += "}";
            return returnStr;
        }


        public static string getTeamLeaderboard(string teamType)
        {
            string returnStr = "{'status':'true'";

            returnStr += ", 'teams': [ ";

            ConvictsContext db = new ConvictsContext();


            var found = (from teams in db.Teams.ToList()
                         where teams.TeamType == teamType
                         orderby Double.Parse(teams.Total) descending
                         select teams).ToList();
            {

                if (found.Count() == 0)
                {
                    returnStr = "{'status':'false'}";
                    return returnStr;
                }
                else
                {
                    foreach (var team in found)
                    {
                        returnStr += "{'url': '" + team.TeamURL + "','message': '" + team.TeamName + "','total': '" + team.Total + "'},";
                    }
                }

            }
            returnStr += "]";
            returnStr += "}";
            return returnStr;
        }
    }
}