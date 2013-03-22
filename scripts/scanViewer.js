
var defaultArgs_scanViewer = {
	id: "scanViewer",
	parent: document.body,
	_css: {
		top: 0,
		left: 80,
		width: 500,
		height: 500,
		border: "solid rgba(90,90,90,1) 1px",
		backgroundColor: "rgba(208,123, 92, .3)",
		position: "absolute",
	 	overflow: "hidden",
	 	"overflow-x": "hidden",
	 	"overflow-y": "hidden"
	}
}

var scanViewer = function(args){
  	var that = this;
	 __Init__(this, defaultArgs_scanViewer, args, function(){});
	 
	 $(this.widget).css({

	 })

  
  this.restyle();
}

scanViewer.prototype.restyle = function(){
	//alert((this.args.parent).style.height);
	 $(this.widget).css({
	 	top: 10,
	 	height: $(this.args.parent).innerHeight() - 20,
	 })


}
