sap.ui.define([], function() {
    "use strict";

    class MockApi {
        getStaff() {
            return new Promise((resolve) => {
                resolve(["ana", "mara"]);
            });
        }
    }

    return new MockApi();
});