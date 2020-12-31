# TodoMVC built with Vue 3 Composition Api and Vuex

[![Build Status](https://travis-ci.com/blacksonic/todomvc-vue-composition-api.svg?branch=master)](https://travis-ci.com/blacksonic/todomvc-vue-composition-api)

The well-known TodoMVC built with Vue 3 Composition Api and Vuex in a structured and testable way.

![TodoMVC Vue](./images/screenshot.png "TodoMVC Vue")

This is an open-source project forked from [blacksonic's example](https://codesandbox.io/s/github/blacksonic/todomvc-vue-composition-api).

## Concepts and tools covered

- [Vue CLI](https://cli.vuejs.org/)
- [Composition Api](https://composition-api.vuejs.org/#summary)
- [Vuex](https://vuex.vuejs.org/)
- [Unit Testing](https://vue-test-utils.vuejs.org/)
- [E2E Testing](https://www.cypress.io/)

## Usage

After installing the dependencies the following NPM scripts become available:

- `start`: starts the application in development mode on [http://localhost:9000](http://localhost:9000)
- `build`: bundles the application for production into the `dist` folder
- `test`: runs unit and E2E tests
- `test:unit`: runs unit tests with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) in the `src` folder suffixed with `*.spec.js`
- `test:e2e`: runs E2E tests with [Cypress](https://www.cypress.io/) in the `tests/e2e` folder suffixed with `*.spec.js`
- `format`: formats the code with [Prettier](https://prettier.io/) within the `src` folder
- `lint`: lint files with [ESLint](https://eslint.org/) based on [Airbnb's styleguide](https://github.com/airbnb/javascript) and the Prettier config

## Component architecture

![Architecture](./images/architecture.png)

Application is compatible with [Vue devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

## What we're looking for

We don't expect you to know everything about this codebase, so please don't sweat it! If you happen to know it all, awesome. If not, that's cool, too. We welcome all levels of experience. What we're looking for is a _conversation_ with you about the code.

What does that entail? It could be anything you'd like to talk about! You steer the conversation and let us know what your thoughts are. We'll ask you questions to understand what your thought process is. If you're really stuck, here are some things that we could discuss:

- Explain how a component works
- Explain how the store works
- Walk us through a unit test
- Talk about how the architecture is set up
- Discuss the state of accessibility in the app
- Discuss the style in the application
- What could you do to add or improve this app?
- Anything else that comes to mind!

Let's talk through as much of it as you'd like and are comfortable with. It's just a conversation to gauge where you're at and see how you approach problems. No gotcha's, nothing tricky.

Feel free to get the repo running locally if you'd like. Walking through the files is fine, too.

Good luck, and talk to you soon!
