const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();

const { API_KEY, API_KEY_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET } =
  process.env;

const client = new TwitterApi({
  appKey: API_KEY,
  appSecret: API_KEY_SECRET,
  accessToken: ACCESS_TOKEN,
  accessSecret: ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;

module.exports = rwClient;
