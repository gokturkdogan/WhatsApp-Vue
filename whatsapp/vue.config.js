const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
      loaderOptions: {
          sass: {
              data: `
                  @import "@/assets/styles/_variables.scss";
              `
          }
      }
  }
}