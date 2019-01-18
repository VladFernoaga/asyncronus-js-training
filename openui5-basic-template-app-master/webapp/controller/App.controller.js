sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ro/valdfernoaga/asyncdemo/model/formatter",
    "ro/valdfernoaga/asyncdemo/backend/MockApi"
], function(Controller, formatter, mockApi) {
    "use strict";


    var getTeamsFilledWithStaff = async function() {
        const aTeams = await mockApi.getTeams();
        const aAgreggatedTeams = [];
        for (const team of aTeams) {
            const aStaff = []
            for (const staffId of team.aStaffMembersIds) {
                const oStaff = await mockApi.getStaffById(staffId);
                aStaff.push(oStaff);
            }
            aAgreggatedTeams.push({
                sName: team.sName,
                sStatus: team.sStatus,
                aStaff: aStaff
            });
        }
        return aAgreggatedTeams;
    }


    return Controller.extend("ro.valdfernoaga.asyncdemo.controller.App", {

        formatter: formatter,


        onInit: function() {},
        onAfterRendering: function() {
            console.log("I'm in in onAfterRendering()")
            getTeamsFilledWithStaff().then((teams => {
                console.log(teams);
            }));

        }

    });
});