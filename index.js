const Webhook = require("./lib/WebhookClient");

function WebhookClient(token, id) {
    return new Webhook(token, id);
    /* Discord Webhooks: Developed by FlanScarlet */
}

WebhookClient.Webhook = Webhook;


module.exports = WebhookClient;
