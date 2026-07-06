/// <reference path="../pb_data/types.d.ts" />
routerAdd("GET", "/api/test-emailjs", (c) => {
    const payload = {
        service_id: "service_3qq7opm",
        template_id: "template_tlkynu3",
        user_id: "t-67mhnVBG-LAX9Cm",
        template_params: {
            from_name: "Fashionable System Test",
            from_email: "fashionableviashop@gmail.com",
            name: "Fashionable Test Admin",
            email: "fashionableviashop@gmail.com",
            message: "PocketBase EmailJS integration test message. If you receive this, it works!",
            reply_to: "fashionableviashop@gmail.com"
        }
    };

    let emails = [];
    try {
        const records = $app.dao().findRecordsByFilter("users", "id != ''", "-created", 100, 0);
        if (records) {
            for (let i = 0; i < records.length; i++) {
                emails.push(records[i].getString("email"));
            }
        }
    } catch (e) {
        $app.logger().error("Users fetch failed", "error", e.message);
    }

    try {
        const response = $http.send({
            url: "https://api.emailjs.com/api/v1.0/email/send",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return c.json(200, {
            statusCode: response.statusCode,
            response: response.json || response.body || "No response body",
            registeredEmails: emails
        });
    } catch (err) {
        return c.json(500, {
            error: err.message,
            registeredEmails: emails
        });
    }
});
