/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/itgLsHelper.js" />

myapp.MenuExport.created = function (screen) {

	// Get our contentItem to hold the export
	var exportContentItem = screen.findContentItem("JsonMenuData");

	// Lets get our data, stuff the contentItem when done
	itgLsHelper.exportTileMenusToJson(exportContentItem);

};