FrameViewer.prototype.loadCurrViewPlane = function() {
	
	var that = this;
	var cCount = that.currDroppable[that.currViewPlane + "FrameCount"];
	var preload = that.currDroppable.getFrames({
		'viewPlane' : that.currViewPlane,
		'filter' : 'img',
	});
	
	//console.log(cCount, preload.length, that.loaded)
	
	if ((preload.length >= cCount ) && !that.loaded) {

		that.loaded = true;
		// Show canvas
		that.progBar.hide(GLOBALS.animFast, function() {});	
		$(that.canvas).fadeIn(GLOBALS.animFast);
		
		// Load Frames By ViewPlane
		that.loadFramesByViewPlane(that.currViewPlane);					
	}		
}



FrameViewer.prototype.loadDroppable = function (droppable, viewPlane) {

	var that = this;
	
	if (droppable.frames) {
		

		var that = this;		
		this.currDroppable = droppable;		
		this.currViewPlane = (viewPlane) ? viewPlane : "sagittal";

	 	
		//---------------------------------
		// asyc Image loading
		//---------------------------------			
		this.currDroppable.loadFramesToDOM({
			
			"viewPlane" : that.currViewPlane,
			
			"before" : function (setLength) {
				
				// Exists to prevent reloading things on onload 
				that.loaded = false;

						
				//---------------------------------
				// Update progress bar
				//---------------------------------
				that.progBar.update({
					"max" : setLength,
					"clear": true,
				});
				$(that.canvas).stop().fadeOut(0);
				that.progBar.show();	
							
			},
			
			"onload" : function(img) {
			
				var mPath = that.currDroppable.pathMolder(img.src);
				//console.log("preload")
				
				var preload = that.currDroppable.getFrames({
					'viewPlane' : that.currViewPlane,
					'filter' : 'img',
				});
				
				//console.log(preload[0])
				var viewPlaneStr = "<b>" + that.currViewPlane.charAt(0).toUpperCase() + that.currViewPlane.slice(1) + "</b>";	
				var loadStr = "<br> Scan " + (that.currDroppable.scanData.sessionInfo["Scan"].value).toString() + " - " + viewPlaneStr + "<br>";
						
				//---------------------------------
				// Update progress bar
				//---------------------------------
				that.progBar.update({
					'label': "Loading...  " + loadStr + " " + preload.length.toString() + " / " + that.currDroppable[that.currViewPlane + "FrameCount"]
				});
				
				// this makes sure that we're putting the image back
				// with the correct scanThumbnail
				if (that.currDroppable.frames[mPath]) {

					// increments
					that.currDroppable.frames[mPath]['img'] = img;			
					that.progBar.update({"add": 1});

											
					// load if at the appropriate pint
					
					that.loadCurrViewPlane();
				}

			}
		})
	}
	else{
		throw "FrameViewer.js: Invalid Droppable for FrameViewer."
	}

}