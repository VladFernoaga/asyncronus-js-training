sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ro/valdfernoaga/asyncdemo/model/formatter",
    "ro/valdfernoaga/asyncdemo/backend/MockApi"
], function(Controller, formatter, mockApi) {
    "use strict";

    return Controller.extend("ro.valdfernoaga.asyncdemo.controller.App", {

        formatter: formatter,

        onInit: function() {},
        onAfterRendering: function() {}
    });
});