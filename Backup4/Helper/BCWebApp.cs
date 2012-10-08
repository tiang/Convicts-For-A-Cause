using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Text;

namespace Convicts_For_A_Cause
{
    public class BCWebApp
    {

        public static bool createConvict(string email, string password, string name, string convictCode)
        {
            bool returnValue = false;


            HttpWebRequest httpWReq = (HttpWebRequest)WebRequest.Create("http://www.convictsforacause.org.au/CustomContentProcess.aspx?CCID=9678&OID=5862556&OTYPE=1&JSON=1");
            ASCIIEncoding encoding = new ASCIIEncoding();
            string postData = "ItemName=" + name;
            postData += "&CAT_Custom_197408=500";
            postData += "&CAT_Custom_197232=" + email;
            postData += "&CAT_Custom_197233=" + convictCode;

            byte[] data = encoding.GetBytes(postData);

            httpWReq.Method = "POST";
            httpWReq.ContentType = "application/x-www-form-urlencoded";
            httpWReq.ContentLength = data.Length;
            httpWReq.CookieContainer = getBusinessCatalystCookie(email, password);

            System.IO.Stream os = httpWReq.GetRequestStream();
            os.Write(data, 0, data.Length); //Push it out there
            os.Close();
            System.Net.WebResponse resp = httpWReq.GetResponse();

            if (resp == null) return false;

            System.IO.StreamReader sr = new System.IO.StreamReader(resp.GetResponseStream());
            var temp = sr.ReadToEnd().Trim();

            return returnValue;
        }

        
        public static bool createTeam(string email, string password, string name, string teamCode, string teamType)
        {
            bool returnValue = false;

            HttpWebRequest httpWReq = (HttpWebRequest)WebRequest.Create("http://www.convictsforacause.org.au/CustomContentProcess.aspx?CCID=10623&amp;OID=5841058&amp;OTYPE=1&JSON=1");
            ASCIIEncoding encoding = new ASCIIEncoding();
            string postData = "ItemName=" + name + "";
            postData += "&CAT_Custom_203411=1000";
            postData += "&CAT_Custom_204259=" + teamType;
            postData += "&CAT_Custom_203410=" + email;
            postData += "&CAT_Custom_203407=" + teamCode;
            postData += "&CAT_Custom_203406=" + name + ""; 

            byte[] data = encoding.GetBytes(postData);

            httpWReq.Method = "POST";
            httpWReq.ContentType = "application/x-www-form-urlencoded";
            httpWReq.ContentLength = data.Length;
            httpWReq.CookieContainer = getBusinessCatalystCookie(email, password);

            System.IO.Stream os = httpWReq.GetRequestStream();
            os.Write(data, 0, data.Length); //Push it out there
            os.Close();
            System.Net.WebResponse resp = httpWReq.GetResponse();

            if (resp == null) return false;

            System.IO.StreamReader sr = new System.IO.StreamReader(resp.GetResponseStream());
            var temp = sr.ReadToEnd().Trim();

            return returnValue;
        }
        
        public static CookieContainer getBusinessCatalystCookie(string email, string password)
        {

            HttpWebRequest httpWReq = (HttpWebRequest)WebRequest.Create("http://www.convictsforacause.org.au/ZoneProcess.aspx?ZoneID=-1&OID=5841021&OTYPE=1");
            ASCIIEncoding encoding = new ASCIIEncoding();
            string postData = "Username=" + email;
            postData += "&Password=" + password;

            byte[] data = encoding.GetBytes(postData);

            httpWReq.Method = "POST";
            httpWReq.ContentType = "application/x-www-form-urlencoded";
            httpWReq.ContentLength = data.Length;

            System.IO.Stream os = httpWReq.GetRequestStream();
            os.Write(data, 0, data.Length); //Push it out there
            os.Close();

            CookieContainer cookie;
            cookie = httpWReq.CookieContainer = new CookieContainer();

            System.Net.WebResponse resp = httpWReq.GetResponse();

            if (resp == null) return new CookieContainer();

            //System.IO.StreamReader sr = new System.IO.StreamReader(resp.GetResponseStream());
            //var temp = sr.ReadToEnd().Trim();

            return cookie;
        }
    }
}