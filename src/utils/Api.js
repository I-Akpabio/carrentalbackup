import "whatwg-fetch";

export default class Api {

	constructor() {
		this.url = "http://localhost:8000"; 
	} 
	
	post(url, data, error) {
		return fetch(`${this.url}/${url}`, {
	        method: "POST", // *GET, POST, PUT, DELETE, etc.
	        mode: "cors", // no-cors, cors, *same-origin
	        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	        //credentials: "same-origin", // include, *same-origin, omit
	        headers: {
	            "Content-Type": "application/x-www-form-urlencoded",
	        },
	        redirect: "follow", // manual, *follow, error
	        referrer: "no-referrer", // no-referrer, *client
	        body: data
	    })
	    .then(response => response.json());
	}
	
}
