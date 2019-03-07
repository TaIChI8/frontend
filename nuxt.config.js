module.exports = {
    modules: ['bootstrap-vue/nuxt'],
    head: {
        titleTemplate: 'MoGo',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    router: {
      base: '/frontend/'
    }
}
