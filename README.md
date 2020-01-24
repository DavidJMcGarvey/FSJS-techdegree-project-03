-----------------------------------------
#          Interactive Form          #
-----------------------------------------

Welcome to my project where you come for the form, but you stay for the interactivity!

## Application Description and Goals:

**BASIC FEATURES**

This script takes a webpage built with HTML and CSS and adds interactivity to aid in the user experience and also verify that the data being submitted is valid. It only takes one piece of bad input to derail a whole project. Here are the key features:

- jQuery is linked to a CDN.
- On page load, focus is on the initial "Name" field.
- Job Role - "Other" option will display a text field.
- T-Shirt - Colors only available per theme selection.
- Register - Users cannot choose overlapping activities. Additionally, a price total is displayed that is updated as you select the various activities.
- Payment - Payment selection hides the information about the other payment methods.
- Form Validation - The following fields must be valid for form to submit:
  1. Name
  2. Email
  3. Activities (nothing selected is invalid)
  4. Credit Card number, Zip, and CVV
- Custom Form Validation messaging helps user know what revision.
- Progressive Enhancement - User  can access form fields even if JavaScript is disabled.
- Custom CSS used for error messaging.
- Cross-Browser consistency... thank you very much jQuery :)

**EXTRA FEATURES**

- T-Shirt "Color" label is hidden unless Theme is selected
- Conditional Error Message - Upon submit:
    **If** credit card number is blank, message says "number required"
    **If** credit card number is filled in but invalid, message says "... between 13-16 characters required"
- Real-Time Error Message - Upon key press:
    **If** credit card number is too low, message says "too few numbers"
    **If** credit card number within correct range, message says "just right :)"
    **If** credit card number is too high, message says "too many numbers"

## Technologies:

1. JavaScript
2. Public API
3. Fetch Request
4. Asychronous Programming

## Screenshots:
![img](https://user-images.githubusercontent.com/42125523/72555958-8484f080-3852-11ea-9809-c8d1b57a87b7.png)
![img](https://user-images.githubusercontent.com/42125523/72555960-8484f080-3852-11ea-8d19-9112dd85c0f4.png)
![img](https://user-images.githubusercontent.com/42125523/72555961-8484f080-3852-11ea-84bc-538dafef62e2.png)
![img](https://user-images.githubusercontent.com/42125523/72555962-851d8700-3852-11ea-9ce3-68d255d60d5d.png)

Author: David J McGarvey  
Created: 2019-08-22  
Updated: 2020-01-24
