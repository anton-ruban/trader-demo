
const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        "@components": path.resolve(__dirname, 'src/components'),
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/components/_colors.scss";`
      }
    }
  }
};
