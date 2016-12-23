var timeLimit = 'December 31 2016 23:59:59 GMT+02:00';

//time
function timeLeft(time) {
  var timeDifference = Date.parse(time) - Date.parse(new Date());
  var day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hour = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  var minute = Math.floor((timeDifference / 1000 / 60) % 60);
  var second = Math.floor((timeDifference / 1000) % 60);
  return {
    'total': timeDifference,
    'days': day,
    'hours': hour,
    'minutes': minute,
    'seconds': second
  };
}
timeLeft(timeLimit);

//countdown
function clockInit(el, time) {
  function updateClock() {
    var timeDifference = timeLeft(time);

    $('.days').text(timeDifference.days);
    
    var h = $('.hours').text(timeDifference.hours);
    if(h.text().length <= 1) {
      h.text('0' + timeDifference.hours)
    }   
    
    var m = $('.minutes').text(timeDifference.minutes);
    if(m.text().length <= 1) {
      m.text('0' + timeDifference.minutes)
    }   
    
    var s = $('.seconds').text(timeDifference.seconds);
    if(s.text().length <= 1) {
      s.text('0' + timeDifference.seconds)
    }    
    
    if(timeDifference.total <= 0) {
      alert('Happy New Year!');
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock,1000);
}
clockInit('countdown', timeLimit);
