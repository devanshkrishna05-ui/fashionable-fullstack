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
            message: "This is a direct test of the EmailJS PocketBase integration. If you see this, the API call succeeded!",
            reply_to: "fashionableviashop@gmail.com"
        }
    };

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
            response: response.json || response.body || "No response body"
        });
    } catch (err) {
        return c.json(500, {
            error: err.message
        });
    }
});
