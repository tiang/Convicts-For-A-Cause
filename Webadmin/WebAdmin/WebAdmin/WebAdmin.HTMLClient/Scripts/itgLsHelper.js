/// <reference path="winjs-1.0.js" />
/// <reference path="msls-2.0.0-vsdoc.js" />
/// <reference path="msls-2.0.0.js" />

// *****************************************************************************************************
// *****************************************************************************************************
// LightSwitch 2013 Helper Functions/Methods/Whatever
//
// init
//		initializes the system: gets user name & permissions, imports menus
// 
// passwordValidator
//		setup a visual field for password entry and validation
//
// confirmPasswordValidator
//		setup a visual field for password entry and validate against the password field
//
// screens
//		Returns an array of your screens, name, display name and methods to show them
//
// changeButtonIcon
//		changes the icon class of a button
// 
// colorPicker
//		setup a visual field as a color picker
// 
// iconPicker
//		setup a visual field as an icon picker
//
// screenPicker
//		setup a visual field as a screen picker
//
// userHasPermission
//		does the current user have the permission assignment
//
// userHasRole
//		does the current user have the role assignment
// 
// tileMenu
//		setup a screen/container for a predefined MetroUI type tile menu
//
// exportTileMenusToJson
//		export/return a JSON object representing all the tile menus
//
// importJsonTileMenus
//		import a JSON object representing a set of menus and their tiles
//
// importIconClassList
//		import a csv list of icon class list
//
// urlParameterByName
//		get a URL parameter by its name
//
// fixMetadataHandlerForEtag
//		a fix for a known ETag issue
//
// fixJsonHandlerForEtag
//		a fix for a known ETag issue
//
// internalHelpers
//		bunch of functions for internal use
//		perhaps useful for learning new stuff?
// 
// *****************************************************************************************************
// *****************************************************************************************************


