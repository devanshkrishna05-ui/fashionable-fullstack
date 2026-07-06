/// <reference path="../pb_data/types.d.ts" />
onMailerSend((e) => {
    // If SMTP mail server toggle is enabled in Admin panel, fallback to default SMTP
    if (e.app.settings().smtp.enabled) {
        return e.next();
    }

    const htmlContent = e.message.html || "";
    const textContent = e.message.text || "";
    const fullContent = htmlContent + " " + textContent;

    let emailMessage = textContent || htmlContent;

    // Check if this is a password reset or verification email containing a token link
    const tokenMatch = fullContent.match(/(?:confirm-password-reset|confirm-verification)\/([a-zA-Z0-9\-_.]+)/);

    if (tokenMatch && tokenMatch[1]) {
        const token = tokenMatch[1];
        const isVerification = fullContent.includes("confirm-verification");
        
        let linkUrl = "";
        let bodyText = "";

        if (isVerification) {
            linkUrl = "https://getfashionable.shop/login"; 
            bodyText = "Please click the link below to verify your email address:";
        } else {
            // Password Reset
            linkUrl = `https://getfashionable.shop/password-reset?token=${token}`;
            bodyText = "Please click the link below to reset your password for your Fashionable account:";
        }

        emailMessage = `Hello,

${bodyText}

${linkUrl}

If you did not request this action, you can safely ignore this email.

Thanks,
Fashionable Team`;
    }

    const payload = {
        service_id: "service_3qq7opm",
        template_id: "template_tlkynu3",
        user_id: "t-67mhnVBG-LAX9Cm",
        template_params: {
            from_name: "Fashionable System",
            from_email: "fashionableviashop@gmail.com",
            name: "Fashionable User",
            email: e.message.to[0].address,
            message: emailMessage,
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
