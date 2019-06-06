/**
 *
 * pvTextAreaId
 * pvMotifAreaId
 * pvCategoryAreaId
 * pvCategoryFormId
 * 
 * 
 * - var pvTextStyleClr 
 * It controls the text coloring schema.
 * It is set once in the query analysis
 *  
 * - pvTextStyleSheetId=0
 * This id is automatically generated.
 * This id is important because it update the style of text area
 * 
 * - pvTextFlagKeepMotif is the flag to keep displaying motif.
 * If true, the motif description will stay although the mouse has left the word.
 * If false, the motif description will disappear as soon as the mouse left the word.
 * The default value is true.
 * 
 * - pvTextStyleSheetBrightnessId
 * this id is use to control the random color generator
 * 
 **/


/**
 * [] pod view
 */
var pvQryJson                    = '{"natural":[{"data":{"motifs":[{"id":"0","type":"type1","start":0,"end":3,"textPattern":"abc"},{"id":"1","type":"type2","start":4,"end":7,"textPattern":"def"},{"id":"2","type":"type3","start":8,"end":12,"textPattern":"ghij"},{"id":"3","type":"type4","start":13,"end":15,"textPattern":"kl"},{"id":"4","type":"type5","start":16,"end":20,"textPattern":"mnop"}]}}]}';
var pvQryObj                     = JSON.parse(pvQryJson);

var pvTextAreaId                 = "#pvTextAreaId";
var pvMotifAreaId                = "#pvMotifAreaId";
var pvCategoryAreaId             = "#pvCategoryAreaId";
var pvCategoryFormId             = "#idCategoryForm";

var pvTextStyleClr               = {};
var pvTextStyleSheetId           = 0; // document.styleSheets
var pvTextFlagKeepMotif          = false; //var holdInfoFrame = true;
var pvTextStyleSheetBrightnessId = 49; // used to generate random color

/**
 * [] Document load
 */
$(document).ready(function() { 
	console.log("document is ready"); 	
	
	 // [] the input is a json json object
	pvQueryAnalysis();	
	
	// [] 
	pvHtmlStyleFnGen(); // html style sheet
	pvTextStyleFnGen(); // random coloring
	//console.log("pvTextStyleSheetId:" + pvTextStyleSheetId); // going to be used in pvFnCategorySelected
	
	// [] 
	var strMotif    = '<br>';	
	var strCategory = '<form id="idCategoryForm"><ul>';	
	strCategory    += '<li><span class=\"nobr\"><input type=\"checkbox\" checked onClick=\"pvCategoryFnTurnAllOnOff(this)\"><strong>(All)</strong><br></span></li>';
	var strText     = '<div id="idText" onClick="pvMotifFnClearInverse()">';	
	for (let iCtrNat = 0; iCtrNat < pvQryObj.natural.length; iCtrNat++) {		
		//console.log( "iCtrNat :"+iCtrNat +"/" + pvQryObj.natural.length );
		
		for (let iCtrMtf = 0; iCtrMtf < pvQryObj.natural[iCtrNat].data.motifs.length; iCtrMtf++) {
			//console.log( "iCtrMtf :"+iCtrMtf +"/" + "/"+pvQryObj.natural[iCtrNat].data.motifs.length);			

			strTxt   = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].textPattern;			
			strStart = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].start;								
			strEnd   = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].end;
			strId    = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].id;						
			strType  = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].type;			
			
			strMotif    += pvMotifFnGen(strTxt, strStart, strEnd, strId, strType);
			strCategory += pvCategoryFnGen(strTxt, strStart, strEnd, strId, strType);
			strText     += pvTextFnGen(strTxt, strStart, strEnd, strId, strType);
		}
	} 	
	strCategory += "</ul></form>";
	strText +='</div>';
	$(pvMotifAreaId).html(strMotif);       // console.log(strMotif);
	$(pvCategoryAreaId).html(strCategory); // console.log(strCategory);
	$(pvTextAreaId).html(strText);         // $(pvTextAreaId).text(strText); 
    
});





/**
 * In
 * 
 * Out
 *   Attach a stylesheet to the document body 
 * @returns
 */
function pvHtmlStyleFnGen() {

	// []
	let strStyle1 = ".nobr { white-space: nowrap }";
	
	// [] 
	sheet = document.createElement('style');
	sheet.innerHTML = strStyle1;
	document.body.appendChild(sheet);		
	
} 


/**
 * In:
 *   Read from pvTextStyleClr
 * Out:
 *   Attach a stylesheet to the document body 
 *   Set pvTextStyleSheetId
 * @returns
 */
