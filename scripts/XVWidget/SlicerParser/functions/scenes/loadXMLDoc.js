goog.require('SlicerParser');
goog.provide('SlicerParser.loadXMLDoc');

// http://www.w3schools.com/dom/dom_loadxmldoc.asp
SlicerParser.prototype.loadXMLDoc = function(dname) {
    var xhttp;
    
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", dname, false);
    xhttp.send();
    
    // at this point, xhttp.responseXML is null, but .responseText is not
    // cross-origin request issues (?)
    
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
    var parser = new DOMParser();
    var xmldoc = parser.parseFromString(xhttp.responseText, 'application/xml');
    
    return xmldoc;
}
goog.exportProperty(SlicerParser.prototype, 'loadXMLDoc', SlicerParser.prototype.loadXMLDoc);