<h1 align="center">Welcome to React App Boilerplate 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kothing/react-app-boilerplate/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="http://commitizen.github.io/cz-cli/" target="_blank">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
</p>

> Template for advanced react applications.

### 🏠 [Source](https://github.com/kothing/react-app-boilerplate)

### 🏠 [Demo](https://react-app-boilerplate.now.sh/)

## Project Goal

I am a professional Frontend Developer based in Germany. My goal with this project is to create an advanced template for
react applications. On the way I hope to learn as much as I can about **react** and the **typescript**/**javascript**
ecosystem.

## Usage Guide

### Install

```sh
npm install
```

### Usage

```sh
npm run start
```

### Run tests

```sh
npm run test
```

### Cut a new release

```sh
npm run release
```

## Git Workflow

### Development

    develop
    o
    |           feature/cool-name
    o---------->o
    |           |
    o           o
    |           |
    o<---[PR]---o
    .
    .
    .           bugfix/severe-bug-name
    o---------->o
    |           |
    o           o
    |           |
    o<---[PR]---o
    .
    .
    .

### Releases

We use "Semantic Versioning" `major.minor.patch` for releases: https://semver.org/

`master` branch should always be stable and deployable.

`release` branches are for new major/minor versions (patch=0), e. g. `1.1.0`, `1.2.0`, `2.0.0`

`hotifx` branches are for new patch versions, e. g. `1.2.1`, `1.2.2`, `1.2.3`

(`release` branches may be skipped for small teams -> use `master` instead)

    develop                         master
    o                               .
    |           release/1.0.0       .
    o---------->o                   .               // prepare release, e. g. bump version in code
    .           |                   .
    .           o                   .
    .           |                   .
    o<---[PR]---o-------[PR]------->o tag=v1.0.0
    .                               |
    .                               |
    .           hotfix/name         |
    .           o<------------------+
    .           |                   |
    .           o                   |               // prepare release, e. g. bump version in code
    .           |                   |
    o<---[PR]---o-------[PR]------->o tag=v1.0.1
    .
    .
    .

### Bumping Version

Use the `npm run release` command for releasing.

This command uses `standard-version` and determines based on the current version number and your commit history which
version is appropriate for the next release.

## Author

👤 **kothing**

- Github: [@kothing](https://github.com/kothing)

## 🤝 Contributing

Take a look at the [contributing guide](https://github.com/kothing/react-app-boilerplate/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## Changelog

Take a look at the [changelog](https://github.com/kothing/react-app-boilerplate/blob/master/CHANGELOG.md). This project
uses [commitizen](http://commitizen.github.io/cz-cli/), see
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 📝 License

Copyright &copy; 2020 [kothing](https://github.com/kothing).<br /> This project is
[MIT](https://github.com/kothing/react-app-boilerplate/blob/master/LICENSE) licensed.
