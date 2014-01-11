/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/itgLsHelper.js" />


myapp.UserRegistrationAddEdit.Password_postRender = function (element, contentItem) {

	// Go find our ConfirmPassword contentItem
	var confirmContentItem = contentItem.screen.findContentItem("ConfirmPassword");

	// Turn this field into a password with validation
	itgLsHelper.passwordValidator(element, contentItem, confirmContentItem);

};
myapp.UserRegistrationAddEdit.ConfirmPassword_postRender = function (element, contentItem) {

	// Go find our Password contentItem
	var passwordContentItem = contentItem.screen.findContentItem("Password");

	// Turn this field into a password type, validate against the password
	itgLsHelper.confirmPasswordValidator(element, contentItem, passwordContentItem);

};