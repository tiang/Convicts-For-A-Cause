/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPaymentRecord.Message_postRender = function (element, contentItem) {
    // Write code here.   
    var text = WMS.utility.htmlDecode(contentItem.value);
    contentItem.value = text;
};
myapp.AddEditPaymentRecord.beforeApplyChanges = function (screen) {
    // Write code here.
    var text = WMS.utility.jsEscape(screen.PaymentRecord.Message);
    screen.PaymentRecord.Message = text;
};