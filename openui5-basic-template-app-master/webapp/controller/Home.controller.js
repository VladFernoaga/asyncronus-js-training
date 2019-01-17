sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ro/valdfernoaga/asyncdemo/model/formatter",
    "ro/valdfernoaga/asyncdemo/backend/MockApi"
], function(Controller, formatter, mockApi) {
    "use strict";

    return Controller.extend("ro.valdfernoaga.asyncdemo.controller.App", {

        formatter: formatter,

        onInit: function() {
            console.log("I'm in in init()");
        },
        onAfterRendering: function() {
            console.log("I'm in in onAfterRendering()")
            mockApi.getStaff().then((data) => {
                console.log(data)
            });
        }
    });
});