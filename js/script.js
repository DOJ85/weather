"use strict"



//    ---                                                  O p e n    W e a t h e r    J S O N

$(document).ready(function() {
  $('#submitWeather').click(function(){
    var city = $('#city').val();
    if(city != ''){
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=62133f60aa740596c21f37130a69970c",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          var widget = show(data);
          $("#show").html(widget);
          $("#city").val('');
        }
      });
    } else {
      alert('Field cannot be empty');
    }
  });
});



//    ---                                                          M i c r o p h o n e

function startConverting() {
  if('webkitSpeechRecognition' in window){
    var speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = false; //False?
    speechRecognizer.interimResults = false; //False
    speechRecognizer.lang = 'fr-FR';
    speechRecognizer.start();

    var finalTranscripts = '';

    speechRecognizer.onresult = function(event){
      var interimTranscripts = '';
      for(var i = event.resultIndex; i < event.results.length; i++){
        var transcript = event.results[i][0].transcript;
        transcript.replace("\n", "<br>");
        if(event.results[i].isFinal){
          finalTranscripts += transcript;

        }else{
          interimTranscripts += transcript;
          console.log(interimTranscripts + transcript);
        }
      }
      var r = finalTranscripts + interimTranscripts;
      console.log(finalTranscripts + interimTranscripts);
      //var filtered = r.replace(/quel temps fait-il à/g, "");
      var filtered = r.replace(new RegExp ('quel temps fait-il à' || 'comment est le temps à'), "");


      console.log(filtered);
      document.getElementById("city").value = filtered;
      document.getElementById("submitWeather").click();
    };

    speechRecognizer.onerror = function (event) {
    };
  }else{
    alert('Your browser is not supported. If google chrome, please upgrade');
  }
}


function activatedMic(){
  document.getElementById('mic').style.color = "white";
  startConverting();
}


function activatedMic(){
  document.getElementById('mic').style.color = "white";
  startConverting();
}


//    ---                                                        E n t e r    b u t t o n

document.getElementById("city")
.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("submitWeather").click();
  }
});



//    ---                                                  W e a t h e r    I n f o r m a t i o n

var timeStampUTC = Math.floor(new Date().getTime() / 1000);

function timer() {
  timeStampUTC++;
}

var i = setInterval( timer, 1000 );



//    G o o g l e    A P I    T i m e z o n e

function show(data){

  var gpsCoord = data.coord.lat + data.coord.lon;
  //  document.getElementById('horloge').location.reload(true);

  $(document).ready( () => {
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/timezone/json?location=" + data.coord.lat + "," + data.coord.lon + "&timestamp=" + timeStampUTC + "&key=AIzaSyDiPk7ZGdrEUQ8SJIpw0AcFP8vcPUxi2o8",
      type: "GET",
      dataType: "json",
      success: (data) => {
        var timeUp = setInterval(localHour, 1000);
        function localHour(timeUp) {
          var clock = timeStampUTC + data.dstOffset + data.rawOffset - 7200;
          var timeStamp = clock,
          date = new Date(timeStamp*1000),
          heure = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();

          if (heure < "10") {
            heure = "0" + heure;
          }
          if (min < "10") {
            min = "0" + min;
          }
          if (sec < "10") {
            sec = "0" + sec;
          }

          var result = "<span class='color'>" + heure + " : " + min + "  " + "</span><span class='sec color'>" + sec + "</span>";

          return document.getElementById('horloge').innerHTML = result;
        }
      }
    });
  });

  //

  return  "<h3 class='color'>Current Weather for: <span class='color'>" + data.name + ", " + data.sys.country + "</span></h3>" +
  "<h3 class='color'>Temperature: <span class='color'>" + data.main.temp + "°C</span></h3>" +
  "<h3 class='color'>Weather: <span class='color'>" + data.weather[0].description + "</span></h3>" +
  "<h3 class='color'>Humidity: <span class='color'>" + data.main.humidity + "%</span></h3>" +
  "<h3 class='color'>Wind speed: <span class='color'>" + (data.wind.speed * 3.6).toFixed(2) + " Km/h</span></h3>"

}



//    ---                                                    R a n d o m    B a c k g r o u n d

