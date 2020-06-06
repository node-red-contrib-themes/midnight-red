# Midnight Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![NPM Shield][npm-shield]][npm-package]

**THIS IS A DEVELOPMENT VERSION FOR NODE-RED 1.1.X.**

**FOR THE CURRENT PRODUCTION VERSION CHECK THE [`LATEST`][latest-tag] TAG ON NPM
OR THE [`MASTER`][master-branch] BRANCH ON GITHUB.**

## About

A dark theme for [Node-RED][node-red] based on the
[midnight theme][ha-midnight-theme] for [Home Assistant][home-assistant].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/midnight-red/master/images/screenshot.png)

## Install

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Install this package.

```shell
npm install @node-red-contrib-themes/midnight-red@next
```

Add the following to the `editorTheme` section of your `settings.js`.

```js
editorTheme: {
    page: {
        css: "<HOME>/.node-red/node_modules/@node-red-contrib-themes/midnight-red/theme.css"
    }
}
```

Replace `<HOME>` with the home directory of the user running Node-RED. For
example, `/home/username`.

For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

Restart Node-RED.

Enjoy!

## Update

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Update this package.

```shell
npm update @node-red-contrib-themes/midnight-red@next
```

Reload the Node-RED page on the web browser.

## Acknowledgments

- [Sebastian Raff][hobbyquaker] - for the inspiration and help in creating the
NPM package for this theme.
- [Ristomatti Airo][ristomatti] - for his amazing [theme][solarized-dark-gray-theme] on which major
readability improvements were based.

## License

[MIT][license]

[commits-shield]: https://img.shields.io/github/commit-activity/y/node-red-contrib-themes/midnight-red.svg
[commits]: https://github.com/node-red-contrib-themes/midnight-red/commits/master
[ha-midnight-theme]: https://community.home-assistant.io/t/midnight-theme/28598
[hobbyquaker]: https://github.com/hobbyquaker
[home-assistant]: https://home-assistant.io
[last-commit-shield]: https://img.shields.io/github/last-commit/node-red-contrib-themes/midnight-red.svg
[latest-tag]: https://www.npmjs.com/package/node-red-contrib-theme-midnight-red/v/latest
[license]: https://github.com/node-red-contrib-themes/midnight-red/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/node-red-contrib-themes/midnight-red.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg
[master-branch]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/tree/master
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
[npm-package]: https://nodei.co/npm/@node-red-contrib-themes/midnight-red
[npm-shield]: https://nodei.co/npm/@node-red-contrib-themes/midnight-red.png
[ristomatti]: https://github.com/ristomatti
[solarized-dark-gray-theme]: https://github.com/ristomatti/node-red-contrib-theme-solarized-dark-grey
