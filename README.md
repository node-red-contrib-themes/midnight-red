# Midnight Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)

[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![Buy me a coffee][buymeacoffee-shield]][buymeacoffee]

**THIS IS A LEGACY VERSION FOR NODE-RED 0.20.X.**

**FOR THE CURRENT PRODUCTION VERSION CHECK THE [`LATEST`][latest-tag] TAG ON NPM
OR THE [`MASTER`][master-branch] BRANCH ON GITHUB.**

## About

A dark theme for [Node-RED][node-red] based on the
[midnight theme][ha-midnight-theme] for [Home Assistant][home-assistant].

![screenshot](https://raw.githubusercontent.com/bonanitech/node-red-contrib-theme-midnight-red/legacy/images/screenshot.png)

## Install

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Install this package.

```shell
npm install node-red-contrib-theme-midnight-red@legacy
```

Add the following to the `editorTheme` section of your `settings.js`.

```js
editorTheme: {
    page: {
        css: "<HOME>/.node-red/node_modules/node-red-contrib-theme-midnight-red/midnight.css",
        scripts: "<HOME>/.node-red/node_modules/node-red-contrib-theme-midnight-red/theme-tomorrow.js"
    }
}
```

Replace `<HOME>` with the home directory of the user running Node-RED. For
example, `/home/username`.

For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

Restart Node-RED.

Enjoy!

## License

[MIT][license]

[bonanitech]: https://github.com/bonanitech
[buymeacoffee-shield]: https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg
[buymeacoffee]: https://www.buymeacoffee.com/mbonani
[commits-shield]: https://img.shields.io/github/commit-activity/y/bonanitech/node-red-contrib-theme-midnight-red.svg?style=for-the-badge
[commits]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/commits/legacy
[contributors]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/graphs/contributors
[discord-shield]: https://img.shields.io/discord/330944238910963714.svg
[ha-midnight-theme]: https://community.home-assistant.io/t/midnight-theme/28598
[home-assistant]: https://home-assistant.io
[issue]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/issues
[last-commit-shield]: https://img.shields.io/github/last-commit/bonanitech/node-red-contrib-theme-midnight-red.svg?style=for-the-badge
[latest-tag]: https://www.npmjs.com/package/node-red-contrib-theme-midnight-red/v/latest
[license]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/blob/legacy/LICENSE
[license-shield]: https://img.shields.io/github/license/bonanitech/node-red-contrib-theme-midnight-red.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/maintenance/yes/2019.svg?style=for-the-badge
[master-branch]: https://github.com/bonanitech/node-red-contrib-theme-midnight-red/tree/master
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
