# Midnight Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

![NPM Shield][npm-shield]

[![Buy me a coffee][buymeacoffee-shield]][buymeacoffee]

## About

A dark theme for [Node-RED][node-red] based on the
[midnight theme][ha-midnight-theme] for [Home Assistant][home-assistant].

![screenshot](https://raw.githubusercontent.com/bonanitech/node-red-contrib-theme-midnight-red/master/images/screenshot.png)

## Install

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Install this package.

```shell
npm install node-red-contrib-theme-midnight-red
```

Add the following to the `editorTheme` section of your `settings.js`.

```js
editorTheme: {
    page: {
        css: "<HOME>/.node-red/node_modules/node-red-contrib-theme-midnight-red/midnight.css"
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
npm update node-red-contrib-theme-midnight-red
```

Reload the Node-RED page on the web browser.

## Legacy Version

For the legacy version (compatible with Node-RED 0.20.X) check the
[`LEGACY`][legacy-tag] tag on NPM or the [`LEGACY`][legacy-branch] branch on
GitHub.

## Acknowledgments

- [Sebastian Raff][hobbyquaker] - for the inspiration and help in creating the
NPM package for this theme.
- [Ristomatti Airo][ristomatti] - for his amazing [theme][solarized-dark-gray-theme] on which major
readability improvements were based.

## License

[MIT][license]

[bonanitech]: https://github.com/bonanitech
[buymeacoffee-shield]: https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg
[buymeacoffee]: https://www.buymeacoffee.com/mbonani
[commits-shield]: https://img.shields.io/github/commit-activity/y/bonanitech/node-red-contrib-theme-midnight-red.svg
[commits]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/commits/master
[contributors]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/graphs/contributors
[discord-shield]: https://img.shields.io/discord/330944238910963714.svg
[ha-midnight-theme]: https://community.home-assistant.io/t/midnight-theme/28598
[hobbyquaker]: https://github.com/hobbyquaker
[home-assistant]: https://home-assistant.io
[install-instructions]: #install
[issue]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/issues
[last-commit-shield]: https://img.shields.io/github/last-commit/bonanitech/node-red-contrib-theme-midnight-red.svg
[legacy-branch]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/tree/legacy
[legacy-tag]: https://www.npmjs.com/package/node-red-contrib-theme-midnight-red/v/legacy
[license]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/bonanitech/node-red-contrib-theme-midnight-red.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
[npm-shield]: https://nodei.co/npm/node-red-contrib-theme-midnight-red.png
[ristomatti]: https://github.com/ristomatti
[solarized-dark-gray-theme]: https://github.com/ristomatti/node-red-contrib-theme-solarized-dark-grey
