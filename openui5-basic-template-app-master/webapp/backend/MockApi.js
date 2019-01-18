sap.ui.define([], function() {
    "use strict";

    const aTeams = [{
            sName: "Team 1",
            sStatus: "enabled",
            aStaffMembersIds: ["s1", "s3"]
        },
        {
            sName: "Team 2",
            sStatus: "enabled",
            aStaffMembersIds: ["s2"]
        },
        {
            sName: "Team 3",
            sStatus: "enabled",
            aStaffMembersIds: ["s1", "s2", "s3"]
        }
    ];
    const aStaff = [{
            id: "s1",
            sFirstName: "Andree",
            sLastName: "Raid"
        },
        {
            id: "s2",
            sFirstName: "William",
            sLastName: "Lucas"
        }, {
            id: "s3",
            sFirstName: "Henry",
            sLastName: "David"
        }
    ];
    class MockApi {
        getTeams() {
            return new Promise((resolve) => {
                resolve(aTeams);
            });
        }
        getStaffById(sId) {
            return new Promise((resolve) => {
                const foundedStaff = aStaff.find(staff => staff.id === sId);
                resolve(foundedStaff);
            });
        }
    }

    return new MockApi();
});