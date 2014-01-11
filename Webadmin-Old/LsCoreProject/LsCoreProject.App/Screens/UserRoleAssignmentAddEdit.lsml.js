/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.UserRoleAssignmentAddEdit.created = function (screen) {

	// When a new user is created, add the required fields that end user should not deal with
	// Required fields
	var screenEntity = screen.RoleAssignment;
	screenEntity.SourceAccount = screenEntity.User;
	screenEntity.SourceAccountName = screenEntity.UserName;

};