/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditConvict.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditConvict
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.AddEditConvict,
            value: lightSwitchApplication.AddEditConvict
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.AddEditConvict,
            value: lightSwitchApplication.Convict
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.Convict,
            value: lightSwitchApplication.Convict
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.Convict,
            value: String
        },
        TeamCode: {
            _$class: msls.ContentItem,
            _$name: "TeamCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.Convict,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.Convict,
            value: lightSwitchApplication.Convict
        },
        ConvictCode: {
            _$class: msls.ContentItem,
            _$name: "ConvictCode",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.Convict,
            value: String
        },
        TeamType: {
            _$class: msls.ContentItem,
            _$name: "TeamType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.Convict,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.AddEditConvict,
            value: lightSwitchApplication.AddEditConvict
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.AddEditConvict,
            value: String
        },
        ProfileURL: {
            _$class: msls.ContentItem,
            _$name: "ProfileURL",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.AddEditConvict,
            value: String
        },
        Total: {
            _$class: msls.ContentItem,
            _$name: "Total",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditConvict,
            data: lightSwitchApplication.AddEditConvict,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditConvict
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditConvict, {
        /// <field>
        /// Called when a new AddEditConvict screen is created.
        /// <br/>created(msls.application.AddEditConvict screen)
        /// </field>
        created: [lightSwitchApplication.AddEditConvict],
        /// <field>
        /// Called before changes on an active AddEditConvict screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditConvict screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditConvict],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("Name"); }],
        /// <field>
        /// Called after the TeamCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("TeamCode"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("right"); }],
        /// <field>
        /// Called after the ConvictCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("ConvictCode"); }],
        /// <field>
        /// Called after the TeamType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamType_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("TeamType"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("Group"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("Email"); }],
        /// <field>
        /// Called after the ProfileURL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfileURL_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("ProfileURL"); }],
        /// <field>
        /// Called after the Total content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_postRender: [$element, function () { return new lightSwitchApplication.AddEditConvict().findContentItem("Total"); }]
    });

    lightSwitchApplication.AddEditPaymentRecord.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPaymentRecord
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.AddEditPaymentRecord,
            value: lightSwitchApplication.AddEditPaymentRecord
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.AddEditPaymentRecord,
            value: lightSwitchApplication.PaymentRecord
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: lightSwitchApplication.PaymentRecord
        },
        DonorName: {
            _$class: msls.ContentItem,
            _$name: "DonorName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        PaymentType: {
            _$class: msls.ContentItem,
            _$name: "PaymentType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        TeamCode: {
            _$class: msls.ContentItem,
            _$name: "TeamCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: lightSwitchApplication.PaymentRecord
        },
        Anonymous: {
            _$class: msls.ContentItem,
            _$name: "Anonymous",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: Boolean
        },
        Message: {
            _$class: msls.ContentItem,
            _$name: "Message",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        amount: {
            _$class: msls.ContentItem,
            _$name: "amount",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.PaymentRecord,
            value: Number
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.AddEditPaymentRecord,
            value: lightSwitchApplication.AddEditPaymentRecord
        },
        ConvictEmail: {
            _$class: msls.ContentItem,
            _$name: "ConvictEmail",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.AddEditPaymentRecord,
            value: String
        },
        PayerEmail: {
            _$class: msls.ContentItem,
            _$name: "PayerEmail",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditPaymentRecord,
            data: lightSwitchApplication.AddEditPaymentRecord,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPaymentRecord
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPaymentRecord, {
        /// <field>
        /// Called when a new AddEditPaymentRecord screen is created.
        /// <br/>created(msls.application.AddEditPaymentRecord screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPaymentRecord],
        /// <field>
        /// Called before changes on an active AddEditPaymentRecord screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPaymentRecord screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPaymentRecord],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("left"); }],
        /// <field>
        /// Called after the DonorName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DonorName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("DonorName"); }],
        /// <field>
        /// Called after the PaymentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentType_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("PaymentType"); }],
        /// <field>
        /// Called after the TeamCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("TeamCode"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("right"); }],
        /// <field>
        /// Called after the Anonymous content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Anonymous_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("Anonymous"); }],
        /// <field>
        /// Called after the Message content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Message_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("Message"); }],
        /// <field>
        /// Called after the amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        amount_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("amount"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("Group"); }],
        /// <field>
        /// Called after the ConvictEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictEmail_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("ConvictEmail"); }],
        /// <field>
        /// Called after the PayerEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PayerEmail_postRender: [$element, function () { return new lightSwitchApplication.AddEditPaymentRecord().findContentItem("PayerEmail"); }]
    });

    lightSwitchApplication.BrowseConvicts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseConvicts
        },
        Command: {
            _$class: msls.ContentItem,
            _$name: "Command",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: lightSwitchApplication.BrowseConvicts
        },
        Group4: {
            _$class: msls.ContentItem,
            _$name: "Group4",
            _$parentName: "Command",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: lightSwitchApplication.BrowseConvicts
        },
        Search1: {
            _$class: msls.ContentItem,
            _$name: "Search1",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseConvicts
        },
        ShowGroup2: {
            _$class: msls.ContentItem,
            _$name: "ShowGroup2",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseConvicts
        },
        ShowGroup3: {
            _$class: msls.ContentItem,
            _$name: "ShowGroup3",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseConvicts
        },
        ShowAddEditConvict: {
            _$class: msls.ContentItem,
            _$name: "ShowAddEditConvict",
            _$parentName: "Group4",
            screen: lightSwitchApplication.BrowseConvicts
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Command",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: lightSwitchApplication.BrowseConvicts
        },
        Convict: {
            _$class: msls.ContentItem,
            _$name: "Convict",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseConvicts,
                _$entry: {
                    elementType: lightSwitchApplication.Convict
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Convict",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.Convict,
            value: lightSwitchApplication.Convict
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.Convict,
            value: String
        },
        ConvictCode: {
            _$class: msls.ContentItem,
            _$name: "ConvictCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.Convict,
            value: String
        },
        Total: {
            _$class: msls.ContentItem,
            _$name: "Total",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.Convict,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseConvicts
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: lightSwitchApplication.BrowseConvicts
        },
        SearchConvictName1: {
            _$class: msls.ContentItem,
            _$name: "SearchConvictName1",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: lightSwitchApplication.BrowseConvicts
        },
        SearchConvictEmail1: {
            _$class: msls.ContentItem,
            _$name: "SearchConvictEmail1",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: String
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: lightSwitchApplication.BrowseConvicts
        },
        SearchConvictCode1: {
            _$class: msls.ContentItem,
            _$name: "SearchConvictCode1",
            _$parentName: "Group3",
            screen: lightSwitchApplication.BrowseConvicts,
            data: lightSwitchApplication.BrowseConvicts,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseConvicts, {
        /// <field>
        /// Called when a new BrowseConvicts screen is created.
        /// <br/>created(msls.application.BrowseConvicts screen)
        /// </field>
        created: [lightSwitchApplication.BrowseConvicts],
        /// <field>
        /// Called before changes on an active BrowseConvicts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseConvicts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseConvicts],
        /// <field>
        /// Called after the Command content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Command_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Command"); }],
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Group4"); }],
        /// <field>
        /// Called after the Search1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search1_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Search1"); }],
        /// <field>
        /// Called after the ShowGroup2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowGroup2_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("ShowGroup2"); }],
        /// <field>
        /// Called after the ShowGroup3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowGroup3_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("ShowGroup3"); }],
        /// <field>
        /// Called after the ShowAddEditConvict content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowAddEditConvict_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("ShowAddEditConvict"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Convict content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Convict_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Convict"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Name"); }],
        /// <field>
        /// Called after the ConvictCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("ConvictCode"); }],
        /// <field>
        /// Called after the Total content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Total"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Group"); }],
        /// <field>
        /// Called after the SearchConvictName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchConvictName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("SearchConvictName1"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Group2"); }],
        /// <field>
        /// Called after the SearchConvictEmail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchConvictEmail1_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("SearchConvictEmail1"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("Group3"); }],
        /// <field>
        /// Called after the SearchConvictCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchConvictCode1_postRender: [$element, function () { return new lightSwitchApplication.BrowseConvicts().findContentItem("SearchConvictCode1"); }]
    });

    lightSwitchApplication.BrowsePaymentRecords.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePaymentRecords
        },
        PaymentRecordList: {
            _$class: msls.ContentItem,
            _$name: "PaymentRecordList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.BrowsePaymentRecords,
            value: lightSwitchApplication.BrowsePaymentRecords
        },
        PaymentRecord: {
            _$class: msls.ContentItem,
            _$name: "PaymentRecord",
            _$parentName: "PaymentRecordList",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.BrowsePaymentRecords,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePaymentRecords,
                _$entry: {
                    elementType: lightSwitchApplication.PaymentRecord
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PaymentRecord",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.PaymentRecord,
            value: lightSwitchApplication.PaymentRecord
        },
        PayerEmail: {
            _$class: msls.ContentItem,
            _$name: "PayerEmail",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        ConvictEmail: {
            _$class: msls.ContentItem,
            _$name: "ConvictEmail",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        PaymentType: {
            _$class: msls.ContentItem,
            _$name: "PaymentType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        Message: {
            _$class: msls.ContentItem,
            _$name: "Message",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        DonorName: {
            _$class: msls.ContentItem,
            _$name: "DonorName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.PaymentRecord,
            value: String
        },
        amount: {
            _$class: msls.ContentItem,
            _$name: "amount",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePaymentRecords,
            data: lightSwitchApplication.PaymentRecord,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePaymentRecords
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePaymentRecords, {
        /// <field>
        /// Called when a new BrowsePaymentRecords screen is created.
        /// <br/>created(msls.application.BrowsePaymentRecords screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePaymentRecords],
        /// <field>
        /// Called before changes on an active BrowsePaymentRecords screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePaymentRecords screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePaymentRecords],
        /// <field>
        /// Called after the PaymentRecordList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentRecordList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("PaymentRecordList"); }],
        /// <field>
        /// Called after the PaymentRecord content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentRecord_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("PaymentRecord"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PayerEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PayerEmail_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("PayerEmail"); }],
        /// <field>
        /// Called after the ConvictEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictEmail_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("ConvictEmail"); }],
        /// <field>
        /// Called after the PaymentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentType_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("PaymentType"); }],
        /// <field>
        /// Called after the Message content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Message_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("Message"); }],
        /// <field>
        /// Called after the DonorName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DonorName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("DonorName"); }],
        /// <field>
        /// Called after the amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        amount_postRender: [$element, function () { return new lightSwitchApplication.BrowsePaymentRecords().findContentItem("amount"); }]
    });

    lightSwitchApplication.BrowseTeams.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTeams
        },
        TeamList: {
            _$class: msls.ContentItem,
            _$name: "TeamList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTeams,
            data: lightSwitchApplication.BrowseTeams,
            value: lightSwitchApplication.BrowseTeams
        },
        Team: {
            _$class: msls.ContentItem,
            _$name: "Team",
            _$parentName: "TeamList",
            screen: lightSwitchApplication.BrowseTeams,
            data: lightSwitchApplication.BrowseTeams,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTeams,
                _$entry: {
                    elementType: lightSwitchApplication.Team
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Team",
            screen: lightSwitchApplication.BrowseTeams,
            data: lightSwitchApplication.Team,
            value: lightSwitchApplication.Team
        },
        TeamName: {
            _$class: msls.ContentItem,
            _$name: "TeamName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTeams,
            data: lightSwitchApplication.Team,
            value: String
        },
        TeamCode: {
            _$class: msls.ContentItem,
            _$name: "TeamCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTeams,
            data: lightSwitchApplication.Team,
            value: String
        },
        TeamType: {
            _$class: msls.ContentItem,
            _$name: "TeamType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTeams,
            data: lightSwitchApplication.Team,
            value: String
        },
        Total: {
            _$class: msls.ContentItem,
            _$name: "Total",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseTeams,
            data: lightSwitchApplication.Team,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTeams
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTeams, {
        /// <field>
        /// Called when a new BrowseTeams screen is created.
        /// <br/>created(msls.application.BrowseTeams screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTeams],
        /// <field>
        /// Called before changes on an active BrowseTeams screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTeams screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTeams],
        /// <field>
        /// Called after the TeamList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTeams().findContentItem("TeamList"); }],
        /// <field>
        /// Called after the Team content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Team_postRender: [$element, function () { return new lightSwitchApplication.BrowseTeams().findContentItem("Team"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTeams().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TeamName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamName_postRender: [$element, function () { return new lightSwitchApplication.BrowseTeams().findContentItem("TeamName"); }],
        /// <field>
        /// Called after the TeamCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseTeams().findContentItem("TeamCode"); }],
        /// <field>
        /// Called after the TeamType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamType_postRender: [$element, function () { return new lightSwitchApplication.BrowseTeams().findContentItem("TeamType"); }],
        /// <field>
        /// Called after the Total content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_postRender: [$element, function () { return new lightSwitchApplication.BrowseTeams().findContentItem("Total"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        ConvictList: {
            _$class: msls.ContentItem,
            _$name: "ConvictList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ShowBrowseConvicts: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseConvicts",
            _$parentName: "ConvictList",
            screen: lightSwitchApplication.Home
        },
        ShowBrowsePaymentRecords: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowsePaymentRecords",
            _$parentName: "ConvictList",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseTeams: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseTeams",
            _$parentName: "ConvictList",
            screen: lightSwitchApplication.Home
        },
        ShowAddEditPaymentRecord: {
            _$class: msls.ContentItem,
            _$name: "ShowAddEditPaymentRecord",
            _$parentName: "ConvictList",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the ConvictList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictList_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ConvictList"); }],
        /// <field>
        /// Called after the ShowBrowseConvicts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseConvicts_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseConvicts"); }],
        /// <field>
        /// Called after the ShowBrowsePaymentRecords content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowsePaymentRecords_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowsePaymentRecords"); }],
        /// <field>
        /// Called after the ShowBrowseTeams content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTeams_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseTeams"); }],
        /// <field>
        /// Called after the ShowAddEditPaymentRecord content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowAddEditPaymentRecord_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowAddEditPaymentRecord"); }]
    });

}(msls.application));