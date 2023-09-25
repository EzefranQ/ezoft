module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  generatorOpts: {
    compact: true,
    minified: false,
    shouldPrintComment: comment => /^[@#]\s+sourceMappingURL=/.test(comment)
  },
  compact: false
}
