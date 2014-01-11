/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/itgLsHelper.js" />


myapp.Start.ScreenContent_render = function (element, contentItem) {

	// Our big ol JSON Object holding our menus... this is new...and Optional
	// If it does not get passed, we continue with database driven
	var myJsonMenu = {
		"Start": {
			"menuName": "Start", "menuTiles": [
				{ "Order": 1, "Name": "Profile", "TileColor": "#1182c5", "Type": "simple", "Size": "default", "OnClick": "myapp.showProfile();", "Status": "Profile", "StatusBgColor": null, "StatusFgColor": null, "Badge": null, "BadgeBgColor": null, "BadgeFgColor": null, "Icon": "icon-clipboard-2", "IconBgColor": null, "IconFgColor": null, "PermissionId": null },
				{ "Order": 99, "Name": "Security", "TileColor": "#ff3b00", "Type": "simple", "Size": "double", "OnClick": "myapp.showSecurity();", "Status": "Security", "StatusBgColor": null, "StatusFgColor": null, "Badge": null, "BadgeBgColor": null, "BadgeFgColor": null, "Icon": "icon-locked", "IconBgColor": null, "IconFgColor": null, "PermissionId": null }]
		},
		"Security": {
			"menuName": "Security", "menuTiles": [
				{ "Order": 2, "Name": "Users", "TileColor": "#1fb800", "Type": "simple", "Size": "double", "OnClick": "myapp.showUserRegistrationsBrowse();", "Status": "User Registrations", "StatusBgColor": null, "StatusFgColor": null, "Badge": null, "BadgeBgColor": null, "BadgeFgColor": null, "Icon": "icon-address-book", "IconBgColor": null, "IconFgColor": null, "PermissionId": null },
				{ "Order": 4, "Name": "Roles", "TileColor": "#9f041e", "Type": "simple", "Size": "default", "OnClick": "myapp.showRolesBrowse();", "Status": "Roles", "StatusBgColor": null, "StatusFgColor": null, "Badge": null, "BadgeBgColor": null, "BadgeFgColor": null, "Icon": "icon-console", "IconBgColor": null, "IconFgColor": null, "PermissionId": null },
				{ "Order": 6, "Name": "Permissions", "TileColor": "#6f6c07", "Type": "simple", "Size": "default", "OnClick": "myapp.showPermissionsBrowse();", "Status": "Permissions", "StatusBgColor": null, "StatusFgColor": null, "Badge": null, "BadgeBgColor": null, "BadgeFgColor": null, "Icon": "icon-blocked", "IconBgColor": null, "IconFgColor": null, "PermissionId": null },
				{ "Order": 8, "Name": "Menus", "TileColor": "#90258d", "Type": "simple", "Size": "double", "OnClick": "myapp.showMenusBrowse();", "Status": "Menu Administration", "StatusBgColor": null, "StatusFgColor": null, "Badge": null, "BadgeBgColor": null, "BadgeFgColor": null, "Icon": "icon-list", "IconBgColor": null, "IconFgColor": null, "PermissionId": null },
				{ "Order": 10, "Name": "Icons", "TileColor": "#06834e", "Type": "simple", "Size": "default", "OnClick": "myapp.showIconsBrowse();", "Status": "Icons", "StatusBgColor": null, "StatusFgColor": null, "Badge": null, "BadgeBgColor": null, "BadgeFgColor": null, "Icon": "icon-grid", "IconBgColor": null, "IconFgColor": null, "PermissionId": null }]
		}
	};


	// This will initialize the system, getting user info, permissions, etc
	// Only needed in your startup screen. Called once.
	// Uncomment jsonMenus if you want to use jsonMenu vs pulling from the database
	itgLsHelper.init({
		readyPropertyName: "itgReady",
		contentItem: contentItem,
		element: element,
		menuName: "Start",
		//jsonMenus: myJsonMenu,
		excludedScreens: ["AddEdit", "Import", "View"]
	});


};