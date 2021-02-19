function createElement(data) {
    let paragraph1 = document.createElement("p");
    let content1 = document.createTextNode(data);
    paragraph1.appendChild(content1);
    document.body.appendChild(paragraph1);
}

function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                callback(xhr.response.query.pages["21721040"].extract);
            }
    };
    xhr.responseType = "json";
    xhr.send();
}

queryWikipedia(createElement);