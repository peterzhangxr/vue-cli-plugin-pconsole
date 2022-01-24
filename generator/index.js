module.exports = api => {
	api.render('./template')

	api.extendPackage({
		//添加扩展包
		dependencies: {
			'bignumber.js': '9.0.2'
		},
		//添加新的脚本
		scripts: {
			greet: "echo 来自vue-cli-plugin的命令!"
		}
	})

	//引入新的import ，新的Vue.use等
	api.injectImports(api.entryFile, `import BigNumber from 'bignumber.js'`)
}

module.exports.hooks = api => {
	api.afterInvoke(() => {
		//这个钩子将在文件被写入硬盘之后调用
	})
}