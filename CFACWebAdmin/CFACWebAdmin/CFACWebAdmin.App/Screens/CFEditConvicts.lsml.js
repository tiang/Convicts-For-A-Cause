/// <reference path="../GeneratedArtifacts/viewModel.js" />

var localElement;
var localContentItem;

var addNewDonation = function () {
    myapp.showCFEditPaymentRecord(null, {
        beforeShown: function (addNewScreen) {
            debugger;
            var new_item = new myapp.PaymentRecord();
            new_item.ConvictEmail = localContentItem.screen.Convict.Email;
            new_item.TeamCode = localContentItem.screen.Convict.TeamCode;            
            new_item.CreateDate = new Date();
            new_item.InvoiceID = -1;
            new_item.TransactionID = -1;
            new_item.PaymentType = "admin donation";
            new_item.Message = " ";
            addNewScreen.PaymentRecord = new_item;
        }
    });
};


var SideMenu = {
    "LocalCFConvict": {
        "menuName": "LocalCFConvict",
        "menuTiles": [{
            "Order": 2,
            "Name": "Add Manual Donation",
            "TileColor": "#5dd5ed",
            "Type": "simple",
            "Size": "double",
            "OnClick": "addNewDonation();",
            "Status": "Add Manual Donation",
            "StatusBgColor": null,
            "StatusFgColor": null,
            "Badge": null,
            "BadgeBgColor": null,
            "BadgeFgColor": null,
            "Icon": "icon-credit-card",
            "IconBgColor": null,
            "IconFgColor": null,
            "PermissionId": null
        }]
    }
};

myapp.CFEditConvicts.Add_Payment_execute = function (screen) {
    // Write code here.
    myapp.showCFEditPaymentRecord(null, {
        beforeShown: function (addNewScreen) {
            var new_item = new myapp.PaymentRecord();
            new_item.ConvictEmail = screen.Convict.Email;
            new_item.TeamCode = screen.Convict.TeamCode;
            new_item.PaymentType = "admin donation";
            new_item.Message = " ";
            addNewScreen.PaymentRecord = new_item;
    
        }
    });
};

myapp.CFEditConvicts.ScreenContent_render = function (element, contentItem) {
    // Write code here.
    //itgLsHelper.tileMenu(element, "CFConvict");

    // Assign elements to local variables
    localElement = element;
    localContentItem = contentItem;

    //Add menuTiles for side menu
    itgLsHelper.internalHelper.addTilesToContainer(element, SideMenu.LocalCFConvict.menuTiles);

};
