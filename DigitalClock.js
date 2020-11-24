window.setInterval(updateClock,1000);

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";

  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours -= 12;
  }
  if (seconds < 10) {
    seconds += "0";
  }
  if (minutes < 10) {
    minutes += "0";
  }

  var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
  document.getElementById('clock').innerText = clockTime;
};
