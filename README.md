# skellington-static

[![Build Status](https://travis-ci.org/Skellington-Closet/skellington-static.svg?branch=master)](https://travis-ci.org/Skellington-Closet/skellington-static)
[![Coverage Status](https://coveralls.io/repos/github/Skellington-Closet/skellington-static/badge.svg?branch=master)](https://coveralls.io/github/Skellington-Closet/skellington-static?branch=master)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Serve static files from your Skellington bot or Slack App.

## Why?

Serving static files out of your Slack app is a great way to host your "Add to Slack" button. It's also a quick way 
to make a static site about your app.

## Usage

`skellington-static` exports a function that takes two parameters: `filePath` and `route`.

- `filePath` (String, required) The file path to your static assets. This can be an absolute path, or a relative path 
relative to your Skellington bot entry point.

- `route` (String, required) The express route where static files will be served.

NOTE: If this is a single-team bot, you must pass a `port` when configuring Skellington, otherwise there will be no express
server to serve static assets from.
