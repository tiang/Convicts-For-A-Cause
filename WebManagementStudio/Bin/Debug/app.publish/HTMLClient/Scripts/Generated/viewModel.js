/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function BrowsePaymentRecords(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePaymentRecords screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PaymentRecords" type="msls.VisualCollection" elementType="msls.application.PaymentRecord">
        /// Gets the paymentRecords for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePaymentRecords.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePaymentRecords", parameters);
    }

    function AddEditPaymentRecord(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPaymentRecord screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PaymentRecord" type="msls.application.PaymentRecord">
        /// Gets or sets the paymentRecord for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPaymentRecord.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPaymentRecord", parameters);
    }

    function BrowseConvicts(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseConvicts screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Convicts" type="msls.VisualCollection" elementType="msls.application.Convict">
        /// Gets the convicts for this screen.
        /// </field>
        /// <field name="SearchConvictName" type="String">
        /// Gets or sets the searchConvictName for this screen.
        /// </field>
        /// <field name="SearchConvictEmail" type="String">
        /// Gets or sets the searchConvictEmail for this screen.
        /// </field>
        /// <field name="SearchConvictCode" type="String">
        /// Gets or sets the searchConvictCode for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseConvicts.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseConvicts", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Convicts" type="msls.VisualCollection" elementType="msls.application.Convict">
        /// Gets the convicts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function BrowseTeams(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTeams screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Teams" type="msls.VisualCollection" elementType="msls.application.Team">
        /// Gets the teams for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTeams.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTeams", parameters);
    }

    function AddEditConvict(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditConvict screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Convict" type="msls.application.Convict">
        /// Gets or sets the convict for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditConvict.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditConvict", parameters);
    }

    msls._addToNamespace("msls.application", {

        BrowsePaymentRecords: $defineScreen(BrowsePaymentRecords, [
            {
                name: "PaymentRecords", kind: "collection", elementType: lightSwitchApplication.PaymentRecord,
                createQuery: function () {
                    return this.dataWorkspace.ConvictsData.PaymentRecords;
                }
            }
        ], [
        ]),

        AddEditPaymentRecord: $defineScreen(AddEditPaymentRecord, [
            { name: "PaymentRecord", kind: "local", type: lightSwitchApplication.PaymentRecord }
        ], [
        ]),

        BrowseConvicts: $defineScreen(BrowseConvicts, [
            {
                name: "Convicts", kind: "collection", elementType: lightSwitchApplication.Convict,
                createQuery: function (ConvictNameParameter, ConvictEmailParameter, ConvictCodeParameter) {
                    return this.dataWorkspace.ConvictsData.Convicts.filter("(" + ((ConvictNameParameter === undefined || ConvictNameParameter === null) ? "true" : "substringof(" + $toODataString(ConvictNameParameter, "String?") + ", Name)") + " and " + ((ConvictCodeParameter === undefined || ConvictCodeParameter === null) ? "true" : "substringof(" + $toODataString(ConvictCodeParameter, "String?") + ", ConvictCode)") + ") and " + ((ConvictEmailParameter === undefined || ConvictEmailParameter === null) ? "true" : "substringof(" + $toODataString(ConvictEmailParameter, "String?") + ", Email)") + "");
                }
            },
            { name: "SearchConvictName", kind: "local", type: String },
            { name: "SearchConvictEmail", kind: "local", type: String },
            { name: "SearchConvictCode", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
            {
                name: "Convicts", kind: "collection", elementType: lightSwitchApplication.Convict,
                createQuery: function () {
                    return this.dataWorkspace.ConvictsData.Convicts;
                }
            }
        ], [
        ]),

        BrowseTeams: $defineScreen(BrowseTeams, [
            {
                name: "Teams", kind: "collection", elementType: lightSwitchApplication.Team,
                createQuery: function () {
                    return this.dataWorkspace.ConvictsData.Teams;
                }
            }
        ], [
        ]),

        AddEditConvict: $defineScreen(AddEditConvict, [
            { name: "Convict", kind: "local", type: lightSwitchApplication.Convict }
        ], [
        ]),

        showBrowsePaymentRecords: $defineShowScreen(function showBrowsePaymentRecords(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePaymentRecords screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePaymentRecords", parameters, options);
        }),

        showAddEditPaymentRecord: $defineShowScreen(function showAddEditPaymentRecord(PaymentRecord, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPaymentRecord screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPaymentRecord", parameters, options);
        }),

        showBrowseConvicts: $defineShowScreen(function showBrowseConvicts(SearchConvictName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseConvicts screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseConvicts", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showBrowseTeams: $defineShowScreen(function showBrowseTeams(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTeams screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTeams", parameters, options);
        }),

        showAddEditConvict: $defineShowScreen(function showAddEditConvict(Convict, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditConvict screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditConvict", parameters, options);
        })

    });

}(msls.application));
