Full Stack JavaScript Techdegree Project 3
-----------------------------------------
###          Interactive Form          ###
-----------------------------------------

Welcome to my project where you come for the form, but you stay for the interactivity!

**BASIC FEATURES**

This script takes a webpage built with HTML and CSS and adds interactivity to aid in the user experience and also verify that the data being submitted is valid. It only takes one piece of bad input to derail a whole project. Here are the key features:

- jQuery is linked to a CDN
- On page load, focus is on the initial "Name" field
- Job Role - "Other" option will display a text field
- T-Shirt - Colors only available per theme selection
- Register - Users cannot choose overlapping activities
- Payment - Payment selection hides the information about the other payment methods
- Form Validation - The following fields must be valid for form to submit:
  1. Name
  2. Email
  3. Activities (nothing selected is invalid)
  4. Credit Card number, Zip, and CVV
- Custom Form Validation messaging helps user know what revision
- Progressive Enhancement - User  can access form fields even if JavaScript is disabled
- Custom CSS used for error messaging
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


**Note to Reviewer**

First off, thanks for taking the time to review my project!! I am going for **Exceeds Expectations**. If you're reading this, This project is in the SLACK review stage before submission. Knowing this, here are some things I'd love some guidance on:

- DRY, DRY, DRY! I am aware of how much I repeated myself in the code. This attempt was to get functionality where I want it before a big refactoring challenge.

- My basic format follows along with instruction order but not necessarily best practices. i.e. Should I reformat to have all **const** declarations at the top, etc. or should I keep code in sections corresponding to each instruction?

- Have no mercy!! Break this thing apart so I can learn how to build it better!

- THANKS! YOU ROCK!!!


David J McGarvey 2019-08-21
