/// <reference path="../pb_data/types.d.ts" />

// In-memory store for OTPs
// key: email, value: { code, expires }
const activeOtps = {};

routerAdd("POST", "/api/custom/otp-request", (e) => {
    let data;
    try {
        data = e.requestInfo().data || {};
    } catch (err) {
        return e.json(400, { message: "Invalid request payload: " + err.message });
    }

    return e.json(400, { message: "Data received: " + JSON.stringify(data) });
});
