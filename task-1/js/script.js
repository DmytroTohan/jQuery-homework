//form & inputs
function create() {
  //create form
  var form = $('<form/>', {
               'action': '',
               'id': 'myForm',
               'name': 'form'
              }).appendTo('body');
  
  var nameArr = ['name', 'email', 'date', 'ip'];
  var holderArr = ['user name', 'user email', 'date', 'user IP'];
  //create inputs
  for (var i = 0; i < nameArr.length;  i++) {
    $('<input />', {
      'name': nameArr[i],
      'value': '',
      'placeholder': holderArr[i] 
    }).appendTo(form); 
    form.append($('<br />')); 
  }
  $('<input>', { 
    'type':'submit', 
    'value':'Send',
    'id':'sub'
  }).appendTo(form);
}
create();


//button valid
$('#sub').click(function () {
  $('#myForm').valid() ? alert('Thanks, form is valid') : alert('Data is incorrect');
});

//Validator
$('#myForm').validate({
  rules: {
    name: {
      required: true,
      nameCheck: true,
      minlength: 5,
      maxlength: 30
    },
    email: {
      required: true,
      email: true
    },
    date: {
      dateITA: true
    },
    ip: {
      ipCheck: true
    }
  },
  messages: {
  name: {
    required: '* Please enter your name',
    minlength: 'Your name must be at least 5 characters long',
    maxlength: 'Maximum 30 characters allowed'
  },
  email: '* Please enter your email',
  date: 'Specify your date - (dd/mm/yyyy - format)',
  ip: 'Specify your IP (0.0.0.0 - format)'
  }
});

//Custom rules for Validator

//user name
$.validator.addMethod('nameCheck', function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
}, 'Please specify your name (only letters and spaces are allowed)');

//date (used code instead adding 'additional-methods.js')
//https://github.com/jzaefferer/jquery-validation/blob/master/src/additional/dateITA.js
$.validator.addMethod('dateITA', function( value, element ) {
  var check = false,
  re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
  adata, gg, mm, aaaa, xdata;
  if ( re.test( value ) ) {
    adata = value.split( '/' );
    gg = parseInt( adata[ 0 ], 10 );
    mm = parseInt( adata[ 1 ], 10 );
    aaaa = parseInt( adata[ 2 ], 10 );
    xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
    if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
      check = true;
    } else {
      check = false;
    }
  } else {
    check = false;
  }
  return this.optional( element ) || check;
}, $.validator.messages.date);

//user IP
$.validator.addMethod('ipCheck', function(value, element) {
  return this.optional(element) || value == value.match(/^\d+\.\d+\.\d+\.\d+$/);
}, $.validator.messages.ip);

//style fix
$('input').css('margin', '0 5px 5px 0');