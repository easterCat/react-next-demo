const defaultConfig = {
  baseURL: "",
  headers: {}
};

class Ajax {
  constructor(createConfig) {
    this.configs = Object.assign({}, createConfig);
  }

  handleRequest(method, url, config) {
    const xurl = this.configs.baseURL + url;

    return new Promise((resolve, reject) => {
      let xhr = this._createAjaxRequest(method, xurl);

      if (config.withCredentials) {
        xhr.withCredentials = config.withCredentials;
      }

      if ((method === "post" || method === "put" || method === "delete") && config.params) {
        xhr.send(JSON.stringify(config.params));
      } else {
        xhr.send();
      }

      xhr.onload = function() {
        resolve({
          data: xhr.responseText,
          status: xhr.status,
          statusText: xhr.statusText
        });
      };

      xhr.onerror = function() {
        reject({
          data: xhr.responseText,
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
    });
  }

  get(url, config) {
    return this.handleRequest("get", url, config);
  }

  post(url, config) {
    return this.handleRequest("post", url, config);
  }

  put(url, config) {
    return this.handleRequest("put", url, config);
  }

  delete(url, config) {
    return this.handleRequest("delete", url, config);
  }

  _createAjaxRequest(method, url) {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequrest !== "undefined") {
      // IE
      xhr = new XDomainRequrest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }

    //添加header头
    for (let key in this.configs.headers) {
      xhr && xhr.setRequestHeader(key, this.configs.headers[key]);
    }

    return xhr;
  }
}

Ajax.create = Ajax.prototype.create = function(createConfig) {
  const reqInstance = new Ajax(createConfig);
  return reqInstance;
};

export default Ajax;
