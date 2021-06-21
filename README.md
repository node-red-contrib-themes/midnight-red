# Midnight Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![NPM Shield][npm-shield]][npm-package]

<a href="https://www.buymeacoffee.com/mbonani" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height="60px" width="217px"></a>

A dark theme for [Node-RED][node-red] based on the
[midnight theme][ha-midnight-theme] for [Home Assistant][home-assistant].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/midnight-red/master/images/screenshot.png)

## Install

Install via npm

```shell
npm install @node-red-contrib-themes/midnight-red
```

## Configuration

### Node-RED version 1.3.0 or later

Add the following to the `editorTheme` section of your `settings.js`, and then restart Node-RED.

```js
editorTheme: {
    theme: "midnight-red"
},
```

### Themed Scrollbars (EXPERIMENTAL)

This includes the theme and changes to the scrollbars to make them better fit the theme.

**NOTE**: This is ***EXPERIMENTAL*** and may not work on all browsers.

If you want to try it, add the following to the `editorTheme` section of your `settings.js`, and then restart Node-RED.

```js
editorTheme: {
    theme: "midnight-red-scroll"
},
```

### Node-RED versions from 1.0.0 to 1.2.9

Add the following to the `editorTheme` section of your `settings.js`, and then restart Node-RED.

```js
editorTheme: {
    page: {
        css: [
            "<user-dir>/node_modules/@node-red-contrib-themes/midnight-red/theme.min.css"
            // Uncomment the next two lines if you want to use the themed scrollbars.
            // ,
            // "<user-dir>/node_modules/@node-red-contrib-themes/midnight-red/scrollbars.min.css",
        ],
    },
},
```

Replace `<user-dir>` with the Node-RED User directory. For example, `/home/username/.node-red`.

For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

Enjoy!

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
[license]: https://github.com/node-red-contrib-themes/midnight-red/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/node-red-contrib-themes/midnight-red.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2021.svg
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
[npm-package]: https://nodei.co/npm/@node-red-contrib-themes/midnight-red
[npm-shield]: https://nodei.co/npm/@node-red-contrib-themes/midnight-red.png
[ristomatti]: https://github.com/ristomatti
[solarized-dark-gray-theme]: https://github.com/ristomatti/node-red-contrib-theme-solarized-dark-grey
