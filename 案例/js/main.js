console.log('加载完毕！！！');

/* 配置路径 */
require.config({
	path:{
		init:'js/init',
		down:'js/down',
		move:'js/move',
		show:'js/show',
		scale:'js/scale',
		drag:'js/drag'
	}
})
require(['init'],function(init){
	init.init()
})