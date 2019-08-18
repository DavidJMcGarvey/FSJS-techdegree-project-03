/******************************************
Full Stack JavaScript Techdegree Project 3
-----------------------------------------
##           Interactive Form           ##
-----------------------------------------
******************************************/

// Select and and add focus to first Name text field on load
$('#name').focus();

// "Job Role" Section --> display text area if 'other' option selected
$('#title').on('change', function() {
  if (this.value === 'other') {
    $('label[for="other-title"]').attr('style', 'display:block');
    $('#other-title').attr('style', 'display:block');
  } else {
    $('label[for="other-title"]').attr('style', 'display:none');
    $('#other-title').attr('style', 'display:none');
  }
});

// "T-Shirt" Section --> colors only available after theme is selected
// TODO: Make this prettier, maybe use .each()?
$('#color').prepend(
  $(`<option
    value="colorless"
    selected="selected">
    Please Select a T-Shirt Theme</option>`)
  );
$('option[value="cornflowerblue"]').hide();
$('option[value="darkslategrey"]').hide();
$('option[value="gold"]').hide();
$('option[value="tomato"]').hide();
$('option[value="steelblue"]').hide();
$('option[value="dimgrey"]').hide();

$('#design').on('change', function() {
  if (this.value === 'js puns') {
    $('option[value="cornflowerblue"]').show();
    $('option[value="darkslategrey"]').show();
    $('option[value="gold"]').show();
    $('option[value="tomato"]').hide();
    $('option[value="steelblue"]').hide();
    $('option[value="dimgrey"]').hide();
  } else if (this.value === 'heart js') {
    $('option[value="tomato"]').show();
    $('option[value="steelblue"]').show();
    $('option[value="dimgrey"]').show();
    $('option[value="cornflowerblue"]').hide();
    $('option[value="darkslategrey"]').hide();
    $('option[value="gold"]').hide();
  } else {
    $('option[value="cornflowerblue"]').hide();
    $('option[value="darkslategrey"]').hide();
    $('option[value="gold"]').hide();
    $('option[value="tomato"]').hide();
    $('option[value="steelblue"]').hide();
    $('option[value="dimgrey"]').hide();
  }
});

// "Register" Section --> prevents user from overlapping activities
// TODO: Clean this s##t up too! Least DRY code ever! AAAHHH!!!
$('input[name="all"]').on('change', function() {
  if ($(this).is(':checked')) {
    $('input[name="js-frameworks"]').attr('disabled', true);
    $('input[name="js-libs"]').attr('disabled', true);
    $('input[name="express"]').attr('disabled', true);
    $('input[name="node"]').attr('disabled', true);
    $('input[name="build-tools"]').attr('disabled', true);
    $('input[name="npm"]').attr('disabled', true);
  } else {
    $('input[name="js-frameworks"]').attr('disabled', false);
    $('input[name="js-libs"]').attr('disabled', false);
    $('input[name="express"]').attr('disabled', false);
    $('input[name="node"]').attr('disabled', false);
    $('input[name="build-tools"]').attr('disabled', false);
    $('input[name="npm"]').attr('disabled', false);
  }
});
$('input[type="checkbox"]').on('change', function() {
  if ($(this).attr('name') !== 'all' && $(this).is(':checked')) {
    if ($(this).attr('data-day-and-time') === 'Tuesday 1pm-4pm') {
      $('input[data-day-and-time="Tuesday 1pm-4pm"]').not(this).attr('disabled', true);
      $('input[name="all"]').attr('disabled', true);
    }
  } else if ($(this).attr('name') !== 'all' && $(this).is(':not(:checked)')) {
    if ($(this).attr('data-day-and-time') === 'Tuesday 1pm-4pm') {
      $('input[data-day-and-time="Tuesday 1pm-4pm"]').not(this).attr('disabled', false);
      $('input[name="all"]').attr('disabled', false);
    }
  }
  if ($(this).attr('name') !== 'all' && $(this).is(':checked')) {
    if ($(this).attr('data-day-and-time') === 'Tuesday 9am-12pm') {
      $('input[data-day-and-time="Tuesday 9am-12pm"]').not(this).attr('disabled', true);
      $('input[name="all"]').attr('disabled', true);
    }
  } else if ($(this).attr('name') !== 'all' && $(this).is(':not(:checked)')) {
    if ($(this).attr('data-day-and-time') === 'Tuesday 9am-12pm') {
      $('input[data-day-and-time="Tuesday 9am-12pm"]').not(this).attr('disabled', false);
      $('input[name="all"]').attr('disabled', false);
    }
  }
  if ($(this).attr('name') !== 'all' && $(this).is(':checked')) {
    if ($(this).attr('data-day-and-time').includes('Wednesday')) {
      $('input[name="all"]').attr('disabled', true);
    }
  } else if ($(this).attr('name') !== 'all' && $(this).is(':not(:checked)')) {
    if ($(this).attr('data-day-and-time').includes('Wednesday')) {
      $('input[name="all"]').attr('disabled', false);
    }
  }
});

// "Payment" Section --> Payment options supply different options or messages
const $creditCardDiv = $('.credit-card');
const $payPalDiv = $('.credit-card').next().hide();
const $bitCoinDiv = $('.credit-card').next().next().hide();

$('option[value="select method"]').attr('disabled', true);
$('option[value="credit card"]').attr('selected', 'selected');

function paymentOption(payment) {
  if (payment === 'paypal') {
    $creditCardDiv.hide();
    $payPalDiv.show();
    $bitCoinDiv.hide();
  } else if (payment === 'bitcoin') {
    $creditCardDiv.hide();
    $payPalDiv.hide();
    $bitCoinDiv.show();
  } else if (payment === 'credit_card') {
    $creditCardDiv.show();
    $payPalDiv.hide();
    $bitCoinDiv.hide();
  }
}

$('#payment').on('change', function() {
  if (this.value === 'paypal') {
    paymentOption('paypal');
  } else if (this.value === 'bitcoin') {
    paymentOption('bitcoin');
  } else  if (this.value === 'credit card') {
    paymentOption('credit_card');
  }
});

// Form Validation

function isValidName(name) {
  return /^[a-z]+$/i.test(name);
}

function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

$('button:submit').on('click', function() {
  if ($('#name').value !== '') {
    console.log('Dave, you made it!')

  }
});




// Author: David J McGarvey
// Date Created: 2019-08-14
// Date Updated: 2019-08-15
