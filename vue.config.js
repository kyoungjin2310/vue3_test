const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_common.scss";
          @import "@/assets/scss/_reset.scss";
        `,
      },
    },
  },
});
