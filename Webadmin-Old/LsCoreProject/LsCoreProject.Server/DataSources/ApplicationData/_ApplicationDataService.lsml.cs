using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{
	public partial class ApplicationDataService
	{
		partial void TilesForMenu_PreprocessQuery(string menuName, ref IQueryable<MenuTile> query)
		{
			// Get the current user permissions
			var userPermissions = this.Application.User.EffectivePermissions;

			// Only pull tiles that meet the requirements, including permission level
			query = from menuTiles in query
					where menuTiles.Menu.Name == menuName && (menuTiles.PermissionId == null || userPermissions.Contains(menuTiles.PermissionId))
					orderby menuTiles.Order, menuTiles.Name
					select menuTiles;

		}
	}
}
