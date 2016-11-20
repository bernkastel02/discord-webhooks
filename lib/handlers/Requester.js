"use strict";
const request = require("request");
var Constants = {
    API_URL: "https://discordapp.com/api"
}

class Requester {
    
    /**
     * @arg {String} endpoint The endpoint you want to call.
     * @arg {Object} options The options, all optional.
     * @arg {String} [options.method=GET] The HTTP method for the endpoint.
     * @arg {String} [options.url="https://discordapp.com/api"] The url desired, or uses discords link.
     * @arg {Object} [options.body={}] The body, or what to send.
     * @arg {Object} [options.headers={}] The headers, mainly Authorization.
     * @arg {Boolean} [options.json=true] Whether to send the request in json or not.
     * @returns {Promise} Returned when the body is resolved.
     */
     
    send(endpoint, method, options) {
        return new Promise((resolve, reject) => {
            if (typeof options !== "object") {
                reject("Please make sure the options is inside an object!");
            } else {
                request({
                    method: method || "GET",
                    url: options.url + "/" + endpoint || "https://discordapp.com/api" + "/" + endpoint,
                    body: options.body || {},
                    headers: options.headers || {},
                    json: options.json || true
                }, (err, res, body) => {
                    if (err) {
                        reject(err);
                    } else if (res.statusCode !== 200) {
                        reject(new Error(`Invalid status code for URL: ${res.statusCode}`));
                    } else {
                        resolve(body);
                    }
                });
            }
        });
        
        
    }
}

module.exports = Requester;