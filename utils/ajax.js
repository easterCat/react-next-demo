class Ajax {
    constructor(createConfig) {
        this.configs = Object.assign({}, createConfig);
    }

    handleRequest(method, url, config) {
        const currentConfig = Object.assign({}, this.configs, config);
        const xurl = currentConfig.baseURL + url;

        return new Promise((resolve, reject) => {
            try {
                let xhr = this._createAjaxRequest(method, xurl);

                if ((method === "post" || method === "put" || method === "delete") && currentConfig.params) {
                    xhr.send(JSON.stringify(currentConfig.params));
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
            } catch (error) {
                reject({
                    data: null,
                    status: 0,
                    statusText: error
                });
            }
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
        Object.keys(this.configs.headers)
            .filter(i => {
                return i !== "withCredentials";
            })
            .forEach(key => {
                xhr && xhr.setRequestHeader(key, this.configs.headers[key]);
            });

        if (this.configs.headers.withCredentials) {
            xhr.withCredentials = this.configs.headers.withCredentials;
        }

        return xhr;
    }
}

Ajax.create = Ajax.prototype.create = function(createConfig) {
    const reqInstance = new Ajax(createConfig);
    return reqInstance;
};

export default Ajax;
