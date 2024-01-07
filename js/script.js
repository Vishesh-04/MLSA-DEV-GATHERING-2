
// var countDownDate = new Date('JAN 23, 2024 09:00:00').getTime();
// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   document.getElementById('tdays').innerHTML = days;
//   document.getElementById('thours').innerHTML = hours;
//   document.getElementById('tmin').innerHTML = minutes;
//   document.getElementById('tsec').innerHTML = seconds;

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById('timer').innerHTML = 'Event is finished';
//   }
// }, 1000);

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("March , 2024 09:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText =
      Math.floor(distance / day) > 0 ? Math.floor(distance / day) : 0),
      (document.getElementById("hours").innerText =
        Math.floor((distance % day) / hour) > 0
          ? Math.floor((distance % day) / hour)
          : 0),
      (document.getElementById("minutes").innerText =
        Math.floor((distance % hour) / minute) > 0
          ? Math.floor((distance % hour) / minute)
          : 0),
      (document.getElementById("seconds").innerText =
        Math.floor((distance % minute) / second) > 0
          ? Math.floor((distance % minute) / second)
          : 0);

  }, second);
