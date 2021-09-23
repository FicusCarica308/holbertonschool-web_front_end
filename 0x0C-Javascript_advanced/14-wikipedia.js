function createElement (data) {
    let p_tag = document.createElement("p");
    p_tag.textContent = data;
    document.body.append(p_tag);
};

function queryWikipedia (callback) {
    const request = new XMLHttpRequest();
  
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            jsonResponse = JSON.parse(request.responseText);
            callback(jsonResponse.query.pages[21721040].extract)
        }
    }
    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    request.send(); 
}

queryWikipedia(createElement);
