using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using System.Web.Script.Serialization;
using System.IO;
using System.Runtime.Serialization.Json;

namespace Convicts_For_A_Cause
{
    /// <summary>
    /// Summary description for payment
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class payment : System.Web.Services.WebService
    {
       // private ConvictsContext db = new ConvictsContext();

        [WebMethod]
        public string HelloWorld()
        {           
            //convictsHelper.registerConvict();            
            return "Hello World";
        }


        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string addTeamPayment(string senderEmail, string receipentEmail, Double amount)
        {
            PaymentDTO paymentresults = paymentsHelper.AddPayment(senderEmail, receipentEmail, amount, "", "team donation", false,DateTime.Now,0,0);

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'status':'" + paymentresults.status + "', 'emailaddress': '" + senderEmail + "', 'errormessage': '" + paymentresults.errorMessage + "'}");
            return strJSON;

        }

        /// <summary>
        /// Returns a sum of payments for the convict
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getAllDonations()
        {

            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getAllDonations();
            }
            catch (Exception ex)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string addGeneralPayment(string senderEmail, string receipentEmail, Double amount)
        {
            PaymentDTO paymentresults = paymentsHelper.AddPayment(senderEmail, receipentEmail, amount, "", "general donation", false, DateTime.Now,0,0);

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'status':'" + paymentresults.status + "', 'emailaddress': '" + senderEmail + "', 'errormessage': '" + paymentresults.errorMessage + "'}");
            return strJSON;
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string addPayment(string senderEmail, string receipentEmail, string donorName, Double amount, string message, string paymentType, bool isAnonymous)
        {
            PaymentDTO paymentresults = paymentsHelper.AddPayment(senderEmail, donorName, receipentEmail, amount, message, paymentType, isAnonymous, DateTime.Now, 0, 0);

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'status':'" + paymentresults.status + "', 'emailaddress': '" + senderEmail + "', 'errormessage': '" + paymentresults.errorMessage + "'}");
            return strJSON;
        }

       

        /// <summary>
        /// Returns a sum of payments for the convict
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getConvictTotal(string email)
        {
            string returnStatus = "false";
            string returnValue = "0";
            try
            {
                returnValue = paymentsHelper.getConvictTotal(email);
                returnStatus = "true";
            }
            catch (Exception)
            {

                returnStatus = "false";
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'status':'" +
                returnStatus + "', 'email': '" +
                email + "', 'amount': '" +
                returnValue + "'}");
            return strJSON;

        }

        /// <summary>
        /// Returns a sum of payments for the convict
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getConvictDonations(string convictCode)
        {
            
            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getConvictDonations(convictCode);       
            }
            catch (Exception)
            {    
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        /// <summary>
        /// Returns a sum of payments for the convict
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getTeamDonations(string teamCode)
        {

            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getTeamDonations(teamCode);
            }
            catch (Exception)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        /// <summary>
        /// Returns a sum of payments for the team
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getTeamTotal(string teamCode)
        {
            string returnValue = "0";
            string returnStatus = "false";
            try
            {
                returnValue = paymentsHelper.getTeamTotal(teamCode);
                returnStatus = "true";
            }
            catch (Exception)
            {
                returnStatus = "false"; ;
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'status':'" +
                returnStatus + "', 'teamCode': '" +
                teamCode + "', 'amount': '" +
                returnValue + "'}");
            return strJSON;

        }


        /// <summary>
        /// Returns total payments for the event
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getEventTotal()
        {
            string returnValue = "0";
            string returnStatus = "false";
            try
            {
                returnValue = paymentsHelper.getEventTotal();
                returnStatus = "true";
            }
            catch (Exception ex)
            {
                returnStatus = "false"; ;
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'status':'" +
                returnStatus + "', 'amount': '" +
                returnValue + "'}");
            return strJSON;

        }

        /// <summary>
        /// Returns total payments for the event
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public void DownloadPaymentRecords()
        {

            ConvictsContext db = new ConvictsContext();

            var found = (from payments in db.Payments
                        orderby payments.CreateDate descending
                        select payments).ToList<PaymentRecord>();

            paymentsHelper.PaymentRecordCSVExporter.WriteToCSV(found);
        }

       
    }
}
