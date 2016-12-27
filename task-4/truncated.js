$.fn.trunc = function(max) {
  var msg = $(this).text();
  var short = msg.substr(0, max);

  if (msg.length > max) {
    $(this).text(short).append('<span class="more" style="cursor: pointer">...</span>');
  } else {
    $(this).text(msg);
  }

  $('body').on('click', '.more', function() {
    $(this).parent().text(msg).append('<span class="less" style="cursor: pointer">..</span>');
  });

  $('body').on('click', '.less', function() {
    $(this).parent().text(msg.substr(0, max)).append('<span class="more">...</span>');
  });
};

//$('.truncated').trunc(20);
//$('p').trunc(20);
//$('div #trun').trunc(30);
//$('#trunc').trunc(50);