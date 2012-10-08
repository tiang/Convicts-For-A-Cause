using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using System.Web.Script.Serialization;

namespace Convicts_For_A_Cause
{
    /// <summary>
    /// Summary description for registration
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class Registration  : System.Web.Services.WebService
    {
        private ConvictsContext db = new ConvictsContext();
            
        [WebMethod]
        public string HelloWorld()
        {
            Helper h = new Helper();
            h.SanitiseDatabaseQuotes();
            return "Hello World";
        }
        
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string CreateConvictWebApp(string email, string name, string password, string convictCode)
        {
            try
            {                
                //Add method here
                BCWebApp.createConvict(email, password, name, convictCode);
            }
            catch (Exception ex)
            {
                
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = js.Serialize("{'emailaddress': '" + email + "', 'convictcode': '" + convictCode + "'}");
            return strJSON;
        }


        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string CreateTeamConvictWebApp(string email, string name, string password, string convictCode, string teamCode, string teamType, string teamName)
        {

            try
            {
                
                //BCWebApp.createConvict(email, password, name, convictCode);
                convictsHelper.registerTeam(teamCode, teamName, teamType);
                BCWebApp.createTeam(email, password, teamName, teamCode, teamType);
            }
            catch (Exception ex)
            {

            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = js.Serialize("{'emailaddress': '" + email + "', 'convictcode': '" + convictCode + "'}");
            return strJSON;
        }
        
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string RegisterConvict(string email, string name, Double amount)
        {

            ConvictReturnObject dto = convictsHelper.registerConvict(email, name);
            
            PaymentDTO paymentResults = paymentsHelper.AddPayment(email, email, amount, "", "convict registration", false,DateTime.Now,0,0);

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'emailaddress': '" + dto.convict.Email + "', 'convictcode': '" + dto.convict.ConvictCode + "'}");
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string doesAccountExist(string email)
        {

            bool doesAccountExist = convictsHelper.doesAccountExist(email);


            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'exists': '" + doesAccountExist + "'}");
            return strJSON;

        }


        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string RegisterRotaryTeamLeader(string email, string name, Double amount, string registrationType)
        {
          return  RegisterTeamLeader(email, name, amount, registrationType);

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string RegisterTeamLeader(string email, string name, Double amount, string registrationType)
        {
            ConvictReturnObject convictResults = convictsHelper.registerTeamConvict(email, name, registrationType);

            PaymentDTO paymentResults = paymentsHelper.AddPayment(email, email, amount, "", "team registration", false, DateTime.Now,0,0);
            /**
             *   Need to add error handling into this method. 
             **/
            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'teamcode':'" + convictResults.convict.TeamCode + "', 'convictcode': '" + convictResults.convict.ConvictCode + "', 'emailaddress': '" + convictResults.convict.Email + "'}");
            return strJSON;

        }


        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string RegisterTeamMember(string email, string name, Double amount, string registrationType, string teamCode)
        {
            ConvictReturnObject convictResults = convictsHelper.registerTeamMember(email, name, registrationType, teamCode);

            PaymentDTO paymentResults = paymentsHelper.AddPayment(email, email, amount, "", "team member registration", false, DateTime.Now,0,0);
            /**
             *   Need to add error handling into this method. 
             **/
            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'teamcode':'" + convictResults.convict.TeamCode + "', 'convictcode': '" + convictResults.convict.ConvictCode + "', 'emailaddress': '" + convictResults.convict.Email + "'}");
            return strJSON;

        }

        /// <summary>
        /// Registers a Rotary team. Called by /profile/create/rotary.html
        /// </summary>
        /// <param name="teamCode"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [WebMethod]
        [Obsolete]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string RegisterTeam(string teamCode, string name, string registrationType)
        {
            TeamDTO teamResults = convictsHelper.registerTeam(teamCode, name, registrationType);

            /**
             *   Need to add error handling into this method. 
             **/
            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize("{'teamcode':'" + teamResults.team.TeamCode + "'}");
            return strJSON;

        }



        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getTeamCode(string email)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = "";
            Convict found = db.Convicts.Find(email);
            if (found == null)
            {
                strJSON = js.Serialize("{'teamcode':'0', 'emailaddress': '" + email + "'}");
            }
            else
            {

                strJSON = js.Serialize("{'teamcode':'" + found.TeamCode + "', 'teamName': '" + found.Name + "', 'emailaddress': '" + found.Email + "'}");
            }

            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getTeamDetails(string teamCode)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = "";
            Team foundTeam = Helper.getTeamDetails(teamCode);
            Convict foundConvict = Helper.getConvictsInTeam(teamCode);
            if (foundTeam == null)
            {
                strJSON = js.Serialize("{'teamcode':'0', 'teamCode': '" + teamCode + "'}");
            }
            else
            {
                strJSON = js.Serialize("{'teamcode':'" + foundTeam.TeamCode + "', 'teamName': '" + foundTeam.TeamName + "', 'emailaddress': '" + foundConvict.Email + "'}");
            }
            return strJSON;
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getTeamMembers(string teamCode)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = "";
            string results = "";
          
            string[] searchTeamCode = new string[] { teamCode };

            ConvictsContext db = new ConvictsContext();

            var found = (from Convicts in db.Convicts
                        where searchTeamCode.Contains(Convicts.TeamCode)
                        select Convicts).ToList();

            results = "{'convicts': [";

            if (found.Count() == 0)
            {
                strJSON = js.Serialize("{'teamcode':'0', 'name': ''}");
            }
            else
            {
                foreach (Convict c in found)
                {
                    results += "{'teamcode':'" + c.TeamCode + "', 'url': '" + c.ProfileURL  +"', 'name': '" + c.Name + "'},";
                }
               results = results.Remove(results.Length - 1, 1);  // remove the last comma from the string
            }
            results += "]}";           
            strJSON = js.Serialize(results);
            return strJSON;

        }



        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getConvictDetails(string convictCode)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = "";
            Convict foundConvict = Helper.getConvictDetails(convictCode);
            if (foundConvict == null)
            {
                strJSON = js.Serialize("{'name':''}");
            }
            else
            {
                strJSON = js.Serialize("{'name':'" + foundConvict.Name + "', 'emailaddress': '" + foundConvict.Email + "'}");
            }
            return strJSON;
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getConvictCode(string email)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = "";
            Convict found = db.Convicts.Find(email);
            if (found == null)
            {
                strJSON = js.Serialize("{'convictcode':'0', 'emailaddress': '" + email + "'}");
            }
            else
            {

                strJSON = js.Serialize("{'convictcode':'" + found.ConvictCode + "', 'emailaddress': '" + found.Email + "'}");
            }

            return strJSON;
        }

    }
}
