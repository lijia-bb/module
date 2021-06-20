/* 遵从amd规范 */

// define(['demo/show'],function (obj){
// 	function add(a,b){
// 		let count=a+b;
// 		return count
// 	}
// 	function sub(a,b){
// 		let count=a-b;
// 		return count;
// 	}
// 	obj.show('我是来自另外的模块');
// 	return {outAdd:add,outSub:sub}
// })
define(['show'],function (obj){
	function add(a,b){
		let count=a+b;
		return count
	}
	function sub(a,b){
		let count=a-b;
		return count;
	}
	obj.show('我是来自另外的模块');
	return {outAdd:add,outSub:sub}
})
