# discord-webhooks
A Client made for Discord's webhooks.
## Links
[NPM](https://npmjs.com/package/discord-webhooks), [Github](https://github.com/FlanScarlet/discord-webhooks)

# Documentation
<hr>
## .sendWebhook(webhookID, content, options)
### webhookID:
The ID of the webhook

Example: "249743770017333249"
    
### content:
The content being sent.

Example: "Hello! I'm a Webhook!"

### options:
The options.

####List of options: 
tts: <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>: If the webhook is sent as a voice or not.
<br>embeds: <[Array]()>: Array of [embed objects](https://discordapp.com/developers/docs/resources/channel#embed-object).
##Example
```js
const Webhook = require("discord-webhooks");
const wh = new Webhook("webhook token");


wh.sendWebhook("webhook id", "content", {})
```