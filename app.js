const request = require('request');

const url = '';
const consumerKey = '';
const consumerSecret = '';
const token = '';
const tokenSecret = '';
const contentType = "application/json";

const oauth = {
    "consumer_key": consumerKey,
    "consumer_secret": consumerSecret,
    "token": token,
    "token_secret": tokenSecret
};

const headers = {
    "Content-Type": contentType,
};

const requestOptions = {
    url: url,
    oauth: oauth,
    headers: headers
};

request(requestOptions, function (error, response, body) {
    console.log(body);
});
