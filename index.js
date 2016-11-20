const Webhook = require("./lib/WebhookClient");

function WebhookClient(token) {
    return new Webhook(token);
    /* Discord Webhooks: Developed by FlanScarlet */
}

WebhookClient.WebhookC = Webhook;


module.exports = WebhookClient;