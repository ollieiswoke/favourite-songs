/**
 * Make a request to `path` with `options` and parse the response as JSON.
 * @param {*} path The url to make the reques to.
 * @param {*} options Additiona options to pass to fetch.
 */
const getJSON = (request) => 
    fetch(request)
        .then(res => res.json())
        .catch(err => console.warn(`API_ERROR: ${err.message}`));

/**
 * This is a sample class API which you may base your code on.
 * You may use this as a launch pad but do not have to.
 */
export default class API {
    /** @param {String} url */
    constructor(url) {
        this.url = url;
    } 

    /** @param {String} path */
    //edit this.. expand
    makeAPIRequest(path, token, method, url_parameters, data) {
        var headers_obj = {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        };
        if (token !== "") {
            headers_obj["Authorization"] = "Token " + token;
        }
        const headers = new Headers (headers_obj);
        var requests_obj = {
            method: method,
            headers: headers,
            mode: 'cors',
            cache: 'default',
        }
        if ( data !== "" ) {
            requests_obj.body = JSON.stringify(data);
        }
        const request = new Request(`${this.url}/${path}${url_parameters}`, requests_obj)
        if ( method == 'POST') {
            //if method is post, DON'T return JSON
            return fetch(request)
                .then(res => res)
                .catch(err => console.warn(`API_ERROR: ${err.message}`));
            }
        else {
            return getJSON(request);
        }
        //pass headers into function
    }
}

//can have method as parameter - get, post etc...
//reduce all calls into one function
