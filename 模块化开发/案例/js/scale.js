define(function(){
	function scale(width,height,node){
		node.style.height=height+'px';
		node.style.width=width+'px';
		if(node.offsetWidth>=document.documentElement.clientWidth){
			node.style.width=document.documentElement.clientWidth+'px'
		}else if(node.offsetWidth<=200){
			node.style.width='200px';
		}
		if(node.offsetHeight>=document.documentElement.clientHeight){
			node.style.height=document.documentElement.clientHeight+'px'
		}else if(node.offsetHeight<=200){
			node.style.height='200px';
		}
	}
	return {scale:scale}
})