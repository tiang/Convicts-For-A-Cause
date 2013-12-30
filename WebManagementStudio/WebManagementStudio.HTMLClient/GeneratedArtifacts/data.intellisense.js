/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Convict, {
        /// <field>
        /// Called when a new convict is created.
        /// <br/>created(msls.application.Convict entity)
        /// </field>
        created: [lightSwitchApplication.Convict]
    });

    msls._addEntryPoints(lightSwitchApplication.Leaderboard, {
        /// <field>
        /// Called when a new leaderboard is created.
        /// <br/>created(msls.application.Leaderboard entity)
        /// </field>
        created: [lightSwitchApplication.Leaderboard]
    });

    msls._addEntryPoints(lightSwitchApplication.PaymentRecord, {
        /// <field>
        /// Called when a new paymentRecord is created.
        /// <br/>created(msls.application.PaymentRecord entity)
        /// </field>
        created: [lightSwitchApplication.PaymentRecord]
    });

    msls._addEntryPoints(lightSwitchApplication.Team, {
        /// <field>
        /// Called when a new team is created.
        /// <br/>created(msls.application.Team entity)
        /// </field>
        created: [lightSwitchApplication.Team]
    });

}(msls.application));
