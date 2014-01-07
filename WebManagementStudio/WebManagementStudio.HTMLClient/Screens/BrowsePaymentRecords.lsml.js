/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePaymentRecords.Message_postRender = function (element, contentItem) {
    // Write code here.
    var decodedText = WMS.utility.htmlDecode($('.id-element', element).text());
    $('.id-element', element).text(decodedText);

};