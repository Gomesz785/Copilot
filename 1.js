function getgithubuserdata (username) {
    var url = "https://api.github.com/users/" + username;
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    var data = JSON.parse(request.responseText);
    return data;
}

function jsontomarkdown (json) {
    var markdown = "";
    for (var key in json) {
        markdown += key + ": " + json[key] + "\n";
    }
    return markdown;
}
