import ajax from "./ajax";

const req = ajax.create({
  baseURL: "http://localhost:6776/api",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true
  }
});

export function rget(url, type, data) {
  return async dispatch => {
    url = url + "/" + Object.values(data).join("/");
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
