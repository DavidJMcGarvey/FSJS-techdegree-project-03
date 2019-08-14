/******************************************
Full Stack JavaScript Techdegree Project 3
-----------------------------------------
##           Interactive Form           ##
-----------------------------------------
******************************************/

// Select and and add focus to first Name text field on load
$('#name').focus();

// "Job Role" Section --> display text area if 'other' option selected
$('#title').on('change', function(e) {
  if (e.target.value === 'other') {
    console.log('nailed it again davey!')
    $('label[for="other-title"]').attr('style', 'display:block');
    $('#other-title').attr('style', 'display:block');
  } else {
    $('label[for="other-title"]').attr('style', 'display:none');
    $('#other-title').attr('style', 'display:none');
  }
});

// "T-Shirt" Section -->




// Author: David J McGarvey
// Date Created: 2019-08-14
// Date Updated: 2019-08-14
