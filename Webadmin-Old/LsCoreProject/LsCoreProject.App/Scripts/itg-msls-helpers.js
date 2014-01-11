
// =========================================================================
// Create a simple tile based on passed options
// This version works with original MetroUICss class based system
// A bit unflexable when it comes to color, but flexable when swapping in/out
// This works as advertised, but we chose to implement a more flexible
// based on color pickers
// =========================================================================
function createSimpleTileHtmlWithClasses(tileData) {
	var tile = null;
	
		// Base tile = ID, Size, Color, onClick
		tile = "<div id='" + tileData.Id + "' class='tile " + tileData.Size + " bg-" + tileData.TileColor.Name + "' onclick=\"" + tileData.OnClick + ";\">";

		// Was an icon specified? Icon name and Color
		if (tileData.Icon) {
			var iconBgColor = tileData.IconBgColor != undefined ? " bg-" + tileData.IconBgColor.Name : "";
			var iconFgColor = tileData.IconFgColor != undefined ? " fg-" + tileData.IconFgColor.Name : "";
			tile += "<div class='tile-content icon'><i class='" + tileData.Icon.Name + iconBgColor + iconFgColor + "'/></div>";
		}

		// Status message for the tile, again Color and Message
		if (tileData.Status) {
			var statusBgColor = tileData.StatusBgColor != undefined ? " bg-" + tileData.StatusBgColor.Name : "";
			var statusFgColor = tileData.StatusFgColor != undefined ? " fg-" + tileData.StatusFgColor.Name : "";
			tile += "<div class='tile-status'><span class='name " + statusBgColor + statusFgColor + "'>" + tileData.Status + "</span></div>";
		}

		// How about our little badge, again Color and Badge number
		if (tileData.Badge) {
			var badgeBgColor = tileData.BadgeBgColor != undefined ? " bg-" + tileData.BadgeBgColor.Name : "";
			var badgeFgColor = tileData.BadgeFgColor != undefined ? " fg-" + tileData.BadgeFgColor.Name : "";
			tile += "<div class='brand'><div class='badge " + badgeBgColor + badgeFgColor + "'>" + tileData.Badge + "</div></div>";
		}
	
	return tile;
}

// =========================================================================
// Create a simple tile based on passed options
// This version works with styles so as to have the most flexibility/customization
// This is the one we are currently using
// =========================================================================
function createSimpleTileHtml(tileData) {
	var tile = null;

	// Base tile = ID, Size, Color, onClick
	tile = "<div id='" + tileData.Id + "' class='tile " + tileData.Size + "' style='background-color: " + tileData.TileColor + "' onclick=\"" + tileData.OnClick + ";\">";

	// Was an icon specified? Icon name and Color
	if (tileData.Icon) {
		var iconBgColor = tileData.IconBgColor != undefined ? " background-color:" + tileData.IconBgColor + ";" : "";
		var iconFgColor = tileData.IconFgColor != undefined ? " color:" + tileData.IconFgColor + ";" : "";
		tile += "<div class='tile-content icon'><i class='" + tileData.Icon.Name + "' style='" + iconBgColor + iconFgColor + "'/></div>";
	}

	// Status message for the tile, again Color and Message
	if (tileData.Status) {
		var statusBgColor = tileData.StatusBgColor != undefined ? " background-color:" + tileData.StatusBgColor + ";" : "";
		var statusFgColor = tileData.StatusFgColor != undefined ? " color:" + tileData.StatusFgColor + ";" : "";
		tile += "<div class='tile-status'><span class='name' style='" + statusBgColor + statusFgColor + "'>" + tileData.Status + "</span></div>";
	}

	// How about our little badge, again Color and Badge number
	if (tileData.Badge) {
		var badgeBgColor = tileData.BadgeBgColor != undefined ? " background-color:" + tileData.BadgeBgColor + ";" : "";
		var badgeFgColor = tileData.BadgeFgColor != undefined ? " color:" + tileData.BadgeFgColor + ";" : "";
		tile += "<div class='brand'><div class='badge' style='" + badgeBgColor + badgeFgColor + "'>" + tileData.Badge + "</div></div>";
	}

	return tile;
}


// =========================================================================
// Add array of tiles to the passed container
// =========================================================================
function addTilesToContainer(container, menuTiles) {
	
	// Add a class to our element to identify it as a metro container
	$(container).addClass("metro-container metro");
	
	// Create the tiles and add to our container
	$.each(menuTiles, function (index, item) {

		// Temp to hold our tile html
		var tempTile = "";

		// What type of tile to create?  Add additional as needed
		switch (item.Type) {
			case "simple":
				tempTile = createSimpleTileHtml(item);
			break;			
			default:
				tempTile = createSimpleTileHtml(item);
		}

		// Append the tile to our container, repeat as necessary
		$(tempTile).appendTo($(container));

	});

}