var itgLsHelper = (function () {

	// Persist our screen names/methods
	var screenArray = [];

	// Persist our tile menus
	var menuArray = {};

	// Persist the current user information
	var userName = "";
	var userFullName = "";
	var userPermissions = [];
	var userRoles = [];

	// Toggle... are we using database driven menus or JSON
	// If a menu is imported, this gets flipped to false
	var dataBasedMenus = true;

	// Temp storage for binding
	var tempContentItem;
	var readyPropertyName;


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Initialize the app: permissions, user info, menu, etc
	// *****************************************************************************************************
	// *****************************************************************************************************
	var init = (function (options) {

		/// <summary>Initialize the app: user info, permissions, menus
		/// readyPropertyName: string, required
		/// contentItem: contentItem, required
		/// element: element, required
		/// menuName: string, required
		/// jsonMenus: jsonObject, optional
		/// excludedScreens: array, optional
		///</summary>
		/// <param name="options">{ readyPropertyName: "?", 
		/// contentItem: contentItem, 
		/// element: element,
		/// menuName: "?",
		/// jsonMenus: myJsonMenu,
		/// excludedScreens: [""] }
		/// </param>

		// set our local variables so we can use later
		tempContentItem = options.contentItem;
		readyPropertyName = options.readyPropertyName;

		// Watch our ready property
		options.contentItem.dataBind("screen." + readyPropertyName, function (newValue) {
			if (newValue) {
				// When the ready bit is flipped, show our tile menu
				itgLsHelper.tileMenu(options.element, options.menuName);
			}
		});

		// Load the menus into the system, only have to do it once in the init
		if (options.jsonMenus) {
			importJsonTileMenus(options.jsonMenus);
		}

		// Get our user info
		internalHelpers.getUserInfo();

		// Go load our screen list
		screens(options.excludedScreens);

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Our password validator
	// *****************************************************************************************************
	// *****************************************************************************************************
	var passwordValidator = (function (element, passwordContentItem, confirmContentItem) {

		/// <summary>Initialize an Element for password entry and validation</summary>
		/// <param name="element">Element for the password input</param>
		/// <param name="passwordContentItem">ContentItem of our password field</param>
		/// <param name="confirmContentItem">Optional - ContentItem of our confirm password field</param>

		// Lets make sure passwords are not viewable
		internalHelpers.changeInputToPassword(element);

		// Bind to the value property of our password field, so we can implement validation 
		passwordContentItem.dataBind("value", function (pwdValue) {

			// Go validate the password, returns true/false
			var validated = internalHelpers.validatePassword(passwordContentItem);

			// If we were passed a confirmPassword field and the password passed validation
			if (confirmContentItem != undefined && validated) {

				// Force the validation of the confirmPassword field
				// We've put it here also in case things get out of sequence
				internalHelpers.validateConfirmPassword(confirmContentItem, pwdValue);

			}

		});

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Our confirm password validator
	// *****************************************************************************************************
	// *****************************************************************************************************
	var confirmPasswordValidator = (function (element, confirmContentItem, passwordContentItem) {

		/// <summary>Initialize an Element as a password confirmation</summary>
		/// <param name="element">Element for the confirm password input</param>
		/// <param name="confirmContentItem">ContentItem of our confirm password field</param>
		/// <param name="passwordContentItem">ContentItem of our password field</param>

		// Lets make sure passwords are not viewable
		internalHelpers.changeInputToPassword(element);

		// Bind to the value property of our confirmPassword field, for our custom validation
		confirmContentItem.dataBind("value", function () {

			// Go run the validation test, we also pass thru the value we are testing against
			internalHelpers.validateConfirmPassword(confirmContentItem, passwordContentItem.value);

		});

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Create a list of all the application screens
	// We'll stuff into a variable to avoid performance hits
	// *****************************************************************************************************
	// *****************************************************************************************************
	var screens = (function (screensToExclude, forceRefresh) {

		/// <summary>Returns and array of screen names and methods to show them</summary>
		/// <param name="screensToExclude">Optional - Array of screen names to exclude</param>
		/// <param name="forceRefresh">Pass true if you want to force a refresh of the list</param>

		// If our internal array is empty, lets fill it, or if we were told to force a refresh
		if (screenArray.length == 0 || forceRefresh) {

			// Loop over each function within our app space
			$.each(window.myapp, function (funcName) {

				try {

					// Look for "show" screen functions
					if (funcName.slice(0, 4) === "show") {

						// Get the actual name of the screen object
						var name = funcName.substring(4);

						// Do we need to create the details
						if (window.myapp[name].prototype.details == undefined) {

							// Create the details
							window.myapp[name].prototype.constructor([], undefined);
						}

						// Last check for wildcard exclusion
						if (!internalHelpers.valueInArray(name, screensToExclude)) {
							
							// Push the important parts into our global list so we only have to do this on startup
							screenArray.push({
								Name: funcName,
								stringValue: window.myapp[name].prototype.details.displayName,
								value: "myapp." + funcName + "();"
							});
							
						}
					}
				} catch (e) {
					// Do nothing... 
				}
			});

			// Sort our list
			screenArray.sort(internalHelpers.sortByName);

		}

		// Return the array of screen listings
		return screenArray;
	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Change the icon of a button
	//		element, currentIconClass, newIconClass
	// *****************************************************************************************************
	// *****************************************************************************************************
	var changeButtonIcon = (function (element, currentIconClass, newIconClass) {

		/// <summary>Change the icon of a button</summary>
		/// <param name="element">The element that displays our icon</param>
		/// <param name="currentIconClass">Class name of the current icon</param>
		/// <param name="newIconClass">Class name of the new icon</param>

		$(element).find(".ui-icon")
			.removeClass(currentIconClass)
			.addClass(newIconClass);

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Our color picker
	// *****************************************************************************************************
	// *****************************************************************************************************
	var colorPicker = (function (element, contentItem) {

		/// <summary>Initialize an Element to be a color picker</summary>
		/// <param name="element">The element you want to be the picker</param>
		/// <param name="contentItem">ContentItem of the field</param>

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
				change: function (newValue) {
					var newColor = null;
					if (newValue) {
						newColor = newValue.toString();
					}
					contentItem.value = newColor;
				}
			});

		}, 0);

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Our icon picker
	// *****************************************************************************************************
	// *****************************************************************************************************
	var iconPicker = (function (element, contentItem) {

		/// <summary>Initialize an Element to be an icon picker</summary>
		/// <param name="element">The element you want to be the picker</param>
		/// <param name="contentItem">ContentItem of the field</param>

		var itemTemplate = $("<div class='metro icon' style='padding-right:5px;'></div>");
		var iconTemplate = $("<i></i>");
		iconTemplate.appendTo($(itemTemplate));
		itemTemplate.appendTo($(element));

		contentItem.dataBind("data.Name", function (newValue) {
			iconTemplate[0].className = "";
			iconTemplate.addClass(newValue);
		});
	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Our screen picker
	// *****************************************************************************************************
	// *****************************************************************************************************
	var screenPicker = (function (contentItem, required) {

		/// <summary>Turn an existing field to a screen dropdown picker</summary>
		/// <param name="contentItem">ContentItem of the field</param>
		/// <param name="required">Allow a blank selection?</param>

		// If our screens have not been populated, go do it
		if (screenArray.length === 0) screens();
		var values = screenArray;

		// if not a required field, allow a blank
		if (!required) {
			values.splice(0, 0, { value: "", stringValue: "" });
		}

		// Replace the existing choiceList with our screens
		contentItem.choiceList = values;

	});



	// *****************************************************************************************************
	// *****************************************************************************************************
	// Create a nice MetroUI (ModernUI) Tile based menu
	// If a menu is not loaded, then we will hit the database for it
	// *****************************************************************************************************
	// *****************************************************************************************************
	var tileMenu = (function (element, menuName) {

		/// <summary> Initialize a MetroUI Tile screen</summary>
		/// <param name="element">The element that will become the container for the tiles</param>
		/// <param name="menuName">Name of the menu to build</param>

		// Has the menu for this screen already been downloaded
		if (typeof menuArray[menuName] === "function" || menuArray[menuName] == undefined && dataBasedMenus) {

			// It has not, so lets go get it 
			window.myapp.activeDataWorkspace.ApplicationData.TilesForMenu(menuName)
				.expand("Icon")
				.execute()
				.then(function (success) {

					// Save the data to our internal object
					menuArray[menuName] = internalHelpers.tileMenuToJsObject(menuName, success.results);

					// Go add the tiles to the container
					internalHelpers.addTilesToContainer(element, menuArray[menuName].menuTiles);
				});
		} else {

			// Menu has already been downloaded, so just add the tiles to the container
			internalHelpers.addTilesToContainer(element, menuArray[menuName].menuTiles);
		}

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Turn all tile menus into a JSON Object
	// *****************************************************************************************************
	// *****************************************************************************************************
	var exportTileMenusToJson = (function (contentItem) {

		if (dataBasedMenus) {
			// Go grab our menus
			window.myapp.activeDataWorkspace.ApplicationData.Menus.load().then(function (success) {

				// Create some utility variables
				var counter = success.results.length;

				// Loop over each menu entity
				success.results.forEach(function (menu) {

					// Get all the tiles for the individual menu
					window.myapp.activeDataWorkspace.ApplicationData.TilesForMenu(menu.Name).expand("Icon").execute().then(function (tiles) {

						// Make sure they are added to our global first
						menuArray[menu.Name] = internalHelpers.tileMenuToJsObject(menu.Name, tiles.results);

						// If a contentItem was passed, stuff it with a JSON String
						if (counter-- == 1 && contentItem) {
							contentItem.value = JSON.stringify(menuArray);
						}

					});

				});

			});
		} else {

			// Since we are not database driven, just return the menu array
			contentItem.value = JSON.stringify(menuArray);

		}

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Import an array of javascript objects for our tile menus
	// Limited error checking at this point
	// *****************************************************************************************************
	// *****************************************************************************************************
	var importJsonTileMenus = (function (jsonArray) {

		/// <summary>Import a JSON representation of a tileMenu array
		/// Use the exportTileMenusToJson for an example or usage
		/// </summary>
		/// <param name="jsObject">Array of JavaScript Object(s) holding our tile data</param>

		if (jsonArray) {
			menuArray = jsonArray;
			dataBasedMenus = false;
		}

	});



	// *****************************************************************************************************
	// *****************************************************************************************************
	// Simple utility to get URL Query Parameters
	// *****************************************************************************************************
	// *****************************************************************************************************
	var getUrlParameterByName = (function (name) {

		/// <summary>Get URL Parameter by its name</summary>
		/// <param name="name">Name of the parameter to fetch</param>

		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regexS = "[\\?&]" + name + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(window.location.search);
		if (results == null)
			return "";
		else
			return decodeURIComponent(results[1].replace(/\+/g, " "));
	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Import a css class list of icons
	// *****************************************************************************************************
	// *****************************************************************************************************
	var importIconClassList = (function (csvList) {

		// Do we have at least one line?
		if (csvList != null) {

			// split up the pasted list into an array
			var listArray = csvList.split("\n");

			// loop over the array
			for (var i = 0; i < listArray.length; i++) {

				// if the value is not blank, create a new entity
				if (listArray[i] != "") {
					var newIcon = new window.myapp.Icon();
					newIcon.Name = listArray[i];
				}
			}
		}

		// commit all our additions to the database, batch mode.
		window.myapp.commitChanges();

	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Low level fix for issues around ETag missing in properties
	// You can review this fix from a Microsoft TechNet article at:
	// http://social.technet.microsoft.com/wiki/contents/articles/20718.the-etag-value-in-the-request-header-does-not-match-with-the-current-etag-of-the-object.aspx
	// I have done a few changes from the original article so that it works
	// across all feeds.  Original article missed an important piece and is noted 
	// in the code below
	// *****************************************************************************************************
	// *****************************************************************************************************


	// =====================================================================================================
	// Our fix for the bad ETags
	// =====================================================================================================
	var fixMetadataHandlerForEtag = (function () {
		window.origMetadataReadFunc = window.OData.metadataHandler.read;
		window.OData.metadataHandler.read = function (response, context) {
			origMetadataReadFunc.call(window.OData.metadataHandler, response, context);
			var data = response.data,
				schema = data && data.dataServices && data.dataServices.schema && data.dataServices.schema[0],
				entities = schema && schema.entityType || [];
			entities.forEach(function (entity) {
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
	});


	// =====================================================================================================
	// Our fix for bad ETags
	// =====================================================================================================
	var fixJsonHandlerForEtag = (function () {
		window.origJsonReadFunc = window.OData.jsonHandler.read;
		window.OData.jsonHandler.read = function (response, context) {
			var result = origJsonReadFunc.call(window.OData.jsonHandler, response, context);

			var data = response.data, results = data.results;
			if (results) {
				results.forEach(function (entity) {
					if (entity.__metadata.etag) {
						var etag = entity.__metadata.etag,
							firstIndex = etag.indexOf("'"),
							lastIndex = etag.lastIndexOf("'"),
							coreEtag = "";
						for (var i = firstIndex + 1; i < lastIndex; i++) {
							var chr = etag[i];
							coreEtag += chr;
							if (chr == "'") {
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
	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Does the user have the permission
	// *****************************************************************************************************
	// *****************************************************************************************************
	var userHasPermission = (function (permissionId) {
		return userPermissions[permissionId];
	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Does the user have the role assignment
	// *****************************************************************************************************
	// *****************************************************************************************************
	var userHasRole = (function (roleName) {
		return userRoles[roleName];
	});


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Internal helper functions
	// *****************************************************************************************************
	// *****************************************************************************************************
	var internalHelpers = {


		// =================================================================================================
		// Validate our password field (contentItem)
		// If it does not pass, we'll show the native LightSwitch error 
		// =================================================================================================
		validatePassword: function (contentItem) {
			var valid = true;

			// Make sure any validation errors will be displayed
			contentItem._alwaysShowValidationResults = true;

			// Get our data for the pwd
			var pwdValue = contentItem.value;

			// Does the field have data, if not bypass
			if (pwdValue != undefined) {

				// Check to see if we have a valid password
				if (!internalHelpers.isValidPassword(pwdValue)) {

					// The password is not valid, add a validation exception to the contentItem
					contentItem.validationResults = [new msls.ValidationResult(contentItem, "Not a valid password!")];
					valid = false;
				}

					// else validation passed!  So empty the exception queue
				else if (contentItem.validationResults.length > 0) {
					contentItem.validationResults = [];
				}
			}
			return valid;
		},


		// =================================================================================================
		// Validate our confirmPassword field (contentItem)
		// We really only care if it matches the password, if not, show the error
		// =================================================================================================
		validateConfirmPassword: function (contentItem, pwdValue) {
			var valid = true;

			// Make sure any validation errors will be displayed
			contentItem._alwaysShowValidationResults = true;

			// Get the value to compare with the pwd
			var confirmPwdValue = contentItem.value;

			// Does the field have data
			if (confirmPwdValue != undefined) {

				// Check to see if the values do not match
				if (confirmPwdValue !== pwdValue) {

					// Not a match, so display a validation error
					contentItem.validationResults = [new msls.ValidationResult(contentItem, "Passwords do not match!")];
					valid = false;
				}

					// else validation passed!  So empty the exception queue
				else if (contentItem.validationResults.length > 0) {
					contentItem.validationResults = [];
				}
			}

			return valid;
		},


		// =================================================================================================
		// Self explanatory, change the input element to be of a password type
		// Which will hide the characters, good for any data you want to hide
		// =================================================================================================
		changeInputToPassword: function (element) {
			$(element).find(".id-element").attr("type", "password");
		},


		// =================================================================================================
		// Simple function to test whether a string fits our password requirements
		// =================================================================================================
		isValidPassword: function (pwd) {

			// Yes... this can be one big ass RegEx... but at the cost of readability
			// So I've purposely broken it up so folks can understand it a bit more

			// Should be alpha numaric with at least one special character.
			if (!(null !== pwd.match(/[@+#$]/))) return false;

			// No spaces allowed
			if (!(null !== pwd.match(/^\S+$/))) return false;

			// Should be minimum 8 chars and max 20 chars.
			if (!(null !== pwd.match(/^.{8,20}$/))) return false;

			// No repeat of a character more than 2 times. 
			if (!(null === pwd.match(/(.)(.*\1){2}/))) return false;

			// ~,'.:;^| are not allowed
			if (!(null !== pwd.match(/^[^~,'.:;^|]+$/))) return false;

			return true;
		},


		// =================================================================================================
		// Create a simple tile based on passed options
		// This version works with styles so as to have the most flexibility/customization
		// This is the one we are currently using
		// =================================================================================================
		createSimpleTileHtml: function (tileData) {
			var tile;

			// Base tile = ID, Size, Color, onClick
			tile = "<div id='" + tileData.Id + "' class='tile " + tileData.Size + "' style='background-color: " + tileData.TileColor + "' onclick=\"" + tileData.OnClick + ";\">";

			// Was an icon specified? Icon name and Color
			if (tileData.Icon) {
				var iconBgColor = tileData.IconBgColor != undefined ? " background-color:" + tileData.IconBgColor + ";" : "";
				var iconFgColor = tileData.IconFgColor != undefined ? " color:" + tileData.IconFgColor + ";" : "";
				tile += "<div class='tile-content icon'><i class='" + tileData.Icon + "' style='" + iconBgColor + iconFgColor + "'/></div>";
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
		},


		// =================================================================================================
		// Add the tiles to the passed container
		// =================================================================================================
		addTilesToContainer: function (container, menuTiles) {

			// Add a class to our element to identify it as a metro container
			$(container).addClass("metro-container metro");

			// Create the tiles and add to our container
			$.each(menuTiles, function (index, tileData) {

				// Temp to hold our tile html
				var tempTile;

				// Check permissions before adding the tile
				if (tileData.PermissionId === null || userPermissions[tileData.PermissionId]) {

					// What type of tile to create?  Add additional as needed
					switch (tileData.Type) {
						case "simple":
							tempTile = internalHelpers.createSimpleTileHtml(tileData);
							break;
						default:
							tempTile = internalHelpers.createSimpleTileHtml(tileData);
					}

					if (tempTile) {
						// Append the tile to our container, repeat as necessary
						$(tempTile).appendTo($(container));
					}
				}
			});

		},


		// =================================================================================================
		// Turn a set of entities to a more manageable JavaScript Object
		// =================================================================================================
		tileMenuToJsObject: function (menuName, menuTiles) {

			var tileArray = [];

			// Loop over all the entities and push to our temp array
			menuTiles.forEach(function (tile) {
				tileArray.push({
					Order: tile.Order,
					Name: tile.Name,
					TileColor: tile.TileColor,
					Type: tile.Type,
					Size: tile.Size,
					OnClick: tile.OnClick,
					Status: tile.Status,
					StatusBgColor: tile.StatusBgColor,
					StatusFgColor: tile.StatusFgColor,
					Badge: tile.Badge,
					BadgeBgColor: tile.BadgeBgColor,
					BadgeFgColor: tile.BadgeFgColor,
					Icon: tile.Icon === undefined ? null : tile.Icon.Name,
					IconBgColor: tile.IconBgColor,
					IconFgColor: tile.IconFgColor,
					PermissionId: tile.PermissionId
				});
			});

			// Return our JavaScript Object
			return { menuName: menuName, menuTiles: tileArray };

		},


		// =================================================================================================
		// Get the current logged in user info, userName, FullName, permissions
		// =================================================================================================
		getUserInfo: function () {

			// Call our query to get the userData of the logged in user
			window.myapp.activeDataWorkspace.LsSecurityData
				.CurrentUser()
				.execute()
				.then(function (success) {

					// On success, stuff our local variables
					userName = success.results[0].UserName;
					userFullName = success.results[0].FullName;

					// Now go get the permissions for this user
					internalHelpers.getUserPermissions(userName);
				});
		},



		// =================================================================================================
		// Get the permissions for the passed in userName
		// =================================================================================================
		getUserPermissions: function (whatUserName) {

			// Queue so we know when all the queries are done
			var workQueue = [];

			// Reset our internal userPermissions/userRoles variable
			userPermissions = [];
			userRoles = [];

			// Go get all the role assignments for the current user
			window.myapp.activeDataWorkspace.LsSecurityData
				.RoleAssignments
				.filter("UserName eq " + msls._toODataString(whatUserName, ":String"))
				.execute()
				.then(function (success) {
					return success.results;
				}).then(function (roleAssignments) {

					// if no role assignments, set our ready flag
					if (roleAssignments.length == 0) {
						tempContentItem.screen.details.properties[readyPropertyName].value = true;
					} else {

						// stuff our workQueue so we can track the query process
						roleAssignments.forEach(function (roleAssignment) {
							workQueue.push(roleAssignment.RoleName);

							// Add role
							userRoles[roleAssignment.RoleName] = true;
						});

						// Loop over the roleAssignments
						roleAssignments.forEach(function (roleAssignment) {

							// Get the permissions associated with each role
							window.myapp.activeDataWorkspace.LsSecurityData
								.RolePermissions1
								.filter("RoleName eq " + msls._toODataString(roleAssignment.RoleName, ":String"))
								.execute()
								.then(function (success) {

									// Add each permission to our array, use the hash naming for easy/quick lookups
									success.results.forEach(function (rolePermission) {
										userPermissions[rolePermission.PermissionId] = true;
									});

									// Remove this item from our work queue
									workQueue.pop(roleAssignment.RoleName);

									// If the queue is empty after our pop, set our ready flag
									if (workQueue.length === 0) {
										tempContentItem.screen.details.properties[readyPropertyName].value = true;
									}
								});
						});
					}
				});

		},

		// =================================================================================================
		// Sort by name, ascending - used in our array sort for the list of screens
		// =================================================================================================
		sortByName: function (a, b) {
			var aName = a.stringValue.toLowerCase();
			var bName = b.stringValue.toLowerCase();
			return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
		},

		// =================================================================================================
		// Does any element in an array contain our string
		// =================================================================================================
		valueInArray: function (value, a) {
			var result = false;

			if (a) {
				for (var i = 0; i < a.length; i++) {
					if (value.indexOf(a[i]) !== -1) {
						result = true;
						break;
					}
				}
			}
			return result;
		}




	};


	// *****************************************************************************************************
	// *****************************************************************************************************
	// Expose our public functions/methods
	// *****************************************************************************************************
	// *****************************************************************************************************
	return {
		init: init,
		passwordValidator: passwordValidator,
		confirmPasswordValidator: confirmPasswordValidator,
		screens: screens,
		changeButtonIcon: changeButtonIcon,
		colorPicker: colorPicker,
		iconPicker: iconPicker,
		screenPicker: screenPicker,
		userHasPermission: userHasPermission,
		userHasRole: userHasRole,
		tileMenu: tileMenu,
		exportTileMenusToJson: exportTileMenusToJson,
		importJsonTileMenus: importJsonTileMenus,
		importIconClassList: importIconClassList,
		getUrlParameter: getUrlParameterByName,
		fixMetadataHandlerForEtag: fixMetadataHandlerForEtag,
		fixJsonHandlerForEtag: fixJsonHandlerForEtag,
		userName: userName,
		userFullName: userFullName,
		userPermissions: userPermissions
	};

})();



/*
==============================================================================
==============================================================================
==============================================================================
Structure of the JSON menu object

{ 
"Security": { "menuName": "Security", "menuTiles": [{ 
		"Order": 2, 
		"Name": "Users",
		"TileColor": "#1fb800", 
		"Type": "simple", 
		"Size": "double", 
		"OnClick": "myapp.showUserRegistrationsBrowse();", 
		"Status": "User Registrations", 
		"StatusBgColor": null, 
		"StatusFgColor": null, 
		"Badge": null, 
		"BadgeBgColor": null, 
		"BadgeFgColor": null, 
		"Icon": "icon-address-book", 
		"IconBgColor": null, 
		"IconFgColor": null, 
		"PermissionId": null 
	}]},
"DataImport": { "menuName": "DataImport", "menuTiles": [{ 
		"Order": 1, 
		"Name": "Import Sites",
		"TileColor": "#4663c3", 
		"Type": "simple", 
		"Size": "default", 
		"OnClick": null, 
		"Status": "Import Sites", 
		"StatusBgColor": null, 
		"StatusFgColor": null, 
		"Badge": null, 
		"BadgeBgColor": null, 
		"BadgeFgColor": null, 
		"Icon": "icon-target-2", 
		"IconBgColor": null, 
		"IconFgColor": null, 
		"PermissionId": null 
	}]}
}	


==============================================================================
==============================================================================
==============================================================================
*/