function pvTextStyleFnGen() {
	
	// []
	//strStyle = "#type1{color:"+pvFnPrivateRandomColor( pvTextStyleSheetBrightnessId )+"}";	
	//strStyle += "#type2{color:"+pvFnPrivateRandomColor( pvTextStyleSheetBrightnessId )+"}";
	//strStyle += "#type3{color:"+pvFnPrivateRandomColor( pvTextStyleSheetBrightnessId )+"}";
	//console.log( pvFnPrivateRandomColor(pvTextStyleSheetBrightnessId) );
	strStyle = "";
	for( var key in pvTextStyleClr ) { 
		if( pvTextStyleClr.hasOwnProperty(key) ) {
			console.log( key + " : " + pvTextStyleClr[key] );
			strStyle += "#"+key+"{"+ pvTextStyleClr[key] +"}";	
		}				
	} 
	//console.log( " strStyle " + strStyle );
	
	// [] 
	sheet = document.createElement('style');
	sheet.innerHTML = strStyle;
	document.body.appendChild(sheet);		
	pvTextStyleSheetId=document.styleSheets.length-1;	
}

/**
 * Out
 *   pvTextStyleMap[strType]
 * pvText
 * 
 * 	
 * console.log(pvQryJson);
 * console.log(pvQryObj.natural[0].data.motifs[0].id);
 * console.log(pvQryObj.natural.length);
 * 
 * @returns
 */
function pvQueryAnalysis( ) {
		
	for (let iCtrNat = 0; iCtrNat < pvQryObj.natural.length; iCtrNat++) {		
		//console.log( "iCtrNat :"+iCtrNat +"/" + pvQryObj.natural.length );
				
		for (let iCtrMtf = 0; iCtrMtf < pvQryObj.natural[iCtrNat].data.motifs.length; iCtrMtf++) {			
			//console.log( "iCtrMtf :"+iCtrMtf +"/" + "/"+pvQryObj.natural[iCtrNat].data.motifs.length);
			
			strTxt   = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].textPattern;			
			strStart = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].start;								
			strEnd   = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].end;
			strId    = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].id;						
			strType  = pvQryObj.natural[iCtrNat].data.motifs[iCtrMtf].type;			
			
			pvTextStyleClr[ strType] = "color:"+pvUtlRandomColor(pvTextStyleSheetBrightnessId) ;
			console.log( ' pvTextStyleMap [ ' +  strType  + ' ] = '+ pvTextStyleClr[strType] );
		}
	} 	
		
}

/**
 * Generate random  color based on brightness
 * @param brightness
 * @returns
 */
function pvUtlRandomColor(brightness){
	
	  function randomChannel(brightness){
	    var r = 255-brightness;
	    var n = 0|((Math.random() * r) + brightness);
	    var s = n.toString(16);
	    return (s.length==1) ? '0'+s : s;
	  }
	  
	  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}





/**
 * 	pvMotifStr='<br>	
 * 	<div id="type1:0:3" style="display:none"><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>
 * 	<div id="type2:4:7" style="display:none"><span class="type2">Text : <b>def</b></span><br>start = 4<br>end = 7<br>textPattern = def<br>id = 1<br>type = type2<br><br></div>
 *	<div id="type3:8:12" style="display:none"><span class="type3">Text : <b>ghij</b></span><br>start = 8<br>end = 12<br>textPattern = ghij<br>id = 2<br>type = type3<br><br></div>
 *
 * //strMotif='<br>'
 * 		//+'<div id="type1:0:3" ><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';
 * 		//+'<div id="type1:0:3" style="display:none"><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';
 * 		//<div id="type2:4:7" style="display:none"><span class="type2">Text : <b>def</b></span><br>start = 4<br>end = 7<br>textPattern = def<br>id = 1<br>type = type2<br><br></div>
 *
 * //$(pvMotifAreaId).html(strMotif);
 * //$(pvMotifAreaId).text("hello");
 * 
 * +'<div id="type1:0:3" ><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';
 * 
 * 	console.log(pvMotifAreaId);
 * 
 * @returns
 */
function pvMotifFnGen(strTxt, strStart, strEnd, strId, strType) {
	
	//	<div id="type1:0:3" ><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';	
	strOut  ='<div id=\"'+ strType+':'+ strStart+':'+ strEnd +'\"';
	strOut += ' style="display:none">';
	strOut=strOut+'<span class=\"'+strType+'\">'
	strOut=strOut+'Text : <b>'+strTxt+'</b>';
	strOut=strOut+'</span>';
	strOut=strOut+'<br>start = '+strStart;
	strOut=strOut+'<br>end = '+strEnd;
	strOut=strOut+'<br>textPattern = '+strTxt;
	strOut=strOut+'<br>id = '+strId;
	strOut=strOut+'<br>type = '+strType;	
	strOut=strOut+'<br><br></div>';
	return strOut;

}

