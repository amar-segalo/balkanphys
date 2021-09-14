/*var countDownDate = new Date("2021 4, 8 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

*/


  var brojac = 1;
  function func()
  {
  
    var b = document.getElementById("navbar-container");
    var a = document.getElementById("icon");
    
  
  if(brojac == 0)
  {
    b.style.display = "none";
    brojac = 1;
  }
  
  else if(brojac == 1)
  {
    b.style.display = "block";
    brojac = 0;
  }
  
  };





