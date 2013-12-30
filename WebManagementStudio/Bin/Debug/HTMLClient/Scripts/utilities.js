

var WMS = {
    utility: {
        /** 
         * htmlDecode will decode any HTML encoded values like &quot; 
        **/
        htmlDecode: function (input) {
            debugger;
            input = unescape(input);
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        },
        /**
         * jsEscape will escape a text string to safely save into database. 
        **/
        jsEscape: function (input) {
            var text = input.replace(",", "%2C");
            return text;
        }

    }

};

