// const site = "http://172.18.12.120";
const site = "http://111.231.138.132";
const client = site + ":6776";
const serverApi = site + ":6688";

const config = {
  site,
  client,
  serverApi,
  baseURL: client + "/api"
};

module.exports = config;
