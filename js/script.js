/******************************************
Full Stack JavaScript Techdegree Project 3
-----------------------------------------
##           Interactive Form           ##
-----------------------------------------
******************************************/

// Select and and add focus to first Name text field on load
$('#name').focus();

// Create text area to be displayed if 'other' option selected
const $otherInput = $('<input type="text" name="user-title" id="user-title" style="display:block">');
const $select = $('#title');
const $otherOption = $('#title option[value="other"]');
$select.on('change', function(e) {
  if (e.target.value === 'other') {
    console.log('nailed it again dave!')
    $select.append($otherInput);
    $otherInput.attr('style', 'display=block')
  };
});

// Author: David J McGarvey
// Date Created: 2019-08-14
// Date Updated: 2019-08-14
