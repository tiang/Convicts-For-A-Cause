using System;
using System.Web;
using System.Collections;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Data;
using System.Data.Odbc;
using System.Web.Script.Serialization;
using System.Web.Script.Services;

namespace Convicts_For_A_Cause
{
    /// <summary>
    /// Summary description for testajax
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class testajax : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string HelloWorld(string emailaddress)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            string strJSON = js.Serialize("{'teamcode':'12345', 'emailaddress': '" + emailaddress + "'}");
            return strJSON;

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string TestJSON()
        {
            Employee[] e = new Employee[2];
            e[0] = new Employee();
            e[0].Name = "Ajay Singh";
            e[0].Company = "Birlasoft Ltd.";
            e[0].Address = "LosAngeles California";
            e[0].Phone = "1204675";
            e[0].Country = "US";
            e[1] = new Employee();
            e[1].Name = "Ajay Singh";
            e[1].Company = "Birlasoft Ltd.";
            e[1].Address = "D-195 Sector Noida";
            e[1].Phone = "1204675";
            e[1].Country = "India";
            return new JavaScriptSerializer().Serialize(e);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Xml)]
        public Employee[] TestXML()
        {
            Employee[] e = new Employee[2];
            e[0] = new Employee();
            e[0].Name = "Ajay Singh";
            e[0].Company = "Birlasoft Ltd.";
            e[0].Address = "LosAngeles California";
            e[0].Phone = "310-235-1535";
            e[0].Country = "US";
            e[1] = new Employee();
            e[1].Name = "Ajay Singh";
            e[1].Company = "Birlasoft Ltd.";
            e[1].Address = "D-195 Sector Noida";
            e[1].Phone = "120-467500";
            e[1].Country = "India";
            return e;
        }


    }


    public class Employee
    {
        public string Name { get; set; }
        public string Company { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Country { get; set; }
    }
}
