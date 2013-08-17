using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Xml;
using HtmlAgilityPack;

namespace Convicts_For_A_Cause
{
    public class Helper
    {
                /// <summary>
        /// Generates a random string with the given length
        /// </summary>
        /// <param name="size">Size of the string</param>
        /// <param name="lowerCase">If true, generate lowercase string</param>
        /// <returns>Random string</returns>
        private static string RandomString(int size, bool lowerCase)
        {
            StringBuilder builder = new StringBuilder();
            Random random = new Random();
            char ch ;
            for(int i=0; i<size; i++)
            {
                ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65))) ;
                builder.Append(ch); 
            }
            if(lowerCase)
            return builder.ToString().ToLower();
            return builder.ToString();
        }

        private static int RandomNumber(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max);
        }
        /// <summary>
        /// Generates a unique 4 digit team code. 
        /// 
        /// First 4 characters   are random numbers
        /// </summary>
        /// <returns></returns>
        public static string GenerateTeamCode()
        {
            StringBuilder builder = new StringBuilder();
            builder.Append(RandomNumber(1000, 9999));
            
            string[] searchValue = new string[]{builder.ToString()};

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from convicts in db.Convicts
                        where searchValue.Contains(convicts.TeamCode)
                        select convicts;
            
            if (found.Count() == 0)
            {
                return builder.ToString();
            }
            else 
            {
                return GenerateTeamCode();  //Recursive function to find teamcode that is not already taken
            }

        }

        public void SanitiseDatabaseQuotes()
        {
            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            string sqlCommand = "update paymentrecords set message=replace(message,'''','&quot;')";
            db.Database.ExecuteSqlCommand(sqlCommand);
        }

        /// <summary>
        /// Generates a unique 4 digit team code. 
        /// 
        /// First 4 characters   are random numbers
        /// </summary>
        /// <returns></returns>
        public static string GenerateConvictCode()
        {
            StringBuilder builder = new StringBuilder();
            builder.Append(RandomNumber(1000, 9999));

            string[] searchValue = new string[] { builder.ToString() };

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from convicts in db.Convicts
                        where searchValue.Contains(convicts.ConvictCode)
                        select convicts;

            if (found.Count() == 0)
            {
                return builder.ToString();
            }
            else
            {
                return GenerateConvictCode();  //Recursive function to find teamcode that is not already taken
            }

        }
        
        
        public static string getTeamCode(string email) {

            string[] searchEmail = new string[] { email };

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from convicts in db.Convicts
                        where searchEmail.Contains(convicts.Email)
                        select convicts;

            if (found.Count() == 0)
            {
                return null;
            }
            else
            {
                return found.FirstOrDefault().TeamCode;  //Recursive function to find teamcode that is not already taken
            }
        }

        public static Convict getConvictDetails(string convictCode)
        {

            string[] searchTeamCode = new string[] { convictCode };

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from convicts in db.Convicts
                        where searchTeamCode.Contains(convicts.ConvictCode)
                        select convicts;

            if (found.Count() == 0)
            {
                return null;
            }
            else
            {
                return found.FirstOrDefault();  //Recursive function to find teamcode that is not already taken
            }
        }

        public static Convict getConvictDetailsByEmail(string email)
        {

            string[] searchEmail = new string[] { email };

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from convicts in db.Convicts
                        where searchEmail.Contains(convicts.Email)
                        select convicts;

            if (found.Count() == 0)
            {
                return null;
            }
            else
            {
                return found.FirstOrDefault();  //Recursive function to find teamcode that is not already taken
            }
        }

        public static Convict getConvictsInTeam(string teamCode)
        {

            string[] searchTeamCode = new string[] { teamCode };

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from convicts in db.Convicts
                        where searchTeamCode.Contains(convicts.TeamCode)
                        select convicts;

            if (found.Count() == 0)
            {
                return null;
            }
            else
            {
                return found.FirstOrDefault();  //Recursive function to find teamcode that is not already taken
            }
        }

        public static Team getTeamDetails(string teamCode)
        {
            string[] searchTeamCode = new string[] { teamCode };

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            var found = from team in db.Teams
                        where searchTeamCode.Contains(team.TeamCode)
                        select team;

            if (found.Count() == 0)
            {
                return null;
            }
            else
            {
                return found.FirstOrDefault();  //Recursive function to find teamcode that is not already taken
            }
        }

        public void CalculateConvictTotals()
        {

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            List<Convict> found = (from convicts in db.Convicts
                        select convicts).ToList();
      
            foreach (var convict in found)
            {
                try
                {
                    ConvictsContext db1 = new ConvictsContext();
                    var total = (from payments in db1.Payments
                                 where payments.ConvictEmail == convict.Email
                                 select payments.amount).Sum();

                    convict.Total = total.ToString();
                    db.Entry(convict).CurrentValues.SetValues(convict);
                
                }
                catch (Exception ex)
                {

                    Console.Write(ex.Message.ToString());
                }
                
            }
            db.SaveChanges();
        }

        public void CalculateTeamTotals()
        {

            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            List<Team> found = (from teams in db.Teams
                        select teams).ToList();
      
            foreach (var team in found)
            {

                ConvictsContext db1 = new ConvictsContext();
                var total = (from payments in db1.Payments
                             where payments.TeamCode == team.TeamCode 
                             select payments.amount).Sum();

                team.Total = total.ToString();
                db.Entry(team).CurrentValues.SetValues(team);
                
            }
            db.SaveChanges();
        }

        public void addTeamCodeToPaymentRecords()
        {
            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            List<Convict> found = (from convicts in db.Convicts
                                   where convicts.TeamCode != null
                                select convicts).ToList();

            foreach (var convict in found)
            {

                ConvictsContext db1 = new ConvictsContext();
                var payment = (from payments in db1.Payments
                              where payments.ConvictEmail  == convict.Email
                              select payments).ToList();

                             foreach (var p in payment)
                             {
                                 p.TeamCode = convict.TeamCode;
                                 db1.Entry(p).CurrentValues.SetValues(p);
                             }
                db1.SaveChanges();
            }
            
        }

        /// <summary>
        /// Parses the convict page to get the convict's URL
        /// </summary>
        public void getConvictURLS()
        {
            HtmlWeb webLoad = new HtmlWeb();
            HtmlDocument doc = webLoad.Load("http://www.convictsforacause.org.au/support/convict.html");

            var meh = from link in doc.DocumentNode.DescendantNodes()
                      where link.Name == "a" &&
                      link.Attributes["email"] != null
                      select new
                      {
                          URL = link.Attributes["href"].Value,
                          email = link.Attributes["email"].Value
                      };
            
           
            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            List<Convict> found = (from convicts in db.Convicts
                                   where convicts.ProfileURL == null 
                                   select convicts).ToList();

            foreach (var convict in found)
            {
                foreach(var link in meh )
                {
                    if (convict.Email == link.email)
                    {
                        convict.ProfileURL = link.URL;
                    }
                }

                db.Entry(convict).CurrentValues.SetValues(convict);

            }
            db.SaveChanges();
        }

        public void getTeamURLS()
        {
            HtmlWeb webLoad = new HtmlWeb();
            HtmlDocument doc = webLoad.Load("http://www.convictsforacause.org.au/support/team.html");

            var meh = from link in doc.DocumentNode.DescendantNodes()
                      where link.Name == "a" &&
                      link.Attributes["teamcode"] != null
                      select new
                      {
                          URL = link.Attributes["href"].Value,
                          teamcode = link.Attributes["teamcode"].Value
                      };


            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            List<Team> found = (from team in db.Teams
                                   where team.TeamURL == null
                                   select team).ToList();

            foreach (var team in found)
            {
                foreach (var link in meh)
                {
                    if (team.TeamCode == link.teamcode)
                    {
                        team.TeamURL = link.URL;
                    }
                }

                db.Entry(team).CurrentValues.SetValues(team);

            }
            db.SaveChanges();
        }



        public void getTeamURLs()
        {
            HtmlWeb webLoad = new HtmlWeb();
            HtmlDocument doc = webLoad.Load("http://www.convictsforacause.org.au/support/team.html");

            var meh = from link in doc.DocumentNode.DescendantNodes()
                      where link.Name == "a" &&
                      link.Attributes["teamcode"] != null
                      select new
                      {
                          URL = link.Attributes["href"].Value,
                          teamcode = link.Attributes["teamcode"].Value
                      };


            // check if team code already exists
            ConvictsContext db = new ConvictsContext();
            List<Team> found = (from teams in db.Teams 
                                   where teams.TeamURL == null
                                   select teams).ToList();

            foreach (var team in found)
            {
                foreach (var link in meh)
                {
                    if (team.TeamCode == link.teamcode)
                    {
                        team.TeamURL = link.URL;
                    }
                }

                db.Entry(team).CurrentValues.SetValues(team);

            }
            db.SaveChanges();
        }


        public void getPaymentRecords()
         {
            convictsforacauseWS.CatalystCRMWebservice CFACWS = new convictsforacauseWS.CatalystCRMWebservice();

            PaymentRecord lastRecord = paymentsHelper.getLastPayment();
            DateTime time = DateTime.Now.AddDays(-5); //Get payments for last 30 days as default.
            List<PaymentRecord> allPayments = paymentsHelper.getAllPayments();
            if (lastRecord != null)
            {
                time = lastRecord.CreateDate;
            }

            int recordstart = 0;
            bool moreRecords = false;
            convictsforacauseWS.OrderDetails[] orderDetails  = null;

            try
            {
                orderDetails = CFACWS.OrderList_Retrieve("info@convictsforacause.org.au", "convicts2011", 223280, time, ref  recordstart, ref moreRecords);
            }
            catch (Exception)
            {
                
            }

            if (orderDetails == null)
                return;

            // Handle registrations, donations and cash donations
            foreach (var orderDetail in orderDetails)
            {
                if ((orderDetail.payments[0].transactionNumber != null
                    && orderDetail.entityId != 12394407) || orderDetail.orderName == "Cash Donation")
                {

                    var entity = CFACWS.Contact_RetrieveByEntityID("info@convictsforacause.org.au", "convicts2011", 223280, orderDetail.entityId);
                    if (orderDetail.crmForms == null)
                    {
                        continue;
                    }
                    var message = orderDetail.crmForms[0].crmFormFields[0].fieldValue;
                    var donationTo = orderDetail.crmForms[0].crmFormFields[1].fieldValue;
                    var anonymous_value = orderDetail.crmForms[0].crmFormFields[2].fieldValue.ToString();
                    Boolean anonymous = anonymous_value.Equals("1");
                    var paymentType = orderDetail.crmForms[0].crmFormFields[3].fieldValue;
                    var paymentDate = orderDetail.createDate;
                    var transactionID = orderDetail.entityId;
                    var invoiceID = orderDetail.invoiceNumber;

                    if (CheckExistingPaymentRecord(allPayments, orderDetail))
                    {
                        continue;  //Do not add if record already exists
                    }

                    paymentsHelper.AddPayment(entity.phoneNos[0].phoneNo, donationTo, orderDetail.payments[0].amount, message, paymentType, anonymous, paymentDate, transactionID,invoiceID);

                }           
            }

            //Handle Ticket Bookings
            foreach (var orderDetail in orderDetails)
            {
                if (orderDetail.orderName.Contains("Buy Event Tickets"))
                {

                    var entity = CFACWS.Contact_RetrieveByEntityID("info@convictsforacause.org.au", "convicts2011", 223280, orderDetail.entityId);

                    var message = "";
                    var donationTo = "";
                    Boolean anonymous = true;
                    var paymentType = "event ticket";
                    var paymentDate = orderDetail.createDate;
                    var transactionID = orderDetail.entityId;
                    var invoiceID = orderDetail.invoiceNumber;

                    if (CheckExistingPaymentRecord(allPayments, orderDetail))
                    {
                        continue;  //Do not add if record already exists
                    }

                    paymentsHelper.AddPayment(entity.phoneNos[0].phoneNo, donationTo, orderDetail.payments[0].amount, message, paymentType, anonymous, paymentDate, transactionID, invoiceID);

                }
            }
         }

        private static bool CheckExistingPaymentRecord(List<PaymentRecord> allPayments, convictsforacauseWS.OrderDetails orderDetail)
        {

            return allPayments.Find(p => p.TransactionID == orderDetail.entityId) != null || allPayments.Find(p => p.InvoiceID == orderDetail.invoiceNumber) != null;
        }

        /// <summary>
        /// Checks for null entries and puts 
        /// </summary>
        public void getDonorNames()
        {

            // populates donor names
            ConvictsContext db = new ConvictsContext();
            List<PaymentRecord> found = (from payments in db.Payments
                                         where payments.DonorName == null
                                   select payments).ToList();

            foreach (var payment in found)
            {
                try
                {
                    convictsforacauseWS.CatalystCRMWebservice CFACWS = new convictsforacauseWS.CatalystCRMWebservice();
                    convictsforacauseWS.ContactRecord CR = CFACWS.Contact_RetrieveByEmailAddress("info@convictsforacause.org.au", "convicts2011", 223280, payment.PayerEmail);
                    

                    payment.DonorName = CR.fullName;
                    db.Entry(payment).CurrentValues.SetValues(payment);
              
                }
                catch (Exception)
                {

                }
              
            }
            try
            {
                  db.SaveChanges();
            }
            catch (Exception)
            {
            }
  
           
         
        }

    }
}
