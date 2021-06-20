define(['drag','scale'],function(drag,scale){
	function move(symbol,right,bottom,node1){
		document.body.onmousemove=function(ev){
			let e=ev||window.event;
			if(symbol=='+'){
				let width=e.clientX+right;
				let height=e.clientY+bottom;
				scale.scale(width,height,node1)
			}else{
				let left=e.clientX-right;
				let top=e.clientY-bottom;
				drag.drag(left,top,node1)
			}
		}
	}
	return {move}
})