import { rpost, rget } from "../utils/request";

export function login(data) {
  return rget("/user/login", "LOGIN", data);
}

export function getArticleById(data) {
  return rget("/article", "GET_ARTICLE_BY_ID", data);
}

export function getAllArticles(data) {
  return rget("/article/all", "GET_ALL_ARTICLES", {});
}

export function createNewArticle(data) {
  return rpost("/article/create", "CREATE_NEW_ARTICLE", data);
}

export function createNewCollect(data) {
  return rpost("/collect/create", "CREATE_NEW_COLLECT", data);
}

export function getAllCollects() {
  return rget("/collect/all", "GET_ALL_COLLECTS", {});
}

export function updateArticle(data) {
  return rpost("/article/update", "UPDATE_ARTICLE", data);
}

export function logged(data) {
  return rpost("/user/logged", "LOGGED", data);
}
