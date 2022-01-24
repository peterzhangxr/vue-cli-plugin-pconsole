module.exports = (api, options) => {
	//修改webpack配置
	const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')

	api.chainWebpack(webpackConfig => {
    webpackConfig
    .plugin('vue-auto-routing')
      .use(VueAutoRoutingPlugin, [
        {
          pages: 'src/pages',
          nested: true
        }
      ])
  })


	const { serve } = api.service.commands

	const serveFn = serve.fn

	serve.fn = (...args) => {
		return serveFn(...args).then(res => {
			if(res && res.url) {
				console.log(`Project is running now at ${res.url}`)
			}
		})
	}

	api.registerCommand('greet', {
		description: '来自pconsole的service',
		usage: 'vue-clic-service greet',
		options: {
			'--name': 'specifies a name for geetings'
		}
	}, (args) => {
		console.log(args)
		console.log(`� Hello�`)
	})
}