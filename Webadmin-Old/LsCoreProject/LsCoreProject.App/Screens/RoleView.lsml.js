/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.RoleView.RolePermissions_postRender = function (element, contentItem) {

	// Add the role name to our screen header
	contentItem.dataBind("screen.Role.Name", function (newValue) {
		contentItem.screen.details.displayName = newValue + " Role";
	});

};

myapp.RoleView.DeleteEntireRole_execute = function (screen) {

	// We only bother with asking for permission on critical cascading deletes
	// Setup a dialog box to verify ok to delete
	msls.showMessageBox("Are you sure you want to delete the \nentire Role, including all associated data?", {
		title: "Delete Entire Role",
		buttons: msls.MessageBoxButtons.yesNo
	}).then(function (e) {
		if (e == msls.MessageBoxResult.yes) {
			screen.Role.deleteEntity();
			myapp.commitChanges();
		}
	});
};

myapp.RoleView.DeleteRoleAssignment_execute = function (screen) {

	// Delete the selected role assignment
	// Setup a dialog box to verify ok to delete
	msls.showMessageBox("Are you sure you want to delete the\nRole Assignment?", {
		title: "Delete Role Assignment",
		buttons: msls.MessageBoxButtons.yesNo
	}).then(function (e) {
		if (e == msls.MessageBoxResult.yes) {
			if (screen.RoleAssignments.selectedItem) {
				screen.RoleAssignments.selectedItem.deleteEntity();
				myapp.applyChanges();
			}
			screen.findContentItem("DeleteRoleAssignment").isVisible = false;
		}
	});
};

myapp.RoleView.DeleteRolePermission_execute = function (screen) {

	// Delete the selected role permission
	// Setup a dialog box to verify ok to delete
	msls.showMessageBox("Are you sure you want to delete the\nRole Permission?", {
		title: "Delete Role Permission",
		buttons: msls.MessageBoxButtons.yesNo
	}).then(function (e) {
		if (e == msls.MessageBoxResult.yes) {
			if (screen.RolePermissions.selectedItem) {
				screen.RolePermissions.selectedItem.deleteEntity();
				myapp.applyChanges();
			}
			screen.findContentItem("DeleteRolePermission").isVisible = false;
			screen.findContentItem("DeleteEntireRole").isVisible = true;

		}
	});
};

myapp.RoleView.RoleAssignments1_ItemTap_execute = function (screen) {

	// When a role assignment is tapped, flip around buttons in view
	screen.findContentItem("DeleteRoleAssignment").isVisible = true;

};

myapp.RoleView.RolePermissions1_ItemTap_execute = function (screen) {

	// When a role permission is tapped, flip around buttons in view
	screen.findContentItem("DeleteEntireRole").isVisible = false;
	screen.findContentItem("DeleteRolePermission").isVisible = true;

};
