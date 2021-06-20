console.log('加载成功');
/* 引入模块 */
// require(['demo/opera','demo/show'],function(obj,obj2){
// 	console.log(obj.outAdd(1,2)) 
// 	console.log(obj.outSub(1,2)) 
// 	obj2.show('dog')
// })
require.config({
	paths:{
		// 自定义模块的名字：引入模块的路径
		opera:'demo/opera',
		show:'demo/show'
	}
})
require(['opera','show'],function(obj,obj2){
	console.log(obj.outAdd(1,2)) 
	console.log(obj.outSub(1,2)) 
	obj2.show('dog')
	console.log(obj,obj2)
})
