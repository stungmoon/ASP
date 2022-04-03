let countDownDate = new Date("Jun 23, 2022 12:00:00").getTime();

function renderDate() {
  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours
  document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
}

renderDate()

// Update the countdown every second
let updateCountdown = setInterval(function() {
    renderDate()
}, 1000);