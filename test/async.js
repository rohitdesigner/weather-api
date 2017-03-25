function getData() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.response)
        }

    }
    http.open('get', 'http://api.openweathermap.org/data/2.5/weather?q=dhanbad&APPID=406038b64f014f7948945a21b558769a');
    http.send();
}