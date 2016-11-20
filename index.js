const Webhook = require("./lib/WebhookClient");

function WebhookClient(token, id) {
    return new Webhook(token, id);
    /* Discord Webhooks: Developed by FlanScarlet */
}

WebhookClient.WebhookC = Webhook;


module.exports = WebhookClient;