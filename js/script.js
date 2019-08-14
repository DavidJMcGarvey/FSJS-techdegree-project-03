/******************************************
Full Stack JavaScript Techdegree Project 3
-----------------------------------------
##           Interactive Form           ##
-----------------------------------------
******************************************/

// Select and and add focus to first Name text field on load
$('#name').focus();

// Create text area to be displayed if 'other' option selected
const $otherInput = $('<input type="text" name="user-title" id="user-title" style="display:none">');
const $otherOption = $('option[value="other"]');
$otherOption.on('select', function() {
  alert('nailed it');
});

// Author: David J McGarvey
// Date Created: 2019-08-14
// Date Updated: 2019-08-14
