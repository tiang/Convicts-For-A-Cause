/// <reference path="../Scripts/msls-1.0.0.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Convict(entitySet) {
        /// <summary>
        /// Represents the Convict entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this convict.
        /// </param>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this convict.
        /// </field>
        /// <field name="ConvictCode" type="String">
        /// Gets or sets the convictCode for this convict.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this convict.
        /// </field>
        /// <field name="ProfileURL" type="String">
        /// Gets or sets the profileURL for this convict.
        /// </field>
        /// <field name="TeamCode" type="String">
        /// Gets or sets the teamCode for this convict.
        /// </field>
        /// <field name="TeamType" type="String">
        /// Gets or sets the teamType for this convict.
        /// </field>
        /// <field name="CreateDate" type="Date">
        /// Gets or sets the createDate for this convict.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this convict.
        /// </field>
        /// <field name="Total" type="String">
        /// Gets or sets the total for this convict.
        /// </field>
        /// <field name="details" type="msls.application.Convict.Details">
        /// Gets the details for this convict.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Leaderboard(entitySet) {
        /// <summary>
        /// Represents the Leaderboard entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this leaderboard.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this leaderboard.
        /// </field>
        /// <field name="ConvictCode" type="Number">
        /// Gets or sets the convictCode for this leaderboard.
        /// </field>
        /// <field name="TeamCode" type="Number">
        /// Gets or sets the teamCode for this leaderboard.
        /// </field>
        /// <field name="Total" type="Number">
        /// Gets or sets the total for this leaderboard.
        /// </field>
        /// <field name="ConvictName" type="String">
        /// Gets or sets the convictName for this leaderboard.
        /// </field>
        /// <field name="TeamName" type="String">
        /// Gets or sets the teamName for this leaderboard.
        /// </field>
        /// <field name="RegistrationType" type="String">
        /// Gets or sets the registrationType for this leaderboard.
        /// </field>
        /// <field name="TeamType" type="String">
        /// Gets or sets the teamType for this leaderboard.
        /// </field>
        /// <field name="details" type="msls.application.Leaderboard.Details">
        /// Gets the details for this leaderboard.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PaymentRecord(entitySet) {
        /// <summary>
        /// Represents the PaymentRecord entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this paymentRecord.
        /// </param>
        /// <field name="paymentID" type="Number">
        /// Gets or sets the paymentID for this paymentRecord.
        /// </field>
        /// <field name="PayerEmail" type="String">
        /// Gets or sets the payerEmail for this paymentRecord.
        /// </field>
        /// <field name="amount" type="Number">
        /// Gets or sets the amount for this paymentRecord.
        /// </field>
        /// <field name="ConvictEmail" type="String">
        /// Gets or sets the convictEmail for this paymentRecord.
        /// </field>
        /// <field name="TeamCode" type="String">
        /// Gets or sets the teamCode for this paymentRecord.
        /// </field>
        /// <field name="PaymentType" type="String">
        /// Gets or sets the paymentType for this paymentRecord.
        /// </field>
        /// <field name="CreateDate" type="Date">
        /// Gets or sets the createDate for this paymentRecord.
        /// </field>
        /// <field name="Message" type="String">
        /// Gets or sets the message for this paymentRecord.
        /// </field>
        /// <field name="DonorName" type="String">
        /// Gets or sets the donorName for this paymentRecord.
        /// </field>
        /// <field name="Anonymous" type="Boolean">
        /// Gets or sets the anonymous for this paymentRecord.
        /// </field>
        /// <field name="TransactionID" type="Number">
        /// Gets or sets the transactionID for this paymentRecord.
        /// </field>
        /// <field name="InvoiceID" type="Number">
        /// Gets or sets the invoiceID for this paymentRecord.
        /// </field>
        /// <field name="details" type="msls.application.PaymentRecord.Details">
        /// Gets the details for this paymentRecord.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Team(entitySet) {
        /// <summary>
        /// Represents the Team entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this team.
        /// </param>
        /// <field name="TeamCode" type="String">
        /// Gets or sets the teamCode for this team.
        /// </field>
        /// <field name="TeamName" type="String">
        /// Gets or sets the teamName for this team.
        /// </field>
        /// <field name="TeamURL" type="String">
        /// Gets or sets the teamURL for this team.
        /// </field>
        /// <field name="TeamType" type="String">
        /// Gets or sets the teamType for this team.
        /// </field>
        /// <field name="CreateDate" type="Date">
        /// Gets or sets the createDate for this team.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this team.
        /// </field>
        /// <field name="Total" type="String">
        /// Gets or sets the total for this team.
        /// </field>
        /// <field name="details" type="msls.application.Team.Details">
        /// Gets the details for this team.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ConvictsData(dataWorkspace) {
        /// <summary>
        /// Represents the ConvictsData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Convicts" type="msls.EntitySet">
        /// Gets the Convicts entity set.
        /// </field>
        /// <field name="Leaderboards" type="msls.EntitySet">
        /// Gets the Leaderboards entity set.
        /// </field>
        /// <field name="PaymentRecords" type="msls.EntitySet">
        /// Gets the PaymentRecords entity set.
        /// </field>
        /// <field name="Teams" type="msls.EntitySet">
        /// Gets the Teams entity set.
        /// </field>
        /// <field name="details" type="msls.application.ConvictsData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ConvictsData" type="msls.application.ConvictsData">
        /// Gets the ConvictsData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Convict: $defineEntity(Convict, [
            { name: "Email", type: String },
            { name: "ConvictCode", type: String },
            { name: "Name", type: String },
            { name: "ProfileURL", type: String },
            { name: "TeamCode", type: String },
            { name: "TeamType", type: String },
            { name: "CreateDate", type: Date },
            { name: "ModifiedDate", type: Date },
            { name: "Total", type: String }
        ]),

        Leaderboard: $defineEntity(Leaderboard, [
            { name: "ID", type: Number },
            { name: "ConvictCode", type: Number },
            { name: "TeamCode", type: Number },
            { name: "Total", type: Number },
            { name: "ConvictName", type: String },
            { name: "TeamName", type: String },
            { name: "RegistrationType", type: String },
            { name: "TeamType", type: String }
        ]),

        PaymentRecord: $defineEntity(PaymentRecord, [
            { name: "paymentID", type: Number },
            { name: "PayerEmail", type: String },
            { name: "amount", type: Number },
            { name: "ConvictEmail", type: String },
            { name: "TeamCode", type: String },
            { name: "PaymentType", type: String },
            { name: "CreateDate", type: Date },
            { name: "Message", type: String },
            { name: "DonorName", type: String },
            { name: "Anonymous", type: Boolean },
            { name: "TransactionID", type: Number },
            { name: "InvoiceID", type: Number }
        ]),

        Team: $defineEntity(Team, [
            { name: "TeamCode", type: String },
            { name: "TeamName", type: String },
            { name: "TeamURL", type: String },
            { name: "TeamType", type: String },
            { name: "CreateDate", type: Date },
            { name: "ModifiedDate", type: Date },
            { name: "Total", type: String }
        ]),

        ConvictsData: $defineDataService(ConvictsData, lightSwitchApplication.rootUri + "/ConvictsData.svc", [
            { name: "Convicts", elementType: Convict },
            { name: "Leaderboards", elementType: Leaderboard },
            { name: "PaymentRecords", elementType: PaymentRecord },
            { name: "Teams", elementType: Team }
        ], [
            {
                name: "Convicts_SingleOrDefault", value: function (Email) {
                    return new $DataServiceQuery({ _entitySet: this.Convicts },
                        lightSwitchApplication.rootUri + "/ConvictsData.svc" + "/Convicts(" + "Email=" + $toODataString(Email, "String?") + ")"
                    );
                }
            },
            {
                name: "Leaderboards_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.Leaderboards },
                        lightSwitchApplication.rootUri + "/ConvictsData.svc" + "/Leaderboards(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PaymentRecords_SingleOrDefault", value: function (paymentID) {
                    return new $DataServiceQuery({ _entitySet: this.PaymentRecords },
                        lightSwitchApplication.rootUri + "/ConvictsData.svc" + "/PaymentRecords(" + "paymentID=" + $toODataString(paymentID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Teams_SingleOrDefault", value: function (TeamCode) {
                    return new $DataServiceQuery({ _entitySet: this.Teams },
                        lightSwitchApplication.rootUri + "/ConvictsData.svc" + "/Teams(" + "TeamCode=" + $toODataString(TeamCode, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ConvictsData", type: ConvictsData }
        ])

    });

}(msls.application));
