import { actionTypes } from "./actionTypes";
import { rpost } from "../utils/request";

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

export function createCollect(data) {
  return rpost("/collect/create_api", "INCREMENT", data);
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
