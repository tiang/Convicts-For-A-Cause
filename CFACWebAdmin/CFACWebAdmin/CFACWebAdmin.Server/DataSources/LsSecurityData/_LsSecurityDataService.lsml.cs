using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{
	public partial class LsSecurityDataService
	{
		partial void NonSecurityAdministrators_PreprocessQuery(ref IQueryable<UserRegistration> query)
		{
			// Get a list of all the Security Admins
			var ra = RoleAssignments
						.Where(a => a.RoleName == "Administrator")
						.Select(a => new { a.SourceAccountName })
						.Execute()
						.ToList();

			// Create a nice delimited string... query does not like lists
			var listOfAdmins = ra.Aggregate("", (current, u) => current + (u.SourceAccountName + ";"));

			// Update the query to exclude the list of Security Administrators
			query = query.Where(u => !listOfAdmins.Contains(u.UserName)).Select(u => u);

		}

		partial void CurrentUser_PreprocessQuery(ref IQueryable<UserRegistration> query)
		{
			query = query.Where(u => u.UserName == this.Application.User.Name).Select(u => u);

		}
	}
}
