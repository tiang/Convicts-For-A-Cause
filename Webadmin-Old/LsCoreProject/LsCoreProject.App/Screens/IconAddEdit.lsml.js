/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.IconAddEdit.Icon_Name_render = function (element, contentItem) {

	// Render a large version of our Icon
	var itemTemplate = $("<div class='metro icon'></div>");
	var iconTemplate = $("<i style='font-size:48pt;'></i>");
	iconTemplate.appendTo($(itemTemplate));
	itemTemplate.appendTo($(element));

	contentItem.dataBind("value", function (newValue) {
		iconTemplate[0].className = "";
		iconTemplate.addClass(newValue);
	});


};


myapp.IconAddEdit.DeleteSelectedIcon_execute = function (screen) {
	
	// Delete the selected Icon
	// Setup a dialog box to verify ok to delete
	msls.showMessageBox("Are you sure you want to delete the \nIcon, including all associated data?", {
		title: "Delete Icon",
		buttons: msls.MessageBoxButtons.yesNo
	}).then(function (e) {
		if (e == msls.MessageBoxResult.yes) {
			screen.Icon.deleteEntity();
			myapp.commitChanges();
		}
	});
	
};