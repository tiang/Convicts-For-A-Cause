/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $parameters = [document.createElement("div"), msls.ContentItem];

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
        PaymentRecordList_postRender: $parameters,
        /// <field>
        /// Called after the PaymentRecord content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentRecord_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the PayerEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PayerEmail_postRender: $parameters,
        /// <field>
        /// Called after the ConvictEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictEmail_postRender: $parameters,
        /// <field>
        /// Called after the PaymentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentType_postRender: $parameters,
        /// <field>
        /// Called after the Message content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Message_postRender: $parameters,
        /// <field>
        /// Called after the DonorName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DonorName_postRender: $parameters,
        /// <field>
        /// Called after the amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        amount_postRender: $parameters
    });

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
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the DonorName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DonorName_postRender: $parameters,
        /// <field>
        /// Called after the PaymentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentType_postRender: $parameters,
        /// <field>
        /// Called after the TeamCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamCode_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
        /// <field>
        /// Called after the Anonymous content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Anonymous_postRender: $parameters,
        /// <field>
        /// Called after the Message content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Message_postRender: $parameters,
        /// <field>
        /// Called after the amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        amount_postRender: $parameters,
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: $parameters,
        /// <field>
        /// Called after the ConvictEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictEmail_postRender: $parameters,
        /// <field>
        /// Called after the PayerEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PayerEmail_postRender: $parameters
    });

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
        Command_postRender: $parameters,
        /// <field>
        /// Called after the Group4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group4_postRender: $parameters,
        /// <field>
        /// Called after the Search1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search1_postRender: $parameters,
        /// <field>
        /// Called after the ShowGroup2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowGroup2_postRender: $parameters,
        /// <field>
        /// Called after the ShowGroup3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowGroup3_postRender: $parameters,
        /// <field>
        /// Called after the ShowAddEditConvict content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowAddEditConvict_postRender: $parameters,
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: $parameters,
        /// <field>
        /// Called after the Convict content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Convict_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: $parameters,
        /// <field>
        /// Called after the ConvictCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictCode_postRender: $parameters,
        /// <field>
        /// Called after the Total content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_postRender: $parameters,
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: $parameters,
        /// <field>
        /// Called after the SearchConvictName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchConvictName1_postRender: $parameters,
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: $parameters,
        /// <field>
        /// Called after the SearchConvictEmail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchConvictEmail1_postRender: $parameters,
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: $parameters,
        /// <field>
        /// Called after the SearchConvictCode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SearchConvictCode1_postRender: $parameters
    });

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
        ConvictList_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseConvicts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseConvicts_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowsePaymentRecords content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowsePaymentRecords_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseTeams content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTeams_postRender: $parameters,
        /// <field>
        /// Called after the ShowAddEditPaymentRecord content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowAddEditPaymentRecord_postRender: $parameters
    });

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
        TeamList_postRender: $parameters,
        /// <field>
        /// Called after the Team content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Team_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the TeamName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamName_postRender: $parameters,
        /// <field>
        /// Called after the TeamCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamCode_postRender: $parameters,
        /// <field>
        /// Called after the TeamType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamType_postRender: $parameters,
        /// <field>
        /// Called after the Total content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_postRender: $parameters
    });

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
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: $parameters,
        /// <field>
        /// Called after the TeamCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamCode_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
        /// <field>
        /// Called after the ConvictCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictCode_postRender: $parameters,
        /// <field>
        /// Called after the TeamType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamType_postRender: $parameters,
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: $parameters,
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: $parameters,
        /// <field>
        /// Called after the ProfileURL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfileURL_postRender: $parameters,
        /// <field>
        /// Called after the Total content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_postRender: $parameters
    });

}(msls.application));
