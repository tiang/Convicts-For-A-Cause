/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.IconsBrowse.Icon1_render = function (element, contentItem) {

	// Render a big ol tile list of all our icons
	var itemTemplate = $("<div class='metro icon' style='padding-right:5px;'></div>");
	var iconTemplate = $("<i></i>");
	iconTemplate.appendTo($(itemTemplate));
	itemTemplate.appendTo($(element));

	contentItem.dataBind("data.Name", function (newValue) {
		iconTemplate[0].className = "";
		iconTemplate.addClass(newValue);
	});

};