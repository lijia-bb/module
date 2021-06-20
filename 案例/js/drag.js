define(function() {
	function drag(left, top, node) {
		node.style.left = left + 'px';
		node.style.top = top + 'px';
		if(node.offsetLeft>=document.documentElement.clientWidth-node.offsetWidth){
			node.style.left=document.documentElement.clientWidth-node.offsetWidth+'px'
		}else if(node.offsetLeft<=0){
			node.style.left='0px'
		}
		
		if(node.offsetTop<=0){
			node.style.top='0px';
		}else if(node.offsetTop>=document.documentElement.clientHeight-node.offsetHeight){
			node.style.top=document.documentElement.clientHeight-node.offsetHeight+'px'
		}
	}
	return {
		drag:drag
	}
})
