# starwars-names

[![RichardHpa - starwars-names](https://img.shields.io/static/v1?label=RichardHpa&message=starwars-names&color=blue&logo=github)](https://github.com/RichardHpa/starwars-names)
[![stars - starwars-names](https://img.shields.io/github/stars/RichardHpa/starwars-names?style=social)](https://github.com/RichardHpa/starwars-names)
[![forks - starwars-names](https://img.shields.io/github/forks/RichardHpa/starwars-names?style=social)](https://github.com/RichardHpa/starwars-names)

[![Node.js CI](https://github.com/RichardHpa/starwars-names/workflows/Node.js%20CI/badge.svg)](https://github.com/RichardHpa/starwars-names/actions?query=workflow:"Node.js+CI")
[![codecov coverage](https://img.shields.io/codecov/c/github/RichardHpa/starwars-names.svg?style=flat-square)](https://codecov.io/github/RichardHpa/starwars-names)
[![GitHub release](https://img.shields.io/github/release/RichardHpa/starwars-names?include_prereleases=&sort=semver&color=blue)](https://github.com/RichardHpa/starwars-names/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

Creating a custom package to get a random name from Star Wars.

This library was developed by [Kent C Dodds](https://twitter.com/kentcdodds) as part of an
[egghead.io](http://egghead.io/) series called ["How to Write a JavaScript Library."](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)

## Installation

This package is distributed via npm:

```
npm i richardhpa-starwars-names
```

## Usage

```javascript
var names = require('starwars-names')

var allNames = names.all
var randomName = names.random()
var threeRandomNames = names.random(3)
var listNames = names.getList(3)
```

## License

Released under [MIT](/LICENSE) by [@RichardHpa](https://github.com/RichardHpa).
