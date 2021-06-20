define(['move'],function(move){
	function down(node1,node2,symbol){
		node2.onmousedown=function (ev){
			let e=ev||window.event;
			/* 鼠标与黄色方块边缘距离 */
			let right=node2.offsetLeft+node2.offsetWidth-e.clientX;
			let bottom=node2.offsetTop+node2.offsetHeight-e.clientY;
			move.move(symbol,right,bottom,node1)
		}
	}
	return {down}
})