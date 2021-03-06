goog.require('Menu');
goog.provide('Menu.addToMenu');


Menu.prototype.addFolder = function(title) {
    
    var zippy = this.Content.addZippy(title);
    var fContent = this.Content.getScrollables(title, 'content');
    zippy.expand();
    
    fContent.style.width = '';
    fContent.style.right = '0px';
    fContent.style.color = '#aaa';
    fContent.style.backgroundColor = '';
    fContent.style.paddingBottom = '5px';
    fContent.style.marginBottom = '10px';
    fContent.style.fontSize = '11px';//XVGlobals.fontSizeSmall;
    
    return fContent;
    
}
goog.exportProperty(Menu.prototype, 'addFolder', Menu.prototype.addFolder);



// guiObject (string) slider, ttslider, checkbox, radio, dropdown
Menu.prototype.add = function(guiObject, folder, label, values, file) {
    var objAndLabel;
    switch (guiObject) {
        case 'checkbox':
        case 'radio':
            objAndLabel = this.addInputButton(guiObject, folder, label, values, file);
            break;
        
        case 'slider':
            objAndLabel = this.addSlider(folder, label, values);
            break;
        
        case 'ttslider':
            objAndLabel = this.addTTSlider(folder, label, values);
            break;
        
        case 'newline':
            objAndLabel = utils.dom.makeElement('div', folder, 'Newline', {
                'width': '100%',
                'height': '1px'
            });
            break;
        
        case 'spacer':
            objAndLabel = utils.dom.makeElement('div', folder, 'Spacer', {
                'width': '100%',
                'height': '10px'
            });
            break;
        
        default:
            console.log('No menu support for ' + guiObject);
            break;
    }
    
    return objAndLabel;
}
goog.exportProperty(Menu.prototype, 'add', Menu.prototype.add);


Menu.prototype.addInputButton = function(guiObject, folder, label, initialValue, file) {
    var width = (guiObject === 'radio') ? "85%" : "28%";
    
    var b = utils.dom.makeElement('input', folder, 'Checkbox', this.buttonCSS);
    b.setAttribute('file', label);
    
    // shorten 'file' to exclude filepath info before /3D/
    if (label.split('/3D/')[1]) label = label.split('/3D/')[1];
    
    b.setAttribute('id', guiObject + 'ButtonFor' + label + file + this.widget.id);
    b.setAttribute('type', guiObject);
    b.setAttribute('name', guiObject + 'Button' + this.widget.id);
    b.checked = initialValue;
    
    var l = utils.dom.makeElement('label', folder, 'Label', utils.dom.mergeArgs(this.labelCSS, {'width': width}));
    l.setAttribute('for', guiObject + 'ButtonFor' + label + file + this.widget.id);
    
    // shorten 'file' to be just the name of the file, not whole path
    // easier to read and fits better in the menu
    if (label.split('/')[1])
        l.innerHTML = '<b>' + label.slice(label.lastIndexOf('/') + 1) + '</b>';
    else
        l.innerHTML = label;
    
    return [b, l];
}


Menu.prototype.addSlider = function(folder, label, values) {
    // must set tab pane visibility to 'block' in order for sliders to init properly
    this.widget.parentElement.style.display = 'block';
    folder.style.display = 'block';
    
    var lb = values[0];
    var ub = values[1];
    var step = values[2];
    var init = values[3];
    
    // make label
    var l = utils.dom.makeElement('div', folder, 'SliderLabel', this.sliderLabelCSS);
    l.innerHTML = label;
    
    // make slider
    var s = new utils.gui.GenericSlider({
		'parent': folder,
		'className': 'Opacity',
		'orientation': 'horizontal',
		'widgetCSS': this.defaultSliderCSS,
		'thumbCSS': this.sliderThumbCSS
	});
    s.setMinimum(lb);
    s.setMaximum(ub);
    s.setStep(step);
    s.setValue(init);
    
    return [s, l];
}


Menu.prototype.addTTSlider = function(folder, label, values) {
    var lb = values[0];
    var ub = values[1];
    var initlb = values[2];
    var initub = values[3];
    
    // make label
    var l = utils.dom.makeElement('div', folder, 'SliderLabel', this.sliderLabelCSS);
    l.innerHTML = label;
    
    // make slider
    var s = new goog.ui.TwoThumbSlider;
    s.decorate(utils.dom.makeElement('div', folder, 'Threshold', this.defaultSliderCSS));
    // can't use generic slider to make twothumbslider
    // we no longer have a css file so we need to set the thumb css
    // (calling utils.css.setCSS didn't work)
    utils.array.forEach(goog.dom.getChildren(s.element_), function(child) {
		if (child.className === 'goog-twothumbslider-value-thumb' ||
            child.className === 'goog-twothumbslider-extent-thumb') {
			child.style.position = 'absolute';
            child.style.marginTop = '-2px';
            child.style.width = '4px';
            child.style.height = '6px';
            child.style.background = '#eee';
            child.style.border = '1px solid #333';
            child.style.borderRadius = '4px';
		}		
	})
    
    s.setMinimum(lb);
    s.setMaximum(ub);
    s.setStep(1);
    s.setValueAndExtent(initlb, initub - initlb);
    
    return [s, l];
}
