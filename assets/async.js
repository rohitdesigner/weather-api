$(document).ready(function() {
    $('#submit').click(function() {
        //alert("hello");




        $("#submit").addClass("loading disabled");
        $("#area").fadeIn();
        // $('#area').animate({ height: '200px' });
        var http = new XMLHttpRequest;
        http.onreadystatechange = function() {
            console.log(http.readyState);
            if (http.status == 200 && http.readyState == 4) {
                var data = JSON.parse(http.response);
                var le = $('area').css('height') + 90;
                //$('#area').animate({ height: '200px' });
                // $("submit").removeClass("loading");
                $('table').fadeIn();
                $("#submit").removeClass("loading disabled");
                // console.log(data);
                document.getElementById("city").value = "";
                var weather = data.weather[0].description;
                var temperature = Math.round(data.main.temp_max - 272.5) + "<sup>o</sup> <b>C</b>";
                var icon = "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'  >"
                    //-------------
                $('tbody').append("<tr><td>" + city + "</td><td>" + temperature + "</td><td>" + weather + " " + icon + "</td></tr>");

            }
        }
        var city = document.getElementById("city").value;
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=406038b64f014f7948945a21b558769a";
        http.open('get', url);
        http.send();
    });
});
