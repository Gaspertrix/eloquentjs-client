# EloquentJs client library
[![API docs](https://doc.esdoc.org/github.com/parsnick/eloquentjs-client/badge.svg)](https://doc.esdoc.org/github.com/parsnick/eloquentjs-client/)
[![Build Status](https://travis-ci.org/parsnick/eloquentjs-client.svg?branch=master)](https://travis-ci.org/parsnick/eloquentjs-client)
[![Coverage Status](https://coveralls.io/repos/parsnick/eloquentjs-client/badge.svg?branch=master&service=github)](https://coveralls.io/github/parsnick/eloquentjs-client?branch=master)

*EloquentJs* is a javascript implementation of the [Eloquent ORM](https://laravel.com/docs/5.1/eloquent) from Laravel. This repo holds the source for the client-side component which provides the familiar Eloquent API in the browser. For more about EloquentJs, check out [parsnick.github.io/eloquentjs](http://parsnick.github.io/eloquentjs).

## Relation to other packages

The `parsnick/eloquentjs` package for Laravel, available via Composer, includes a pre-built copy of this library. If you just want to use EloquentJs, head over to the [eloquentjs repo](https://github.com/parsnick/eloquentjs) and follow the **Quickstart** guide.

If you want to contribute, view the source, or customise the build, carry on.


## Documentation

API documentation exists at [doc.esdoc.org](https://doc.esdoc.org/github.com/parsnick/eloquentjs-client/).

User-friendly documentation for usage of this library exists at [parsnick.github.io/eloquentjs/client](http://parsnick.github.io/eloquentjs/client/).


## Changelog
#### 2.0
* replaced browserify with rollup for ES6 module consumers
* simplified `Connection` interface

## Contributing

As a new project, no formal contribution guide exists but feel free to open issues and pull requests.
For anything related to the companion PHP package, please use [`parsnick/eloquentjs`](https://github.com/parsnick/eloquentjs).


## License

MIT
