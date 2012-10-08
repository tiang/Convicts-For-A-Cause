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
    /// Summary description for testJSONValidation
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class testJSONValidation : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public string returnError()
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = js.Serialize("{'error': '0', 'emailaddress': 'tiang@ThisMethodWorks.com'}");
            try
            {
                throw new HttpException("This is an Error Message");
            }
            catch (Exception ex)
            {

                 strJSON = js.Serialize("{'error': '1', 'message': '" + ex.Message + "', 'email': 'This@MethodThrewAnError.com'}");
            }
   
            return strJSON;
        }

    }
}
