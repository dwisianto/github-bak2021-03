/**
 * 
 */

/**
 * [] Document load
 * We may not need this if the viewer is a part of larger doc
 */
$(document).ready(function() { 
	
	// [] Code to run when the document is ready.
	console.log("document is ready"); 

	// [] pod.view
    pvFnSetup();
    
    
});



/**
 * [] pod view
 */
var pvFn='pod.view.function';

var pvMotifAreaIdStr="pvMotifAreaId";
var pvMotifAreaId="#"+pvMotifAreaIdStr;

var pvTextAreaIdStr="pvTextAreaId";
var pvTextAreaId="#"+pvTextAreaIdStr;

var pvCategoryAreaIdStr="pvCategoryAreaId";
var pvCategoryAreaId="#"+pvCategoryAreaIdStr;
	



/**
 * [] refactor these vars
 */
var holdInfoFrame = false;
var map = {}; // has to match style sheet color ?
map['type5'] = 'color:Blue';
map['type4'] = 'color:MediumBlue';
map['type3'] = 'color:DarkBlue';
map['type2'] = 'color:Navy';
map['type1'] = 'color:Black';


function pvFnSetup() {
	
    pvFnSetupMotif()
    pvFnSetupText()
    pvFnSetupCategory()
	
}

function pvFnSetupMotif() {
	console.log(pvMotifAreaId);
	$(pvMotifAreaId).text("hello");
} 

function pvFnSetupText() {
	console.log(pvTextAreaId);
	$(pvTextAreaId).text("world");
}

function pvFnSetupCategory() {
	console.log(pvCategoryAreaId);
	$(pvCategoryAreaId).text("back");
} 




function toggleHoldInfoFrame() {
	holdInfoFrame = !holdInfoFrame;
	if (!holdInfoFrame) {
		clearInfoFrame();
	}
}

function clearInfoFrame() {
	if (!holdInfoFrame) {
		elements = document.getElementById("idMotif").childNodes;
		for (var j = 0; j < elements.length; j++){
			if (elements[j].nodeName != 'null' && elements[j].nodeName === 'div' || elements[j].nodeName === 'DIV') {
				elements[j].style.display = 'none';
			}
		}
	}
}

function showInfo(idToShow) {
	if (!holdInfoFrame) {
		var element = document.getElementById(idToShow);
		element.style.display = 'block';
	}
}

function fnCategorySelected(element) {
	var newStyle = '';
	var rules = document.styleSheets[1].rules || document.styleSheets[1].cssRules;
	for (i = 0; i < rules.length; i++) {
		if (rules[i].selectorText.toLowerCase() == '#' + element.id.toLowerCase()) {
			if (!element.checked) {
				newStyle = "background:none";
			} else {
				newStyle = map[element.id];
			}
			rules[i].style.cssText = newStyle;
		}
	}
}
function switchOnOff(source) {
	for(x in map) { 
		var form = document.getElementById("idCategoryForm");
		var elements = form.getElementsByTagName("input");
		for (i = 0; i < elements.length; i++){
			if (elements[i].nodeName === "INPUT" && elements[i].checked != source.checked && elements[i].id != "toogle") {
				elements[i].click();
			}
		}
	}
}
