var GLOBALS = {
	
	XMIV: undefined
	

}



GLOBALS.ModalID = "XNATImageViewerModal";


//---------------------------
//  FONTS AND COLORS
//---------------------------
GLOBALS.inactiveFontColor = "rgba(55,55,55,1)";
GLOBALS.inactiveLineColor = "rgba(55,55,55,1)"; 

GLOBALS.activeFontColor = "rgba(255,255,255,1)"; 
GLOBALS.activeLineColor = "rgba(205,205,205,1)"; 

GLOBALS.semiactiveFontColor = "rgba(85,85,85,1)"; 
GLOBALS.semiactiveLineColor = "rgba(85,85,85,1)"; 

GLOBALS.fontSizeSmall = 10;
GLOBALS.fontSizeMed = 12;
GLOBALS.fontSizeLarge = 14;
GLOBALS.fontFamily = 'Helvetica, Helvetica neue, Arial, sans-serif';


//---------------------------
//  ANIMATION LENGTHS
//---------------------------
GLOBALS.animVeryFast = 100;
GLOBALS.animFast = 200;
GLOBALS.animMed = 500;
GLOBALS.animSlow = 1000;



//---------------------------
//  FRAME VIEWER
//---------------------------
GLOBALS.minFrameViewerHeight = 150;
GLOBALS.minFrameViewerWidth = 150;


//---------------------------
//  SCAN VIEWER
//---------------------------
GLOBALS.ScanViewerDimRatio = .85
GLOBALS.minScanViewerHeight = 320;
GLOBALS.minScanViewerWidth = GLOBALS.minScanViewerHeight * GLOBALS.ScanViewerDimRatio;
GLOBALS.ScanViewerVerticalMargin = 20;
GLOBALS.ScanViewerHorizontalMargin = 20;

//---------------------------
//  THUMBNAILS
//---------------------------
GLOBALS.ThumbnailImageHeight = 72;
GLOBALS.ThumbnailImageWidth = 72;
GLOBALS.ThumbnailImageMarginX = 8;
GLOBALS.ThumbnailImageMarginY = 8;



GLOBALS.ThumbnailWidgetHeight = GLOBALS.ThumbnailImageHeight + GLOBALS.ThumbnailImageMarginX*2;
GLOBALS.ThumbnailWidgetWidth = 200;

//---------------------------
//  EXPAND BUTTON
//---------------------------
GLOBALS.expandButtonWidth = 30;

//---------------------------
//  SCROLL GALLERY
//---------------------------
GLOBALS.ScrollGalleryWidth = 180;

//---------------------------
//  SCAN TABS
//---------------------------
GLOBALS.scanTabLabelHeight = 20;
GLOBALS.scanTabLabelWidth = 40;
GLOBALS.minScanTabHeight = GLOBALS.scanTabLabelHeight;
GLOBALS.defaultScanTabHeight = GLOBALS.minScanTabHeight;

GLOBALS.maxModalWidthPct = .90;
GLOBALS.maxModalHeightPct = .95;


GLOBALS.tabClickHeight = 300;

//---------------------------
//  SCROLL LINK GROUPS
//---------------------------
GLOBALS.maxScrollLinkGroups = 10;
GLOBALS.SliderLinker = new SliderLinker();


//---------------------------
//  CONTENT DIVIDER HEIGHT
//---------------------------
GLOBALS.ContentDividerHeight = 6;
GLOBALS.minContentDividerTop = function(widgetHeight){
	return widgetHeight - GLOBALS.ContentDividerHeight - GLOBALS.minScanTabHeight;
} 




