// JavaScript Document
// This document contains the SCORM+ API info for interacting with BrainHoney for interactive assignments (worksheets, forms, custom interactice assignments)

var api = findApiHost(window);

function findApiHost(win) {
    // Look for the API first on this window
    var i;
    if (win.API != null) {
        return win.API;
    }
    // Try looking on frameset kin
    if (win.frames.length > 0) {
        for (i = 0; i < win.frames.length; i++) {
            if (win.frames[i].API != null) {
                return win.frames[i].API;
            }
        }
    }
    // Try parent
    if (win.parent != win) {
        return findApiHost(win.parent);
    }
    // else give up
    return null;
}


$(document).ready(function (e) {
	if(api){
	api.Initialize("");
	}
});
