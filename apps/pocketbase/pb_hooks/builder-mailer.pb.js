/// <reference path="../pb_data/types.d.ts" />
onMailerSend((e) => {
    // If SMTP mail server toggle is enabled in Admin panel, fallback to default SMTP
    if (e.app.settings().smtp.enabled) {
        return e.next();
    }

    const payload = {
        service_id: "service_3qq7opm",
        template_id: "template_tlkynu3",
        user_id: "t-67mhnVBG-LAX9Cm",
        template_params: {
            from_name: "Fashionable System",
            from_email: "fashionableviashop@gmail.com",
            name: "Fashionable Admin",
            email: e.message.to[0].address,
            message: e.message.html || e.message.text,
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
        $app.logger().error("EmailJS delivery failed", "status", response.statusCode);
        throw new ApiError(500, 'EmailJS mail dispatch failed with status: ' + response.statusCode);
    }
});
