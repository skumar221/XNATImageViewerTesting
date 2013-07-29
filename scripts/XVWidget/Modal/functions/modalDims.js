goog.require('Modal');
goog.provide('Modal.modalDims');
//******************************************************
//  Calculates the modal dimensions based on pixed values.
//  translates them to other representaions accordingly.
//
//  This was implemented for two reasons: 1) To avoid CSS
//  stylesheets and have dynamic acces to an element's properties
//  2) Sometimes there was a delay in jQuery registering
//  an element's dimensions if percentages were entered.
//
//******************************************************
Modal.prototype.modalDims = function (conversion) {
		
	var that = this;
	
	var ScrollGalleryLeft = 0;
	var maxModalWidth = Math.round(window.innerWidth * XVGlobals.maxModalHeightPct);
	
	
	
	//-------------------------
	// 1. Generate a prelimiary width
	//-------------------------	
	
	
	
	//	Get the prescribed height of the modal		
	var modalHeight = XVGlobals.maxModalHeightPct * window.innerHeight;
	
	
	//	Get the number of scan viewers
	var viewers = that.ViewerManager();
	var ViewerColumns = viewers[0].length;
	var ViewerRows = viewers.length;
	
	
	// determine the minimum modal width
	var minModalWidth = XVGlobals.ScrollGalleryWidth + 
						XVGlobals.minViewerWidth * ViewerColumns + 
						XVGlobals.ViewerVerticalMargin * ViewerColumns + 
						XVGlobals.expandButtonWidth;
	
	// determine the the modal width based on prescribed proportions
	var ViewerHeight = ( modalHeight - ((ViewerRows + 1) * XVGlobals.expandButtonWidth)) / ViewerRows;
	var ViewerWidth = XVGlobals.ViewerDimRatio * ViewerHeight;
	
	// determine the minimum modal width
	var modalWidth = XVGlobals.ScrollGalleryWidth + 
					 ViewerWidth  * ViewerColumns + 
					 XVGlobals.ViewerVerticalMargin * ViewerColumns + 
					 XVGlobals.expandButtonWidth;



 
	//-------------------------
	// 2. If the modal is too wide, scale it down
	//-------------------------
	
	if (modalWidth > maxModalWidth) {	

		ViewerWidth = (maxModalWidth - (XVGlobals.ScrollGalleryWidth + XVGlobals.ViewerVerticalMargin * ViewerColumns + XVGlobals.expandButtonWidth))/ViewerColumns;	
		ViewerHeight = ViewerWidth / XVGlobals.ViewerDimRatio;
		modalWidth= maxModalWidth;
		modalHeight = (ViewerHeight * ViewerRows) + (XVGlobals.ViewerVerticalMargin  * (ViewerRows  - 1)) + XVGlobals.expandButtonWidth*2;

	}
	


	var _l = (window.innerWidth - modalWidth) /2 ;
	var _t = (window.innerHeight - modalHeight)/2;
	
	
	

	//-------------------------
	// SCROLL GALLERY DIMS
	//-------------------------	
	var ScrollGalleryCSS = {
		'height': Math.round(modalHeight) - XVGlobals.expandButtonWidth*2,
		'top': XVGlobals.expandButtonWidth
	}
		
		
		
		
	//-------------------------
	// SCAN VIEWER DIMS
	//-------------------------	
	var ViewerLefts = [];
	var ViewerTops = [];
	var ScrollGalleryDims = utils.css.dims(this.ScrollGallery.widget)
	var viewerStart = ScrollGalleryDims.width +  ScrollGalleryDims['left'] + XVGlobals.ViewerVerticalMargin;

	that.ViewerManager( function (Viewer, i, j) { 
			
		l = viewerStart + j * (ViewerWidth + XVGlobals.ViewerVerticalMargin);
		

		if (j==0 || !ViewerLefts[i]) {
			ViewerLefts.push([])
		}
		
		ViewerLefts[i][j] = l;
		
		if (j==0 || !ViewerTops[i]) {
			ViewerTops.push([]);
		}
		
		ViewerTops[i][j] = (-1 + i * (ViewerHeight + XVGlobals.ViewerHorizontalMargin));
		
		//if (i==0)
		ViewerTops[i][j] +=  XVGlobals.expandButtonWidth;
		
	});

	return  {
		
		'width': Math.round(modalWidth),
		'left': Math.round(_l),
		'height': Math.round(modalHeight),
		'top': Math.round(_t),
		'Viewer': {
			
			'width': Math.round(ViewerWidth),
			'height': Math.round(ViewerHeight),
			'lefts': ViewerLefts,
			'tops': ViewerTops	
			
		},
		'ScrollGallery': {
			
			'widgetCSS': ScrollGalleryCSS
		
		},
		'closeButton': {
			
			'left': Math.round(_l) + Math.round(modalWidth) - (utils.convert.toInt(that.closeButton.style.width)) - 13,
			'top': Math.round(_t) + 10
			
		},
		'ColumnMenu': {
			
			'left': Math.round(modalWidth) - XVGlobals.expandButtonWidth,
			'top': ViewerTops[0][0] + Math.round(modalHeight)/2 - XVGlobals.expandButtonWidth - 20,
			'width': XVGlobals.expandButtonWidth - 1,
			'height': 40
			
		},
		'RowMenu': {
			
			'left': ViewerLefts[0][0] + (Math.round(modalWidth) - ViewerLefts[0][0] - XVGlobals.expandButtonWidth)/2 - 17,
			'top': Math.round(modalHeight) - XVGlobals.expandButtonWidth,
			'width': 40,
			'height': XVGlobals.expandButtonWidth - 1
			
		}

	}

}

goog.exportProperty(Modal.prototype, 'modalDims', Modal.prototype.modalDims);
