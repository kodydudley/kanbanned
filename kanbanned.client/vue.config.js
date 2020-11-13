module.exports = {
 // NOTE to host on github publicPath: '/YOUR-GITHUB-REPOSITORY-NAME/',
  // publicPath: '/',
  outputDir: '../kanbanned.server/client',
  productionSourceMap: false,
  transpileDependencies: ['@bcwdev/auth0provider-client']
  // chainWebpack: config=>{
  //   config.plugins
  //   .delete("split-manifest")
  //   .delete("inline-manifest")
  // }
}
