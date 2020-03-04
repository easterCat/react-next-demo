import { rpost, rget } from "../../utils/request";

/**
 * 通过id进行文章的获取
 * @param {*} data
 */
export function getArticleById(data) {
    return rget("/articles", "GET_ARTICLE_BY_ID", data);
}

/**
 * 获取所有的文章
 * @param {*} data
 */
export function getAllArticles(data) {
    return rget("/articles/all", "GET_ALL_ARTICLES", {});
}

/**
 * 创建新文章
 * @param {*} data
 */
export function createNewArticle(data) {
    return rpost("/articles/create", "CREATE_NEW_ARTICLE", data);
}

/**
 * 通过合集id获取文章
 * @param {*} data
 */
export function getArticleByCollectId(data) {
    return rget("/articles/getArticleByCollectId", "GET_ARTICLE_BY_COLLECT_ID", data);
}

/**
 * 更新文章
 * @param {*} data
 */
export function updateArticleById(data) {
    return rpost("/articles/update", "UPDATE_ARTICLE", data);
}

/**
 * 删除文章
 * @param {*} data
 */
export function deleteArticleById(data) {
    return rpost("/articles/delete", "DELETE_ARTICLE_BY_ID", data);
}

export function createNewCollect(data) {
    return rpost("/collect/create", "CREATE_NEW_COLLECT", data);
}

export function getAllCollects() {
    return rget("/collect/all", "GET_ALL_COLLECTS", {});
}

/**
 * 更新文章合集
 * @param {*} data
 */
export function updateCollectById(data) {
    return rpost("/collect/update", "UPDATE_COLLECT_BY_ID", data);
}
