const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
{
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/app/key_generator/app/' : '/',
  outputDir: "app",
},
)
