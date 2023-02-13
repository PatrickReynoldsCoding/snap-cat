# CatSnap a site to learn more about cats

[Click here to visit the site!](https://snap-5c6vd3k76-patrickreynoldscoding.vercel.app/)

[How I built this environment](#how-i-built-this-environment) |

## About

This is a simple one page website built with Next.js.
It's aim is to use a button to pull a cat fact from [https://catfact.ninja/#/Facts/](https://catfact.ninja/#/Facts/) and a cat image from [https://api.thecatapi.com/v1/images/search](https://api.thecatapi.com/v1/images/search) and present in a card.

## Technologies used

### Testing

- Cypress
- Jest
- Github Actions for CI

### Styling

- Sass
- Figma [Click here to see Figma Design file](https://www.figma.com/file/2Avg8gYm4astD7qN4cxads/Kittypedia?node-id=0%3A1&t=6G29p3HFnX7Ndu6v-0)

### Linting

- Prettier (VSCode Extension)
- Eslint
- Error Lens (VSCode Extension)

### Planning

- Figma Jam [Click here to see Figma Jam file](https://www.figma.com/file/KFcO9Q84bRAG9h9ribW9XC/Kittypedia?node-id=14%3A48&t=7Pc0lplwbEWBF5Bd-0)
- Github Projects [Click here to see Github Projects kanban board](https://github.com/users/PatrickReynoldsCoding/projects/8/views/1)

### Deployment

- Vercel

## Usage

Upon visiting the site, click the "New cat" button. this will generate a cat card. Keep clicking for more cards to appear.

## Development

### Planning style

Initial Planning:

<kbd><img src="./public/images/readme/styling-moodboards.png" /></kbd>

Styling moodboard:

<kbd><img src="./public/images/readme/styling-moodboards.png" /></kbd>

Figma catCard concepts:

<kbd><img src="./public/images/readme/styling-card-concepts.png" /></kbd>

Figma MVP mockup:

<kbd><img src="./public/images/readme/styling-mvp-mockup.png" /></kbd>

Figma planning needed html:

<kbd><img src="./public/images/readme/styling-html-planning.png" /></kbd>


### Planning Tests

#### Check for elements

1. Create exist tests for all this planned HTML (not cat-card-container and children).

#### Test functionality

1. Press button and cat-card-container and children should exist

(STRETCH) show multiple cat cards on multiple button presses

2. Cat button should be disabled for 2 seconds after click

```Cypress
// Rough plan
  cy.get('button').click();
  cy.get('button').should('be.disabled');
  cy.wait(2000);
  cy.get('button').should('not.be.disabled');
```

#### API

##### Unit

1. It should return a cat fact from the API

##### Integration

1. It should display the cat fact in HTML

##### E2E

1. it displays the cat fact and image'

```Cypress
// Rough plan
    cy.visit('/');

    cy.get('#cat-fact').should('contain', 'Did you know?');
    cy.get('#cat-image').should('exist');
```

## How to built this environment

### Next.js

`npx create-next-app .`

### install dependencies

`npm i sass jest cypress`

### Styling (Sass)

Add sass options to next.config.js

```javascript
/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
```

[Setup sass directories based on 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

[Download from here for easy setup](https://github.com/PatrickReynoldsCoding/sass-boilerplate-with-emotion-version)

Compile sass using:

`sass --watch sass/main.scss:styles/Home.module.css`

#### Preserve CSS hyphenated class names

Next.js uses Emotion-Library and imports styles as a JS object. This will throw an error with any css classnames that are hyphanated.

E.g:

```javascript

  <div className={styles.class-name} >

```

To prevent editing all your hyphenated class names, you can call them as an array element.

```javascript

  <div className={styles['cat-button']} >

```

### Testing (Jest & Cypress)

#### Jest

Add `"test": "jest"` to scripts in package.json

Create spec folder in root for any unit and integration tests

#### Cypress

Run to open wizard and setup scaffolding `npx cypress open`

Add baseUrl to cypress.config.js

```Javascript
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

#### CI

Create .github/workflow/ci.yml

This boilerplate code I've written will enable run Jest and Cypress tests upon each merge:

````Github Actions
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

env:
  NODE_VERSION: 14

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18]

    name: Node.js ${{ matrix.node-version }}
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: ${{ env.NODE_VERSION }}

    - name: Install dependencies
      run: |
        npm ci

    - name: Test with Jest
      run: |
        npm test

    - name: Checkout
      uses: actions/checkout@v3

    - name: Cypress run
      uses: cypress-io/github-action@v5
      with:
        start: npm run dev
        wait-on: 'http://localhost:3000'
        ```
````

## Contact

Email: [PatrickReynoldsCoding@gmail.com](https://mail.google.com/mail/u/0/?fs=1&to=patrickreynoldscoding@gmail.com&su=Hi%20Paddy&body=&tf=cm)

Linkedin: [Linkedin](https://www.linkedin.com/in/reynolds-patrick/)

Website: [PatrickReynolds.dev](https://www.patrickreynolds.dev/)
