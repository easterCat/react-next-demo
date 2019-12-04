const site = "http://172.18.12.120"; // 本地服务器
// const site = "http://111.231.138.132"; // 测试服务器
const client = site + ":6688";
const serverApi = site + ":6688";

const config = {
  site,
  client,
  serverApi,
  baseURL: client + "/api"
};

module.exports = config;
