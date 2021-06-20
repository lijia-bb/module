var moduleA={
	count:100,
	showA:function(){
		count+=10
		console.log(count,'A')
	},
	showB:function(){
		count+=20
		console.log(count,'A')
	}
}
var moduleB={
	count:50,
	showA:function(){
		count*=10
		console.log(count,'B')
	},
	showB:function(){
		count*=20
		console.log(count,'B')
	}
}
moduleA.showA()
moduleB.showA()
moduleA.showB()
moduleB.showB()