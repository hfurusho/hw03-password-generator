# Password Generator

## About

With the amount of personal data stored on the cloud today, having a strong password is important to keep your information out of unwanted hands. This application eases the process by generating a random password so that you don't have to think much about it or re-use similar passwords with minor variations. In addition to having a strong password, many websites and applications provide a way to enable 2-factor authorization. You may also be interested in using a password manager so that you only have to remember a single (strong) password.

## Details

Upon loading, the user will be prompted with questions asking about the password requirements which includes:

- the length,
- numeric characters,
- lowercase character,
- uppercase characters, and
- special characters.

A random password will then appear in the textbox. The user can then choose to copy the password, generate another one, or reset the password requirements. Resetting the password requirements will bring up prompts for the user. There is also a button to show the options in a box below. The user can then change the password length via the slider or input textbox and check the boxes for the character types.

## Possible Future Features

- Check the password to insure that at least one character of each character type chosen is included in the password.
- Option to not allow (or limit) repeated characters.

## Technologies Used

This application was built with basic html, css, and javascript. Bootstrap was also used to aid in responsiveness.

## Homework Notes

I didn't like the idea that the user was prompted for password requirements and so I implemented the options area. This gave me more practice with working with event listeners and also with bootstrap. I kept the prompts in just for the sake of it. In addition, I added the option to reset the password requirements without having to reload that page.
