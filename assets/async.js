$(document).ready(function() {
    $('#submit').click(function() {
        //alert("hello");




        $("#submit").addClass("loading disabled");
        $("#area").fadeIn();
        $('#area').animate({ height: '200px' });
        var http = new XMLHttpRequest;
        http.onreadystatechange = function() {
            if (http.status == 200 && http.readyState == 4) {
                var data = JSON.parse(http.response);

                $('#area').animate({ height: '200px' });
                $("submit").removeClass("loading");
                $('table').fadeIn();
                $(this).removeClass("loading");
                // console.log(data);
                var weather = data.weather[0].description;
                var temperature = Math.round(data.main.temp_max - 272.5);
                document.getElementById("citys").innerHTML = city;
                var icon = "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'  >"
                document.getElementById("weathers").innerHTML = data.weather[0].description + " " + icon;

                document.getElementById("tem").innerHTML = temperature;

            }
        }
        var city = document.getElementById("city").value;
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=406038b64f014f7948945a21b558769a";
        http.open('get', url);
        http.send();
    });
});