import { actionTypes } from "./actionTypes";
import { rpost, rget } from "../utils/request";

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

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function increment() {
  return dispatch => {
    dispatch({ type: actionTypes.DECREMENT });
  };
}

export function decrement() {
  return dispatch => {
    dispatch({ type: actionTypes.DECREMENT });
  };
}

export function reset() {
  return dispatch => {
    dispatch({ type: actionTypes.RESET });
  };
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  };
}

export function startClock() {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}
