# Master repo for SuperFeed [![Stories in Ready](https://badge.waffle.io/SuperFeed/SuperFeed.svg?label=ready&title=Ready)](http://waffle.io/SuperFeed/SuperFeed)

## Running the site

```
npm run dev
```

This loads a development version of the site.
The node server performing SSR is started at localhost:3001, while the webpack
build starts at port 3000. The node server is proxied with webpack-dev-server.
The API is started with `run-api.js` and mirrors the AWS lambda functions. The
API server listens at port 3002.

## Tech Stack
* React
* Redux
* MongoDB
* AWS Lambda
