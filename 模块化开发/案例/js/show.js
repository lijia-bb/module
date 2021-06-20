define(function(){
	function show(bool,node){
		if(bool){
			node.style.display='block'
		}else{
			node.style.display='none'
		}
	}
	return {show}
})