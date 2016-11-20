"use strict"
const request = require("./handlers/Requester");
const http = new request();

var Constants = {
    API_URL: "https://discordapp.com/api",
    Endpoints: {
        Webhooks: "/webhooks"
    }
}



class WebhookClient {
    constructor(WebhookToken, WebhookID) {
        this.token = WebhookToken;
        this.id = WebhookID;
    }
    
    
    sendWebhook(content, options) {
        return new Promise((resolve, reject) => {
            if (typeof options !== "object") {
                reject("Please make sure the options is inside an object!");
            } else {
                http.send(`webhooks/${this.id}/${this.token}`, "POST", {
                    url: "https://discordapp.com/api",
                    body: {
                        content: content,
                        tts: options.tts || false,
                        embeds: options.embeds || []
                    }
                }).then((response) => {
                    resolve(response);
                }).catch((e) => {
                    reject(e)
                })
            }
        });
    }
}   

module.exports = WebhookClient;