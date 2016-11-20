const Webhook = require("./lib/WebhookClient");

function Discord(token, id) {
    return new Webhook(token, id);
    /* Discord Webhooks: Developed by FlanScarlet */
}

Discord.Webhook = Webhook;


module.exports = WebhookClient;
