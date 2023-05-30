# Cypress.io app prepared for presentation

## About the repo
This is an app created for the purpose of the presentation. It is a simple HTML, CSS page with Bootstrap styles coming from CDN link.

## Files
* index.html - used for preparing presentation images and code snippets
* webpage.html - application used during the presentation
* cypress.config - custom Cypress configuration
* comments.json - a fixture file used as response body during intercept

## How to run
1. Clone the repo
2. Install dependencies with `yarn` or `npm install` 
3. To run the test, Cypress must have access to the page. The simplest solution (also used during live presentation) is to use VSCode plugin called "Live Server" (made by Ritwick Dey)
4. Run Cypress with `yarn cypress:open` or `npm run cypress:open`. If you encounter error "Sorry, we could not load: http://127.0.0.1:5500/webpage.html" your live server may not have started or runs on different port
5. Run Cypress in headless mode with `cypress:run`

It was not shown during presentation but if the test fails while running `cypress:run`, a JUnit style report and screenshots of errors should appear inside cypress directory.


> ## Docs  
> This is a good place to start with the docs - [Cypress get command](https://docs.cypress.io/api/commands/get)
