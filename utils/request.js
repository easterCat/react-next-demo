import ajax from "./ajax";

const req = ajax.create({
  baseURL: "http://172.18.12.23:6688",
  headers: {
    "content-type": "application/json",
    withCredentials: true
  }
});

export function get() {}

export function rpost(url, type, data) {
  return async dispatch => {
    const result = await req.post(url, { params: data });
    console.log(result);
    return result;
  };
}
