let site = ""; // 服务器
if (process.env.NODE_ENV === "production") {
    site = "http://111.231.138.132"; // 线上服务器
} else {
    site = "http://172.18.234.34"; // 本地服务器
}
const client = site + ":6688";
const serverApi = site + ":6688";
const config = {
    site,
    client,
    serverApi,
    baseURL: client + "/api",
    githubID: "Iv1.1acd14baff8e005f",
    githubSecret: "466ceb62920fd0cc3cc9a24b190b0fdf7604671b"
};

module.exports = config;
