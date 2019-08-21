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
$('#colors-js-puns').hide();
$('option[value="cornflowerblue"]').hide();
$('option[value="darkslategrey"]').hide();
$('option[value="gold"]').hide();
$('option[value="tomato"]').hide();
$('option[value="steelblue"]').hide();
$('option[value="dimgrey"]').hide();

$('#design').on('change', function() {
  if (this.value === 'js puns') {
    $('#colors-js-puns').show();
    $('option[value="cornflowerblue"]').show();
    $('option[value="darkslategrey"]').show();
    $('option[value="gold"]').show();
    $('option[value="tomato"]').hide();
    $('option[value="steelblue"]').hide();
    $('option[value="dimgrey"]').hide();
  } else if (this.value === 'heart js') {
    $('#colors-js-puns').show();
    $('option[value="tomato"]').show();
    $('option[value="steelblue"]').show();
    $('option[value="dimgrey"]').show();
    $('option[value="cornflowerblue"]').hide();
    $('option[value="darkslategrey"]').hide();
    $('option[value="gold"]').hide();
  } else {
    $('#colors-js-puns').hide();
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

// Form validation section

// Eror message creation and placement
const $errorMsgMain = $("<span class=\"error\">**Make sure to fill in all fields corectly, and don\'t forgot to <u>Register for Activites</u></span>").hide();
$('form').prepend($errorMsgMain);

const $errorMsgName = $("<span class=\"error\"> **Name required</span>").hide();
$('label[for="name"]').append($errorMsgName);

const $errorMsgMail = $("<span class=\"error\"> **Email required</span>").hide();
$('label[for="mail"]').append($errorMsgMail);

const $errorMsgCheckbox = $("<span class=\"error\"> **Registration required</span>").hide();
$('.activities').append($errorMsgCheckbox);

const $errorMsgCardEmpty = $("<span class=\"error\"> **Credit Card Number required</span>").hide();
$('label[for="cc-num"]').append($errorMsgCardEmpty);

const $errorMsgCardFilled = $("<span class=\"error\"> **Credit Card Number must be between 13-16 characters long</span>").hide();
$('label[for="cc-num"]').append($errorMsgCardFilled);

const $errorMsgZip = $("<span class=\"error\"> **Zip required</span>").hide();
$('label[for="zip"]').append($errorMsgZip);

const $errorMsgCVV = $("<span class=\"error\"> **CVV required</span>").hide();
$('label[for="cvv"]').append($errorMsgCVV);

// Regex check functions
function isValidName(name) {
  return /^[a-z]+$/i.test(name);
}
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
function isValidCC(card) {
  return /[0-9]{13,16}/.test(card);
}
function isValidZip(zip) {
  return /[0-9]{5}/.test(zip);
}
function isValidCVV(cvv) {
  return /[0-9]{3}/.test(cvv);
}

// Validation on submit button click
$('button:submit').on('click', function(e) {
  // Name validity check
  const $nameValue = $('#name').val();
  const $nameField = $('#name')[0];
  if (isValidName($nameValue)) {
    $nameField.setCustomValidity("");
  } else {
    e.preventDefault();
    $errorMsgName.show();
    $nameField.setCustomValidity("Must enter name");
  }

  // Email validity check
  const $emailValue = $('#mail').val();
  const $emailField = $('#mail')[0];
  if (isValidEmail($emailValue)) {
    $emailField.setCustomValidity("");
  } else {
    e.preventDefault();
    $errorMsgMail.show();
    $emailField.setCustomValidity("Must enter email");
  }

  // Checkbox checked check :)
  if ($(':checkbox:checked').length !== 0) {
    $('.activities')[0].setCustomValidity("");
  } else {
    e.preventDefault();
    $errorMsgCheckbox.show();
    $('.activities')[0].setCustomValidity("Must check at least one box");
  }

  // Payment authentication
  const $creditValue = $('#cc-num').val();
  const $creditField = $('#cc-num')[0];
  const $zipValue = $('#zip').val();
  const $zipField = $('#zip')[0];
  const $cvvValue = $('#cvv').val();
  const $cvvField = $('#cvv')[0];

  if ($('#payment').val() === 'credit card') {
    if (isValidCC($creditValue)) {
      $creditField.setCustomValidity("");
    } else if ($creditValue.length !== 0) {
      e.preventDefault();
      $errorMsgCardFilled.show();
      $creditField.setCustomValidity("Card numbers are between 13-16 characters");
    } else {
      e.preventDefault();
      $errorMsgCardEmpty.show()
      $creditField.setCustomValidity("Card number required");
    } if (isValidZip($zipValue)) {
        $zipField.setCustomValidity("");
    } else {
      e.preventDefault();
      $errorMsgZip.show();
      $zipField.setCustomValidity("Zip codes are 5-digits long");
    } if (isValidCVV($cvvValue)) {
        $cvvField.setCustomValidity("");
    } else {
      e.preventDefault();
      $errorMsgCVV.show();
      $cvvField.setCustomValidity("CVV is a 3-digits number");
    }
  } else if ($('#payment').val() === 'paypal') {
    $creditField.setCustomValidity("");
    $zipField.setCustomValidity("");
    $cvvField.setCustomValidity("");
  } else if ($('#payment').val() === 'bitcoin') {
    $creditField.setCustomValidity("");
    $zipField.setCustomValidity("");
    $cvvField.setCustomValidity("");
  }

  // Form is submitted if all input is valid, error  appears at top of page otherwise
  if ($('input:invalid').length === 0) {
    $('form').submit();
  } else {
    $errorMsgMain.show();
  }
});

// Author: David J McGarvey
// Date Created: 2019-08-14
// Date Updated: 2019-08-21
