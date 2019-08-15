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
    console.log('nailed it again davey!')
    $('label[for="other-title"]').attr('style', 'display:block');
    $('#other-title').attr('style', 'display:block');
  } else {
    $('label[for="other-title"]').attr('style', 'display:none');
    $('#other-title').attr('style', 'display:none');
  }
});

// "T-Shirt" Section -->
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
    console.log('js puns test');
  } else if (this.value === 'heart js') {
    $('option[value="tomato"]').show();
    $('option[value="steelblue"]').show();
    $('option[value="dimgrey"]').show();
    $('option[value="cornflowerblue"]').hide();
    $('option[value="darkslategrey"]').hide();
    $('option[value="gold"]').hide();
    console.log('heart js test');
  } else {
    $('option[value="cornflowerblue"]').hide();
    $('option[value="darkslategrey"]').hide();
    $('option[value="gold"]').hide();
    $('option[value="tomato"]').hide();
    $('option[value="steelblue"]').hide();
    $('option[value="dimgrey"]').hide();
  }
});



// Author: David J McGarvey
// Date Created: 2019-08-14
// Date Updated: 2019-08-14
