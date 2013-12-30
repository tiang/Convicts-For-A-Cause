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
        /// Called after the PayerEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PayerEmail_postRender: $parameters,
        /// <field>
        /// Called after the amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        amount_postRender: $parameters,
        /// <field>
        /// Called after the ConvictEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConvictEmail_postRender: $parameters,
        /// <field>
        /// Called after the TeamCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TeamCode_postRender: $parameters,
        /// <field>
        /// Called after the PaymentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaymentType_postRender: $parameters,
        /// <field>
        /// Called after the CreateDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDate_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
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
        /// Called after the Anonymous content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Anonymous_postRender: $parameters,
        /// <field>
        /// Called after the TransactionID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TransactionID_postRender: $parameters,
        /// <field>
        /// Called after the InvoiceID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceID_postRender: $parameters
    });

}(msls.application));
