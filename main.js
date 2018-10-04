// Sidenav
const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transistion: 500,
        interval: 6000
    });

// Autocomplete
const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
            "Aruba": null,
            "Cancun Mexico": null,
            "Hawaii": null,
            "Florida": null,
            "Jamaca": null,
            "Puerto Rico": null,
            "California": null,
            "Maui": null,
            "Paris": null,
            "Bangkok": null,
            "Punta Cuna": null,
            "Toronto": null,
            "New York": null,
            "Tokyo": null,
            "Dubai": null,
            "Mombasa": null,
            "Sydney": null,
            "Chicago":  null,
            "Las Vegas": null
        }
    });







// Timer
document.getElementById('timer').innerHTML =
  20 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
