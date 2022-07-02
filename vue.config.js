module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'styles@': '@/assets/styles'
      }
    }
  }
}
