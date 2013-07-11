//******************************************************
//  Init
//	
//******************************************************

goog.require('XVWidget');
goog.require('XVGlobals');
goog.provide('Viewer');


/**
 * @constructor
 * @extends {XVWidget}
 */
Viewer = function (args) {
  	
	XVWidget.call(this, utils.dom.mergeArgs(Viewer.prototype.defaultArgs, args));
	goog.fx.DragDrop.call(this, this.widget, undefined);
	
	
	/**
	 * @type {string}
	 * @private
	 */
	this.currThumbnail_ = undefined;
	/**
	 * @param {string}
	 */	
	this.setThumbnail = function(t) {
		this.currThumbnail_ = t;			
	}
	/**
	 * @return {string}
	 */	
	this.getThumbnail = function() {
		return this.currThumbnail_;
	}




	
    this.setHoverEvents();
}
goog.inherits(Viewer, XVWidget);
goog.inherits(Viewer, goog.fx.DragDrop);





/**
 * @type {object}
 * @protected
 */
Viewer.prototype.defaultArgs = {
	parent: document.body,
	className: XVGlobals.classNames.Viewer,
	widgetCSS: {
		top: 0,
		left: 80,
		width: 500,
		height: 500,
		border: "solid rgba(90,90,90,1) 1px",
		//backgroundColor: "rgba(208,123, 92, .3)",
		position: "absolute",
	 	overflow: "hidden",
	 	"overflow-x": "visible",
	 	"overflow-y": "visible"
	}
}



Viewer.prototype.updateCSS = function(args) {

	/**
	 * @type {Object}
	 * @protected
	 */
	this.widgetDims = utils.css.dims(this.widget);


	//----------------------------------
	// Widget
	//----------------------------------
	args = (args) ? args : {};
	utils.css.setCSS(this.widget, utils.dom.mergeArgs({
		
		width: this.widgetDims.width,
		height: this.widgetDims.height,
		top: this.widgetDims.top,
		left: this.widgetDims.left,
		overflow: "hidden"
		
	}, args));
	

}

/**
 * @private
 */
Viewer.prototype.setHoverEvents = function () {
	
	var that = this;
	var keeperClasses = [
		XVGlobals.classNames.FrameHolder
	]
	
	this.hoverOut = function() {
		utils.array.forEach(that.widget.childNodes, function (node) { 
			
			var found = false;
			utils.array.forEach(keeperClasses, function (keeper) { 
				if (node.className.indexOf(keeper) > -1) {
					found = true;
				}	
			});
			
			if (!found) {
				utils.fx.fadeOut(node, 0);
			}
		})		
	}
	
	this.hoverIn = function() {
		utils.array.forEach(that.widget.childNodes, function (node) { 
			utils.fx.fadeIn(node, 0);
		})
	}
	
	goog.events.listen(this.widget, goog.events.EventType.MOUSEOVER, function() { that.hoverIn() });
	goog.events.listen(this.widget, goog.events.EventType.MOUSEOUT,  function() { that.hoverOut() });

	that.hoverOut();
}


/**
 * @param {Element}
 * @protected
 */
Viewer.prototype.createDragElement = function(srcElt) {

	if (!this.widget.isCloneable) {
		//
		//  Return an empty div, basically
		//
		var dummy = document.createElement("div");
		dummy.id = "DUMMY";
		return dummy;
		
	}
	
	return srcElt.cloneNode(false);
}


/**
 * @param {Element}
 * @protected
 */
Viewer.prototype.loadThumbnail = function (thumb) {

	this.setThumbnail(thumb);
	
}
