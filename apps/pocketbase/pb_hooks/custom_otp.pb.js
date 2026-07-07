/// <reference path="../pb_data/types.d.ts" />

// In-memory store for OTPs
// key: email, value: { code, expires }
const activeOtps = {};

routerAdd("POST", "/api/custom/otp-request", (c) => {
    const data = c.requestInfo().body;
    const email = (data.email || "").trim().toLowerCase();

    if (!email) {
        throw new ApiError(400, "Email is required");
    }

    // 1. Check if user exists in the database
    let record;
    try {
        record = $app.dao().findFirstRecordByData("users", "email", email);
    } catch (_) {
        throw new ApiError(404, "This email address is not registered on getfashionable.shop");
    }

    // 2. Generate 6-digit OTP
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 10 * 60 * 1000; // 10 minutes

    // 3. Save OTP in memory
    activeOtps[email] = { code, expires };

    // 4. Send email via EmailJS API
    const payload = {
        service_id: "service_3qq7opm",
        template_id: "template_tlkynu3",
        user_id: "t-67mhnVBG-LAX9Cm",
        template_params: {
            from_name: "Fashionable Security",
            from_email: "fashionableviashop@gmail.com",
            name: "Fashionable Admin",
            email: email,
            message: `Hello,

Your verification OTP code for Fashionable is: ${code}

This code is valid for 10 minutes. Please enter it on the website to log in.

Thanks,
Fashionable Team`,
            reply_to: "fashionableviashop@gmail.com"
        }
    };

    const response = $http.send({
        url: "https://api.emailjs.com/api/v1.0/email/send",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (response.statusCode !== 200) {
        $app.logger().error("OTP EmailJS dispatch failed", "status", response.statusCode);
        throw new ApiError(500, "Failed to send OTP email: " + response.body);
    }

    return c.json(200, { message: "OTP sent successfully" });
});

routerAdd("POST", "/api/custom/otp-verify", (c) => {
    const data = c.requestInfo().body;
    const email = (data.email || "").trim().toLowerCase();
    const code = (data.code || "").trim();

    if (!email || !code) {
        throw new ApiError(400, "Email and OTP code are required");
    }

    // 1. Retrieve OTP from memory
    const recordOtp = activeOtps[email];

    if (!recordOtp) {
        throw new ApiError(400, "No OTP request found for this email. Please request a new code.");
    }

    // 2. Check expiration
    if (Date.now() > recordOtp.expires) {
        delete activeOtps[email];
        throw new ApiError(400, "OTP has expired. Please request a new one.");
    }

    // 3. Verify code
    if (recordOtp.code !== code) {
        throw new ApiError(400, "Invalid OTP code. Please check and try again.");
    }

    // 4. Verification successful, clean up OTP
    delete activeOtps[email];

    // 5. Find the user record
    let record;
    try {
        record = $app.dao().findFirstRecordByData("users", "email", email);
    } catch (_) {
        throw new ApiError(404, "User record not found");
    }

    // 6. Generate auth token
    const token = $tokens.recordAuthToken($app, record);

    return c.json(200, {
        token: token,
        record: record
    });
});
