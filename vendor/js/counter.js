// add this line in your html and add an id to your html tag like <p id="counter"></p>
//<script src="js/counter.js"></script>

// Set the date we're counting down to
var countDownDate = new Date("sep 05, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="counter"
  document.getElementById("counter").innerHTML = days + " Days " + hours + " Hour "
  + minutes + " Minutes " + seconds + " Seconds ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "Event Started";
  }
}, 1000);
