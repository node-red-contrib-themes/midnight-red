# DEPRECATED REPOSITORY

As of Node-RED 3.0, this theme is maintained in the [Node-RED Contrib Theme Collection](https://github.com/node-red-contrib-themes/theme-collection) repository.

DEVELOPERS: If your project uses this theme as a dependency, please update your project as this repository will no longer be maintained.

# Node-RED Contrib Theme: Midnight-RED

A dark theme for [Node-RED][node-red] based on the
[midnight theme][ha-midnight-theme] for [Home Assistant][home-assistant].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/midnight-red/master/images/screenshot.png)

This theme is part of the [Node-RED Contrib Theme Collection][theme-collection].

## Install

### Install with npm

Run the following command from within the Node-RED user data directory (by default, `$HOME/.node-red`).

```shell
npm install @node-red-contrib-themes/midnight-red
```

## Usage

Add `theme: "midnight-red"` to the `editorTheme` object in your `settings.js` and then restart Node-RED.

```js
editorTheme: {
    theme: "midnight-red",
},
```

For details on the Node-RED's configuration file and its structure, please refer to the [Node-RED official documentation][node-red-doc].

### Themed Scrollbars (*EXPERIMENTAL*)

Includes the theme and changes the scrollbars to make them better fit the theme.

**NOTE**: This is ***EXPERIMENTAL*** and may not work on all browsers.

Add `theme: "midnight-red-scroll"` to the `editorTheme` object in your `settings.js` and then restart Node-RED.

```js
editorTheme: {
    theme: "midnight-red-scroll",
},
```

### Monaco Editor Theme

This package comes with a pre-configured theme for the Monaco editor.

Just leave `theme` under `codeEditor` commented out in your `settings.js` and then restart Node-RED.

```js
editorTheme: {
    theme: midnight-red,
    codeEditor: {
        lib: "monaco",
        options: {
            // theme: "",
        },
    },
},
```

## Acknowledgments

- [Sebastian Raff][hobbyquaker] - for the inspiration and help in creating the
NPM package for this theme.
- [Ristomatti Airo][ristomatti] - for his amazing [theme][solarized-dark-gray-theme] on which major
readability improvements were based.

## License

This project is licensed under the [MIT license][license].

## Like my work?

If you like my work please give it a GitHub ⭐️.

Also, consider supporting me with a coffee ☕.

<a href="https://www.buymeacoffee.com/mbonani" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height="60px"></a>

[ha-midnight-theme]: https://community.home-assistant.io/t/midnight-theme/28598
[hobbyquaker]: https://github.com/hobbyquaker
[home-assistant]: https://home-assistant.io
[license]: LICENSE
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration#editor-themes
[node-red]: https://nodered.org/
[ristomatti]: https://github.com/ristomatti
[solarized-dark-gray-theme]: https://github.com/ristomatti/node-red-contrib-theme-solarized-dark-grey
[theme-collection]: https://www.npmjs.com/package/@node-red-contrib-themes/theme-collection
