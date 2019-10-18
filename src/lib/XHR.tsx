export class XHR {

    public get = (url: string) => {
        return this.request(url, {}, 'GET', '');
    }

    public post = (url: string, data: {}) => {
        return this.request(url, {
            'Content-type': 'application/json',
        }, 'POST', JSON.stringify(data));
    }

    public put = (url: string, data: {}) => {
        return this.request(url, {
            'Content-type': 'application/json'
        }, 'PUT', JSON.stringify(data));
    }

    public delete = (url: string) => {
        return this.request(url, {}, 'DELETE', '');
    }

    private request = (
        url: string,
        headers: {[key: string]: string },
        method: string, body: string
    ) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            for (let [key, value] of Object.entries(headers)) {
                xhr.setRequestHeader(key, value);
            }
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.statusText);
                    }
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(body);
        });
    }
}