/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.UserRegistrationView.Details_postRender = function (element, contentItem) {

	// Add the name of the user to the screen header
	contentItem.dataBind("screen.UserRegistration.UserName", function (newValue) {
		contentItem.screen.details.displayName = "User " + newValue;
	});

};

myapp.UserRegistrationView.DeleteRoleAssignment_execute = function (screen) {

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

myapp.UserRegistrationView.DeleteUserRegistration_execute = function (screen) {

	// Delete the selected user account, this will cascade to related data
	// Setup a dialog box to verify ok to delete
	msls.showMessageBox("Are you sure you want to delete the entire \nUser account, including all associated data?", {
		title: "Delete User Account",
		buttons: msls.MessageBoxButtons.yesNo
	}).then(function (e) {
		if (e == msls.MessageBoxResult.yes) {
			screen.UserRegistration.deleteEntity();
			myapp.commitChanges();
		}
	});

};

myapp.UserRegistrationView.RoleAssignments1_ItemTap_execute = function (screen) {

	// When a role assignment is tapped, show the delete button
	screen.findContentItem("DeleteRoleAssignment").isVisible = true;

};
