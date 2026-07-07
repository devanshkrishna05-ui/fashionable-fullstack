/// <reference path="../pb_data/types.d.ts" />
routerAdd("GET", "/api/debug-users", (c) => {
    let emails = [];
    try {
        const records = $app.findRecordsByFilter("users", "id != ''", "-created", 100, 0);
        if (records) {
            for (let i = 0; i < records.length; i++) {
                emails.push({
                    id: records[i].id,
                    email: records[i].email(),
                    created: records[i].created
                });
            }
        }
    } catch (e) {
        return c.json(500, { error: e.message });
    }

    return c.json(200, {
        total: emails.length,
        users: emails
    });
});
