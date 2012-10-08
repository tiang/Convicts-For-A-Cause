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
    /// Summary description for leaderboard
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class leaderboard : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }


        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getLeaders()
        {
            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getTopConvictLeaders();
            }
            catch (Exception)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getConvictLeaderboard()
        {
            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getConvictLeaderboard();
            }
            catch (Exception)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getRotaryLeaders()
        {
            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getTopTeamLeaders("rotary");
            }
            catch (Exception)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getPersonalLeaders()
        {
            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getTopTeamLeaders("personal");
            }
            catch (Exception)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getBusinessLeaders()
        {
            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getTopTeamLeaders("business");
            }
            catch (Exception)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string getTeamLeaderboard(string teamType)
        {
            string returnValue = "{'status':'false'}";
            try
            {
                returnValue = paymentsHelper.getTeamLeaderboard(teamType);
            }
            catch (Exception)
            {
            }

            JavaScriptSerializer js = new JavaScriptSerializer();

            string strJSON = js.Serialize(returnValue);
            return strJSON;

        }
    }
}