function pvMotifFnClear() { //function clearInfoFrame() {
	
	if (!pvTextFlagKeepMotif) { 
		elements = document.getElementById(pvMotifAreaId.replace('#','')).childNodes;
		for (var j = 0; j < elements.length; j++){
			if (elements[j].nodeName != 'null' && elements[j].nodeName === 'div' || elements[j].nodeName === 'DIV') {
				elements[j].style.display = 'none';
			}
		}
	}
	
}


function pvMotifFnClearInverse() {
	
	//holdInfoFrame = !holdInfoFrame;
	pvTextFlagKeepMotif=!pvTextFlagKeepMotif;
	if (!pvTextFlagKeepMotif) { // !holdInfoFrame;		
		pvMotifFnClear();	
	}
	
}


function pvMotifFnShow(idToShow) {
	
	if (!pvTextFlagKeepMotif) {		
		var element = document.getElementById(idToShow);
		element.style.display = 'block';		
	}
	
}







/**
 * <div id="idCategory">
 * <form id="idCategoryForm">
 *
 * <ul>
 * <li><span class="nobr"><input type="checkbox" onClick="switchOnOff(this)"><strong>(All)</strong><br></span></li>
 * <li><span id="type5" class="nobr"> <input id="type5"type="checkbox" checked onclick="fnCategorySelected(this)">type5</span></li>
 * <li><span id="type4" class="nobr"> <input id="type4"type="checkbox" checked onclick="fnCategorySelected(this)">type4</span></li>
 * <li><span id="type3" class="nobr"> <input id="type3"type="checkbox" checked onclick="fnCategorySelected(this)">type3</span></li>
 * </ul>
 * </form></div>
 * 
 * console.log(pvCategoryAreaId);
 * $(pvCategoryAreaId).text("back");
 * 
 * @param strTxt
 * @param strStart
 * @param strEnd
 * @param strId
 * @param strType
 * @returns
 */
function pvCategoryFnGen(strTxt, strStart, strEnd, strId, strType) {
	
	//<li><span id="type5" class="nobr"> <input id="type5"type="checkbox" checked onclick="fnCategorySelected(this)">type5</span></li>
	strOut='<li><span id=\"'+ strType+'\" class=\"nobr\">';
	strOut=strOut+'<input id=\"'+strType+'\" type=\"checkbox\" checked';
	strOut=strOut+' onclick=\"pvCategoryFnSelected(this)\">';
	strOut=strOut+strType+"</span></li>";
	
	return strOut;	
}


function pvCategoryFnSelected(element) {
	//console.log( "pvTextStyleSheetId "+ pvTextStyleSheetId ); 	

	var newStyle = '';
	var rules = document.styleSheets[pvTextStyleSheetId].rules || document.styleSheets[pvTextStyleSheetId].cssRules;
	for (i = 0; i < rules.length; i++) {
		if (rules[i].selectorText.toLowerCase() == '#' + element.id.toLowerCase()) {
			if (!element.checked) {
				newStyle = "background:none";
			} else {				
				newStyle = pvTextStyleClr[element.id];
				console.log( element.id + " newStyle "+ newStyle );
			}
			rules[i].style.cssText = newStyle;
		}
	}
	
}



function pvCategoryFnTurnAllOnOff(source) {
	
	for(x in pvTextStyleClr) {
		//console.log( "pvFnTurnAllOnOff - x: " + x );
		var form = document.getElementById( pvCategoryFormId.replace("#","") );
		var elements = form.getElementsByTagName("input");
		for (i = 0; i < elements.length; i++){
			if (elements[i].nodeName === "INPUT" && elements[i].checked != source.checked && elements[i].id != "toogle") {
				elements[i].click();
			}
		}
	}
	
}

/**
 *  <span id="type1" onMouseOut="clearInfoFrame()" onMouseOver="showInfo('type1:0:3')">abc</span> 
 *  <span id="type2" onMouseOut="clearInfoFrame()" onMouseOver="showInfo('type2:4:7')">def</span>  
 *  	<span id="type3" onMouseOut="clearInfoFrame()" onMouseOver="showInfo('type3:8:12')">ghij</span>
 *  
 *  console.log(pvTextAreaId);
 *  $(pvTextAreaId).text("world"); 
 * @returns
 */
function pvTextFnGen(strTxt, strStart, strEnd, strId, strType) {
	
	strOut  = '<span id=\"'+strType+'\"  ';
	strOut += 'onMouseOver="pvMotifFnShow(\''+strType+':'+ strStart+':'+ strEnd+'\')"';
	strOut += 'onMouseOut="pvMotifFnClear()"';
	strOut += '>';
	strOut += strTxt+'</span> ';
	
	return strOut;	
}