function randombg(){
  var random= Math.floor(Math.random() * 183) + 0;
  var bigSize = ["url('image/bg1.jpg')","url('image/bg2.jpg')","url('image/bg3.jpg')","url('image/bg4.jpg')","url('image/bg5.jpg')","url('image/bg6.jpg')","url('image/bg7.jpg')","url('image/bg8.jpg')",
                "url('image/bg9.jpg')","url('image/bg10.jpg')","url('image/bg11.jpg')","url('image/bg12.jpg')","url('image/bg13.jpg')","url('image/bg14.jpg')","url('image/bg15.jpg')",
                "url('image/bg16.jpg')","url('image/bg17.jpg')","url('image/bg18.jpg')","url('image/bg19.jpg')","url('image/bg20.jpg')","url('image/bg21.jpg')","url('image/bg22.jpg')",
                "url('image/bg23.jpg')","url('image/bg24.jpg')","url('image/bg25.jpg')","url('image/bg26.jpg')","url('image/bg27.jpg')","url('image/bg28.jpg')","url('image/bg29.jpg')",
                "url('image/bg30.jpg')","url('image/bg31.jpg')","url('image/bg32.jpg')","url('image/bg33.jpg')","url('image/bg34.jpg')","url('image/bg35.jpg')","url('image/bg36.jpg')",
                "url('image/bg37.jpg')","url('image/bg38.jpg')","url('image/bg39.jpg')","url('image/bg40.jpg')","url('image/bg41.jpg')","url('image/bg42.jpg')","url('image/bg43.jpg')",
                "url('image/bg44.jpg')","url('image/bg45.jpg')","url('image/bg46.jpg')","url('image/bg47.jpg')","url('image/bg48.jpg')","url('image/bg49.jpg')","url('image/bg50.jpg')",
                "url('image/bg51.jpg')","url('image/bg52.jpg')","url('image/bg53.jpg')","url('image/bg54.jpg')","url('image/bg55.jpg')","url('image/bg56.jpg')","url('image/bg57.jpg')",
                "url('image/bg58.jpg')","url('image/bg59.jpg')","url('image/bg60.jpg')","url('image/bg61.jpg')","url('image/bg62.jpg')","url('image/bg63.jpg')","url('image/bg64.jpg')",
                "url('image/bg65.jpg')","url('image/bg66.jpg')","url('image/bg67.jpg')","url('image/bg68.jpg')","url('image/bg69.jpg')","url('image/bg70.jpg')","url('image/bg71.jpg')",
                "url('image/bg72.jpg')","url('image/bg73.jpg')","url('image/bg74.jpg')","url('image/bg75.jpg')","url('image/bg76.jpg')","url('image/bg77.jpg')","url('image/bg78.jpg')",
                "url('image/bg79.jpg')","url('image/bg80.jpg')","url('image/bg81.jpg')","url('image/bg82.jpg')","url('image/bg83.jpg')","url('image/bg84.jpg')","url('image/bg85.jpg')",
                "url('image/bg86.jpg')","url('image/bg87.jpg')","url('image/bg88.jpg')","url('image/bg89.jpg')","url('image/bg90.jpg')","url('image/bg91.jpg')","url('image/bg92.jpg')",
                "url('image/bg93.jpg')","url('image/bg94.jpg')","url('image/bg95.jpg')","url('image/bg96.jpg')","url('image/bg97.jpg')","url('image/bg98.jpg')","url('image/bg99.jpg')",
                "url('image/bg100.jpg')","url('image/bg101.jpg')","url('image/bg102.jpg')","url('image/bg103.jpg')","url('image/bg104.jpg')","url('image/bg105.jpg')","url('image/bg106.jpg')",
                "url('image/bg107.jpg')","url('image/bg108.jpg')","url('image/bg109.jpg')","url('image/bg110.jpg')","url('image/bg111.jpg')","url('image/bg112.jpg')","url('image/bg113.jpg')",
                "url('image/bg114.jpg')","url('image/bg115.jpg')","url('image/bg116.jpg')","url('image/bg117.jpg')","url('image/bg118.jpg')","url('image/bg119.jpg')","url('image/bg120.jpg')",
                "url('image/bg121.jpg')","url('image/bg122.jpg')","url('image/bg123.jpg')","url('image/bg124.jpg')","url('image/bg125.jpg')","url('image/bg126.jpg')","url('image/bg127.jpg')",
                "url('image/bg128.jpg')","url('image/bg129.jpg')","url('image/bg130.jpg')","url('image/bg131.jpg')","url('image/bg132.jpg')","url('image/bg133.jpg')","url('image/bg134.jpg')",
                "url('image/bg135.jpg')","url('image/bg136.jpg')","url('image/bg137.jpg')","url('image/bg138.jpg')","url('image/bg139.jpg')","url('image/bg140.jpg')","url('image/bg141.jpg')",
                "url('image/bg142.jpg')","url('image/bg143.jpg')","url('image/bg144.jpg')","url('image/bg145.jpg')","url('image/bg146.jpg')","url('image/bg147.jpg')","url('image/bg148.jpg')",
                "url('image/bg149.jpg')","url('image/bg150.jpg')","url('image/bg151.jpg')","url('image/bg152.jpg')","url('image/bg153.jpg')","url('image/bg154.jpg')","url('image/bg155.jpg')",
                "url('image/bg156.jpg')","url('image/bg157.jpg')","url('image/bg158.jpg')","url('image/bg159.jpg')","url('image/bg160.jpg')","url('image/bg161.jpg')","url('image/bg162.jpg')",
                "url('image/bg163.jpg')","url('image/bg164.jpg')","url('image/bg165.jpg')","url('image/bg166.jpg')","url('image/bg167.jpg')","url('image/bg168.jpg')","url('image/bg169.jpg')",
                "url('image/bg170.jpg')","url('image/bg171.jpg')","url('image/bg172.jpg')","url('image/bg173.jpg')","url('image/bg174.jpg')","url('image/bg175.jpg')","url('image/bg176.jpg')",
                "url('image/bg177.jpg')","url('image/bg178.jpg')","url('image/bg179.jpg')","url('image/bg180.jpg')","url('image/bg181.jpg')","url('image/bg182.jpg')","url('image/bg183.jpg')"
];
document.getElementById("random").style.backgroundImage=bigSize[random];
}
