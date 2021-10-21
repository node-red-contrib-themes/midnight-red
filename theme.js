module.exports = function(RED) {
  RED.plugins.registerPlugin("midnight-red", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css"
    ],
    monacoOptions: {
      theme: "tomorrow-night-bright"
    }
  })

  RED.plugins.registerPlugin("midnight-red-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css",
      "theme-scrollbars.min.css"
    ],
    monacoOptions: {
      theme: "tomorrow-night-bright"
    }
  })
}