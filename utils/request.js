import ajax from "./ajax";
import config from "../app.config";
import { message } from "antd";

const req = ajax.create({
  baseURL: config.baseURL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true
  }
});

export function rget(url, type, data) {
  return async dispatch => {
    url = url + "/" + Object.values(data);
    const result = await req.get(url, {});
    const parseResult = JSON.parse(result.data);
    if (parseResult.code === 200) {
      const payload = parseResult.data;
      dispatch({
        type,
        payload
      });
      return payload;
    } else {
      return null;
    }
  };
}

export function rpost(url, type, data) {
  return async dispatch => {
    const result = await req.post(url, { params: data });
    const parseResult = JSON.parse(result.data);
    if (parseResult.code === 200) {
      const payload = parseResult.data;
      dispatch({
        type,
        payload
      });
      return payload;
    } else {
      return null;
    }
  };
}

function handleMessage(result) {
  message.config({
    duration: 2,
    maxCount: 1
  });

  if (result && result.code === 200) {
    message.success(result.message);
  } else {
    message.error(result.message);
  }
}