// =========================================================================
// Create a modern tile menu screen
// =========================================================================
function createModernTileMenu(container, contentItem, menuName) {
	
	// Set our query parameter to the menu name
	contentItem.screen.MenuName = menuName;

	// Add a unique identifier to our menuName for inclusion into the global stack
	menuName = "itg" + menuName;

	// Has the menu for this screen already been downloaded
	if (typeof myapp[menuName] == "function" || myapp[menuName] == undefined) {
		
		// It has not, so lets go get it 
		contentItem.screen.TilesForMenu.load().then(function () {
			
			// Save the entities to the global stack
			myapp[menuName] = contentItem.screen.TilesForMenu.data;
			
			// Go add the tiles to the container
			addTilesToContainer(container, myapp[menuName]);
		});
	} else {
		
		// Menu has already been downloaded, so just add the tiles to the container
		addTilesToContainer(container, myapp[menuName]);
	}

}


// =========================================================================
// Color picker based on the Spectrum picker
// This was the only picker that played well with LightSwitch
// and was themeable.
// You can review the docs at
// http://bgrins.github.io/spectrum/
// =========================================================================
function setupSpectrumColorPicker(element, contentItem) {
	
	// Wrap in a timeout to make sure jQuery Mobile is done
	setTimeout(function () {
		
		// Make sure the container to hold our color picker has
		// the base LightSwitch class
		$(element).addClass("ui-mini");
		
		// Create and add the input tag to the DOM
		var inputElement = $("<input />");
		inputElement.appendTo($(element));

		// Make our color picker based on our parameters
		inputElement.spectrum({
			color: contentItem.value,
			showInput: true,
			theme: "sp-LightSwitch",
			preferredFormat: "hex",
			allowEmpty: true,
			showPalette: true,
			showSelectionPalette: true,
			palette: [],
			localStorageKey: "spectrumColors",
			change: function(newValue) {
				var newColor = null;
				if (newValue) {
					newColor = newValue.toString();
				}
				contentItem.value = newColor;
			}
		});
		
	}, 0);
}


// =========================================================================
// Setup icon picker, database driven
// Allows flexibility in swapping in/out without recompiling or deployment
// =========================================================================
function setupIconPicker(element, contentItem) {
	
	var itemTemplate = $("<div class='metro icon' style='padding-right:5px;'></div>");
	var iconTemplate = $("<i></i>");
	iconTemplate.appendTo($(itemTemplate));
	itemTemplate.appendTo($(element));

	contentItem.dataBind("data.Name", function (newValue) {
		iconTemplate[0].className = "";
		iconTemplate.addClass(newValue);
	});

}


// =========================================================================
// Simple utility to get URL Query Parameters
// =========================================================================
function getUrlParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if (results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}


// =========================================================================
// =========================================================================
// Low level fix for issues around ETag missing in properties
// You can review this fix from a Microsoft TechNet article at:
// http://social.technet.microsoft.com/wiki/contents/articles/20718.the-etag-value-in-the-request-header-does-not-match-with-the-current-etag-of-the-object.aspx
// I have done a few changes from the original article so that it works
// across all feeds.  Original article missed an important piece and is noted 
// in the code below
// =========================================================================
// =========================================================================

// Fix the MetadataRead Handler for ETag issue
var origMetadataReadFunc;

// Our fix for the bad ETags
function fixMetadataHandlerForEtag() {
	origMetadataReadFunc = OData.metadataHandler.read;
	OData.metadataHandler.read = function(response, context) {
		origMetadataReadFunc.call(OData.metadataHandler, response, context);
		var data = response.data,
			schema = data && data.dataServices && data.dataServices.schema && data.dataServices.schema[0],
			entities = schema && schema.entityType || [];
		entities.forEach(function(entity) {
			var i,
				property,
				properties = entity.property || [];
			for (i = properties.length - 1; i >= 0; i--) {
				property = properties[i];
				if (property.name === "Microsoft_LightSwitch_ETag") {
					property.type = "Edm.String";
					break;
				}
			}
		});
	};
}


// Fix the JsonHandler for the ETag issue, especially with security data
var origJsonReadFunc;

// Our fix for bad ETags
function fixJsonHandlerForEtag() {
	origJsonReadFunc = OData.jsonHandler.read;
	OData.jsonHandler.read = function(response, context) {
		var result = origJsonReadFunc.call(OData.jsonHandler, response, context);

		var data = response.data, results = data.results;
		if (results) {
			results.forEach(function(entity) {
				if (entity.__metadata.etag) {
					var etag = entity.__metadata.etag,
						firstIndex = etag.indexOf("'"),
						lastIndex = etag.lastIndexOf("'"),
						coreEtag = "";
					for (var i = firstIndex + 1; i < lastIndex; i++) {
						var char = etag[i];
						coreEtag += char;
						if (char == "'") {
							coreEtag += "'";
							if (etag[i + 1] == "'") {
								i++;
							}
						}
					}
					// Missing from the original TechNet article.  Only do the fix if
					// the remote service actually sent an ETag
					if (firstIndex > 0) {
						entity.__metadata.etag = etag.substr(0, firstIndex + 1) + coreEtag + etag.substr(lastIndex);
					}
				}
			});
		}

		return result;
	};
}
