define(['down','show'],function(down,show){
		function init(){
			let bool=false;
			let obtn=document.getElementById('btn');
			let obox=document.getElementById('box');
			let obox2=document.getElementById('box2')
			let obox3=document.getElementById('box3');
			/* 显示/隐藏 */
			obtn.onclick=function(){
				bool=!bool;
				show.show(bool,obox);
			}
			/* 放大/缩小*/
			down.down(obox,obox2,'+');
			/* 拖拽 */
			down.down(obox3,obox3,'-');
			
			document.body.onmouseup=function(){
				document.body.onmousemove=null;
			}
		}
		return {init}
})