   Bud1            %                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 @      �                                        @      �                                          @      �                                          @                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   E   %                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       DSDB                             `          �                                           @      �                                          @      �                                          @                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              window.onload = function () {
	
	var d = new Date();
	var startTime = d.getTime();
	
	
	var uScripts = [
	
		"./scripts/utils/utils.js" ,
		"./scripts/utils/utils.convert.js" ,
		"./scripts/utils/utils.css.js" ,
		"./scripts/utils/utils.dom.js" ,
		"./scripts/utils/utils.globals.js" ,
		"./scripts/utils/utils.gui.js" ,
		"./scripts/utils/utils.oo.js" ,
		

		"./scripts/utils/convert/int.js" ,
		"./scripts/utils/convert/pct.js" ,
		"./scripts/utils/convert/px.js" ,
		"./scripts/utils/convert/remap1D.js" ,


		"./scripts/utils/css/absolutePosition.js" ,
		"./scripts/utils/css/setCSS_jquery.js" ,
		"./scripts/utils/css/totalHeight.js" ,
		"./scripts/utils/css/totalWidth.js" ,

		
		"./scripts/utils/dom/addCallbackManager.js" ,
		"./scripts/utils/dom/debug.js" ,
		"./scripts/utils/dom/getMouseXY.js" ,
		"./scripts/utils/dom/makeElement.js" ,
		"./scripts/utils/dom/mergeArgs.js" ,
		"./scripts/utils/dom/stopPropagation.js" ,
		"./scripts/utils/dom/uniqueId.js" ,
		"./scripts/utils/dom/validateArgs.js" ,
		
		"./scripts/utils/globals/globals.js" ,
		
		"./scripts/utils/gui/dialogBox.js" ,
		"./scripts/utils/gui/draggable_jquery.js" ,
		"./scripts/utils/gui/horizontalSlider.js" ,
		"./scripts/utils/gui/progressBar_jquery.js" ,
		"./scripts/utils/gui/verticalSlider.js" ,
		
		"./scripts/utils/oo/init.js" ,
	]



	var uCount = 0;
	//for (var i=0; i<uScripts.length; i++) {
		
		//console.log(i, uScripts[i])
	
	/*
	$.getScript(uScripts, function(ata, textStatus) {
		//console.log(textStatus); //success
		//console.log(jqxhr.status); //200
		//uCount++;
		//console.log(uCount);
		//console.log(data.indexOf('utils'))
		//if (data.indexOf('utils.oo.init') > -1) {
		console.log("here")
		var n = d.getTime();
		console.log("UtilsLoad: ", n - startTime)
		var _ooo = new XNATViewer();
		//}
	});	
	//}
	*/
	
	/*
	function gs(script) {


			$.ajax({
				
				url: script,
		    	dataType: 'script',
				async: true,
				complete: function () {
					uCount++;
					if (uScripts[uCount]) {
						gs(uScripts[uCount]);
					}
					else {
						//console.log(uCount)
						//var n = d.getTime();
						//console.log(utils)
						//console.log("UtilsLoad: ", n - startTime)
									
					}					
				}
		  
			})
	}

	gs(uScripts[uCount])
	*/

	var _ooo = new XNATViewer();	
	
}var XV;

var GLOBALS = {

}


GLOBALS.imagePreloader = new utils.ajax.imagePreloader();


GLOBALS.ModalId = "XNATImageViewerModal";
GLOBALS.ScanViewerPreId = "ScanViewer";


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


//---------------------------
//  DRAG AND DROP IMAGE
//---------------------------
GLOBALS.dragAndDropImage = new Image();
GLOBALS.dragAndDropImage.src = "./icons/DragAndDrop-3pt.png";
$(GLOBALS.dragAndDropImage).hide();	


/*********************************************************************************************
 * 
 *   Contains methods for image manipulation (i.e. brightness and contrast)
 * 
 ********************************************************************************************/



/************************
 * LINEAR BRIGHTNESS
 ***********************/
function linearBrightness(data, value) {
	for(var i = 0, n = data.length; i < n; i += 4) {		
		var red = data[i];
		var green = data[i + 1];
		var blue = data[i + 2];
		var alpha = data[i + 3];

		data[i]   = red + value;
		data[i+1] = green + value;
		data[i+2] = blue + value;
	}	
	return data;
}



/************************
 * LINEAR CONTRAST
 ***********************/
function linearContrast(data, value, threshold) {
	//var threshold = .05;
	for(var i = 0, n = data.length; i < n; i += 4) {
	
		var red = data[i];
		var green = data[i + 1];
		var blue = data[i + 2];
		var alpha = data[i + 3];

		var Red = red / 255;
		var Green = green / 255;
		var Blue = blue / 255;
		
		Red =   (((Red - threshold) * value/1) + threshold) * 255;
		Green = (((Green - threshold) * value/1) + threshold) * 255;
		Blue =  (((Blue - threshold) * value/1) + threshold) * 255;
		
		var iR = Red;
		iR = (iR > 255) ? 255 : iR;
		iR = (iR < 0) ? 0 : iR;
		
		var iG = Green;
		iG = (iG > 255) ? 255 : iG;
		iG = (iG < 0) ? 0 : iG;
		
		var iB = Blue;
		iB = (iB > 255) ? 255 : iB;
		iB = (iB < 0) ? 0 : iB;

		
		data[i] = Math.round(iR);
		data[i+1] = Math.round(iG);
		data[i+2] = Math.round(iB);
	}
	return data
}



/************************
 * See of an array of objects has a value match
 * for a given key
 ***********************/
function objArrContains(objArr, key, value) {
	var match = -1;
	for (var i = 0; i < objArr.length; i++) {
	   if (objArr[i][key] == value) 
	        match = i;
	}
	return match;
}



/************************
 * Histogram for contrast algorithm
 ***********************/
function histogram(data) {
	var histArr = [];
	for(var i = 0; i < data.length; i += 4) {	
		var red = data[i];
		var green = data[i + 1];
		var blue = data[i + 2];	
		// Average all three colors
		var currIntensity = Math.round((red + green + blue)/3);
		if (histArr.length > 0) {
			var inArr = objArrContains(histArr, "intensity", currIntensity);
			// if found, up the value count
			if (inArr != -1) {
				histArr[inArr]["count"] +=1; 
				continue;
			}
		}
		// Add object to array if not found
		histArr.push({count: 1, intensity: currIntensity});
	}	
	// sort the array of objects by value in ascending order
	histArr = histArr.sort(function (a, b) {
	    return ((a.intensity < b.intensity) ? -1 : ((a.intensity == b.intensity) ? 0 : 1));
	});
	
	var countArr = [];
	var intensityArr = [];
	for (var i=0; i<histArr.length;i++) {
		countArr.push(histArr[i].count);
		intensityArr.push(histArr[i].intensity);
	}
	return {objArr: histArr, 'countArr': countArr, 'intensityArr': intensityArr};
}



/************************
 * Math manipulation
 ***********************/
function sigmaMult(arr1, arr2) {
	if ((arr1.length != arr2.length) || (arr1.length == 0) || (arr2.length ==0)) {
		throw "sigmaMult: Array lengths unequal or zero length!"
	}
	var sigma =0;
	for (var i=0;i<arr1.length;i++) {
		sigma += (arr1[i]* arr2[i])
	}
	return sigma;
}

function sigma(arr1) {
	if (arr1.length == 0) {
		throw "sigmaMult: Array lengths unequal or zero length!"
	}
	var sigma = 0;
	for (var i=0;i<arr1.length;i++) {
		sigma += (arr1[i]);
	}
	return sigma;
}

/*
Thresholding algorithm based on 
T. W. Ridler, S. Calward. Picture Thresholding Using an Iterative
Selection Method. IEEE Trans on Systems, Man and Cybernetics, 8:1978

Modified by Mikhail Milchenko, Ph.D.
Staff Scientist
Washinton University Neuroinformatics Research Group

Converted to javaScript by Sunil Kumar
Programmer II
Washinton University Neuroinformatics Research Group
*/

function thresholdAutoDetect(data) {
	var hist = histogram(data);
	var count = hist.countArr;
	var intensity = hist.intensityArr;	
//	console.log(hist)
	if (count.length > 1 && intensity.length > 1) {
		//console.log("count: " + count);
		//console.log("intensity: " + intensity)		
		var numIters = 14;
		var T = [numIters];
		T[0] = Math.round(sigmaMult(count, intensity)/sigma(count));	
		var delta = 1;
		var i = 0;	
		while ((delta != 0) && (i<numIters)) {		
			var TInds = [];
			for (var k=0;k<intensity.length;k++) {
				if (intensity[k] > T[i]) {
					TInds.push(k);	
				}
			}
			var Ti = TInds[0];			
			var mbt = sigmaMult(count.slice(0, Ti) , intensity.slice(0, Ti)) / sigma(count.slice(0, Ti));
			var mat = sigmaMult(count.slice(Ti, count.length-1) , intensity.slice(Ti, count.length-1)) / sigma(count.slice(Ti, count.length-1));
			i+=1;
			T[i] = Math.round(Math.sqrt(mbt*mat));
			delta = T[i] - T[i-1];
		}
		return T[i]/255;	
	}
}utils.ajax = {};
utils.convert = {};
utils.css = {};
utils.dom = {};
utils.globals = {};utils.gui = {};
var utils = {};
utils.oo = {};
utils.ajax.imagePreloader = function(){

	var that = this;
	var primaryQueue = [];
	var backgroundQueue = [];
	
	var primaryLoadDone = false;
	var bgLoadDone = false;
	
	function loadBG(args) {
		var primaryDone = primaryQueue.length == 0;
		var backgroundDone = backgroundQueue.length == 0;

		if (primaryDone && backgroundDone) {
			if (!bgLoadDone) { 
				//utils.dom.debug("All downloads complete.");
				bgLoadDone = true;
			}
			return;
		}
				
		else if (primaryDone && !backgroundDone)	{
			//utils.dom.debug("DOWNLOADING BG: " + backgroundQueue.length + " left.")
			that.loadNextImage(args); 
		}		
	}
	
	
	
	this.loadNextImage = function (args) {
		
		var primaryDone = primaryQueue.length == 0;
		var backgroundDone = backgroundQueue.length == 0;
		
		 
		if (!primaryDone || !backgroundDone) {
			
			var imgN = new Image();
			
			if (!primaryDone) {
				imgN.src = primaryQueue.shift();
				that.loadNextImage(args); 
			}
			else if (primaryDone && !backgroundDone) {
				imgN.src = backgroundQueue.shift();
				
				if (!primaryLoadDone) {
					
					utils.dom.debug("primary load done: ", primaryQueue)
					primaryLoadDone = true;
				}
			}
			
			imgN.onload = function(){
				
				var img = this;

				if (args["onload"]) { 
					
					$.when( args["onload"](img) ).then ( function() {  loadBG(args); })
					
				} 
				else {
					loadBG(args);			
				}
			};
		}
	}
	
	function addToQueue (arg1, queue) {	

		var isArray = arg1 instanceof Array;
		var isString = typeof arg1 === 'string';
		
		function addVal(val){
			// Check for duplicates
			var ind = queue.indexOf(val); 
			if (ind > -1) {
				queue.splice(ind, 1)
			}		
			// Add to top of heap

			//queue.unshift(val);
			queue.push(val);
				
		}
		
		
		if (isArray) {

			for (var i=0; i<arg1.length; i++) {
				addVal(arg1[i]);
			}

		}
		
		
		else if (isString) {
			addVal(arg1)
		}

	}
	
	this.addToBackgroundQueue = function (arg1) {	

		bgLoadDone = false;
		
		addToQueue(arg1, backgroundQueue)
		
		utils.dom.debug("add to background queue")
		//utils.dom.debug(backgroundQueue)

	}
	
	this.addToPrimaryQueue = function (arg1) {	

		primaryLoadDone = false;
		addToQueue(arg1, primaryQueue)
		//utils.dom.debug("add to primary queue")
		//utils.dom.debug(primaryQueue)

	}
	
}
utils.convert.int = function (val) {
	return parseInt(val, 10);
}utils.convert.pct = function (value) {
	return (value * 100).toString() + "%";
}utils.convert.px = function (args) {
	if (args instanceof Array) {
		return args.map(function (a) {return a.toString() + 'px'});
	}
	else{
		switch (typeof args) {
			case 'number':
				return args.toString() + "px";
		}
	}
}utils.convert.remap1D = function(n, dold, dnew) {


	//console.log("N: " + n)
	//console.log("dold: " + dold)
	//console.log("dnew: " + dnew)
	
	function swapElts(darr) {
		var holder = darr[0];
		darr[0] = darr[1];
		darr[1] = holder;
		return darr;
	}
	
	if ((dold[0] == dold[1]) || (dnew[0] == dnew[1])) {
		throw ("Remap: initial domain is equal!");
	}
	
	if (dold[0] > dold[1]) {
		dold = swapElts(dold);
	}

	if (dnew[0] > dnew[1]) {
		dnew = swapElts(dnew);
	}

	if (n <= dold[0]) {
		n = dold[0];
		var returner = {
			newVal: dnew[0],
			adjOld: n
		};
		return returner;
	}
	else if (n >= dold[1]) {
		n = dold[1];
		var returner = {
			newVal: dnew[1],
			adjOld: n
		};
		return returner;
	}
	
    var newVal = Math.round((n/(dold[1]-dold[0])) * ((dnew[1]-dnew[0])));

    if (newVal < dnew[0]) {
		newVal = dnew[0];
	}
	else if (newVal > dnew[1]) {
		newVal = dnew[1];
	}
    
    //console.log("newVAl: " + newVal);    
    //console.log("*****************")
	return {
		newVal: newVal,
		adjOld: n
	};
}



utils.convert = {};
//******************************************************
//  
//******************************************************
utils.css.absolutePosition = function ( elt) {

	return elt.getBoundingClientRect();
	
}
//******************************************************
//  Debate about whether or not to use jQuery CSS methods or not
//
//******************************************************
utils.css.setCSS = function (elt, cssObj) {

	$(elt).css(cssObj);
}//******************************************************
//  REturns total height of object including borders
//
//******************************************************
utils.css.totalHeight = function (elt) {
	var _h = utils.convert.int(elt.style.height);
	if (elt.style.borderWidth) _h += utils.convert.int(elt.style.borderWidth)*2;
	return _h;
}//******************************************************
//  REturns total width of object including borders
//
//******************************************************
utils.css.totalWidth = function(elt) {
	var _h = utils.convert.int(elt.style.width);
	if (elt.style.borderWidth) _h += utils.convert.int(elt.style.borderWidth)*2;
	return _h;
}utils.css = {};
utils.dom.addCallbackManager = function (obj) {
	
	obj.callbacks = {}
	
	obj.addCallback = function (key, callback) {
		
		if (!obj.callbacks[key]){
			obj.callbacks[key] = [];
		}
		
		if (obj.callbacks[key].indexOf(callback) == -1){
			obj.callbacks[key].push(callback);
		}
	}
	
	obj.deleteCallback = function(key, callback) {		
		var ind = obj.callbacks[key].indexOf(callback);
		if (ind > -1) {
			obj.callbacks[key].splice(ind, 1);
		}
	}
	
	obj.runCallbacks = function(key) {
		for (var i=0; i<obj.callbacks[key].length; i++){
			obj.callbacks[key][i]();
		}
	}

}//******************************************************
//  Determines if there's an argument match between template and args
//  with template being the priority
//******************************************************
utils.dom.debug = function (msg) {
	window.console && console.log(msg);
}//******************************************************
//  
//******************************************************
utils.dom.getMouseXY = function (e) {
    if (navigator.appName == 'Microsoft Internet Explorer') {
      tempX = event.clientX + document.body.scrollLeft;
      tempY = event.clientY + document.body.scrollTop;
    }
    else {  // grab the x-y pos.s if browser is NS
      tempX = e.pageX;
      tempY = e.pageY;
    }  

    if (tempX < 0) {tempX = 0;}
    if (tempY < 0) {tempY = 0;}  

    return {x:tempX, y:tempY};
}
//******************************************************
//  Returns an element based on the given parameters.
//******************************************************
utils.dom.makeElement = function (type, parent, id, css) {
	if (!type) {
		throw "Make Element: Need more parameters to make element! -- invalid type";
	}
	
	if (!parent) {
		throw "Make Element: Need more parameters to make element -- invalid parent.";
	}
	
  var e = document.createElement(type);
  
  if (id) 
  	e.setAttribute("id", id);
  if (parent)
  	parent.appendChild(e);
  
  if (css) {
  	  utils.css.setCSS(e, css);	
  }
  return e;
}
//******************************************************
//  Merges two javaScript objects, giving obj2 the priority
//******************************************************
utils.dom.mergeArgs = function (obj1,obj2, recursionDepth) {
	var recDepth = (recursionDepth) ? recursionDepth : 2; 
	// obj2 gets the priority
    var obj3 = {};
    for (var attr in obj1) { 
    	obj3[attr] = obj1[attr]; 
    }
    for (var attr in obj2) { 
    	//console.log(obj2[attr] + " " + obj2[attr].toString())
    	if (obj2[attr] && (obj2[attr].toString() === '[object Object]') && (attr in obj3)) {
    		//console.log("Found an existing object within an object when merging: " + attr + " " + obj2[attr])
    		obj3[attr] = utils.dom.mergeArgs(obj3[attr], obj2[attr]);
    	}
    	else{
	    	obj3[attr] = obj2[attr];     		
    	}
    }
    return obj3;
}utils.dom.stopPropagation = function (e) {
	if (!e) var e = window.event;
		e.cancelBubble = true;
	if (e.stopPropagation) 
		e.stopPropagation();
}
// source: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript

function __s4__() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};


utils.dom.uniqueId = function () {
  return __s4__() + __s4__() + '-' + __s4__() + '-' + __s4__() + '-' +
         __s4__() + '-' + __s4__() + __s4__() + __s4__();	
}
//******************************************************
//  Determines if there's an argument match between template and args
//  with template being the priority
//******************************************************
utils.dom.validateArgs = function (originString, templateArgs, args, callback) {
	
	var errorStr = "A " + originString + " has invalid arguments:";
	
    for (var attr in args) { 
    	if (! (attr in templateArgs)) {
    		throw (errorStr + " '" + attr + "' "); 
    	}
    	else{
    		
    		// Recurse if the value is an object
   			if (args[attr].toString() === '[object Object]') {
   				utils.dom.validateArgs(originString, templateArgs[attr], args[attr])
   			} 		
    	}
    }

	if (callback) { callback() };
}

utils.globals.fontSizeS = 10;
utils.globals.fontSizeM = 13;
utils.globals.fontSizeL = 16;
utils.globals.fontFamily = 'Helvetica, Helvetica neue, Arial, sans-serif';


//---------------------------
//  ANIMATION LENGTHS
//---------------------------

utils.globals.animFast = 200;
utils.globals.animMedium = 500;
utils.globals.animSlow = 100;
//******************************************************
//  
//******************************************************
utils.gui.dialogBox = function (args) {
	
	this.setArgs = function (newArgs) {
		// Define currArgs either as default or previously entered args;
		var currArgs = (this.currArgs)? this.currArgs() : this.defaultArgs();	
	
		
		// merge currArgs with newArgs
		var mergedArgs = (newArgs) ? utils.dom.mergeArgs(currArgs, newArgs) : currArgs;
	
		// Define the currArgsfunction
		this.currArgs = function () {return mergedArgs};		
	}	
	
	this.setArgs(args); 
	var that = this;
	

	//-----------------------
	// WIDGET	
	//-----------------------
	var widget = utils.dom.makeElement("div", this.currArgs().parent, this.currArgs().id, this.currArgs().widgetCSS);
	utils.gui.draggable_jquery(widget);
	this.widget = function () {return widget};


	//-----------------------
	// BUTTONS	
	//-----------------------
	var buttonManager = {};
	var buttonList = (this.currArgs().buttons && (this.currArgs().buttons.length > 0)) ? this.currArgs().buttons : this.currArgs().defaultButtons;

	for (var i=buttonList.length-1; i>=0; i--) {
		
		var b = utils.dom.makeElement("button", widget, 'button', this.currArgs().buttonCSS);

		b.innerHTML = buttonList[i];
		b.title = buttonList[i].toLowerCase();
		
		
		buttonManager[b.title] = {
			element: b,
			callbacks: [],
		}
		
		
		b.onclick = function () {
			
		}	
	}
	



	//-----------------------
	// MOVE BAR
	//-----------------------
	var moveBar = utils.dom.makeElement("div", widget, 'moveBar', this.currArgs().mouseListenerCSS);

	
	
	//-----------------------
	// DISPLAY MESSAGE	
	//-----------------------
	var message = utils.dom.makeElement("div", widget, 'message', this.currArgs().messageCSS);
	message.innerHTML = this.currArgs().message;

	
	
	this.addStandardButton = function () {
		
	}
	
	
	this.addStandardButton = function () {
		
	}
	
	
	this.addButton = function () {
		
	}
	

	this.updateCSS = function (args) {
		// If there are inputted args, we need to set + validate them
		if (args) { this.setArgs(args) };
		
		
		utils.css.setCSS(widget, this.currArgs().widgetCSS);
		
		

		var buttonHeight = this.currArgs().buttonCSS.height + this.currArgs().widgetCSS.margin;
		
		
		var startL = this.currArgs().widgetCSS.width;		
		var startT = this.currArgs().widgetCSS.height - buttonHeight;
		var l = startL;
		var t = startT;		

		for (var i in buttonManager) {

			utils.css.setCSS(buttonManager[i].element, this.currArgs().buttonCSS);	

			l -= (70 + this.currArgs().widgetCSS.margin);

			
			if (l < this.currArgs().margin) { 
				console.log("HERE")
				l = startL; 
				t -= buttonHeight;
			}
			
			buttonManager[i].element.style.left = utils.convert.px(l);
			buttonManager[i].element.style.top = utils.convert.px(t);

		}
		
		
		//
		//  Message
		//
		utils.css.setCSS(message, utils.dom.mergeArgs(this.currArgs().messageCSS, {
			top: utils.convert.int(moveBar.style.height) + this.currArgs().widgetCSS.margin,
			left: this.currArgs().widgetCSS.margin,
			width: utils.convert.int(widget.style.width) - this.currArgs().widgetCSS.margin * 2,
		}));	
	}
	
	
	
	//
	//  BUTTON CALLBACKS
	//
	this.setButtonOnclick = function (name, callback) {
		
		for (var i in buttonManager) {
			
			if (name.toLowerCase() == i.toLowerCase()) {
				
				buttonManager[i].element.onclick = callback;
				return;
			}
			
		}			
	}
	
	this.updateCSS();
}


utils.gui.dialogBox.prototype.defaultArgs = function () {
	
	return {
		
	  	id: "utils.gui.dialogBox",			//def "sliderScroller"
	  	parent: document.body,
		defaultButtons: ["OK", "Cancel"],
		defaultButtonList: ["OK", "Done", "Cancel", "Next", "Yes", "No"],
		buttons: [],
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	  	widgetCSS: {
	  		position: "absolute",
	  		top: window.innerHeight/2 - 100,
	  		left: window.innerWidth/2 - 150,
	  		width: 330,
	  		height: 140,
	  		fontFamily: utils.globals.fontFamily,
	  		fontSize: utils.globals.fontSizeS,
	  		color: "rgba(255,0,0,1)",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(0,255,0,1)",
	  		backgroundColor: "rgba(155,155,155,1)",
	  		borderRadius: 0,
	  		zIndex: 10000,
	  		margin: 15,
	  		marginLeft: 10,
	  		marginRight: 10,
	  		marginTop: 10,
	  		marginBottom: 10,
	  	},
	  	messageCSS: {
			position: "absolute",
	  	},	
	  	mouseListenerCSS: {
	  		top: 0,
	  		left: 0,
	  		width: "100%",
	  		height: 15,
	  		backgroundColor: "rgba(55,55,55,1)",
	  	},  	
	  	buttonCSS: {
	  		height: 15,
	  		position: "absolute",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(0,0,0,1)",
	  		backgroundColor: "rgba(125,125,125,1)",
	  		borderRadius: 0,
	  		cursor: "pointer"
	  	},
  }
}utils.gui.draggable_jquery = function (element, containment) {
	
	$(element).draggable();

}



//******************************************************
//  Init
//
//******************************************************
utils.gui.horizontalSlider = function (args) {

	this.setArgs(args); 
	var that = this;
	

	// WIDGET	
	var widget = utils.dom.makeElement("div", this.currArgs().parent, this.currArgs().id, this.currArgs().widgetCSS);
	// TRACK
	var track =  utils.dom.makeElement("div", widget, this.currArgs().id + "_track", this.currArgs().trackCSS);
	// HANDLE	
	var handle =  utils.dom.makeElement("div", widget, this.currArgs().id + "_handle", this.currArgs().handleCSS);
	
	
	this.getWidget = function(){
		return widget;
	}
	
	
	// Defining the update css version
	this.updateCSS = function (args) {
		// If there are inputted args, we need to set + validate them
		if (args) { this.setArgs(args) };
		
		utils.css.setCSS(widget, this.currArgs().widgetCSS);
		utils.css.setCSS(track, this.currArgs().trackCSS);
		utils.css.setCSS(handle, this.currArgs().handleCSS);	
		
		this.value = this.currArgs().value;
		
		if (this.currArgs().value != 0) {
			this.moveHandle("byValue", {
				handle: handle,
				track: track,
				value: this.currArgs().value
			});
		}
	}
	
	
	this.updateProperties = function (args) {
		this.updateCSS(args);
	}
	
	// GLOBALS - Positioning
	this.handleStart = function () { 
		return { 
			left: utils.css.absolutePosition(handle).left, 
			top: utils.css.absolutePosition(handle).top 		  
		} 
	}


	

	
	//----------------------------------
	// Set Mouse Methods
	//----------------------------------		
	this.initMouseListener(widget, handle, track);
	

	

	//----------------------------------
	// Mousewheel Methods - Listener
	//----------------------------------
	var lastMouseWheelEvent = 0;
	this.setMouseWheelEventTime = function () {
		var d = new Date();
		lastMouseWheelEvent = d.getTime();	
	}
	this.getLastMouseWheelEventTime = function () {
		return lastMouseWheelEvent;	
	}
	
	this.bindToMouseWheel = function (element) {
		
		/*
		function disable_scroll() {
		  if (window.addEventListener) {
		      window.addEventListener('DOMMouseScroll', wheel, false);
		  }
		  window.onmousewheel = document.onmousewheel = wheel;
		  document.onkeydown = keydown;
		}
		
		function enable_scroll() {
		    if (window.removeEventListener) {
		        window.removeEventListener('DOMMouseScroll', wheel, false);
		    }
		    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
		}
		*/

		//----------------------------------
		// Mousewheel Methods - Handler
		//----------------------------------	
		function MouseWheelHandler(e) { // cross-browser wheel delta
			//
			//  We don't want to scroll the window
			//
			window.onmousewheel = null;
			
			
			var e = window.event || e; // old IE support
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
			

			
			that.moveHandle("byMouseWheel", {
				"event": e, 
				handle: handle,
				wheelDelta: delta,
			});
			return false;
		}	
		
		if (element.addEventListener) {
			element.addEventListener("mousewheel", MouseWheelHandler, false); // IE9, Chrome, Safari, Opera	
			element.addEventListener("DOMMouseScroll", MouseWheelHandler, false); // Firefox	
		}
		else {element.attachEvent("onmousewheel", MouseWheelHandler);}  	// IE 6/7/8
	}
	// And mousewheel scrolling over the widget will trigger a mousewheel event.
	this.bindToMouseWheel(widget);

	
	
	
	

	//----------------------------------
	// Slide Callbacks - Handler
	//----------------------------------
	var slideCallbacks = [];
	this.addSlideCallback = function (callback) {
		slideCallbacks.push(callback);
	}
	this.runSlideCallbacks = function () {
		for (var i=0; i<slideCallbacks.length; i++) {
			slideCallbacks[i](this);
		};
		
		

		// linked Callbacks
		if (that.linkedSliders && that.linkedSliders.length > 0 
			&& that.linkedCallbacks && that.linkedCallbacks.length > 0) {

			for (var i=0;i<that.linkedCallbacks.length; i++) {
				that.linkedCallbacks[i](that);
			}
		}
	}
	

	//----------------------------------
	// linkedCallbacks - Handler
	//----------------------------------	
	this.addLinkedCallback = function (func) {
  		if (!that.linkedCallbacks)
			that.linkedCallbacks = [];
  		//addLinkedCallback(that, func);
  		that.linkedCallbacks.push(func);
  	}
} 




//******************************************************
//  The general idea here is that there's an overlaying
//  div on top of the slider that, when clicked
//  expands to 100% of the page size.
//******************************************************
utils.gui.horizontalSlider.prototype.initMouseListener = function (parentElement, handle, track) {

	var that = this;
	
	var mouseListenerElement =  utils.dom.makeElement("div", parentElement, this.currArgs().id + "_mouseListenerElement", utils.dom.mergeArgs(this.currArgs().handleCSS,{
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		zIndex: 1999999999,
		borderWidth: 0,
		backgroundColor: "rgba(0,0,0,0)"
	}));
	
	
	mouseListenerElement.onmousedown = function (event) { 
		this.style.position = "fixed";
		//this.style.backgroundColor = "rgba(255, 0, 0, .5)";
		that.mouseDown = true;
		that.moveHandle("byMouse", {
			"event": event, 
			handle: handle,
			track: track
		});
		
	}
	
	
	mouseListenerElement.onmousemove = function (event) { 
		if (that.mouseDown) {
			that.moveHandle("byMouse", {
				"event": event, 
				handle: handle,
				track: track
			});		
		}		
	}
	
	mouseListenerElement.onmouseup = function (event) { 
		this.style.position = "absolute";
		//this.style.backgroundColor = "rgba(255, 0, 0, 0)";
		that.mouseDown = false;
	}
		
}

utils.gui.horizontalSlider.prototype.defaultArgs = function () {
	
	return {
		
	  	id: "__Slider__",			//def "sliderScroller"
	  	parent: document.body,
	  	start: 0,
	  	min:   0,
	  	max: 100,
	  	step: 1,
	  	value: 0,
	  	round: true,
	  	handleOffsetLeft: 0,
	  	handleOffsetTop: 0,
	  	widgetCSS: {
	  		position: "absolute",
	  		top: 50,
	  		left: 50,
	  		width: 300,
	  		//backgroundColor: "rgba(255,0,0,1)",
	  	},
	  	
	  	trackCSS: {
	  		height: 10,
	  		width: 300,
	  		position: "absolute",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(0,0,0,1)",
	  		backgroundColor: "rgba(125,125,125,1)",
	  		borderRadius: 0,
	  	},
	  	
	  	handleCSS: {
	  		height: 30,
	  		width: 10,
	  		position: "absolute",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(85,85,85,1)",
	  		backgroundColor: "rgba(125,225,125,1)",
	  		borderRadius: 0
	  	}
  	
  }
}





//******************************************************
//  
//******************************************************
utils.gui.horizontalSlider.prototype.setArgs = function (newArgs) {


	// Argument check
	//if (!newArgs.widgetCSS) { throw ("utils.gui.horizontalSlider: Invalid arguments - no 'widgetCSS' subObject in arguments.");}
	if (newArgs.widgetCSS && newArgs.widgetCSS["height"]) { throw ("utils.gui.horizontalSlider: Please set the slider height by adjusting either handleCSS['height'] or trackCSS['height']");}
	if (newArgs.widgetCSS && newArgs.widgetCSS["width"]) { throw ("utils.gui.horizontalSlider: Please set the slider width by adjusting either trackCSS['width']"); }


	// See if newArgs are valid for entry based on the default keys
	utils.dom.validateArgs("utils.gui.horizontalSlider", this.defaultArgs(), newArgs, function () {});

	
	// Define currArgs either as default or previously entered args;
	var currArgs = (this.currArgs)? this.currArgs() : this.defaultArgs();	

	
	// merge currArgs with newArgs
	var mergedArgs = (newArgs) ? utils.dom.mergeArgs(currArgs, newArgs) : currArgs;
	
		
	// calculate dims
	hHandle = mergedArgs.handleCSS.height +  mergedArgs.handleCSS.borderWidth * 2; 
	wHandle = mergedArgs.handleCSS.width +  mergedArgs.handleCSS.borderWidth * 2; 
	hTrack = mergedArgs.trackCSS.height +  mergedArgs.trackCSS.borderWidth * 2; 
	wTrack = mergedArgs.trackCSS.width +  mergedArgs.trackCSS.borderWidth * 2; 

	mergedArgs.widgetCSS.height  = (hHandle > hTrack) ? hHandle : hTrack; 
	mergedArgs.widgetCSS.width  = (wHandle > wTrack) ? wHandle : wTrack; 
		
	// set the top of the track to the "middle of the widget"
	mergedArgs.trackCSS.top = mergedArgs.widgetCSS.height/2 - 
						      mergedArgs.trackCSS.height/2 - 
						      mergedArgs.trackCSS.borderWidth;
	
	mergedArgs.handleCSS.left = mergedArgs.handleOffsetLeft;
	mergedArgs.handleCSS.top = mergedArgs.handleOffsetTop;
	


	// GLOBALS - Positional Domain



	// Define the currArgsfunction
	this.currArgs = function () {return mergedArgs};
	
	
	this.handleDomain = function () {
		return 	{
			start: this.currArgs().handleOffsetLeft,
			end:   this.currArgs().widgetCSS.width - this.currArgs().handleCSS.width - this.currArgs().handleOffsetLeft,
		}	
	}
}





//******************************************************
//  Uses a DIV element to listen for body-level mouse position.
//  This element is "activated" when the onmousedown is 
//  clicked on the widget.
//******************************************************
utils.gui.horizontalSlider.prototype.startBodyListen = function (bodyElt, handle, track) {
	var that = this;
	bodyElt.style.width= "100%";
	bodyElt.style.height = "100%";
	bodyElt.onmousemove = function (event) { 
		that.moveHandle("byMouse", {
			"event": event, 
			handle: handle,
			track: track
		});
	}
}





//******************************************************
//  Clears the bodyMouseListener DIV element.
//******************************************************
utils.gui.horizontalSlider.prototype.stopBodyListen = function (bodyElt) {
	bodyElt.style.width= "0%";
	bodyElt.style.height = "0%";
	bodyElt.onmousemove = function () {};
}




//******************************************************
//  Clears linked callbacks and sliders
//******************************************************
utils.gui.horizontalSlider.prototype.clearLinked= function () {
	this.linkedCallbacks = [];
	this.linkedSliders = [];
}




//******************************************************
//  
//******************************************************
utils.gui.horizontalSlider.prototype.moveHandle = function (moveType, args) {

		var that = this;
		
		// vars
		var domainOfHandle = this.handleDomain();
				
				
		// Do not want to propagate to the DOM
		// For either mouse or mouseWheel events
		if (args.event) { utils.dom.stopPropagation(args.event); } 


		// MOUSEWHEEL
		if (moveType == "byMouseWheel" && args.wheelDelta) {

			
			// get the current date and the delta from the last mousewheel move
			var step = (this.currArgs().step == null) ? 1 : this.currArgs().step;
			var d = new Date();
			var dTime = (d.getTime() - this.getLastMouseWheelEventTime());


			// respond to faster mousewheel -- rather linear and crude
			if (dTime < 250) {  
				step *= 3;
			}
			
			
			// generate a tempLeft
			var tempLeft = utils.convert.int(args.handle.style.left) + (args.wheelDelta * step);
			this.setMouseWheelEventTime();		
		}

		
		// MOUSE
		else if (moveType == "byMouse") {
			var newPt = utils.dom.getMouseXY(args.event);	
				   
			var tempLeft = newPt.x - // mouseclick x
						   args.track.getBoundingClientRect().left - // current abs position of the handle
						   utils.convert.int(args.handle.style.width)/2; // centers the handle on the mouse pointer		

		}
		
		
		// ENTERED
		else if (moveType == "byValue") {
			tempLeft = domainOfHandle.start + (domainOfHandle.end - domainOfHandle.start) * (args.value / (that.currArgs().max - that.currArgs().min));
		}


		// Throw an error otherwise
		else{
			throw "utils.gui.horizontalSlider: invalid moveHandle arguments."
		}
		

		// Reposition handle if outside of its CSS domain
		if (tempLeft < domainOfHandle.start) {
			tempLeft = domainOfHandle.start;
		}
		if (tempLeft > domainOfHandle.end) {
			tempLeft = domainOfHandle.end;
		}
		
		// get the Slider value
		var pct = tempLeft / (domainOfHandle.end - domainOfHandle.start);
		that.value = pct * (that.currArgs().max - that.currArgs().min);


		// round the slider value if desired
		if (that.currArgs.round) {that.value = Math.round(that.value);}
		
		// move the handle
		args.handle.style.left = utils.convert.px(tempLeft);
		
		// run callbacks
		that.runSlideCallbacks();	
}





//******************************************************
//  Links the inputted slider (b)
//******************************************************
utils.gui.horizontalSlider.prototype.linkSlider = function (b) {
	
	var that = this;
	
	if (this.linkedSliders) {
		for (var i=0;i<this.linkedSliders.length; i++) {
			if(b == this.linkedSliders[i]) {
				return;
			}				
		}
		this.linkedSliders.push(b);		
	}
	else{
		this.linkedSliders = [];
		this.linkedSliders.push(b);	
	}

	this.addLinkedCallback(function (a) {  
			
		var aDiff = a.currArgs().max - a.currArgs().min;
		
		var bDiff = b.currArgs().max - b.currArgs().min;
		// percentage-based linking
		var bVal = Math.round(bDiff * (a.value / aDiff));
		
		b.updateProperties({value: bVal});
		b.runSlideCallbacks();
		
  	});
}



//******************************************************
//  Links the inputted slider (b)
//******************************************************
utils.gui.horizontalSlider.prototype.unlinkSlider = function (b) {
	
	var that = this;
	
	if (this.linkedSliders) {
		for (var i=0;i<this.linkedSliders.length; i++) {
			if(b == this.linkedSliders[i]) {
				return;
			}				
		}
		this.linkedSliders.push(b);		
	}
	else{
		this.linkedSliders = [];
		this.linkedSliders.push(b);	
		console.log("ADDINGLINKD: ", b)
	}

	this.addLinkedCallback(function (a) {  
			
		var aDiff = a.currArgs().max - a.currArgs().min;
		
		var bDiff = b.currArgs().max - b.currArgs().min;
		// percentage-based linking
		var bVal = Math.round(bDiff * (a.value / aDiff));
		
		b.updateProperties({value: bVal});
		b.runSlideCallbacks();
		
  	});
}













utils.gui.progressBar = function (parent, args) {
	
	var progBar = {};	
	
	// 
	// Widget
	//
	progBar.widget = utils.dom.makeElement('div', parent, 'ProgressWidget', {
		position: 'absolute',
		marginLeft: '25%',
		width: '50%',
		marginTop : '50%'
	});
	


	// 
	// Label
	//
	progBar.label = utils.dom.makeElement('div', progBar.widget, 'ProgressBar_Label', {
		fontFamily: GLOBALS.fontFamily,
		color: 'rgba(255,255,255)',
		fontSize: 11,
	});
	progBar.label.innerHTML = 'Loading...'
	


	// 
	// Bar
	//
	progBar.bar = utils.dom.makeElement('div', progBar.widget, 'ProgressBar', {
		height: 10,
		borderRadius: 'none',
		position: 'relative',
		top: 5,
		'backgroundColor': 'rgb(0,0,0)',
		'borderRadius': 0,
		'border': 'solid 1px rgba(125,125,0)'
	});	
	// 
	// Bar - style
	//
	$(progBar.bar).progressbar();
	$(progBar.bar).removeClass('ui-corner-all');
	$(progBar.bar).removeClass('ui-widget-content');
	var pVal =  $(progBar.bar).find( '.ui-progressbar-value' );
	pVal.css({
    	'background': 'rgb(180,180,180)',
    });	


	
	// 
	// update
	//
	progBar.update = function(args) {
	
		var isClear = (args['clear']) ? args['clear'] : false;
		var isMax = (args['max']) ? args['clear'] : false;
		var isAdd = (args['add']) ? args['add'] : false;		
		var isLabel = (args['label']) ? args['label'] : false;		
				
		if (isClear){
			$(progBar.bar).progressbar('option', 'value', 0 );
		}
		
		if (isMax){
			$(progBar.bar).progressbar('option', 'max', args['max'] );
		}
		
		if (isAdd){
			$(progBar.bar).progressbar('option', 'value', $(progBar.bar).progressbar( 'option', 'value' ) + 1);
		}
		
		if (isLabel){
			progBar.label.innerHTML = args['label'];
		}		
		
	}
	
	progBar.hide = function(){
		$(progBar.widget).fadeOut(0);
	}
	
	progBar.show = function(){
		$(progBar.widget).fadeIn(0);
	}
	
	
	return progBar;
}


//******************************************************
//  Init
//
//******************************************************
utils.gui.verticalSlider = function (args) {

	this.setArgs(args); 
	var that = this;
	

	// WIDGET	
	var widget = utils.dom.makeElement("div", this.currArgs().parent, this.currArgs().id, this.currArgs().widgetCSS);
	// TRACK
	var track =  utils.dom.makeElement("div", widget, this.currArgs().id + "_track", this.currArgs().trackCSS);
	// HANDLE	
	var handle =  utils.dom.makeElement("div", widget, this.currArgs().id + "_handle", this.currArgs().handleCSS);
	
	// Defining the update css version
	this.updateCSS = function (args) {
		// If there are inputted args, we need to set + validate them
		if (args) { this.setArgs(args) };
		
		utils.css.setCSS(widget, this.currArgs().widgetCSS);
		utils.css.setCSS(track, this.currArgs().trackCSS);
		utils.css.setCSS(handle, this.currArgs().handleCSS);	
		
		this.value = this.currArgs().value;
		
		if (this.currArgs().value != 0) {
			this.moveHandle("byValue", {
				handle: handle,
				track: track,
				value: this.currArgs().value
			});
		}
	}
	
	
	this.updateProperties = function (args) {
		this.updateCSS(args);
	}

	

	//----------------------------------
	// Set Mouse Methods
	//----------------------------------
	this.initMouseListener(widget, handle, track);	
	
	
	// GLOBALS - Positioning
	this.handleStart = function () { 
		return { 
			left: utils.css.absolutePosition(handle).left, 
			top: utils.css.absolutePosition(handle).top 		  
		} 
	}


	//----------------------------------
	// Mousewheel Methods - Listener
	//----------------------------------
	var lastMouseWheelEvent = 0;
	this.setMouseWheelEventTime = function () {
		var d = new Date();
		lastMouseWheelEvent = d.getTime();	
	}
	this.getLastMouseWheelEventTime = function () {
		return lastMouseWheelEvent;	
	}
	
	this.bindToMouseWheel = function (element) {
		
		//----------------------------------
		// Mousewheel Methods - Handler
		//----------------------------------	
		function MouseWheelHandler(e) { // cross-browser wheel delta
			var e = window.event || e; // old IE support
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
			that.moveHandle("byMouseWheel", {
				"event": e, 
				handle: handle,
				wheelDelta: delta,
			});
			return false;
		}	
		
		if (element.addEventListener) {
			element.addEventListener("mousewheel", MouseWheelHandler, false); // IE9, Chrome, Safari, Opera	
			element.addEventListener("DOMMouseScroll", MouseWheelHandler, false); // Firefox	
		}
		else {element.attachEvent("onmousewheel", MouseWheelHandler);}  	// IE 6/7/8
	}
	// And mousewheel scrolling over the widget will trigger a mousewheel event.
	this.bindToMouseWheel(widget);

	
	
	
	

	//----------------------------------
	// Slide Callbacks - Handler
	//----------------------------------
	var slideCallbacks = [];
	this.addSlideCallback = function (callback) {
		slideCallbacks.push(callback);
	}
	this.runSlideCallbacks = function () {
		for (var i=0; i<slideCallbacks.length; i++) {
			slideCallbacks[i](this);
		};
		
		
		// linked Callbacks
		if (that.linkedSliders && that.linkedSliders.length > 0 
			&& that.linkedCallbacks && that.linkedCallbacks.length > 0) {
			for (var i=0;i<that.linkedCallbacks.length; i++) {
				that.linkedCallbacks[i](that);
			}
		}
	}
	


	//----------------------------------
	// linkedCallbacks - Handler
	//----------------------------------	
	this.addLinkedCallback = function (func) {
  		if (!that.linkedCallbacks)
			that.linkedCallbacks = [];
  		//addLinkedCallback(that, func);
  		that.linkedCallbacks.push(func);
  	}
} 




//******************************************************
//  The general idea here is that there's an overlaying
//  div on top of the slider that, when clicked
//  expands to 100% of the page size.
//******************************************************
utils.gui.verticalSlider.prototype.initMouseListener = function (parentElement, handle, track) {

	var that = this;
	
	var mouseListenerElement =  utils.dom.makeElement("div", parentElement, this.currArgs().id + "_mouseListenerElement", utils.dom.mergeArgs(this.currArgs().handleCSS,{
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		zIndex: 1999999999,
		backgroundColor: "rgba(0,0,0,0)"
	}));
	
	
	mouseListenerElement.onmousedown = function (event) { 
		this.style.position = "fixed";
		//this.style.backgroundColor = "rgba(255, 0, 0, .5)";
		that.mouseDown = true;
		that.moveHandle("byMouse", {
			"event": event, 
			handle: handle,
			track: track
		});
		
	}
	
	
	mouseListenerElement.onmousemove = function (event) { 
		if (that.mouseDown) {
			that.moveHandle("byMouse", {
				"event": event, 
				handle: handle,
				track: track
			});		
		}		
	}
	
	mouseListenerElement.onmouseup = function (event) { 
		this.style.position = "absolute";
		//this.style.backgroundColor = "rgba(255, 0, 0, 0)";
		that.mouseDown = false;
	}
		
}


utils.gui.verticalSlider.prototype.defaultArgs = function () {
	
	return {
		
	  	id: "__Slider__",			//def "sliderScroller"
	  	parent: document.body,
	  	start: 0,
	  	min:   0,
	  	max: 100,
	  	step: 1,
	  	value: 0,
	  	round: true,
	  	handleOffsetLeft: 0,
	  	handleOffsetTop: 0,
	  	widgetCSS: {
	  		position: "absolute",
	  		top: 50,
	  		left: 50,
	  	},
	  	
	  	trackCSS: {
	  		height: 300,
	  		width: 10,
	  		position: "absolute",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(0,0,0,1)",
	  		backgroundColor: "rgba(125,125,125,1)",
	  		borderRadius: 0,
	  	},
	  	
	  	handleCSS: {
	  		height: 10,
	  		width: 30,
	  		position: "absolute",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(85,85,85,1)",
	  		backgroundColor: "rgba(125,225,125,1)",
	  		borderRadius: 0
	  	}
  	
  }
}





//******************************************************
//  
//******************************************************
utils.gui.verticalSlider.prototype.setArgs = function (newArgs) {


	// Argument check
	//if (!newArgs.widgetCSS) { throw ("utils.gui.verticalSlider: Invalid arguments - no 'widgetCSS' subObject in arguments.");}
	if (newArgs.widgetCSS && newArgs.widgetCSS["height"]) { throw ("utils.gui.verticalSlider: Please set the slider height by adjusting either handleCSS['height'] or trackCSS['height']");}
	if (newArgs.widgetCSS && newArgs.widgetCSS["width"]) { throw ("utils.gui.verticalSlider: Please set the slider width by adjusting either trackCSS['width']"); }


	// See if newArgs are valid for entry based on the default keys
	utils.dom.validateArgs("utils.gui.verticalSlider", this.defaultArgs(), newArgs, function () {});

	
	// Define currArgs either as default or previously entered args;
	var currArgs = (this.currArgs)? this.currArgs() : this.defaultArgs();	

	
	// merge currArgs with newArgs
	var mergedArgs = (newArgs) ? utils.dom.mergeArgs(currArgs, newArgs) : currArgs;
	
		
	// calculate dims
	hHandle = mergedArgs.handleCSS.height +  mergedArgs.handleCSS.borderWidth * 2; 
	wHandle = mergedArgs.handleCSS.width +  mergedArgs.handleCSS.borderWidth * 2; 
	hTrack = mergedArgs.trackCSS.height +  mergedArgs.trackCSS.borderWidth * 2; 
	wTrack = mergedArgs.trackCSS.width +  mergedArgs.trackCSS.borderWidth * 2; 

	mergedArgs.widgetCSS.height  = (hHandle > hTrack) ? hHandle : hTrack; 
	//console.log(mergedArgs.widgetCSS.height )
	mergedArgs.widgetCSS.width  = (wHandle > wTrack) ? wHandle : wTrack; 
		
	// set the top of the track to the "middle of the widget"
	mergedArgs.trackCSS.top = mergedArgs.widgetCSS.height/2 - 
						      mergedArgs.trackCSS.height/2 - 
						      mergedArgs.trackCSS.borderWidth;
	
	mergedArgs.handleCSS.left = mergedArgs.handleOffsetLeft + wTrack/2 - Math.round(wHandle/2);
	mergedArgs.handleCSS.top = mergedArgs.handleOffsetTop;
	

	// GLOBALS - Positional Domain



	// Define the currArgsfunction
	this.currArgs = function () {return mergedArgs};
	
	
	this.handleDomain = function () {
		return 	{
			start: this.currArgs().handleOffsetTop,
			end:   this.currArgs().trackCSS.height  - this.currArgs().handleCSS.height - this.currArgs().handleOffsetTop,
		}	
	}
	
	
	
}





//******************************************************
//  Clears linked callbacks and sliders
//******************************************************
utils.gui.verticalSlider.prototype.clearLinked= function () {
	this.linkedCallbacks = [];
	this.linkedSliders = [];
}




//******************************************************
//  
//******************************************************
utils.gui.verticalSlider.prototype.moveHandle = function (moveType, args) {

		var that = this;
		
		// vars
		var domainOfHandle = this.handleDomain();

				
				
		// Do not want to propagate to the DOM
		// For either mouse or mouseWheel events
		if (args.event) { utils.dom.stopPropagation(args.event); } 




		//------------------------
		// BY MOUSEWHEEL
		//------------------------
		if (moveType == "byMouseWheel" && args.wheelDelta) {

			
			// get the current date and the delta from the last mousewheel move
			var step = (this.currArgs().step == null) ? 1 : this.currArgs().step;
			var d = new Date();
			var dTime = (d.getTime() - this.getLastMouseWheelEventTime());


			// respond to faster mousewheel -- rather linear and crude
			if (dTime < 250) {  
				step *= 3;
			}
			
			
			// generate a tempLeft.  with verticalScrolling, we need to invert
			// the direction of the step
			var tempTop = utils.convert.int(args.handle.style.top) + (args.wheelDelta * -1 * step);
			
			
			
			// log the mousewheel event time
			// for velocity calculations
			this.setMouseWheelEventTime();		
		}

		

		
		
		//------------------------
		// BY MOUSE
		//------------------------
		else if (moveType == "byMouse") {

			var newPt = getMouseXY(args.event);	
					   
			var tempTop = newPt.y - // mouseclick x
						   args.track.getBoundingClientRect().top - // current abs position of the handle
						   utils.convert.int(args.handle.style.height)/2; // centers the handle on the mouse pointer		

		}
		


		
		//------------------------
		// BY VALUE
		//------------------------
		else if (moveType == "byValue") {
			tempTop = domainOfHandle.start + (domainOfHandle.end - domainOfHandle.start) * (args.value / (that.currArgs().max - that.currArgs().min));
		}




		//------------------------
		// ELSE ERROR
		//------------------------
		else{
			throw "utils.gui.verticalSlider: invalid moveHandle arguments."
		}
		

		// Reposition handle if outside of its CSS domain
		if (tempTop < domainOfHandle.start) {
			tempTop = domainOfHandle.start;
		}
		if (tempTop > domainOfHandle.end) {
			tempTop = domainOfHandle.end;
		}

		
		
		// get the Slider value
		var pct = tempTop / (domainOfHandle.end - domainOfHandle.start);
		that.value = pct * (that.currArgs().max - that.currArgs().min);


		// round the slider value if desired
		if (that.currArgs.round) {that.value = Math.round(that.value);}
		
		// move the handle
		args.handle.style.top = utils.convert.px(tempTop);
		
		// run callbackls
		that.runSlideCallbacks();	
}





//******************************************************
//  Links the inputted slider (b)
//******************************************************
utils.gui.verticalSlider.prototype.linkSlider = function (b) {
	
	var that = this;
	
	if (this.linkedSliders) {
		for (var i=0;i<this.linkedSliders.length; i++) {
			if(b == this.linkedSliders[i]) {
				return;
			}				
		}
		this.linkedSliders.push(b);		
	}
	else{
		this.linkedSliders = [];
		this.linkedSliders.push(b);	
	}

	this.addLinkedCallback(function (a) {  
			
		var aDiff = a.currArgs().max - a.currArgs().min;
		
		var bDiff = b.currArgs().max - b.currArgs().min;
		// percentage-based linking
		var bVal = Math.round(bDiff * (a.value / aDiff));
		
		b.updateProperties({value: bVal});
		b.runSlideCallbacks();
		
  	});
}



//******************************************************
//  
//******************************************************
function getMouseXY(e) {
    if (navigator.appName == 'Microsoft Internet Explorer') {
      tempX = event.clientX + document.body.scrollLeft;
      tempY = event.clientY + document.body.scrollTop;
    }
    else {  // grab the x-y pos.s if browser is NS
      tempX = e.pageX;
      tempY = e.pageY;
    }  

    if (tempX < 0) {tempX = 0;}
    if (tempY < 0) {tempY = 0;}  

    return {x:tempX, y:tempY};
}









//******************************************************
//  
//******************************************************

utils.oo.init = function (obj, defaultArgs, args, initRoutine) {
	obj.defaultArgs = defaultArgs;
	obj.args = (args) ? utils.dom.mergeArgs(obj.defaultArgs, args) : obj.defaultArgs;
	
	obj.CSS = (obj.args.CSS) ? obj.args.CSS : obj.args.widgetCSS;
	
	obj.widget = utils.dom.makeElement("div", obj.args.parent, obj.args.id, obj.CSS);
	$(window).resize(function () {
	  obj.updateCSS();
	});
	
	if (initRoutine)
		initRoutine();
}//******************************************************
//  Init
//
//******************************************************
var ContentDivider = function (args) {

  	this.setArgs(args); 
	var that = this;
	
	//-------------------------------
	// The Widget
	//-------------------------------	 

	this.containmentDiv = utils.dom.makeElement("div", this.currArgs().parent, "Containment", {
		position: "absolute",
		//backgroundColor: "rgba(255,0,0,.2)",
		"pointer-events": "none"
	});
	this.widget = utils.dom.makeElement("div", this.currArgs().parent, "ContentDivider", this.currArgs().widgetCSS);	 
	 
	//-------------------------------
	// UpdateCSS
	//-------------------------------
	this.updateCSS = function (args) {		
		if (args) { 
			this.setArgs(args) 
			utils.css.setCSS(that.widget, this.currArgs().widgetCSS);
		};

	}

	
	$(that.widget).draggable({containment: this.containmentDiv});
	this.updateCSS();	
}






ContentDivider.prototype.defaultArgs = function () {
	return {
		id: "ContentDivider",
		parent: document.body,
		orientation: "vertical",
		widgetCSS: {
			position: 'absolute',
			top: "90%",
			left: 0,
			width: "100%",
			height: 6,
			cursor: "n-resize",
			//backgroundColor: "rgba(250,50,50, 1)",
			opacity: 1,
		},
		boundaryCSS: {
			top: 0,
			left: 0,
			width: 650,
			height: 400,
		}
	}
}



//******************************************************
//  
//******************************************************
ContentDivider.prototype.setArgs = function (newArgs) {

	
	// See if newArgs are valid for entry based on the default keys
	utils.dom.validateArgs("ContentDivider", this.defaultArgs(), newArgs, function () {});

	
	// Define currArgs either as default or previously entered args;
	var currArgs = (this.currArgs)? this.currArgs() : this.defaultArgs();	

	
	// merge currArgs with newArgs
	var mergedArgs = (newArgs) ? utils.dom.mergeArgs(currArgs, newArgs) : currArgs;
	
	// Define the currArgsfunction
	this.currArgs = function () {return mergedArgs};
}

var defaultArgs_FrameViewer = {
	id: "FrameViewer",
	parent: document.body,
	onloadFrame: 0,
	blankMsg : "drag and drop Thumbnail here",
	contrastThreshold: .1,
	CSS: {
			position: 'absolute',
			top: 15,
			left: 20,
			height: 300,
			width: 300,	
			"fontSize": 16,		
			"overflow-y": "hidden",
			"overflow-x": "hidden",
		    "font-family": 'Helvetica, Helvetica neue, Arial, sans-serif',
		    "border" : "solid",
			"borderColor": "rgba(50,50,50,1)",
			"color": "rgba(255,255,255,1)",
		  	"border-width" : 0,
		  	"border-radius": 0,	 
		  	 overflow: "visible"
  		 },
}



//******************************************************
//  Init
//
//******************************************************
function FrameViewer(args) {

	utils.oo.init(this, defaultArgs_FrameViewer, args);
	this.currFrame = this.args.onloadFrame;
	

	//----------------------------------
	//	PROGRESS BAR
	//----------------------------------
	this.progBar = utils.gui.progressBar(this.widget);
	this.progBar.hide();
	
	
	
	//----------------------------------
	//	CANVAS AND CONTEXT
	//----------------------------------
	this.canvas = utils.dom.makeElement("canvas", this.widget, this.args.id + "_canvas", {
		top: 0,
		left: 0
	});
	this.canvas.height = this.CSS.height;
	this.canvas.width = this.CSS.width;
	this.context = this.canvas.getContext('2d');
	
	
	
	//----------------------------------
	//	ONLOAD CALLBACKS
	//----------------------------------
	this.onloadCallbacks = [];
	this.adjustMethods = {};
	
	
	
	//----------------------------------
	//	CAVAS STYLING
	//----------------------------------
	this.context.font = utils.convert.px(10) + " " + this.args.CSS["font-family"];
	this.context.fillStyle = "white"

	
	
	//----------------------------------
	// Droppable
	//----------------------------------
	this.frames = [];
	var that = this;
	var loadDropable = function (droppable) {
		if (droppable.frames) {
			that.loadFrames(dropable.frames);
		}
	}


	this.updateCSS();
}









//******************************************************
//  Adds Callback methods once all the images (frames)
//  are loaded.
//******************************************************
FrameViewer.prototype.addOnloadCallback = function (callback) {
	this.onloadCallbacks.push(callback)
}






//******************************************************
//  Draws a "frame" (i.e. an Image object) onto the canvas.
//******************************************************
FrameViewer.prototype.drawFrame = function (frameNumber, adjustments) {	

	if (this.frames) {		
		
		//
		//  Adjust frameNumber to start at 1 instead of 0
		//
		if (frameNumber < 0) {
			
			frameNumber = 0;
		
		}
		else if (frameNumber > this.frames.length) {
			
			frameNumber = this.frames.length -1;
			
		}


		//
		//  Sync currFrame to frameNumber
		//		
		if (this.frames.length > 0) {
			
			frameNumber = Math.round(frameNumber)
			this.currFrame = frameNumber;
			this.drawImage_MaintainProportions(this.frames[frameNumber], this.canvas, this.context);
			
		}
		

		//
		//  Apply image adjustments if needed
		//			
		if (adjustments === true) {
			
			this.imageAdjust();
			
		}		
	}	
}





//******************************************************
//  Draws a "frame" (i.e. an Image object) onto the canvas.
//******************************************************
FrameViewer.prototype.drawImage_MaintainProportions = function (img, canvas, context) {

	var startX = 0;
	var startY = 0;
	var width = canvas.width;
	var height = canvas.height;
	
	
	//
	// Clear the canvas
	//	
	context.clearRect(0, 0, canvas.width, canvas.height);


	//
	// When the image is longer in height
	//
	if (img.width < img.height) {
		
		newH = canvas.height;
		newW = Math.round(img.width * canvas.height/img.height);
		startX = Math.round(canvas.width - newW)/2;
		width = newW;
		
	}
	//
	// When the image is longer in width
	//
	else if (img.width > img.height) {
		
		newW = canvas.width;
		newH = Math.round(img.height * canvas.width/img.width);
		startY = Math.round(canvas.height - newH)/2;
		height = newH;
	
	}	
	
	
	//
	// Draw image
	//
	context.drawImage(img, startX, startY, width, height);		
}






//******************************************************
//  Handles any pixel-related ajustment of the frame.
//  In this case, brightness and contrast.
//******************************************************
FrameViewer.prototype.imageAdjust = function (methodType, value) {


	//
	// Arguments are needed only when initializing the adjustMethods
	//
	if (methodType && value) {
		this.adjustMethods[methodType] = value;
	}
	


	//
	// Draw original frame
	//
	this.drawFrame(this.currFrame); 
	

	if (this.canvas.height > 0 && this.canvas.width > 0) {

	
		//
		// Get canvas's imageData
		//
		var imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);	


		//
		// Apply image adjustment methods
		//
		for (var i in this.adjustMethods) {
			console.log(i)
			switch (i) {
				case "brightness":
					console.log("brightness")
					imageData.data = linearBrightness(imageData.data, this.adjustMethods[i]);
					break;
				case "contrast":
					console.log('contrast')
					imageData.data = linearContrast(imageData.data, this.adjustMethods[i], this.args.contrastThreshold);
					break;
			}
		}
		
		
		//
		// Put the new image data back into canvas
		//
		this.context.putImageData(imageData, 0, 0);	
	}
}

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

}//******************************************************
//  Loads all of the frames as Image objects, and stores
//  them in an array.
//******************************************************
FrameViewer.prototype.loadFrames = function (frames) {
	
	// Check if there are frame paths given
	if (!frames) {
		throw("Load Frames error: invalid method parameter -- you need frame paths!")
	} 

	
	var imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);	
	this.frames = frames;	
	this.currFrame = Math.round(this.frames.length/2);
	this.drawImage_MaintainProportions(this.frames[this.currFrame], this.canvas, this.context);
	
	
	// Need to get the appropriate contrast threshold for the data set.
	this.args.contrastThreshold = thresholdAutoDetect(imageData.data);

	
	// Run any callbacks once everything is loaded
	for (var k=0; k<this.onloadCallbacks.length; k++) {
		this.onloadCallbacks[k]();
	}		    		
}//******************************************************
//  Method for handling objects that are "Droppable".
//  In this case, they are the ScanThumbnails.
//******************************************************

FrameViewer.prototype.loadFramesByViewPlane = function (viewPlane) {

	this.currViewPlane = viewPlane.toLowerCase();
	this.ScanViewer.ViewPlaneMenu.activateIcon(this.currViewPlane, true);
	
	var frames = this.currDroppable.getFrames({
		'viewPlane' : this.currViewPlane,
		'filter' : 'img',
	});
				
	this.loadFrames(frames);
	
}//******************************************************
//  updateCSS
//
//******************************************************
FrameViewer.prototype.updateCSS = function () {



	//----------------------------------
	//	CANVAS
	//----------------------------------
	this.canvas.height = $(this.widget).height();
	this.canvas.width = $(this.widget).width();
	$(this.canvas).css({
		height: $(this.widget).height(),
		width: $(this.widget).width(),
	})


		
	//----------------------------------
	//  BLANK CANVAS SCHEME 
	//----------------------------------
	if (this.frames.length == 0) {
		
		//
		// Fill the canvas with black color 
	    //
	    this.context.fillStyle = "black";
	    this.context.fillRect(0,0, this.canvas.height, this.canvas.width);


		
		
		//
		// Rescale image		
		//
		
		var ddImg = GLOBALS.dragAndDropImage;
		ddImg.width = 249/2.5;
		ddImg.height = 156/2.5; 
		this.context.drawImage(ddImg, this.canvas.width/2 - ddImg.width/2, 
								    this.canvas.height/2 - ddImg.height/2, 
								    ddImg.width, ddImg.height);

	}
	else{
		this.canvas.style.opacity = 1;
	}


	//
	// Draw the currFrame
	//
	this.drawFrame(this.currFrame); 
}defaultArgs_ScanTabs = {
	parent: document.body,
	id: "_ScanTabs",
	scanContents: 0,
	tabTitles: ["<b>Info.</b>", "<b>Adjust</b>"],
	contentFontSize: 10,
	activeLineColor: GLOBALS.activeLineColor,
	activeFontColor: GLOBALS.activeFontColor,
	inactiveLineColor: GLOBALS.inactiveLineColor,
	inactiveFontColor: GLOBALS.inactiveFontColor,
	CSS: {
		top: 400,
		left: 20,
		height: 300,
		width: 300,
		borderWidth: 1
	}
}




//******************************************************
//  The tab "titles" themselves are elements.  
//  Treated this as a separate method b/c jQuery UI
//  has some quirks as to how it treats tab titles.
//******************************************************
var makeTabTitles = function (parent, titles) {

	var titleElt = utils.dom.makeElement("ul", parent);	
	var titlesA = [];
	var titlesLi = [];
	
	var iconList = [{	
			src: "./icons/InfoIcon.png",
			w: 15,
			h: 16,
		} , 
		{
			src: "./icons/Adjust.png",
			w: 18,
			h: 16
		}
	];
	
	for (var i=0;i<titles.length;i++) {
		var li = utils.dom.makeElement("li", titleElt);	
		var a = utils.dom.makeElement("a", li);

		$(a).attr('href', "#" + parent.id + "-" + (i+1).toString());
		a.setAttribute("id", "tabA_" + i.toString());
		li.setAttribute("id", "tabLi_" + i.toString());
		a.innerHTML = titles[i];	
		a.style.color = "rgba(0,0,0,0)";
		
		var img = utils.dom.makeElement("img", a, a.id + " _img", {
			position: "absolute",
		});
		img.src = iconList[i].src;
		img.height = iconList[i].h;
		img.width = iconList[i].w;
		img.style.left = utils.convert.px(GLOBALS.scanTabLabelWidth/2 - iconList[i].w/2);
		img.style.top = utils.convert.px(GLOBALS.scanTabLabelHeight/2 - iconList[i].h/2);
		
		titlesA.push(a);
		titlesLi.push(li);
		
	}	
	//titleElt.className = "menu"
	return {
		titleElt: titleElt,
		titlesA: titlesA,
		titlesLi: titlesLi,
	}
}




//******************************************************
//  Init
//
//******************************************************
var ScanTabs = function (args) {
	
	var that = this;
	
	utils.dom.addCallbackManager(this);
		
	this.args = (args) ? utils.dom.mergeArgs(defaultArgs_ScanTabs, args) : defaultArgs_ScanTabs;
	this.CSS = this.args.CSS;
	
	this.activeTab = 0;
	
	this.widget = utils.dom.makeElement("div", this.args.parent, this.args.id, this.args.CSS);	
	$(this.widget).css({
		top: $(this.widget.parentNode).height() - GLOBALS.minScanTabHeight,
		height: GLOBALS.minScanTabHeight,
	})

	
	this.tabTitleObj = makeTabTitles(this.widget, this.args.tabTitles);
	this.tabs = []
	
	
	// Set Active Tab to 0
	$(this.tabTitleObj.titlesA[this.activeTab]).click();  
	





	
	//------------------------------
	// Tab Titles
	//------------------------------	
	for (var i=0;i<this.args.tabTitles.length;i++) {
		var e = utils.dom.makeElement("div", this.widget, this.args.id + "-" + (i+1).toString());
		e.label = this.tabTitleObj.titlesA[i].innerHTML;
		this.tabs.push(e)
	}

	$(this.widget).tabs();
	
	

	
	//------------------------------
	// ACTIVE TAB TRACKING
	//------------------------------
	for (var i=0;i<this.tabTitleObj.titlesA.length;i++) {		
		$(this.tabTitleObj.titlesA[i]).click(function (e) {
			that.setActiveTab(e);
			
		})
	}

	
	//------------------------------
	// CSS
	//------------------------------	
	this.updateCSS();
}




//******************************************************
//  getTab
//
//******************************************************
ScanTabs.prototype.getTab = function (value) {
	if (typeof value == "string") {
		
		value = value.toLowerCase();
		
		for (var i=0; i<this.tabs.length; i++) {
			
			var v = (this.tabs[i].label).toLowerCase();
			
			if (v.indexOf(value) > -1) {
				return this.tabs[i];
			}
		}		
	}
}




//******************************************************
//  setActiveTab
//
//******************************************************
ScanTabs.prototype.setActiveTab = function (e) {
	
	var elt = document.getElementById(e.currentTarget.id);
	
	var elt = e.currentTarget;
	
	for (var i=0; i<this.tabTitleObj.titlesA.length; i++) {
		if (this.tabTitleObj.titlesA[i] == elt) {

			this.minClick = (this.activeTab != i) ? false: true;

			this.activeTab = i;
				
			this.runCallbacks('setActiveTab');
		}
	}
}


ScanTabs.prototype.topWithinCompressedRange = function (range) {
	
	var rangeVal = (typeof range === 'undefined') ? 10 : range;	
	
	var parentHeight = $(this.widget.parentNode).height();
	
	var defaultTop = parentHeight - GLOBALS.defaultScanTabHeight;
	
	var currTop = $(this.widget).position().top;
	
	var diff = Math.abs(currTop - defaultTop);	
	
	
	if ( diff <= rangeVal) {
		return true;
	}		
	return false;	
}


ScanTabs.prototype.updateCSS = function () {



	//------------------------------
	// WIDGET
	//------------------------------
	$(this.widget).css({
		"font-size": this.args.contentFontSize,
		"padding": 0,
		"borderRadius": 0,
		"borderWidth": this.CSS.borderWidth,
		 background: "none",
		"borderColor": GLOBALS.inactiveLineColor,
		//"backgroundColor": "rgba(25,25,25,1)",
		"font-family": 'Helvetica, Helvetica neue, Arial, sans-serif',
	})



	//------------------------------
	// TAB CONTENTS
	//------------------------------
	var contentsHeight = $(this.widget).height() - GLOBALS.scanTabLabelHeight;
	
	for (var i=0;i<this.tabs.length;i++) {
	
		$(this.tabs[i]).css({
			"font-size": this.args.contentFontSize,
			"font-family": 'Helvetica, Helvetica neue, Arial, sans-serif',
			width: $(this.widget).width() - 20,
			"padding": 10,
			borderWidth: 1,
			borderColor: GLOBALS.inactiveLineColor,
			"border-bottom-right-radius": "0px",
			"border-bottom-left-radius": "0px",
			"color": "rgba(255,255,255,1)",
			background: "none",
			"backgroundColor": "rgba(0,0,0,1)",
			height: contentsHeight,// compensating for the padding,
			marginLeft:-1,
			overflow: "hidden",

		})
	}


	
	//------------------------------
	// PARENT TITLE ELEMENT
	//------------------------------
	$(this.tabTitleObj.titleElt).css({
		"font-size": this.args.contentFontSize,
		"font-family": 'Helvetica, Helvetica neue, Arial, sans-serif',
		borderRadius: 0,
		background: "none",
		borderWidth: 0,
		"color": GLOBALS.activeFontColor,
		padding: 0,
		cursor: "pointer"
		
	})


	
	//------------------------------
	// TAB TITLES
	//------------------------------
	for (var i=0;i<this.tabTitleObj.titlesA.length;i++) {
		
		var bColor = (i == this.activeTab) ? 
					 GLOBALS.inactiveLineColor : 
					 GLOBALS.inactiveLineColor;
					 
		var fColor = (i == this.activeTab) ? 
					 GLOBALS.activeFontColor : 
					 GLOBALS.semiactiveFontColor;


		var op = ((i == this.activeTab) && !this.topWithinCompressedRange()) ? 1 : .4;
		 
		 
		//------------------------------
		// The Text
		//------------------------------
		$(this.tabTitleObj.titlesA[i]).css({
			"font-size": this.args.contentFontSize,
			"font-family": 'Helvetica, Helvetica neue, Arial, sans-serif',
			borderRadius: 0,
			opacity: op,
			cursor: "pointer",
		})
		
		
		//------------------------------
		// The Frame
		//------------------------------
		$(this.tabTitleObj.titlesLi[i]).css({
			background: "none",
			backgroundColor:"rgb(0,0,0)",
			borderColor: bColor,
			borderRadius: 0,
			height: GLOBALS.scanTabLabelHeight,
			width: GLOBALS.scanTabLabelWidth,
			marginTop: -1* this.CSS.borderWidth,
			marginLeft:-1* this.CSS.borderWidth,
		})
	}	

}
defaultArgs_ScanThumbnail = {
	id: "ScanThumbnail",
	parent: document.body,
	draggableParent: document.body,
	returnAnimMax: 300,
	activated: false,
	widgetCSS: {
		position: "absolute",
		width: GLOBALS.ThumbnailWidgetWidth,
		height: GLOBALS.ThumbnailWidgetHeight,
		top: 0,
		left: 0,			
	    "border" : "solid",
		"border-color": "rgba(50,50,50,1)",
		"color": "rgba(0,0,0,1)",
	  	//"background-color" : "rgba(120,31,60,1)",
	  	"border-width" : 1,
	  	"border-radius": 0,	 
	  	"cursor": "pointer"
	},
	ThumbnailImageCSS: {
		position: "absolute",
		width: GLOBALS.ThumbnailImageWidth - 2,
		height: GLOBALS.ThumbnailImageHeight - 2,
		top: 0,
		left: 0,	
		"overflow-y": "hidden",
		"overflow-x": "hidden",
	    "border" : "solid",
		"border-color": "rgba(255,255,255,1)",
		"color": "rgba(0,0,0,1)",
	  	//"background-color" : "rgba(120,31,60,1)",
	  	"border-width" : 1,
	  	"border-radius": 0,	 
	  	"cursor": "pointer"
	}	
}




//******************************************************
//  Init
//
//******************************************************
function ScanThumbnail(scanData, args) {
	var that = this;
	utils.oo.init(this, defaultArgs_ScanThumbnail, args, function () {});


	this.mouseDown = false;

	utils.css.setCSS(this.widget, utils.dom.mergeArgs(defaultArgs_ScanThumbnail.widgetCSS, args.widgetCSS))
	
	
	
	//--------------------------------
	// T
	//--------------------------------
	// AJAX QUERY WOULD BE HERE
	this.scanData = scanData;	
	
	
	
	//--------------------------------
	// THUMBNAIL IMAGE (goes Into Canvas)
	//--------------------------------	
	this.ThumbnailImage = new Image();
	this.ThumbnailImage.src = this.scanData.sagittalPaths[Math.round(this.scanData.sagittalPaths.length/2)]; 

	
	
	//--------------------------------
	// THUMBNAIL CANVAS
	//--------------------------------
	this.ThumbnailCanvas = this.makeThumbnailCanvas("ThumbCanvas");
	this.cloneable = this.ThumbnailCanvas; // for __Droppable__.js
	
	
	
	//--------------------------------
	// FRAMES
	//--------------------------------
	this.frames = {};
	
	function populateFramesObject(viewPlane) {
		
		var b = that.getFrameList(viewPlane);

		that[viewPlane + "FrameCount"] = b.length;
		that[viewPlane + "LoadCount"] = 0;

		for (var i=0; i<b.length; i++) {
			that.frames[that.pathMolder(b[i])] = {
				'viewPlane': viewPlane, 
				'src' : b[i]
			}
		} 

	}

	this.getFrames = function(args1) {

		var isObject = (typeof args1 === 'object');
		var isString = (typeof args1 === 'string');
		
		if (isString) {
			var viewPlane = args1;
			var returnArr = [];	

			for (var i in that.frames) {
				if (that.frames[i]['viewPlane'] == viewPlane) {
					returnArr.push(that.frames[i])					
				}
			}	

			return returnArr;			
		}		
		
		else if (isObject) {
			
			var viewPlane = args1["viewPlane"];
			var isFilter = args1['filter'] ? args1['filter'] : false;
			var returnArr = [];
	
			
			for (var i in that.frames) {
				if (that.frames[i]['viewPlane'] == viewPlane) {
					
					
					if (isFilter && that.frames[i][args1['filter']]) {
						//utils.dom.debug(that.frames[i]['img'])
						returnArr.push(that.frames[i][args1['filter']]);	
					}

				}
			}
			return returnArr;			
		}
		


	}

	populateFramesObject("sagittal");
	populateFramesObject("coronal");
	populateFramesObject("transverse");
	
	
	
	//--------------------------------
	// TEXT ELEMENT
	//--------------------------------
	var thumbPos = $(this.ThumbnailCanvas).position()
	var textTop = thumbPos.top;
	var textLeft = thumbPos.left + $(this.ThumbnailCanvas).width() + GLOBALS.ThumbnailImageMarginX;
	
	
	this.TextElement = utils.dom.makeElement("div", this.widget, "TextElement", {
		position: "absolute",
		height: this.args.ThumbnailImageCSS.height,
		width: this.args.ThumbnailImageCSS.width,
		top: textTop,
		left: textLeft,
		color: "rgba(255,255,255,1)",
		fontSize: 11,		
	    fontFamily: 'Helvetica,"Helvetica neue", Arial, sans-serif',	
	});

	this.TextElement.innerHTML += "<b><font size = '3'>" + utils.convert.int(this.scanData.sessionInfo["Scan"].value) + "</font></b><br>";
	this.TextElement.innerHTML += this.scanData.sessionInfo["type"].value.toString().toLowerCase() + "<br>";
	this.TextElement.innerHTML += (this.scanData["sagittalPaths"].length.toString().toLowerCase() + " frames<br>");

	

	
	this.addHoverMethods();
	this.addDraggableMethods();

	
		

	
	
	// Once the image lods, we want to make sure it is also the draggable image
	// and that it's draw on the Thumbnail canvas.

	$(this.ThumbnailImage).load(function () {		
		if (that.ThumbnailCanvas)
		
			that.ThumbnailCanvas.getContext("2d").drawImage(
				 that.ThumbnailImage, 0, 0, 
				 that.args.ThumbnailImageCSS.width, 
				 that.args.ThumbnailImageCSS.height
			);
		
		else
			console.log("No thumb canvas")
	});

}


ScanThumbnail.prototype.pathMolder = function (path) {	
	
	splitStrs = path.split("testscans");
	return splitStrs[1];
}

//****************************************
// THUMB CANVASES
//****************************************
ScanThumbnail.prototype.makeThumbnailCanvas = function (idAppend) {
	
	var that = this;
	
	var elt = utils.dom.makeElement("canvas", this.widget, idAppend, utils.dom.mergeArgs(this.args.ThumbnailImageCSS,{
		top: GLOBALS.ThumbnailImageMarginY,
		left: GLOBALS.ThumbnailImageMarginX,
		 color: "rgb(255,255,255)"
	}));

	elt.width = this.args.ThumbnailImageCSS.width;
	elt.height = this.args.ThumbnailImageCSS.height;
	
	// Might want to put the progress indicator here.
	return elt;
}









ScanThumbnail.prototype.addHoverMethods = function () {
	
	var that = this;
	var inactiveFade = .6;
	
	
	//--------------------------
	// Setup procedure, defines the mouseenters
	//--------------------------		
	
	
	$(this.widget).bind('mouseenter.browse', function () {

		$(that.widget).stop().animate({
			
			opacity: 1,
			borderColor: "rgb(255,255,255)"
			
		}, 0);
		
		$(that.ThumbnailCanvas).stop().animate({

			borderColor: "rgb(155,155,155)"
			
		}, 0);
	
	}).bind('mouseleave.browse', function(){
		
		$(that.widget).stop().animate({
			
			opacity: inactiveFade,
			borderColor: "rgb(0,0,0)"
			
		}, 0);

		$(that.ThumbnailCanvas).stop().animate({

			borderColor: "rgb(85,85,85)"
			
		}, 0);
		
	});
	
	$(this.widget).mouseleave();
	
}




//****************************************
// DEACTIVATE
//****************************************
ScanThumbnail.prototype.deactivate = function () { 
	//console.log("DEACTIVATING: " + this.args.id)
	
	var that = this;
	this.args.activated = false;
	
	
	//--------------------------
	// GENERIC BORDER HIGHLIGHT
	//--------------------------	
	borderHighlightOnHover(this.widget);
	
	
	//--------------------------
	// SHOW HOVERING METADATA
	//--------------------------
	$(this.widget).mouseenter(function () {
		that.hoverOn(that.args.animtime);
	}).mouseleave(function () {
		that.hoverOff(that.args.animtime);
	});	
	
	
	this.hoverOff(100);
}




//****************************************
// ACTIVATE
//****************************************
ScanThumbnail.prototype.activate = function (activeTarget) { 
	var that = this;
	this.args.activated = true;
	
	// Do the hover On
	this.hoverOn(0);
	
	
	// Unbind all hover existing methods
	$(this.widget).unbind('mouseenter').unbind('mouseleave');
	

	// Since we're unbinding everything we have to rebind
	// the generic hover (border highlighting)	
	borderHighlightOnHover(this.widget);
		
	// Callbacks	
	if (this.activatedCallbacks && this.activatedCallbacks.length > 0) {
		for (var i=0;i<this.activatedCallbacks.length;i++) {
			this.activatedCallbacks[i](that, {
				"activeTarget": activeTarget
			});
		}
	}
}




//****************************************
// FRAMES
//****************************************
ScanThumbnail.prototype.getFrameList = function (type) {

	return (type == "sagittal") ? this.scanData.sagittalPaths : (type == "transverse") ? this.scanData.axialPaths : this.scanData.coronalPaths;
}




//****************************************
// WINDOW RESIZING
//****************************************
ScanThumbnail.prototype.updateCSS = function () {

}



//****************************************
// activated callaback
//****************************************
ScanThumbnail.prototype.addActivatedCallback = function (callback) {
	if(!this.activatedCallbacks)
		this.activatedCallbacks = [];
	
	this.activatedCallbacks.push(callback)
}




ScanThumbnail.prototype.addDraggableMethods = function () {
	
	var that = this;


	//
	// Destroy clone
	//
	function destroy() {		
		if (that.widget.clone) {
			that.widget.clone.parentNode.removeChild(that.widget.clone);
			that.widget.clone = undefined;				
		}					
	}
					

	//
	// Revert viewer borders back to original
	//
	function revertBorders () {
		var viewers = XV.ScanViewers("widgets");
		for (var i=0; i<viewers.length; i++){
			if (viewers[i].prevBorder){

				viewers[i].style.border = viewers[i].prevBorder;
				viewers[i].prevBorder = undefined;
			}
			
		}
	}
	

	
	$(this.widget).bind('mousedown.drag', function(event) {
			//
			// Get modal dims
			//
			var modal = XV.widget;
			var modalOffset = $(modal).offset();
			
			
			//
			// Create clone
			//
			this.clone = $(this).clone()[0];
			
			
			//
			// Append clone do document body
			//
			document.body.appendChild(this.clone);
			
			
			//
			// Set clone position to offset
			//
			var offset = $(this).offset();
			var pDims = [$(this).width(), $(this).height()];
			
			
			//
			// Define generic mouse event end 
			//			
			this.clone.mouseEventEnd = function () {
				var clone = this;

				revertBorders();					
				
				if (!this.targetId) {
					
					//  Fly back to original position
					$(this).animate({
						top: offset.top,
						left: offset.left
					}, GLOBALS.animFast, function() {
						destroy();
					})		
									
				}
				else {
					
					// Load the thumbnail into the ScanViewer
					var v = XV.ScanViewers(this.targetId);
					if (v) {

						v.FrameViewer.loadDroppable(that); 
						if (v.widget.prevBorder) {
							v.widget.style.border = v.widget.prevBorder;	
						}							
					}
					destroy();
				}
			}
			
			
			//
			// Set style
			//
			$(this.clone).css({
				
				top: offset.top,
				left: offset.left,
		
			})
			
			
			
			//-----------------------------------------
			// MOUSE UP CLICK (will populate ScanViewer)
			//-----------------------------------------
			$(this.clone).dblclick(function(event) { 
				
				console.log("Nothing")
					
			});
						
			
						
			//-----------------------------------------
			// MOUSE UP CLICK (will populate ScanViewer)
			//-----------------------------------------
			$(this.clone).bind('mouseup.drag', function(event) { 
				
				var clone = this;
				var inserted = false;
				
				//
				// Try setting target to empty scan viewers
				//
				XV.ScanViewers( function (ScanViewer, i, j) {
					if (!inserted && ScanViewer.FrameViewer.frames.length == 0) {
						clone.targetId = ScanViewer.widget.id; 
						inserted = true;
					}
				});
				
				
				//
				// Utility...
				//
				function setFirstViewer() {
					GLOBALS.lastClickedTarget = XV.ScanViewers()[0][0].widget.id;
					clone.targetId = GLOBALS.lastClickedTarget;	
				}
				
				
				//
				// If all frames are occupied...
				//
				if (!inserted) { 
					if (!GLOBALS.lastClickedTarget) { setFirstViewer(); }	
					else { 
					
						var prevFound = undefined;
						
						//
						// Find viewer that is lastClicked, cycle to next viewer set it as last clicked
						//
						XV.ScanViewers( function (ScanViewer, i, j) { 
							if (GLOBALS.lastClickedTarget == ScanViewer.widget.id) {
								prevFound = true;
								return;
							}
							if (prevFound) {
								GLOBALS.lastClickedTarget = ScanViewer.widget.id;
								clone.targetId = GLOBALS.lastClickedTarget;
							}
						})
						
						//
						// If we've run out of viewers, go back to the first.
						//
						if (!prevFound) { setFirstViewer(); }
					}
				}
				
				// Invoke mouseEventEnd()
				clone.mouseEventEnd();
			})
			
			
			
			//
			// Define clone draggable
			//			
			$(this.clone).draggable({
				
				opacity: .7, 
				
				containment: [ 
					modalOffset.left, 
					modalOffset.top, 
					modalOffset.left + $(modal).width() - pDims[0] -1, 
					modalOffset.top + $(modal).height() - pDims[1] -1
				],
				
				start: function () {

				},
				
				drag: function () {
					
					this.targetId = undefined;
					var collidables = $(this).collision(XV.ScanViewers("widgets"));
					
					for (var i=0; i<collidables.length; i++) {
						
						revertBorders(); 
						
						var collideDiv = $(this).collision(collidables[i], {as : "<div />"});	
						var collisionArea = $(collideDiv).width() * $(collideDiv).height()
						var draggableArea = $(this).height() * $(this).width();
												
						if (collisionArea/draggableArea > .6){
				
							$(collidables[i]).mouseenter();
							
							if (!collidables[i].prevBorder) {
								collidables[i].prevBorder = collidables[i].style.border;	
							}
							
							collidables[i].style.border = "solid rgba(255,255,255,1) 1px"
							this.targetId = collidables[i].id;							
						}
						
						
					}
				},
				
				stop: function () {
					
					this.mouseEventEnd();
				
				}	
			});
		
			
			//
			// Programatically trigger mouseDown to initiate clone drag
			//
			$(this.clone).data("ui-draggable")._mouseDown(event);
			

		}
	)	
	
}ScanThumbnail.prototype.loadFramesToDOM = function (args) {

	var that = this;
	var primaryQ = [];
	var setLen = this.getFrames(args['viewPlane']).length;

				
	// Call any before methods
	if (args["before"]) {  args["before"] (setLen) };	


	for (i in this.frames) {
		
		var viewPlane = this.frames[i]['viewPlane'];
		
		// only add to queue if if it's not cached
		if (!this.frames[i]['img']) {
			if (args['viewPlane'] && viewPlane == args['viewPlane']) {
				primaryQ.push(this.frames[i]['src']);
			}		
		}
		else {
			//utils.dom.debug("image already loaded!: ", this.frames[i]['img'])
		}
	}
	


		
		
	// if already cached
	if (primaryQ.length == 0) {
		
		XV.ScanViewers( function (ScanViewer, i, j) { 
			if (ScanViewer.FrameViewer.currDroppable == that) {
				utils.dom.debug("Using cached images for " + ScanViewer.FrameViewer.currViewPlane + " plane.");
				ScanViewer.FrameViewer.loadCurrViewPlane();	
			}	
		})
		
	}
	// otherwise send to loader
	else {
		// Add to queue
		GLOBALS.imagePreloader.addToPrimaryQueue(primaryQ);	
		// Begin chain
		GLOBALS.imagePreloader.loadNextImage({ "onload"  : args["onload"], });		
	}
}

ScanThumbnail.prototype.pathSplitter = function (path) {	
	
	splitStrs = path.split("testscans");
	
}

ScanThumbnail.prototype.viewPlaneLoaded = function (viewPlane) {
	
	
}

var defaultArgs_ScanViewer = {
	id: GLOBALS.ScanViewerPreId,
	parent: document.body,
	CSS: {
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
	},
	sliderCSS:	
	{
		id: "_FrameSlider", 
		parent: document.body,
		round: true,
		handleOffsetLeft: 0,
	  	handleOffsetTop: 0,
		widgetCSS:{
		},
		handleCSS:{
			height: 8,
			width: 8,
			borderRadius: 2,
			borderColor: GLOBALS.semiactiveLineColor,
			backgroundColor: "rgba(255,255,255,1)"
		},
		trackCSS:{
			height: 3,
			borderWidth: 1,
			borderColor: GLOBALS.semiactiveLineColor,
			backgroundColor: "rgba(70, 70, 70, 1)",
			borderRadius: "3px"
		}
	}
}






//******************************************************
//  Init
//	
//******************************************************
var ScanViewer = function (args) {
  	
	utils.oo.init(this, defaultArgs_ScanViewer, args);
	var that = this;
	this.widget.defaultMouseEvents = [];
	
	
	

	this.axisIcons = [];

 	
 	    	
	 //----------------------------------
	 // FRAME VIEWER
	 //----------------------------------
	 this.FrameViewer = new FrameViewer({
	 	id: "FrameViewer",
	 	parent: this.widget,
	 	"border-width": 0,
	 });
	this.FrameViewer.ScanViewer = this;

 	
	// Modify the FrameViewer such that it lets "this"
	// know of the currentScan when it's dropped in.
	this.FrameViewer.addOnloadCallback(function () {
		if(that.FrameViewer.currDroppable.scanData) {
			that.populateData(that.FrameViewer.currDroppable.scanData)
		}
	})


 	this.addViewPlaneMenu();
 	

	 //----------------------------------
	 // FRAME SLIDER
	 //----------------------------------	
	this.FrameSlider = new utils.gui.horizontalSlider(utils.dom.mergeArgs(this.args.sliderCSS, {
		id: "FrameSlider", 
		parent: this.widget,
		round: true,
	}));


	// Tell frameslider how to behave...	
	this.FrameSlider.addSlideCallback(function (_slider) { 
		
		var subtractor = (_slider.currArgs().max > 0) ? _slider.currArgs().min  : 0;
		
		var val = Math.round(_slider.value);
		
		// Update any displayable data
		if (that.displayableData && that.displayableData.frameNumber) {
			
			that.displayableData.frameNumber.innerHTML = "Frame: "+(val + 1) + " / " + that.FrameViewer.frames.length;	
			
		}
		
		// Draw the frame
	
		that.FrameViewer.drawFrame(val - subtractor, true); 
		
	  });


	// Bind mousewheel scrolling to slider	
	this.FrameSlider.bindToMouseWheel(this.FrameViewer.widget);


	// Add FrameViewer callback function to synchronize with slider
	this.FrameViewer.addOnloadCallback(function () {
		
		if (that.FrameSlider) {
			
			that.FrameSlider.updateProperties({
				
				min : 0,
				max : that.FrameViewer.frames.length-1,
				value : Math.round(that.FrameViewer.frames.length/2),
			
			});

			that.FrameViewer.drawFrame(Math.round(that.FrameSlider.value), true);
			
		}		
		else{
			
			utils.dom.debug("NO DRAW FRAME");
			
		}

	});
	



	//----------------------------------
	// CONTENT DIVIDER
	//----------------------------------	

	this.ContentDivider = new ContentDivider( {	
		parent: this.widget,		
	});
	
	 //----------------------------------
	 // Content Divider CAllback
	 //----------------------------------	 
	 $(this.ContentDivider.widget).draggable( {
		
		start: function () {
			
		   this.dragging = true;		
		
		},
		
	 	drag: function () {

		   that.updateCSS();
			
		},
		
		stop: function () {
			
			this.dragging = false;
		
		}
		
	});
   	

	
		
	
	//----------------------------------
	// SCAN TABS
	//----------------------------------		
	
	this.ScanTabs = new ScanTabs({
		
		id: "tabs",
		parent: this.widget,
		tabTitles: ["<b>Session Info</b>", "<b>Adjust</b>"],
		
	});
	this.ScanTabs.addCallback( 'setActiveTab', function() {
		
		//if (that.ScanTabs.minClick){
		var cPos = $(that.ContentDivider.widget).position();
		var cHeight = $(that.widget.ContentDivider).height();
		var minCTop = GLOBALS.minContentDividerTop($(that.widget).height());
		var minDiff = Math.abs(cPos.top - minCTop);
		
		if (minDiff < 10 ) {
			$(that.ContentDivider.widget).css( {
				top: $(that.widget).height() - GLOBALS.tabClickHeight - cHeight,
			});			
		}
		else{
			if (that.ScanTabs.minClick) {
				$(that.ContentDivider.widget).css( {
					top: minCTop,
				});	
			}			
		}			

		that.updateCSS();
	})

	





	//----------------------------------
	// Link Menu
	//----------------------------------	
	this.addLinkMenu();


	//----------------------------------
	// BRIGHNESS AND CONTRAST SLIDERS
	//----------------------------------	
	
	
	//----------------------------------
	// ADJUST / IMAGE PROCESSING SLIDERS
	//----------------------------------		
	this.addAdjustSliders();


	
	//----------------------------------
	// METADATA, A.K.A. DISPLAYABLE DATA
	//----------------------------------	
	this.displayableData = {};
	this.textCSS_small = {
		color: "rgba(255,255,255,1)",
		position: "absolute",
		top: 0,
		left: 0,
		fontSize: GLOBALS.fontSizeMed,
		textAlign: "left",
		//border: "solid 1px rgb(255,255,255)",
		width: 140
	};


	// DATA: Frame Number
	this.displayableData.frameNumber = utils.dom.makeElement("div", this.widget, "_frameDisplay");
	$(this.displayableData.frameNumber).css(this.textCSS_small);		
		
		
		
		
	//----------------------------------
	// Synchronize current frame number with display
	//----------------------------------	
	this.FrameViewer.addOnloadCallback(function () {
		that.displayableData.frameNumber.innerHTML = "Frame: "+ (that.FrameViewer.currFrame) + 
													 " / " + that.FrameViewer.frames.length;	
	});
	

	
	
	//--------------------------
	// Setup procedure, defines the mouseenters
	//--------------------------		
	
	this.setJQueryEvents();
	
	this.updateCSS();


}

ScanViewer.prototype.setJQueryEvents = function () {
	
	var that = this;
	
	this.setDraggable_jQuery();
	
	$(this.widget).bind('mouseenter.hover', function () {

		$(that.ViewPlaneMenu).stop().show();
		$(that.LinkMenu).stop().show();
		$(that.FrameSlider.getWidget()).stop().fadeTo(GLOBALS.animFast, 1);
		$(that.widget).stop().animate({
			//borderColor: "rgb(115,115,115)"
		}, GLOBALS.animFast)
	
	}).bind('mouseleave.hover', function(){

		$(that.ViewPlaneMenu).stop().hide();
		$(that.LinkMenu).stop().hide();
		$(that.FrameSlider.getWidget()).stop().fadeTo(GLOBALS.animFast, .7);
		$(that.widget).stop().animate({
			//borderColor: "rgb(85,85,85)"
		}, GLOBALS.animFast)
		
	});
	
	$(this.widget).mouseleave();	
	
}






//******************************************************
//******************************************************
ScanViewer.prototype.closeButtonClicked = function (event) {}





//******************************************************
//  
//
//******************************************************
ScanViewer.prototype.addAdjustSliders = function () {
	
	var that = this;
	var sliderMargin = 40;
	var sliderLeft = 100;
	var numLeft = 320;
	var labelLeft = 20;
	
	var imgProcSliderCSS =
	{
		id: "_FrameSlider", 
		parent: document.body,
		round: true,
		handleOffsetLeft: 0,
	  	handleOffsetTop: 0,
		widgetCSS:{
		},
		handleCSS:{
			height: 20,
			width: 10,
			borderRadius: 2,
			borderColor: GLOBALS.semiactiveLineColor,
			backgroundColor: "rgba(255,255,255,1)"
		},
		trackCSS:{
			height: 8,
			width: 200,
			borderWidth: 1,
			borderColor: GLOBALS.semiactiveLineColor,
			backgroundColor: "rgba(0, 0, 0, 1)"
		}
	}
	
	
	var labelCSS = {
		position: "absolute",
		color: "rgba(255, 255, 255)",
		fontSize: GLOBALS.fontSizeMed,
		fontFamily: GLOBALS.fontFamily,
		//border: "solid 1px rgba(255,255,0,1)",
		width: sliderLeft * .75,
	}
	
	
	
	
	//---------------------------
	// BRIGHTNESS SLIDER
	//---------------------------
	this.BrightnessSlider = new utils.gui.horizontalSlider(utils.dom.mergeArgs(imgProcSliderCSS, {
		id: "BrightnessSlider", 
		parent: that.ScanTabs.getTab("Adjust"),
		round: true,
		widgetCSS:{
			top: sliderMargin * 1,
			left: sliderLeft,
		},
	}));
	
    
    // Label
    var bLabel = utils.dom.makeElement("div", that.ScanTabs.getTab("Adjust"), "SliderLabel", utils.dom.mergeArgs(labelCSS, {
    	top: (sliderMargin * 1) + imgProcSliderCSS.handleCSS.height/2 - GLOBALS.fontSizeMed/2 - 2,
    	left: labelLeft,
    }))
    bLabel.innerHTML = "Brightness";
    
    
    // Number
    var bNum = utils.dom.makeElement("div", that.ScanTabs.getTab("Adjust"), "SliderLabel", utils.dom.mergeArgs(labelCSS, {
    	top: (sliderMargin * 1) + imgProcSliderCSS.handleCSS.height/2 - GLOBALS.fontSizeMed/2 - 2,
    	left: numLeft ,
    	fontSize: GLOBALS.fontSizeLarge,
    }))
    bNum.innerHTML = "0";
    
    
	// Callback
	this.BrightnessSlider.addSlideCallback(function (_slider) {		
		bNum.innerHTML = Math.round(_slider.value);		
		that.FrameViewer.imageAdjust("brightness", _slider.value);
    });    
    
    
    
    
	//---------------------------
	// CONTRAST SLIDER
	//---------------------------    
    this.ContrastSlider = new utils.gui.horizontalSlider(utils.dom.mergeArgs(imgProcSliderCSS, {
		id: "ContrastSlider", 
		parent: that.ScanTabs.getTab("Adjust"),
		round: true,
		widgetCSS:{
			top: sliderMargin * 2,
			left: sliderLeft,
		},
	}));
	

    
    var cLabel = utils.dom.makeElement("div", that.ScanTabs.getTab("Adjust"), "SliderLabel", utils.dom.mergeArgs(labelCSS, {
    	top: (sliderMargin * 2) + imgProcSliderCSS.handleCSS.height/2 - GLOBALS.fontSizeMed/2 - 2,
    	left: labelLeft,
    }))
    cLabel.innerHTML = "Contrast";
    

    // Number
    var cNum = utils.dom.makeElement("div", that.ScanTabs.getTab("Adjust"), "SliderLabel", utils.dom.mergeArgs(labelCSS, {
    	top: (sliderMargin * 2) + imgProcSliderCSS.handleCSS.height/2 - GLOBALS.fontSizeMed/2 - 2,
    	left: numLeft ,
    	fontSize: GLOBALS.fontSizeLarge,
    }))
    cNum.innerHTML = "0";
    
        
	this.ContrastSlider.addSlideCallback(function (_slider) {
		cNum.innerHTML = Math.round(_slider.value);					
		that.FrameViewer.imageAdjust("contrast", _slider.value);
    });
	
}



//******************************************************
//  
//
//******************************************************
ScanViewer.prototype.addLinkMenu = function () {

	var that = this;	
	
	var iconStartTop = 5;
	var imgDiv = 7;
	var iconDimSmall = 25;
	var iconDimMed = 35;
	var iconStartLeft = $(this.widget).width() - 20;
	var spacer = iconDimMed/2;	
	
	
	
	var iconVals = { 
					 1: { 
					 		images: ["Chain-Closed", "Chain-Closed_GroupPlus", "Chain-Closed_Group"],
					 		titles: ["Link slider to current group", "Link slider to new group", "Link slider to selected group"],
					 	},
					 2: {
					 		images: ["Chain-Broken_Minus",  "Chain-Broken_GroupMinus", "Broom_Minus" ],
					 		titles: ["Unlink from group", "Remove group", "Clear all groups"],
					 	},
					 3: {
							images: ["Eye"],
							titles: ["View all groups", ],
						}

					}
					
	
	// Calculate Width of subMenu
	var maxColumns = 0;
	var subMenuHeight = 0;
	for (var i in iconVals) {
		if (maxColumns < iconVals[i].images.length) {
			maxColumns = iconVals[i].images.length;
		}
		subMenuHeight += iconDimMed ;
	}	
	var subMenuWidth = maxColumns * (iconDimMed + spacer) + iconDimMed;


	//------------------------------
	// ADD Menu div
	//------------------------------	
	this.LinkMenu = utils.dom.makeElement("div", this.widget, "LinkMenu",{
		position: "absolute",
		left: iconStartLeft,
		top: iconStartTop,// + spacer*i,
		height: iconDimMed , 
		width: iconDimMed,
		//border: "sold 1px rgba(100,100,100,1)"
	});
	this.LinkMenu.closed = false;
	
	
	
	//------------------------------
	// ADD Menu img (child of Menu DIV)
	//------------------------------	
	this.LinkMenu.icon = utils.dom.makeElement("img", this.LinkMenu, "icon",{
		position: "absolute",
		left: 0,
		top: 0,// + spacer*i,
		height: iconDimSmall , 
		width: iconDimSmall ,
		cursor: "pointer", 
	});	
	this.LinkMenu.icon.src = "./icons/LinkMenu/Chain-Broken.png";
	that.LinkMenu.iconHovered = false;



	//------------------------------
	// SUB MENU
	//------------------------------	
	this.LinkMenu.subMenu = utils.dom.makeElement("div", this.LinkMenu, "subMenu",{
		position: "absolute",
		left: -subMenuWidth + iconDimMed,
		top: 0,
		height: subMenuHeight, 
		width: subMenuWidth,
		cursor: "pointer",
		//border: "solid 1px rgba(100,100,100,1)"
	});	
	// For onclick purposes
	this.LinkMenu.subMenu.pinned = false;



	//------------------------------
	// ADD MENU ICONS
	//------------------------------
	this.LinkMenu.subMenu.icons = [];	
	
	for (var i in iconVals) {
		for (var j=0; j<iconVals[i].images.length; j++) {

			var icon = utils.dom.makeElement("img", this.LinkMenu.subMenu, "icon_" + iconVals[i].images[j],{
				position: "absolute",
				top: iconDimMed  * (i-1),
				// Right justify
				left: (subMenuWidth - iconDimMed*2 - spacer) - (j)*(iconDimMed + spacer),
				height: iconDimMed , 
				width: iconDimMed ,
				cursor: "pointer", 
			});	
			
			icon.src = "./icons/LinkMenu/" + iconVals[i].images[j] + ".png";
			icon.title = iconVals[i].titles[j];
			
			this.LinkMenu.subMenu.icons.push(icon);	
			
			if (icon.title == "Link slider to selected group") {
				
			}	
			
			
			else if (icon.title == "Link slider to current group") {
				icon.onclick = function (event) {	

					utils.dom.stopPropagation(event);

					GLOBALS.SliderLinker.addLinkMenuPopup(that);
					
					that.LinkMenu.childNodes[0].src = "./icons/LinkMenu/Chain-Closed.png";
				}				
			}
			
			
			else if (icon.title == "Link slider to new group") {
				icon.onclick = function (event) {	

					
					utils.dom.stopPropagation(event);
					GLOBALS.SliderLinker.addGroup();				
					GLOBALS.SliderLinker.addLinkMenuPopup(that, "Select viewers for new link group.  Click 'Done' when finished.");
					that.LinkMenu.childNodes[0].src = "./icons/LinkMenu/Chain-Closed.png";
					
				}				
			}
			
			
			else if (icon.title == "Unlink from group") {
				icon.onclick = function (event) {	
					
					GLOBALS.SliderLinker.flashExisting();
					
					if (that.selectorBox) {
						GLOBALS.SliderLinker.removeFromGroup(that, true);
						that.LinkMenu.childNodes[0].src = "./icons/LinkMenu/Chain-Broken.png";
					}

				}				
			}
			
			else if (icon.title == "Remove group") {
				icon.onclick = function (event) {	
					
					GLOBALS.SliderLinker.flashExisting();
					
					if (that.selectorBox) {
						GLOBALS.SliderLinker.removeGroup(that);
						that.LinkMenu.childNodes[0].src = "./icons/LinkMenu/Chain-Broken.png";
					}

				}				
			}
			
			
			else if (icon.title == "Clear all groups") {
				icon.onclick = function (event) {	

					GLOBALS.SliderLinker.showExisting();
					GLOBALS.SliderLinker.addClearAllPopup(that);
					
					XV.ScanViewers( function(ScanViewer) {
							ScanViewer.LinkMenu.childNodes[0].src = "./icons/LinkMenu/Chain-Broken.png";
					});

				}				
			}
			
			else if (icon.title == 'View all groups') {
				icon.onclick = function (event) {	
					
					// Create the viewAll parameter
					if (typeof icon.viewAll === 'undefined') { 
						icon.viewAll = false; 
					}	
					
					// Invert		
					icon.viewAll = !icon.viewAll;
					
					// If there is an event...
					if (typeof event !== 'undefined') {
						// Initiate global view
						if (icon.viewAll) {
							GLOBALS.SliderLinker.stayVisible = true;
							GLOBALS.SliderLinker.showExisting();
						}
						else{
							GLOBALS.SliderLinker.stayVisible = false;
							GLOBALS.SliderLinker.hideExisting();
						}	
						
						// Re-invert on the button pressed
						icon.viewAll = !icon.viewAll;
						
						XV.ScanViewers( function (ScanViewer) { 
							
							// CAll onclick on all ScanViewer eye buttons
							// this will send you below
							var icons = ScanViewer.LinkMenu.subMenu.icons;
							for (var i=0; i < icons.length; i++) {
								if (icons[i].title == 'View all groups') {
									icons[i].onclick();
								}
							}
							
						})					
					}
					else {
						if (icon.viewAll === true) {
							subMenuIconBind(icon, false); 
							$(this).fadeTo(0, 1); 
						}
						else {
							subMenuIconBind(icon, true); 
							$(this).fadeTo(0, .5); 
						}
					}

				}				
			}
	

		}
	}	
	


	//
	//  SUB MENU - mouseleave
	//	
	function subMenuIconBind(icon, bind) {
		if (bind) {
			
			$(icon).bind('mouseenter.default', function () {
				if (that.LinkMenu.iconHovered) {
					$(this).stop().fadeTo(GLOBALS.animFast, 1);
				}			
			})
			
			$(icon).bind('mouseleave.default', function () {
				if (that.LinkMenu.iconHovered) {
					$(this).stop().fadeTo(GLOBALS.animFast, .5);
				}	
			});	
					
		}
		else{
			
			$(icon).unbind('mouseenter.default');
			$(icon).unbind('mouseleave.default');

		}	
	}
	



	//
	//  SUB MENU - mouseleave
	//	
	function subLeave() {
		
		$(that.LinkMenu.subMenu).fadeOut(GLOBALS.animFast);
		$(that.LinkMenu.icon).fadeTo(GLOBALS.animFast, .5);
		that.LinkMenu.iconHovered = false;
				
	}
	
	
	//
	//  MAIN MENU - mouseenter
	//	
	function mainEnter() {

		if (that.LinkMenu.iconHovered) {
			
			$(that.LinkMenu.icon).fadeTo(GLOBALS.animFast, 1);
			$(that.LinkMenu.subMenu).fadeIn(GLOBALS.animFast);
						
		}	
	}
	
	
	
		
	//
	//  MAIN BINDING FUNCTION
	//
	function superBind(subMenuPinned) {
		if (subMenuPinned) {
			//
			// Unbind hover events to pin the subMenu
			//
			$(that.LinkMenu.subMenu).unbind('mouseleave.link');
			$(that.LinkMenu).unbind('mouseenter.link');				
		}
		else{
			//
			// Bind the hover events to unpin subMenu
			//
			$(that.LinkMenu.subMenu).bind('mouseleave.link', subLeave);
			$(that.LinkMenu).bind('mouseenter.link', mainEnter);
		}	
	}
	
	
	//------------------------------
	// 
	//------------------------------		
	function setHoverEvents() {
		
		//
		// MAIN MENU ICON - default fade state
		//
		$(that.LinkMenu.icon).fadeTo(0,.5);
		
		
		//
		// SUB MENU - default fade state
		//		
		$(that.LinkMenu.subMenu).fadeOut(0);
		
		
		//
		//  MAIN MENU ICON - mouseenter
		//
		$(that.LinkMenu.icon).mouseenter(function () {
			that.LinkMenu.iconHovered = true;
			mainEnter();
		})
		
		
		//
		// SUB MENU ICONS - mouseenter, mouseleave
		//
		for (var i=0;i<that.LinkMenu.subMenu.icons.length; i++) {
			
			var icon = that.LinkMenu.subMenu.icons[i];
			$(icon).fadeTo(0,.5);
			subMenuIconBind(icon, true);

		}

		superBind(false);
	}	

	setHoverEvents();
}//******************************************************
//  
//
//******************************************************
ScanViewer.prototype.addViewPlaneMenu = function () {

	var that = this;	
	var iconStartLeft = 7;
	var iconStartTop = 7;
	var imgDiv = 7;
	var iconDimSmall = 23;
	var iconDimMed = 35;
	var spacer = iconDimMed*1.2;	
	var iconVals = ['Sagittal', 'Coronal', 'Transverse'];//, '3D'];

	
	
	
	//------------------------------
	// MAIN MENU
	//------------------------------	
	this.ViewPlaneMenu = utils.dom.makeElement("div", this.widget, "ViewPlaneMenu",{
		position: "absolute",
		left: iconStartLeft,
		top: iconStartTop,
		height: iconDimSmall , 
		width: iconDimSmall,
		cursor: "pointer", 
	});
	this.ViewPlaneMenu.title  = "Select View Plane";	
	
	
	
	
	//------------------------------
	// MAIN MENU ICON
	//------------------------------	
	this.ViewPlaneMenu.icon = utils.dom.makeElement("img", this.ViewPlaneMenu, "menuIcon",{
		position: "absolute",
		left: 0,
		top: 0,// + spacer*i,
		height: iconDimSmall , 
		width: iconDimSmall ,
		cursor: "pointer", 
	});	
	this.ViewPlaneMenu.icon.src  = "./icons/ViewPlaneMenu/Axes.png";	
	
	



	//------------------------------
	// SUB MENU
	//------------------------------	
	this.ViewPlaneMenu.subMenu = utils.dom.makeElement("div", this.ViewPlaneMenu, "subMenu",{
		position: "absolute",
		left: 0,//iconStartLeft  + iconDimMed,
		top: 0,// + spacer*i,
		height: iconDimMed , 
		width: spacer * iconVals.length,
		cursor: "pointer"
		//border: "solid 1px rgba(100,100,100,1)"
	});	
	// For onclick purposes
	this.ViewPlaneMenu.subMenu.pinned = false;
	



	//------------------------------
	// ADD MENU ICONS
	//------------------------------
	this.ViewPlaneMenu.subMenu.icons = [];	
	
	for (var i=0; i<iconVals.length; i++) {
			
		//
		// Icons
		//	
		var icon = utils.dom.makeElement("img", this.ViewPlaneMenu.subMenu, "icon_" + iconVals[i],{
			position: "absolute",
			top: 0,
			left: iconDimMed + spacer*(i),
			height: iconDimMed , 
			width: iconDimMed ,
			cursor: "pointer", 
		});	
		
		icon.src = "./icons/ViewPlaneMenu/" + iconVals[i] + ".png";
		icon.axis = iconVals[i];
		icon.title = iconVals[i];
		
		this.ViewPlaneMenu.subMenu.icons.push(icon);				


		
		//
		// SET onclick
		//
		if (icon.axis != "3D") {
			icon.onclick = function (event) {
				utils.dom.stopPropagation(event); 
				if (that.FrameViewer.frames.length > 0) {
					that.FrameViewer.loadDroppable(that.FrameViewer.currDroppable, this.axis.toLowerCase());
					that.ViewPlaneMenu.activateIcon(this.title);
				} 
			};		
		}	
	}	


	
	
	//------------------------------
	// 
	//------------------------------		
	function setHoverEvents() {
		
		//
		// MAIN MENU ICON - default fade state
		//
		$(that.ViewPlaneMenu.icon).fadeTo(0,.5);
		
		
		//
		// SUB MENU - default fade state
		//		
		$(that.ViewPlaneMenu.subMenu).fadeOut(0);
		
		
		//
		//  MAIN MENU ICON - mouseenter
		//
		$(that.ViewPlaneMenu.icon).mouseenter(function () {

			that.ViewPlaneMenu.iconHovered = true;
			mainEnter();
		})
		
		
		//
		// SUB MENU ICONS - mouseenter, mouseleave
		//
		for (var i=0;i<that.ViewPlaneMenu.subMenu.icons.length; i++) {
			
			var icon = that.ViewPlaneMenu.subMenu.icons[i];
			$(icon).fadeTo(0,.5);
			subMenuIconBind(icon, true);

		}

		superBind(false);
	}


	
	
	//
	//  SUB MENU - mouseleave
	//	
	function subMenuIconBind(icon, bind) {
		
		if (bind) {
			
			$(icon).bind('mouseenter.default', function () {
				if (that.ViewPlaneMenu.iconHovered) {
					$(this).stop().fadeTo(GLOBALS.animFast, 1);
				}			
			})
			
			$(icon).bind('mouseleave.default', function () {
				if (that.ViewPlaneMenu.iconHovered) {
					$(this).stop().fadeTo(GLOBALS.animFast, .5);
				}	
			});	
					
		}
		else{
			
			$(icon).unbind('mouseenter.default');
			$(icon).unbind('mouseleave.default');

		}
		
	}
	
	this.ViewPlaneMenu.activateIcon = function (iconName) {

		for (var i=0;i<that.ViewPlaneMenu.subMenu.icons.length; i++) {
			
			var icon = that.ViewPlaneMenu.subMenu.icons[i];
			
			if (icon.title.toLowerCase() == iconName.toLowerCase()) {
			
				subMenuIconBind(icon, true);				
				$(icon).stop().fadeTo(GLOBALS.animFast, 1);

			}
			else{
				subMenuIconBind(icon, true);				
				$(icon).stop().fadeTo(GLOBALS.animFast, .5);				
			}
		}
		
	}
	
	
	
	
	//
	//  SUB MENU - mouseleave
	//	
	function subLeave() {

		$(that.ViewPlaneMenu.subMenu).fadeOut(GLOBALS.animFast);
		$(that.ViewPlaneMenu.icon).fadeTo(GLOBALS.animFast, .5);
		that.ViewPlaneMenu.iconHovered = false;
				
	}
	
	
	//
	//  MAIN MENU - mouseenter
	//	
	function mainEnter() {

		if (that.ViewPlaneMenu.iconHovered) {
			
			$(that.ViewPlaneMenu.icon).fadeTo(GLOBALS.animFast, 1);
			$(that.ViewPlaneMenu.subMenu).fadeIn(GLOBALS.animFast);
						
		}	
	}
	
	
	//
	//  MAIN BINDING FUNCTION
	//
	function superBind(subMenuPinned) {
		if (subMenuPinned) {
			//
			// Unbind hover events to pin the subMenu
			//
			$(that.ViewPlaneMenu.subMenu).unbind('mouseleave.axis');
			$(that.ViewPlaneMenu).unbind('mouseenter.axis');				
		}
		else{
			//
			// Bind the hover events to unpin subMenu
			//
			$(that.ViewPlaneMenu.subMenu).bind('mouseleave.axis', subLeave);
			$(that.ViewPlaneMenu).bind('mouseenter.axis', mainEnter);
		}	
	}
	
	
	//
	//  ONCLICK
	//
	function setOnclickEvents() {
		
		$(that.ViewPlaneMenu).click(function () {	
			
			that.ViewPlaneMenu.subMenu.pinned = !that.ViewPlaneMenu.subMenu.pinned;
			
			superBind(that.ViewPlaneMenu.subMenu.pinned)			
			
		})
	}
	
	



	//
	// Function calls
	//
	setHoverEvents();
	setOnclickEvents();
}//******************************************************
//  Fill in metadata -- this will likely change as it gets 
//  deployed to the web...
//******************************************************
ScanViewer.prototype.populateData = function (data) {	
	var that = this;


	//----------------------------------
	// DATA: VIEW TYPE DATA
	//----------------------------------
	function makeDisplayableData(labelObj) {
		/*
		var counter = 0;
		for (i in labelObj) {
//			console.log(labelObj[i])
			var noSpace = labelObj[i]["label"].replace(/\s+/g, ' ');
			var currTop = (that.textCSS_small.fontSize * (2.5*counter+1) + 30);
			that.displayableData[noSpace] = utils.dom.makeElement("div", that.ScanTabs.getTab("View Type"), "_data_" + noSpace);
			$(that.displayableData[noSpace]).css(utils.dom.mergeArgs(that.textCSS_small,{
				top: currTop,
				left: 15
			}));
			that.displayableData[noSpace].innerHTML = labelObj[i].label;		

			that.displayableData[noSpace + "_dropdown"] = utils.dom.makeElement("select", that.ScanTabs.tabs[0], "_data_" + noSpace);
			$(that.displayableData[noSpace + "_dropdown"]).css(utils.dom.mergeArgs(that.textCSS_small,{
				top: currTop,
				left: 110,
				width: "10em",
				backgroundColor: "rgba(0,0,0,0)",
				borderWidth: 1,
				borderColor: GLOBALS.semiactiveLineColor
			}));	
			
			
			for (var j=0;j<labelObj[i]["option"].length;j++) {
				that.displayableData[noSpace + "_dropdown"].innerHTML += "<option>" + labelObj[i]["option"][j] + "</option>";
			}
			

			//----------------------------------
			// When dropdown is Change the axis of the frames
			//----------------------------------			
			if (labelObj[i].label.indexOf("View") != -1) {
				var dd = that.displayableData[noSpace + "_dropdown"];
				dd.innerHTML = "<option>" + "sagittal" + "</option>";
				dd.innerHTML += "<option>" + "axial" + "</option>";
				dd.innerHTML += "<option>" + "coronal" + "</option>";
				
				dd.onchange = function () {
					that.FrameViewer.loadFramesByViewPlane(dd.value)
					//console.log(dd.value);
				}				
			}

			
			counter++;
		}
		*/
	}
	
	//makeDisplayableData(data.viewTypeData);
	//populateTab_ViewType();

	//----------------------------------
	// DATA: SESSION INFO DATA
	//----------------------------------
	function makeSessionInfoData(labelObj) {
		//----------------------------------
		//	SCROLL GALLERY
		//----------------------------------

		that.sessionInfoScrollGallery = new ScrollGallery({
			parent: that.ScanTabs.getTab("Info"),
			id: "SessionData-ScrollGallery",
			orientation: "vertical",
			widgetCSS: {
				left: 0,
				height: that.ScanTabs.CSS.height * .80,
				width: 440,
				top: GLOBALS.scanTabLabelHeight + 10,
			}
		});	

		var contents = utils.dom.makeElement("div", that.sessionInfoScrollGallery.ScrollContent, "Contents", {});
		
		var counter = 0;
		for (i in labelObj) {
			
			var noSpace = labelObj[i]["label"].replace(/\s+/g, ' ');			
			var currTop = (that.textCSS_small.fontSize * (2*counter));
			
			that.displayableData[noSpace] = utils.dom.makeElement("div", contents, "Data_" + noSpace);
			$(that.displayableData[noSpace]).css(utils.dom.mergeArgs(that.textCSS_small,{
				top: currTop,
				left: 15
			}));
			that.displayableData[noSpace].innerHTML = labelObj[i].label + ":";		

			that.displayableData[noSpace + "_value"] = utils.dom.makeElement("div", contents, "Value_" + noSpace);
			$(that.displayableData[noSpace + "_value"]).css(utils.dom.mergeArgs(that.textCSS_small,{
				top: currTop,
				left: 160,
			}));	
			that.displayableData[noSpace + "_value"].innerHTML = labelObj[i]["value"][0]
			counter++;
		}
		
		contents.style.height = utils.convert.px(currTop);
		that.sessionInfoScrollGallery.setContents(contents);
	}
	// NOTE:  Ajax query would be here
	makeSessionInfoData(data.sessionInfo);
}
//******************************************************
//  
//
//******************************************************
ScanViewer.prototype.setDraggable_jQuery = function () {

	
	$(this.widget).draggable( {
		
		
		start: function () {
			
			this.prevBorder = this.style.border;
			this.style.border = "solid 1px rgba(255,255,255,1)";
			
			XV.ScanViewers(function (ScanViewer) {
				ScanViewer.widget.origin  = $(ScanViewer.widget).position();									
			});


			
		},
		
		drag: function () {

			var viewers = $(this).collision(XV.ScanViewers("widgets"));
			
			for (var i=0; i<viewers.length; i++) {
				
				if (viewers[i] != this) {
					
					var target = viewers[i];
					
					if( !$(target).is(':animated') ) {
						
						var targetPos = $(target).position();
						var targetArea = $(target).height() * $(target).width();
						var collisionDiv = $(this).collision(target, {as : "<div />"});	
						var collisionArea = $(collisionDiv).width() * $(collisionDiv).height()						

						//
						// SWAP
						//
						if ((collisionArea/targetArea) > .4) {
	
							var draggable = this;				
														
							var tempOrigin = draggable.origin;
							draggable.origin = target.origin;
							target.origin = tempOrigin;
							
							XV.ScanViewers({"swap" : [draggable, target]});	
							
							$(target).stop().animate({
								
								top: Math.round(target.origin.top),
								left: Math.round(target.origin.left),
		
								
							}, GLOBALS.animFast, function () { });
						}
											
					}			
				}
			}
		},
		stop: function () {

			$(this).stop().animate({
				
				top: Math.round(this.origin.top),
				left: Math.round(this.origin.left),
				
				}, GLOBALS.animFast, function () {	
					
					//
					//  Cleanup custom attributes
					//
					XV.ScanViewers( function(ScanViewer) { 
						if (ScanViewer.widget.prevBorder){
							ScanViewer.widget.style.border = ScanViewer.widget.prevBorder;
						}						
					});
					
					XV.updateCSS();
			});				
			
		}
	});
}//******************************************************
//  UpdateCSS
//
//******************************************************
ScanViewer.prototype.updateCSS = function (args) {


	var that = this;
	
	
	var widgetHeight = (args && args.height) ? args.height : $(this.widget).height();
	var widgetWidth = (args && args.width) ? args.width : $(this.widget).width();
	var widgetTop = (args && args.top) ? args.top : $(this.widget).position().top;
	var widgetLeft = (args && args.left) ? args.left : $(this.widget).position().left;


	
	
	/*
	 * CONTENT DIVIDER
	 * 
	 * The ContentDivider dictates the position of all of the
	 * other widgets in the ScanViewer
	 */
	
	//  Onload case: this only happens once


	if (!this.ContentDivider.widget.dragging){

		var dimChange = !(utils.convert.int(this.ContentDivider.containmentDiv.style.width) === widgetWidth);
		if (dimChange){

			$(this.ContentDivider.widget).css( {
				top: GLOBALS.minContentDividerTop(widgetHeight),
			});
			
			
			var t = GLOBALS.minFrameViewerHeight		
			
			var h = widgetHeight - t - $(this.ContentDivider.widget).height() - GLOBALS.minScanTabHeight + 5;	
			
			$(this.ContentDivider.containmentDiv).css({
				top: t,			
				left: 0,
				height: h,
				width: widgetWidth,			
			})
			
		}
	}

	
	
	
	
	
	var contentDividerPos = $(this.ContentDivider.widget).position();
	var contentDividerHeight = $(this.ContentDivider.widget).height();
	
	var scanTabTop = contentDividerPos.top + contentDividerHeight;
	var scanTabHeight = widgetHeight - scanTabTop;
	var sliderTop = contentDividerPos.top - this.FrameSlider.currArgs().handleCSS.height - 5;
	
	var viewerWidth = widgetWidth;
	var viewerHeight = viewerWidth;
	var viewerLeft = widgetWidth/2 - viewerWidth/2;
	
	



	//----------------------------------
	// Widget
	//----------------------------------
	this.widget.style.width = utils.convert.px(widgetWidth);
	this.widget.style.height = utils.convert.px(widgetHeight);
	this.widget.style.top = utils.convert.px(widgetTop);
	this.widget.style.left = utils.convert.px(widgetLeft);
	this.widget.style.overflow = "hidden";
	this.widget.style.border =  this.args.CSS.border;
	

	
	
	//----------------------------------
	// Tabs
	//----------------------------------	

	$(this.ScanTabs.widget).css({
 		left: 0,//marginLeft,
 	  	top: scanTabTop,
 	  	width: widgetWidth - 2,// + marginLeft * 2,
 	  	height: scanTabHeight -1,
	});	 
   this.ScanTabs.updateCSS();





	


	


	//----------------------------------
	// CSS: FRAME SLIDER
	//----------------------------------
    this.FrameSlider.updateCSS({
    	widgetCSS:{
 			top : sliderTop,
			left : 4,//marginLeft,   		
    	},
    	trackCSS:{
    		width: Math.round(widgetWidth) - 10,// + marginLeft * 2
    	}
    })

	
	 
	 //----------------------------------
	 // CSS: FRAME VIEWER
	 //----------------------------------
	 $(this.FrameViewer.widget).css({
 	    left: viewerLeft,
 		top: 0,
 	  	width: viewerWidth,
 	  	height: viewerWidth,
	 });
	 this.FrameViewer.updateCSS();
	 



	 //----------------------------------
	 // CSS: FRAME NUMBER DISPLAY
	 //----------------------------------	 
	 $(this.displayableData.frameNumber).css({
	 	top: $(this.FrameViewer.widget).height() -  20,// -2,
	 	left: 10,
	 });
	 
	 

	//----------------------------------
	// DRAW FRAME ON FRAMEVIEWER
	//----------------------------------
	 this.FrameViewer.drawFrame(this.FrameSlider.value, true);

	


	//----------------------------------
	// LINK MENU
	//----------------------------------		
	utils.css.setCSS(this.LinkMenu, {
		left: widgetWidth - 30
	});
	 
	 


}//******************************************************
//  Init
//
//******************************************************
var ScrollGallery = function (args) {
  	
  	var that = this;
	this.args = (args) ? utils.dom.mergeArgs(this.defaultArgs(), args) : this.defaultArgs();
	this.widget = utils.dom.makeElement("div", this.args.parent, this.args.id, this.widgetCSS);
	
	
	//-------------------------------
	// resize
	//-------------------------------	
	$(window).resize(function () { that.updateCSS();});


	//-------------------------------
	// WIDGET
	//-------------------------------	 
	 utils.css.setCSS(this.widget, utils.dom.mergeArgs(this.args.widgetCSS, args.widgetCSS));


	//-------------------------------
	// SCROLL CONTENT
	//-------------------------------
	var sliderWidth = this.args.sliderCSS.trackCSS.width;
	this.ScrollContent = utils.dom.makeElement("div", this.widget, "ScrollContent", {
		position: "relative",
		//backgroundColor: "rgba(0,0,255,.5)",
		top: 0,
		left: sliderWidth,
		width: $(this.widget).width() - sliderWidth,
	})




	//-------------------------------
	// THE SLIDER
	//-------------------------------	
	this.contentSlider = new utils.gui.verticalSlider(utils.dom.mergeArgs(this.args.sliderCSS,{
		parent: this.widget,
		id: "VerticalSlider",
		round: true,
	}));
  
  
  
  
	//-------------------------------
	// THE CONTENTS - BLANK FOR NOW
	//-------------------------------
	var blankContents = utils.dom.makeElement("div", document.body, "blankElement", {
		height: 800, 
		width: 100, 
		backgroundColor: "rgba(200,100,51,.5)"
	});
	blankContents.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."	    
	this.setContents(blankContents)
  
	
	this.updateCSS();
}




ScrollGallery.prototype.defaultArgs = function () {
	
	return {
		id: "ScrollGallery",
		parent: document.body,
		orientation: "vertical",
		sliderLocation: "left",
		sliderWidth: 8,
		scrollMarginY: 8,
		scrollMarginX: 8,
		widgetCSS: {
			top: 0,
			left: 30,
			width: GLOBALS.ScrollGalleryWidth,
			height: 400,
			position: "absolute",
		 	overflow: "hidden",
		 	"overflow-x": "hidden",
		 	"overflow-y": "hidden",
		 	//backgroundColor: "rgba(200,20,20,1)",
		 	//border: "solid 1px rgba(255,0,0,1)"
		},
		
		sliderCSS:	
		{
			id: "FrameSlider", 
			parent: document.body,
			round: true,
			handleOffsetLeft: 0,
		  	handleOffsetTop: 0,
			widgetCSS:{
			},
			handleCSS:{
				height: GLOBALS.ThumbnailWidgetHeight,
				width: 7,
				borderWidth: 0,
				borderColor: GLOBALS.semiactiveLineColor,
				backgroundColor: "rgba(105,105,105,1)"
			},
			trackCSS:{
				borderWidth: 0,
				width: 7,
				borderColor: GLOBALS.semiactiveLineColor,
				backgroundColor: "rgba(0, 0, 0, 1)"
			}
		}		
	}
}




//******************************************************
//  Need to map the min/max and step values of the slider
//  to the length of the contents so we can scroll
//  in a proportional manner. This varies depending on 
//  the orientation of the gallery: vertical or horizontal.
//******************************************************
ScrollGallery.prototype.mapSliderToContents = function () {
	var that = this;
	return function (_slider) {		
		
		if (that.args.orientation == "vertical") {
	  		var t = -1 * utils.convert.remap1D(_slider.value, [_slider.currArgs().min, _slider.currArgs().max], 
	   							    [0, $(that.ScrollContent).outerHeight() - $(that.widget).height() - that.args.scrollMarginY]).newVal;	
	   		$(that.ScrollContent).css({
	  			top: t,
	  		});
		}
   }
}




//******************************************************
//  Sets contents.
//******************************************************
ScrollGallery.prototype.setContents = function (thing) {
  
	var that = this;

  
	//-------------------------------
	// REMOVE PREXISTING CHILD ELEMENTS
	//-------------------------------  
	while (this.ScrollContent.hasChildNodes()) {
	    this.ScrollContent.removeChild(this.ScrollContent.lastChild);
	}
	

	//-------------------------------
	// IF thing IS A FUNCTION
	//-------------------------------  
	if (typeof thing === "function") {
		thing();
	}
	//-------------------------------
	// IF thing IS AN OBJECT - (used now for blank contents)
	//-------------------------------  
	else if (typeof thing === "object") {
		// if obj is a DOM Element
		if(thing.tagName) {
			that.ScrollContent.appendChild(thing);
			that.ScrollContent.style.height = utils.convert.px($(thing).height());
		}
	}

	that.contentSlider.addSlideCallback(that.mapSliderToContents());  
	that.contentSlider.bindToMouseWheel(that.widget);		
	this.updateCSS();
}




//******************************************************
//  UpdateCSS
//******************************************************
ScrollGallery.prototype.updateCSS = function (args) {


    if (args) { utils.css.setCSS(this.widget, args.widgetCSS) };
    
	//----------------------------------
	// CSS: FRAME SLIDER
	//----------------------------------
    this.contentSlider.updateCSS({
    	widgetCSS:{
 			top : 0,
			left : 0,   		
    	},
    	trackCSS:{
    		height: $(this.widget).height(),
    	}
    })
}
//******************************************************
//  Init
//
//******************************************************
var SliderLinker = function (args) {
	
	var that = this;
	
	this.maxGroups = GLOBALS.maxScrollLinkGroups;
	
	var ScanViewers = [];
	
	var borderColorSet = [
		[155,205,5,1],
		[21,2,200,1],
		[25,200,55,1],
		[200,5,200,1],
		[0,255,0,1],
		[0,200,0,1],
		[0,0,200,1],
		[200,0,0,1],
		[200,200,0,1],
	];
	

	
	var groups = [];
	var prevGroups = [];
	
	this.getGroups = function () {
		return groups;
	}


	this.lastGroup = function () {
		return groups[groups.length - 1];
	}	 


	this.addGroup = function () {

		groups.push({
			border: "solid 2px rgba(" + borderColorSet[groups.length].toString() + ")",
			groupID: "linkGroup_" + groups.length,
			ScanViewers: [],
			prevViewers: [],
		})		

	}

	
	this.addToLastGroup = function (ScanViewer) {

		//("ADD TO LAST GROUP: ", ScanViewer.widget.id)
		//
		//  Remove the scan viewer from group if it exists
		//
		this.removeFromGroup(ScanViewer, false);
		
		
		//
		//  1. Add the ScanViewer to the last group
		//
		if (groups[groups.length - 1].ScanViewers.indexOf(ScanViewer) == -1) {
		
			//("HERE - last group: ", this.lastGroup().border)
			groups[groups.length - 1].ScanViewers.push(ScanViewer);
			
			//
			//  Set the border color
			//
			ScanViewer.selectorBox.style.border = this.lastGroup().border;
			$(ScanViewer.selectorBox).fadeTo(GLOBALS.animFast, 1);
			//(ScanViewer.selectorBox.style.border)

		}
	
	}
	
	this.clearSelectorBox = function (ScanViewer) {
		
		//("CLEARING SELECTOR BOX of ", ScanViewer.widget.id)
		ScanViewer.selectorBox.style.border = "none";		

		$(ScanViewer.widget).unbind('mouseenter.sliderlink');
		$(ScanViewer.widget).unbind('mouseleave.sliderlink');
		
		for (var i=0; i<ScanViewer.widget.defaultMouseEvents.length; i++) {
			
			ScanViewer.widget.defaultMouseEvents[i]();
			
		}
		ScanViewer.FrameSlider.clearLinked();		
	}
	
	
	
	this.removeFromGroup = function (ScanViewer, clearSelectorBox) {

		var tempInd;
		for (var i=0; i<groups.length; i++) {
			
			tempInd = groups[i].ScanViewers.indexOf(ScanViewer);
			
			if (tempInd > -1) {
				
				//("removing ", ScanViewer.widget.id, " from group ", groups[i].groupID)
				
				var viewer = groups[i].ScanViewers[tempInd];
				groups[i].ScanViewers.splice(tempInd, 1);		
				
				if (clearSelectorBox) {
					this.clearSelectorBox(viewer);						
				}
	
				return true;		
			}
		}
		return false;
	}
	
	
	this.removeGroup = function (ScanViewer) {

		var tempInd;
		for (var i=0; i<groups.length; i++) {
			
			tempInd = groups[i].ScanViewers.indexOf(ScanViewer);
			
			if (tempInd > -1) {
				
				for (var j=0; j<groups[i].ScanViewers.length; j++) {
					var viewer = groups[i].ScanViewers[j];						

					this.clearSelectorBox(viewer);						
				}

				if (i>0) {
					groups.splice(i, 1);
				}
				else{
					groups[i].ScanViewers = [];
				}
				return;
			
			}
		}
	}

	
	this.addSelectorBox = function (parent, Top, Left, Height, Width) {
		var box =  utils.dom.makeElement("div", parent, "selectorBox", {
			position: "absolute",
			top: Top,
			left: Left,
			height: Height,
			width: Width,
			border: "solid 3px rgba(255,0,0,1)",
			cursor: "pointer"
		})
		return box;
	}	
	
	
	this.clearAll = function () {
			
		
		XV.ScanViewers( function(ScanViewer) {
				that.removeFromGroup(ScanViewer, true);
		});

		groups = [];
		this.addGroup();
	}
	
	
	
	this.getViewerSetFromID = function (ID) {
		for (var i=0; i<groups.length; i++) {			
			for (var j=0; j<groups[i].ScanViewers.length; j++) {
				if (groups[i].ScanViewers[j].widget.id == ID) {
					return {
						viewer: groups[i].ScanViewers[j],
						viewerset: groups[i].ScanViewers,
					}
				}
			}
		}		
	}
	
	
	this.showExisting = function (delay ) {
		
		var delayVal = (delay) ? delay: 0;

		for (var i=0; i<groups.length; i++) {			
			for (var j=0; j<groups[i].ScanViewers.length; j++) {
				
				var viewer = groups[i].ScanViewers[j];
				
				$(viewer.selectorBox).delay(delayVal).fadeTo(GLOBALS.animFast, 1)
				
			}
		}
	}
	
	
	this.hideExisting = function (delay) {
		
		var delayVal = (delay) ? delay: 0;
		
		if (!this.stayVisible) { 
			for (var i=0; i<groups.length; i++) {			
				for (var j=0; j<groups[i].ScanViewers.length; j++) {
					
					var viewer = groups[i].ScanViewers[j];
					
					$(viewer.selectorBox).delay(delayVal).fadeTo(GLOBALS.animFast, 0)
					
				}
			}		
		};

	}
	
	
	this.flashExisting = function (delay) {
		
		var delayVal = (delay) ? delay: 500;
		
		for (var i=0; i<groups.length; i++) {			
			for (var j=0; j<groups[i].ScanViewers.length; j++) {
				
				var viewer = groups[i].ScanViewers[j];
				
				$(viewer.selectorBox).fadeTo(GLOBALS.animFast, 1).delay(delayVal).fadeTo(GLOBALS.animFast, 0)
				
			}
		}
	}
	
	
	
	this.disableSelectorBox = function (selectorBox) {
		$(selectorBox).css({'pointer-events': 'none'});		
	}
	
	

	this.enableSelectorBox = function (selectorBox) {
		
		$(selectorBox).css({'pointer-events': 'auto'});		
	
	}
	

	
	this.takeSnapshot = function () {
		
		for (var i=0; i<groups.length; i++) {			
			for (var j=0; j<groups[i].ScanViewers.length; j++) {
				
				var viewer = groups[i].ScanViewers[j];
				groups[i].prevViewers.push(viewer);
				
			}
		}
			
	}
	
	this.cancel = function () {
		
		for (var i=0; i<groups.length; i++) {		
			
			for (var j=0; j<groups[i].ScanViewers.length; j++) {
				
				this.clearSelectorBox(groups[i].ScanViewers[j]);
				
			}
			
			groups[i].ScanViewers = groups[i].prevViewers;
			groups[i].prevViewers = [];		

			this.hideExisting();
		}	
		

		this.processGroups();			
	}
	
	this.processGroups = function () {
		
		
		//
		//  Clear all mouse-related events from selectorBoxes
		//
		XV.ScanViewers( function(ScanViewer) {
			
			that.disableSelectorBox(ScanViewer.selectorBox);
			that.hideExisting(500);
							
		});

		
		
		//
		//  PRocess viewers that are in an existing groups
		//
		for (var i=0; i<groups.length; i++) {			
			for (var j=0; j<groups[i].ScanViewers.length; j++) {

				var ScanViewer = groups[i].ScanViewers[j];
				var viewerSet = groups[i].ScanViewers;

				
				$(ScanViewer.widget).bind('mouseenter.sliderlink', function () {
					
					var set = GLOBALS.SliderLinker.getViewerSetFromID(this.id);					
					var ScanViewer = set.viewer;
					var viewerGroup = set.viewerset;
					

					
					for (var k=0; k<viewerGroup.length; k++) {	
											
						if (viewerGroup[k] != ScanViewer) {

							ScanViewer.FrameSlider.linkSlider(viewerGroup[k].FrameSlider);	
												
						}
						
					}	
					

				}).bind('mouseleave.sliderlink', function () {	
					
					var set = GLOBALS.SliderLinker.getViewerSetFromID(this.id);
					if (set) {
						var ScanViewer = set.viewer;					
						ScanViewer.FrameSlider.clearLinked();						
					}

					
				});	
			}
			
		}
	}

		
	this.addGroup();
	
}
SliderLinker.prototype.addClearAllPopup = function (currViewer, message) {
	
	var that = this;
	
	this.takeSnapshot();

	var messageVal = (typeof message === 'undefined') ?  "Are you sure you want to clear all links?" : message;
		
	
	var b = new utils.gui.dialogBox({	  	
		buttons: ["Yes", "Cancel"],
		message: messageVal,
	  	widgetCSS: {
	  		fontFamily: utils.globals.fontFamily,
	  		fontSize: utils.globals.fontSizeM,
	  		color: "rgba(255,255,255,1)",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(255,255,255,1)",
	  		backgroundColor: "rgba(0,0,0,1)",
	  		borderRadius: 0,
	  		zIndex: 10000,
	  	},
	  	
	  	buttonCSS: {
	  		height: utils.globals.fontSizeM * 2,
	  		position: "absolute",
	  		border: "solid",
	  		color: "rgba(255,255,255,1)",	  		
	  		borderWidth: 1,
	  		borderColor: "rgba(255,255,255,1)",
	  		backgroundColor: "rgba(125,125,125,1)",
	  		borderRadius: 0,
	  		cursor: "pointer"
	  	},
  	});
	
	var popup = b.widget();	
	
	b.setButtonOnclick("yes", function (event) {
		utils.dom.stopPropagation(event);

		$(popup).fadeOut(GLOBALS.animFast, function () {
			that.clearAll();
			$(popup).remove();
		});

	});


	b.setButtonOnclick("cancel", function (event) {
		utils.dom.stopPropagation(event);
		
		console.log("CANCEL!");
		
		$(popup).fadeOut(GLOBALS.animFast).remove();
		
		that.cancel();

	});

	
	
	$(popup).fadeOut(0).fadeIn(GLOBALS.animFast);
		
}SliderLinker.prototype.addLinkMenuPopup = function (currViewer, message) {
	
	var that = this;
	
	this.takeSnapshot();
	this.lastViewerSelected = currViewer;
			
	this.setScanViewerClickListen(currViewer);

	var that = this;
	
	var messageVal = (typeof message === 'undefined') ?  "Select viewers to link. Click 'Done' when finished." : message;
	
	XV.ScanViewers( function(ScanViewer) { 
		ScanViewer.updateCSS();
	})	
	
	var b = new utils.gui.dialogBox({	  	
		buttons: ["DONE", "Cancel"],
		message: messageVal,
	  	widgetCSS: {
	  		fontFamily: utils.globals.fontFamily,
	  		fontSize: utils.globals.fontSizeM,
	  		color: "rgba(255,255,255,1)",
	  		border: "solid",
	  		borderWidth: 1,
	  		borderColor: "rgba(255,255,255,1)",
	  		backgroundColor: "rgba(0,0,0,1)",
	  		borderRadius: 0,
	  		zIndex: 10000,
	  	},
	  	
	  	buttonCSS: {
	  		height: utils.globals.fontSizeM * 2,
	  		position: "absolute",
	  		border: "solid",
	  		color: "rgba(255,255,255,1)",	  		
	  		borderWidth: 1,
	  		borderColor: "rgba(255,255,255,1)",
	  		backgroundColor: "rgba(125,125,125,1)",
	  		borderRadius: 0,
	  		cursor: "pointer"
	  	},
  	});
	
	var popup = b.widget();	
	
	
	b.setButtonOnclick("done", function (event) {
		utils.dom.stopPropagation(event);

		$(popup).fadeOut(GLOBALS.animFast).remove();
		
		that.processGroups();
		
		XV.ScanViewers( function(ScanViewer) { 
			$(ScanViewer.widget).draggable({ disabled: false });
		})

		
	});


	b.setButtonOnclick("cancel", function (event) {
		utils.dom.stopPropagation(event);
		
		$(popup).fadeOut(GLOBALS.animFast).remove();
		
		that.cancel();
		
		XV.ScanViewers( function(ScanViewer) { 
			$(ScanViewer.widget).draggable({ disabled: false });
		})

	});

	
	XV.updateCSS();
	$(popup).fadeOut(0).fadeIn(GLOBALS.animFast);
	
	XV.ScanViewers( function(ScanViewer) { 
		$(ScanViewer.widget).draggable({ disabled: true });
	})
	
		
}//******************************************************
//  
//
//
//******************************************************
SliderLinker.prototype.setScanViewerClickListen = function (currViewer) {
	
	var that = this;
	
	
	this.showExisting();
	
		
	//--------------------------
	//  GET VIEWERS
	//--------------------------
	XV.ScanViewers( function (ScanViewer) {
		
		
		
		if (!ScanViewer.selectorBox) {

			ScanViewer.selectorBox =  GLOBALS.SliderLinker.addSelectorBox(			 ScanViewer.widget.parentNode, 
																  				 utils.convert.int(ScanViewer.widget.style.top), 
																  				 utils.convert.int(ScanViewer.widget.style.left),
																  				 utils.convert.int(ScanViewer.widget.style.height),
															  				 utils.convert.int(ScanViewer.widget.style.width));	
			
			ScanViewer.selectorBox.style.border = 'none';	
			ScanViewer.selectorBox.ScanViewer = ScanViewer;	
			
			
			
			ScanViewer.selectorBox.onclick = function () {				
				
				var box = this;
				var viewer = box.ScanViewer;

				that.lastViewerSelected = viewer;
				that.addToLastGroup(viewer);
				
				$(viewer.widget).unbind('mouseleave.linkmenu');
				$(viewer.widget).unbind('mouseenter.linkmenu');
	
	
			}				
		}
		else{
			
			that.enableSelectorBox(ScanViewer.selectorBox);
			
		}



		
		//--------------------------
		//  SELECT CURRVIEWER
		//--------------------------
		if (ScanViewer == currViewer) {
			
			ScanViewer.selectorBox.onclick();

				
		}		
	});

}defaultArgsXNATViewer= {
	id: "XV",
	layout: "all_columns",
	numViewers: 1,
	parent: document.body,
	minLeft: 50,
	minTop: 20,
	compressWidth: .33,
	expandWidth: .9,
	expanded: false,
	gutter: 10,
	marginWidth: 50,
	marginTop: 10,
	marginLeft: 10,
	expandButtonWidth: 30,
	galleryWidth: 100,
	MINIMUMHEIGHT: 400,
	heightPct: .90,
	CSS: {
		position: "fixed",
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0,0,0,.5)",
		//"overflow-x": "hidden",
		//"overflow-y": "hidden",
		"display": "inline-block",
		"font-family": 'Helvetica,"Helvetica neue", Arial, sans-serif',
	},
	modalCSS: {
		position: "absolute",
		backgroundColor: "rgba(0,0,0,1)",
		//border: "solid rgba(95, 95, 95, 1) 2px",
		border: "none",
		"border-radius": "20px"	,
		// for height mins and maxes, see below
	}
}







//******************************************************
//  Init
//
//******************************************************
var XNATViewer = function (args) {

	var that = this;
	utils.oo.init(this, defaultArgsXNATViewer, args, function () {});
	XV = this;

	
	//----------------------------------
	//	WIDGET
	//----------------------------------			
	this.widget.onclick = function () { 
		that.destroy();
	}	
	
	
	
	
	//----------------------------------
	//	MODAL
	//----------------------------------
	this.modal = utils.dom.makeElement("div", this.widget, GLOBALS.ModalId, this.args.modalCSS);	
	$(this.modal).css({
		"overflow-x": "hidden",
		"overflow-y": "hidden"
	})
	
	// Don't destroy when clicking on window (i.e. don't propagate)				
	this.modal.onclick = function (event, element) {

		 utils.dom.stopPropagation(event);   // W3C model
	
	}

	
	
	
	//----------------------------------
	//	CLOSE BUTTON
	//----------------------------------
	this.closeButton = utils.dom.makeElement("img", this.widget, "closeIcon", {
		position: "absolute", 
		cursor: "pointer",
		width: 10,
		height: 10,
		zIndex: 103
	});	
	this.closeButton.src = "./icons/closeX.png";


	
	//----------------------------------
	//SCAN DATA PATHS - AJAX QUERY HERE
	//
	// FOR PROTOTYPING PURPOSES
	//----------------------------------	
	this.scanDataPaths = TESTSCANDATA;

	
	
	//----------------------------------
	//	SCROLL GALLERY
	//----------------------------------
	this.addScrollGallery();
	
	
	this.addRowMenu();
	this.addColumnMenu();
	
	
	//----------------------------------
	//	SCAN VIEWERS
	//----------------------------------	
	this.addScanViewerManager();
	this.ScanViewers({
		"insert" : "column",
		"animate" : "off",
	});



	this.updateCSS();
}








XNATViewer.prototype.addDropZone = function (dz) {
	
	//----------------------------------
	//	SET DROPZONES
	//----------------------------------			
	for (var i=0; i < this.ScrollGallery.thumbs.length; i++) {
		this.ScrollGallery.thumbs[i].addDropZone(dz);	
	}
}XNATViewer.prototype.addScrollGallery = function (rowPos) {	
	
	var that = this;
	
	//----------------------------------
	//	SCROLL GALLERY
	//----------------------------------
	this.ScrollGallery = new ScrollGallery({
		parent: this.modal,
		orientation: "vertical",
		widgetCSS: {
			left: 0,
			top: this.args.marginTop,
			height: 700,
		}
	});	
	
	
	// set the contents
	this.ScrollGallery.setContents(function () {
		
		that.ScrollGallery.thumbs = [];
		
		var totalHeight = 0;		  	  
		for (var i=0; i<that.scanDataPaths.length; i++) {

			var h = i * (GLOBALS.ThumbnailWidgetHeight + 2);  	

			var scanThumb = new ScanThumbnail(that.scanDataPaths[i], {
				
			  	id: "ScanThumbnail_" + i.toString(),			  	
			  	parent: that.ScrollGallery.ScrollContent,
			  	
			  	widgetCSS: {
			  		top: h, 
			  		left: 0,
			  		width: $(that.ScrollGallery.ScrollContent).width() -2
			  	}
			  	
			});
	
				
			// We want to manage the active Thumbnails...
			// we need to "deactivate" them when another has replaced
			// their slot.  
			
			/*
			scanThumb.addActivatedCallback(function (thumb, args) {
				that.manageActiveThumbs(thumb, args);
			})
			*/
			
			that.ScrollGallery.thumbs.push(scanThumb);
		}
		  
		that.ScrollGallery.ScrollContent.style.height = utils.convert.px(h + that.ScrollGallery.args.scrollMarginY*1 + 100);
		that.ScrollGallery.ScrollContent.style.borderColor= "rgba(10, 200, 2, 1)";  
	})
}//******************************************************
//  ADD SCROLL LINK ICON
//
//******************************************************
XNATViewer.prototype.addScrollLinkIcon = function () {
	
	var that = this;

	
	//-----------------------------------------
	//  MAKE ICON
	//-----------------------------------------
	var c = utils.dom.makeElement("div", this.modal, this.args.id + "_scrollLink", {
		position: "absolute",
		width: 40,
		height: 10,
		cursor: "pointer",
		overflow: "visible",
		//backgroundColor: "rgba(200, 200, 200, .5)"
	});

	
	var icon1 = utils.dom.makeElement("img", c, this.args.id + "_scrollLinkIcon1", {
		position: "absolute",
		width: 40,
		height: 10,
	});
	icon1.src = "./icons/LinkArrow-Broken.png";
	
	var icon2 = utils.dom.makeElement("img", c, this.args.id + "_scrollLinkIcon2", {
		position: "absolute",
		width: 40,
		height: 10,
	});
	icon2.src = "./icons/LinkArrow.png";
	
	
	var label = utils.dom.makeElement("div", c, this.args.id + "_scrollLink", {
		position: "absolute",
		top: 15,
		left: -10,
		width: 200,
		color: "rgba(255,255,255,1)",
		fontSize: GLOBALS.fontSizeSmall
	});
	

	$(label).fadeTo(0,0);
	$(icon2).fadeTo(0,0);
	
	
	

	
	//-----------------------------------------
	//  STORE ICON IN ARRAY
	//-----------------------------------------	
	this.scrollLinks.push(c);
	
	
	
	
	//-----------------------------------------
	//  CUSTOM ELEMENT DATA
	//-----------------------------------------	
	$(c).data('number', this.scrollLinks.length - 1);
	$(c).data('activated', false);
	
	
	
	
	//------------------------------------------
	// CHAIN ONCLICK
	//------------------------------------------
	that.widgetOver = -1;
	var c = this.scrollLinks[this.scrollLinks.length -1];
	c.onclick = function (inputState, animTime) {
		
		var animLen = (animTime || animTime === 0) ? animTime : 300;
		//console.log("ANUIMN: ", animLen, inputState, animTime);
		if (inputState && inputState == 'deactivate') { $(c).data('activated', true);}
		else if (inputState && inputState == 'activate') { $(c).data('activated', false);}
		// Set it to the opposite
		$(c).data('activated', !$(c).data('activated'));
		
		if ($(c).data('activated')) {
			// Change the icon's image
			$(icon1).fadeTo(animLen,0);
			$(icon2).fadeTo(animLen,1);
			
			
			if (animLen != 0) {
				label.innerHTML = "Linking Scrollers";
				$(label).fadeTo(animLen,1).delay(1000).fadeTo(animLen,0);
			}
			else {
				$(label).fadeTo(animLen,0)
			}
			// Link viewers
			//console.log("linking: ", $(c).data('number'), "with ", $(c).data('number')+1);
			that.linkViewers($(c).data('number'), $(c).data('number') + 1);
		}
		else if (!$(c).data('activated')) {
			$(icon1).fadeTo(animLen,1);
			$(icon2).fadeTo(animLen,0);		
			
			if (animLen != 0) {
				label.innerHTML = "Unlinking Scrollers";
				$(label).fadeTo(animLen,1).delay(1000).fadeTo(animLen,0);
			}
			else {
				$(label).fadeTo(animLen,0)
			}
		}
	}
}XNATViewer.prototype.animateModal  = function (callback) {
		
		var that = this;
		
		
		//-------------------------
		//  GET THE MODAL DIMENSIONS, 
		//-------------------------	
		 var modalDims = this.modalDims();
		
		
		
		//-------------------------
		// Animate the window
		//-------------------------	
		 $(this.modal).stop().animate({
		 	
		    width: modalDims.width,
		    left: modalDims.left,
		    height: modalDims.height,
		    top: modalDims.top,
		    
		  }, GLOBALS.animMed, function () {

		    $.when(that.updateCSS()).then(function(){
				
				$.when(callback()).then(function() { 
					
					XV.ScanViewers( function(ScanViewer) { 	

						$(ScanViewer.widget).stop().fadeTo(0, 1);
						$(ScanViewer.widget.childNodes).stop().fadeTo(0, 1);	
						ScanViewer.setJQueryEvents();
					
					}); 						
					
					
				});
			  	    	
		    });
		
		 });




		//-------------------------
		// SCAN VIEWERS
		//-------------------------	
		
		XV.ScanViewers( function(ScanViewer, i, j) { 
			//$(ScanViewer.widget).stop().fadeTo( GLOBALS.animMed, 0);
			
			//
			// FADE OUT/IN: ScanViewer contents
			//
			 if (modalDims.ScanViewer.height != utils.convert.int(ScanViewer.widget.style.height)) {
			 	$(ScanViewer.widget.childNodes).stop().fadeTo(GLOBALS.animFast, 0);	
			 }
			 

			//
			// ANIMATE: ScanViewer widget
			//

			 $(ScanViewer.widget).draggable( "destroy").unbind().stop().animate({
			    
			    left: modalDims.ScanViewer.lefts[i][j],
			    top: modalDims.ScanViewer.tops[i][j],
			    width: modalDims.ScanViewer.width,
			    height: modalDims.ScanViewer.height,
			    
			  }, GLOBALS.animMed, function () {	});		
			  		
		});
		

	

		//-------------------------
		// Animate the close button
		//-------------------------		
		 $(this.closeButton).stop().animate({
		    left: modalDims.closeButton.left,
		    top: modalDims.closeButton.top
		  }, GLOBALS.animMed, function () {
		    // Animation complete.
		 });
		
}XNATViewer.prototype.deleteDropZone = function (dz) {
	
	//----------------------------------
	//	DELETE DROPZONES
	//----------------------------------			
	for (var i=0; i < this.ScrollGallery.thumbs.length; i++) {
		this.ScrollGallery.thumbs[i].deleteDropZone(dz);	
	}
}//*******************************a***********************
//  Clears the modal out of the DOM.
//
//******************************************************
XNATViewer.prototype.destroy = function (fadeOut) {
	var fadeOut = (fadeOut) ? fadeOut: 500;	
	console.log("Destroying! " + this.args.id);
	var that = this;
	$(this.widget).fadeOut(fadeOut, function () {
		try{
			that.args.parent.removeChild(that.widget);			
		}
		catch(e) {//do nothing
			}
	});
}//******************************************************
//  Manage Active Thumbs
//******************************************************
XNATViewer.prototype.manageActiveThumbs = function (thumb, args) {
	if (!this.activeThumbManager)
		this.activeThumbManager = {};
	

	// We basically want to cycle through the manager
	// so that any Thumbnail associated with args.activeTarget
	// is removed and replaced with thumb
	if (args.activeTarget) {
		
		XV.ScanViewers( function(ScanViewer) { 

			if (ScanViewer.FrameViewer.args.id == args.activeTarget) {
				if (this.activeThumbManager[args.activeTarget]) {
					//console.log("deactivating existing: " + this.activeThumbManager[args.activeTarget].args.id + " in " + args.activeTarget)
					this.activeThumbManager[args.activeTarget].deactivate();
				}

				this.activeThumbManager[args.activeTarget] = thumb;
				//console.log("inserting: " + thumb.args.id + " in " + args.activeTarget);
			}	
			
		});
		
	}
	
}//******************************************************
//  Calculates the modal dimensions based on pixed values.
//  translates them to other representaions accordingly.
//
//  This was implemented for two reasons: 1) To avoid CSS
//  stylesheets and have dynamic acces to an element's properties
//  2) Sometimes there was a delay in jQuery registering
//  an element's dimensions if percentages were entered.
//
//******************************************************
XNATViewer.prototype.modalDims = function (conversion) {
		
	var that = this;
	
	var ScrollGalleryLeft = 0;
	var maxModalWidth = Math.round(window.innerWidth * GLOBALS.maxModalHeightPct);
	
	
	
	//-------------------------
	// 1. Generate a prelimiary width
	//-------------------------	
	
	
	
	//	Get the prescribed height of the modal		
	var modalHeight = GLOBALS.maxModalHeightPct * window.innerHeight;
	
	
	//	Get the number of scan viewers
	var viewers = XV.ScanViewers();
	var ScanViewerColumns = viewers[0].length;
	var ScanViewerRows = viewers.length;
	
	
	// determine the minimum modal width
	var minModalWidth = GLOBALS.ScrollGalleryWidth + 
						GLOBALS.minScanViewerWidth * ScanViewerColumns + 
						GLOBALS.ScanViewerVerticalMargin * ScanViewerColumns + 
						GLOBALS.expandButtonWidth;
	
	// determine the the modal width based on prescribed proportions
	var ScanViewerHeight = ( modalHeight - ((ScanViewerRows + 1) * GLOBALS.expandButtonWidth)) / ScanViewerRows;
	var ScanViewerWidth = GLOBALS.ScanViewerDimRatio * ScanViewerHeight;
	
	// determine the minimum modal width
	var modalWidth = GLOBALS.ScrollGalleryWidth + 
					 ScanViewerWidth  * ScanViewerColumns + 
					 GLOBALS.ScanViewerVerticalMargin * ScanViewerColumns + 
					 GLOBALS.expandButtonWidth;



 
	//-------------------------
	// 2. If the modal is too wide, scale it down
	//-------------------------
	
	if (modalWidth > maxModalWidth) {	

		ScanViewerWidth = (maxModalWidth - (GLOBALS.ScrollGalleryWidth + GLOBALS.ScanViewerVerticalMargin * ScanViewerColumns + GLOBALS.expandButtonWidth))/ScanViewerColumns;	
		ScanViewerHeight = ScanViewerWidth / GLOBALS.ScanViewerDimRatio;
		modalWidth= maxModalWidth;
		modalHeight = (ScanViewerHeight * ScanViewerRows) + (GLOBALS.ScanViewerVerticalMargin  * (ScanViewerRows  - 1)) + GLOBALS.expandButtonWidth*2;

	}
	


	var _l = (window.innerWidth - modalWidth) /2 ;
	var _t = (window.innerHeight - modalHeight)/2;
	
	
	

	//-------------------------
	// SCROLL GALLERY DIMS
	//-------------------------	
	var ScrollGalleryCSS = {
		height: Math.round(modalHeight) - GLOBALS.expandButtonWidth*2,
		top: GLOBALS.expandButtonWidth,
	}
		
		
		
		
	//-------------------------
	// SCAN VIEWER DIMS
	//-------------------------	
	var ScanViewerLefts = [];
	var ScanViewerTops = [];
	var viewerStart = $(this.ScrollGallery.widget).width() +  $(this.ScrollGallery.widget).position().left + GLOBALS.ScanViewerVerticalMargin;

	XV.ScanViewers( function(ScanViewer, i, j) { 
			
		l = viewerStart + j * (ScanViewerWidth + GLOBALS.ScanViewerVerticalMargin);
		

		if (j==0 || !ScanViewerLefts[i]) {
			ScanViewerLefts.push([])
		}
		
		ScanViewerLefts[i][j] = l;
		
		if (j==0 || !ScanViewerTops[i]) {
			ScanViewerTops.push([]);
		}
		
		ScanViewerTops[i][j] = (-1 + i * (ScanViewerHeight + GLOBALS.ScanViewerHorizontalMargin));
		
		//if (i==0)
		ScanViewerTops[i][j] +=  GLOBALS.expandButtonWidth;
		
	});
	
	
   
	//-------------------------
	// SCROLL LINK DIMS
	//-------------------------	
	var scrollLinkLefts = [];
	var scrollLinkTops = [];	
	/*
	for (var i=0;i<that.scrollLinks.length;i++) {
		scrollLinkLefts.push(ScanViewerLefts[i] + ScanViewerWidth - 
							 $(that.scrollLinks[i]).width()/2 + 
							 GLOBALS.ScanViewerVerticalMargin/2);
		scrollLinkTops.push(ScanViewerTops[i] + ScanViewerHeight/2 - 2);
	}
	*/
	
		
				
	//console.log(ScanViewerLefts[0])	
	return  {
		
		width: Math.round(modalWidth),
		left: Math.round(_l),
		height: Math.round(modalHeight),
		top: Math.round(_t),
		ScanViewer: {
			
			width: Math.round(ScanViewerWidth),
			height: Math.round(ScanViewerHeight),
			lefts: ScanViewerLefts,
			tops: ScanViewerTops,	
			
		},
		ScrollGallery: {
			
			widgetCSS: ScrollGalleryCSS
		
		},
		closeButton: {
			
			left: Math.round(_l) + Math.round(modalWidth) - (utils.convert.int(that.closeButton.style.width)) - 13,
			top: Math.round(_t) + 10,// + $(this.closeButton).height()/3,// (utils.convert.int(that.closeButton.style.width)/2),
			
		},
		ColumnMenu: {
			
			left: Math.round(modalWidth) - GLOBALS.expandButtonWidth,
			top: ScanViewerTops[0][0] + Math.round(modalHeight)/2 - GLOBALS.expandButtonWidth - 20,
			width: GLOBALS.expandButtonWidth - 1,
			height: 40
			
		},
		RowMenu:{
			
			left: ScanViewerLefts[0][0] + (Math.round(modalWidth) - ScanViewerLefts[0][0] - GLOBALS.expandButtonWidth)/2 - 17,
			top: Math.round(modalHeight) - GLOBALS.expandButtonWidth,
			width: 40,
			height: GLOBALS.expandButtonWidth - 1,
			
		},

	}

}
//******************************************************
//  Update CSS.
//
//******************************************************
XNATViewer.prototype.updateCSS = function (args) {

	
	var that = this;
	
	
    //----------------------------------
	//	RESIZE THE MODAL
	//----------------------------------
	modalDims = this.modalDims();
	$(this.modal).css(modalDims);	
	if(args) {$(this.modal).css(args);}	
	
	
	
	//----------------------------------
	//	SCROLL GALLERY
	//----------------------------------
	this.ScrollGallery.updateCSS(modalDims.ScrollGallery);


 
 	//----------------------------------
	//	SCAN VIEWERS
	//----------------------------------		
	XV.ScanViewers( function(ScanViewer, i, j) { 
				
		XV.ScanViewers( function(ScanViewer) { 	

			$(ScanViewer.widget).stop().fadeTo(0, 1);
			$(ScanViewer.widget.childNodes).stop().fadeTo(0, 1);
		});
		
		ScanViewer.updateCSS({
			
			height: modalDims.ScanViewer.height,// - this.args.marginTop*2,
			width: modalDims.ScanViewer.width,
			left: modalDims.ScanViewer.lefts[i][j],
			top: modalDims.ScanViewer.tops[i][j],
			
		});	
		
		if (ScanViewer.selectorBox) {
			
			utils.css.setCSS(ScanViewer.selectorBox, {
				height: modalDims.ScanViewer.height,// - this.args.marginTop*2,
				width: modalDims.ScanViewer.width,
				left: modalDims.ScanViewer.lefts[i][j],
				top: modalDims.ScanViewer.tops[i][j],
			});				
		} 	
		
	}); 

    
	
		
	//----------------------------------
	//	CLOSE BUTTON
	//----------------------------------
	utils.css.setCSS(this.closeButton, modalDims.closeButton);		

	
	
	
	//----------------------------------
	//	HORIZONTAL EXPAND BUTTON
	//----------------------------------

	$(this.ColumnMenu).css({
		
		top: modalDims["ColumnMenu"].top,
		left: modalDims["ColumnMenu"].left,
		height: modalDims["ColumnMenu"].height,
		width: modalDims["ColumnMenu"].width,					
			
	})
					
			
			
	
	
	
	//----------------------------------
	//	VERTICAL EXPAND BUTTONS
	//----------------------------------
	$(this.RowMenu).css({
		
		top: modalDims["RowMenu"].top,
		left: modalDims["RowMenu"].left,
		height: modalDims["RowMenu"].height,
		width: modalDims["RowMenu"].width,					
			
	})
}
//******************************************************
//  Expand button
//
//******************************************************
XNATViewer.prototype.addColumnMenu = function () {

	var that = this;

	this.ColumnMenu = utils.dom.makeElement("div", this.modal, "ColumnMenu", {
		position: "absolute",
		textAlign: "right",
		display: "inline-block",
		bottom: "0px",
	});
	
	
	
	function makeButton(args){

		//-------------------------
		// The button CSS
		//-------------------------
		var button = utils.dom.makeElement("img", that.ColumnMenu, args.id, {
			position: "absolute",
			"cursor": "pointer",
			zIndex: 100,
			width: GLOBALS.expandButtonWidth * .5,
			left: GLOBALS.expandButtonWidth * .25,
			top: args.top,
			"vertical-align": "bottom",
		})	
	
		//-------------------------
		// Its natural state -- slightly faded
		//-------------------------
		$(button).fadeTo(0, .5);
		
		//-------------------------
		// What do do when the mouse leaves
		//-------------------------		
		$(button).mouseenter( function () {
			
			$(button).stop().fadeTo(GLOBALS.animFast, 1);
		
		}).mouseleave( function () { 
			
			$(button).stop().fadeTo(GLOBALS.animFast, .5);		
			
	    });
			
		button.src = args.src		
		button.title = args.title	
		
		$(button).click(function(){
			$(this).stop().fadeTo(GLOBALS.animFast, .5);
			args.onclick();
		})	
		
		
	}

	makeButton({
		id : "InsertRowButton", 
		src:  "./icons/Arrows/insertColumnArrow.png", 
		top: 0,
		title: "Insert Column",
		onclick: function () { 
			XV.ScanViewers({"insert" : "column"}); 
		}	
	});

	makeButton({
		id : "RemoveRowButton", 
		src:  "./icons/Arrows/removeColumnArrow.png",
		top: 22,
		title: "Remove Column",
		onclick: function () { 
			XV.ScanViewers({"remove" : "column"});  
		}	
	});
}
//******************************************************
//  Expand button
//
//******************************************************
XNATViewer.prototype.addRowMenu = function (rowPos, colPos) {
	var that = this;

	this.RowMenu = utils.dom.makeElement("div", this.modal, "RowMenu", {
		position: "absolute",
		textAlign: "right",
		display: "inline-block",
		"vertical-align": "middle",
	});
	
	
	
	function makeButton(args){

		//-------------------------
		// The button CSS
		//-------------------------
		var button = utils.dom.makeElement("img", that.RowMenu, args.id, {
			position: "absolute",
			"cursor": "pointer",
			zIndex: 100,
			height: GLOBALS.expandButtonWidth * .5,
			top: GLOBALS.expandButtonWidth * .25,
			textAlign: "right",
			left: args.left
		})	
	
		//-------------------------
		// Its natural state -- slightly faded
		//-------------------------
		$(button).fadeTo(0, .5);
		
		//-------------------------
		// What do do when the mouse leaves
		//-------------------------		
		$(button).mouseenter( function () {
			
			$(button).stop().fadeTo(GLOBALS.animFast, 1);
		
		}).mouseleave( function () { 
			
			$(button).stop().fadeTo(GLOBALS.animFast, .5);		
			
	    });
			
		button.src = args.src		
		button.title = args.title	
		
		$(button).click(function(){
			$(this).stop().fadeTo(GLOBALS.animFast, .5);
			args.onclick();
		})	
		
		
	}

	makeButton({
		id : "InsertRowButton", 
		src:  "./icons/Arrows/insertRowArrow.png", 
		left: 0,
		title: "Insert Row",
		onclick: function () { 
			XV.ScanViewers({"insert" : "row"}); 
		}	
	});

	makeButton({
		id : "RemoveRowButton", 
		src:  "./icons/Arrows/removeRowArrow.png",
		left: 23,
		title: "Remove Row",
		onclick: function () { 
			XV.ScanViewers({"remove" : "row"});  
		}	
	});

}
XNATViewer.prototype.addScanViewerManager = function() {
	
	var viewers = [[]];

	this.ScanViewers = function(args1, args2, args3, args4, args5) {
		
		//console.log(typeof args1)
		//var viewers = [[]];
		
		
		var isUndefined = (typeof args1 === 'undefined');
		var isString = (typeof args1 === 'string');
		var isObject = (typeof args1 === 'object');	
		var isFunction = (typeof args1 === 'function');	
	
		function widget(args1, args2) {
			return viewers[args1],[args2]
		}
		
			
		var loop = function(callback) {
			
				var returnVals = [];
				var ScanViewers = viewers;
				
				for (var i=0; i<viewers.length; i++) {
					for (var j=0; j<viewers[i].length; j++) {
						
						var r = callback(viewers[i][j], i, j);
						if (r){
							returnVals.push(r);
						}
						
					}
				}
				
				if (returnVals.length > 0){
					if (returnVals.length === 1){
						return returnVals[0]
					}
					else{
						return returnVals;
					}
				}		
		}

		
		
		function widgets() {
			var ws = loop (function (ScanViewer) { 
				return ScanViewer.widget;	
			})
			return ws;				
		}		
		
		
		function makeViewer(){
			//	
			// Create ScanViewer
			//	
			var v = new ScanViewer({
				parent: XV.modal,
				id: "ScanViewer_" + utils.dom.uniqueId(),
			});	
			return v;
			
		}
		


		function swap(v1, v2){

			var arrLoc = loop ( function (v, i, j) { 
				
				var byObj = (v === v1) || (v === v2);
				var byElement = (v.widget === v1) || (v.widget === v2);
				var byId = (v.widget.id === v1) || (v.widget.id === v2);
				
				if (byObj || byElement || byId) {
					return {
						"i" : i,
						"j" : j,
					}				
				}
				
			})
			
			if (arrLoc.length == 2){

				var tempViewer = viewers[arrLoc[0].i][arrLoc[0].j];
				viewers[arrLoc[0].i][arrLoc[0].j] = viewers[arrLoc[1].i][arrLoc[1].j];
				viewers[arrLoc[1].i][arrLoc[1].j] = tempViewer;
	
			}
			else{
				throw "SWAP ERROR: "
			}
		}	
		
		//---------------------
		// UNDEFINED
		//---------------------
		if (isUndefined) {
			return viewers;
		}
		

		//---------------------
		// STRING
		//---------------------		
		else if (isString) {
			
			var isWidget = (args1.toLowerCase().indexOf("widgets")  === 0 );
			if (isWidget){
				return widgets();
			}		
			
			
			var isId = (args1.indexOf(GLOBALS.ScanViewerPreId)  == 0 );
			if (isId){
				
				var a = loop( function (ScanViewer) {
					
					if (ScanViewer.widget.id == args1){

						return ScanViewer;
						
					}
				})
				
				return a;

			}		
		}	
		
		
		//---------------------
		// OBJECT
		//---------------------		
		else if (isObject){
			
			var animOff = (args1['animate'] && args1['animate'] === 'off');	
			
			var isElement = args1["element"];
			if (isElement){
				
				
				//
				// return Widgets
				//
				var isWidget = (args1["element"].toLowerCase().indexOf("widgets")  === 0 );
				if (isWidget){
					return widgets();
				}				
			}


			//
			// Loop
			//
			var isLoop = args1["loop"];
			if (isLoop){
				return loop(args1["loop"]);			
			}
			
			
			//
			// Swap
			//
			var isSwap = args1["swap"];
			if (isSwap){
				return swap(args1["swap"][0], args1["swap"][1]);			
			}
			
			
		
			//
			// insert Row/Column
			//			
			var isInsert = args1['insert'];
			if (isInsert){
				
				var isRow = (args1['insert'] === 'row');
				var isColumn = (args1['insert'] === 'column');
				
				if (isRow) { 

					var newRow = [];
					var rowLen = (viewers[0] && viewers[0].length) ? viewers[0].length : 1;

					for (var i=0; i<rowLen; i++){ 						
						var v = makeViewer();
						newRow.push(v);
						
					}
					

					viewers.push(newRow);
			
									
					if (!animOff) {
						for (var i = 0; i<newRow.length; i++) {
							$(newRow[i].widget).fadeTo(0,0);
						}
						this.animateModal(function () {
							for (var i = 0; i<newRow.length; i++) {
								
								$(newRow[i].widget).fadeTo(GLOBALS.animFast, 1);
								newRow[i].updateCSS();
								
								
							}						
						});						
					}
					else {
						this.updateCSS();
					}

					
				}	
				if (isColumn) { 
					
					var newColumn = [];
					var columnLen = (viewers.length) ? viewers.length : 1;

					for (var i=0; i<columnLen; i++) { 						
						var v = makeViewer();
						newColumn.push(v);
						
					}
					
					if (viewers.length == 0){
						viewers.push([newColumn[0]])
					}
					else{
						for (var i=0; i<viewers.length; i++) { 
							viewers[i].push(newColumn[i]);
						} 						
					}


					if (!animOff) {
						for (var i = 0; i<newColumn.length; i++) {
							$(newColumn[i].widget).fadeTo(0,0);
						}
						this.animateModal(function () {
							for (var i = 0; i<newColumn.length; i++) {
								
								$(newColumn[i].widget).fadeTo(GLOBALS.animFast, 1);
								newColumn[i].updateCSS();
							}						
						});					
					}
					else {
						this.updateCSS();
					}

				}		
			}
			
			
			//
			// remove Row/Column
			//			
			var isRemove = args1['remove'];
			if (isRemove){
				
				var isRow = (args1['remove'] === 'row');
				var isColumn = (args1['remove'] === 'column');
				
				if (isRow) { 
					
					if (viewers.length > 1){
						var delRow = viewers[viewers.length - 1];					
						for (var i=0; i<delRow.length; i++){
							$(delRow[i].widget).fadeTo(GLOBALS.animFast, 0).remove();
						}
						viewers.splice(viewers.length -1, 1);
					}

					if (!animOff) {
						this.animateModal(function () {});					
					}
					else {
						this.updateCSS();
					}					
					
				}	
				if (isColumn) { 
					
					if (viewers[0] && viewers[0].length > 1){
						
						for (var i=0; i<viewers.length; i++){
							var rowLen = viewers[i].length - 1;
							$(viewers[i][rowLen].widget).fadeTo(GLOBALS.animFast, 0).remove();
							viewers[i].splice(rowLen, 1);
						}
					}

					if (!animOff) {
						this.animateModal(function () {});					
					}
					else {
						this.updateCSS();
					}						
				}		
			}
			
		}
		
		
		//---------------------
		// FUNCION
		//---------------------	
		if (isFunction) {
			loop(args1)
		}
		
	}

}