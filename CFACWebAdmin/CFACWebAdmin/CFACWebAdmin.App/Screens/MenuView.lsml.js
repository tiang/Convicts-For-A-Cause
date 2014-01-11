/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.MenuView.DeleteEntireMenu_execute = function (screen) {

	// Delete the entire menu and associated tiles
	// Setup our dialog box to verify ok to delete
	msls.showMessageBox("Are you sure you want to delete the entire \nMenu, including all associated tiles?", {
		title: "Delete Entire Menu",
		buttons: msls.MessageBoxButtons.yesNo
	}).then(function (e) {
		if (e == msls.MessageBoxResult.yes) {

			// Delete and commit, returning us to the browse screen
			screen.Menu.deleteEntity();
			myapp.commitChanges();

		}
	});

};


myapp.MenuView.MenuTiles_postRender = function (element, contentItem) {

	// Put our Menu Name as the screen header
	// Bind so that changes will be reflected
	contentItem.dataBind("screen.Menu.Name", function (newValue) {
		contentItem.screen.details.displayName = newValue + " Menu Tiles";
	});

};