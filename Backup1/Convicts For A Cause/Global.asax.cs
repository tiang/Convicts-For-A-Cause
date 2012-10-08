using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;
using System.Data.Entity;

namespace Convicts_For_A_Cause
{
    
    /*  NOt required as we are using Entity Frameowkr Migrations
    public class EntitiesContextInitializer : DropCreateDatabaseIfModelChanges<ConvictsContext>
    {
        protected override void Seed(ConvictsContext context)
        {
            /*
             * bob@kaizenagency.com.au	Bob Cheng	NULL	9122	9/2/2011 6:26:26 AM	9/2/2011 6:26:26 AM
tiang@kaizenagency.com.au	Tiang Cheng		9122	9/2/2011 6:26:26 AM	9/2/2011 6:26:26 AM
             * */
        //    List<Role> roles = new List<Role>
        //{
        //    new Role {Id=1, Title="Admin"},
        //    new Role {Id=2, Title="ProjectManager"},
        //    new Role {Id=3, Title="Developer"}
        //};

        //    // add data into context and save to db
        //    foreach (Role r in roles)
        //    {
        //        context.Roles.Add(r);
        //    }
        //    context.SaveChanges();
    /*
        }

    }*/


    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
           // Database.SetInitializer(new EntitiesContextInitializer());
          //  Database.SetInitializer<ConvictsContext>(null);


        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}