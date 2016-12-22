var timeLimit = 'December 31 2016 23:59:59 GMT+02:00';

function timeLeft(time){
  var timeDifference = Date.parse(time) - Date.parse(new Date());
  var day = Math.floor(timeDifference/(1000*60*60*24));
  var hour = Math.floor((timeDifference/(1000*60*60)) % 24);
  var minute = Math.floor((timeDifference/1000/60) % 60);
  var second = Math.floor((timeDifference/1000) % 60);
  return {
    'total': timeDifference,
    'days': day,
    'hours': hour,
    'minutes': minute,
    'seconds': second
  };
}
timeLeft(timeLimit);


function clockInit(id, time){
  var clock = document.getElementById('countdown');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  
  function clockUpdate(){
    var timeDifference = timeLeft(time);
    daysSpan.innerHTML = timeDifference.days;
//    $(".days").text(timeDifference.days);
    hoursSpan.innerHTML = ('0' + timeDifference.hours).slice(-2);
//    var test = $(".hours").text(timeDifference.hours);
    minutesSpan.innerHTML = ('0' + timeDifference.minutes).slice(-2);
//    $(".minutes").text(timeDifference.minutes);
    secondsSpan.innerHTML = ('0' + timeDifference.seconds).slice(-2);
//    $(".seconds").text(timeDifference.seconds);
    if(timeDifference.total <= 0){
      alert('Happy New Year!');
      clearInterval(timeinterval);
    }
  }

  clockUpdate();
  var timeinterval = setInterval(clockUpdate,1000);
}

clockInit('countdown', timeLimit);


