const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  build: {
    babel: {
     compact: true,
    },
 },
})
