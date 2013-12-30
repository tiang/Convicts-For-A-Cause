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
        })

    });

}(msls.application));
