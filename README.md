# React/Redux/Webpack Boilerplate

## About

This is the canonical reference for libraries and tooling used across the MapMy and Record web platforms. It is also a starting point for quickly getting an app running with React, Redux and Webpack.

- [React](https://github.com/facebook/react) as the View engine
- [Redux](https://github.com/reactjs/redux) as the Flux implementation
- [Webpack](http://webpack.github.io/) to manage bundling, minifying, fingerprinting and more
- [CSS Modules](https://github.com/css-modules/css-modules) for style
- [Babel](https://babeljs.io/) as the transpiler to write ES2015+
- [ESLint](http://eslint.org/) to check for common erroneous patterns and stylistic issues in source code
- [Express](expressjs.com) as the web server
- [Redux Dev Tools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) debugging in development and production
- [axios](https://github.com/mzabriskie/axios) - for data fetching on the client and server, through axios.

## Usage

### Install Docker
* [Docker for Mac](https://docs.docker.com/docker-for-mac/)

### Install Chrome Redux Dev Tools Extension (optional)
This [chrome extension](https://github.com/zalmoxisus/redux-devtools-extension) allows you to run redux dev tools in
development or production. Redux dev tools allow you to inspect how state changes over time and more.
Read more about redux dev tools [here](https://github.com/gaearon/redux-devtools).

### Local Development
`$ docker-compose up local`
