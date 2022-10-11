const rwClient = require("./twitterClient");
const fetchApi = require("./fetchApi");

const tweet = () => {
  setInterval(async function () {
    console.log('iniciado contador')
    try {
      const res = await fetchApi();
      await rwClient.v2.tweet(res);
    } catch (e) {
      console.log(e);
    }
  }, 60 * 60 * 1000);
};
tweet();
