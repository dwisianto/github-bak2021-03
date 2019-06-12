/**
 * ToDo : background vs foreground colors
 * 
 *
 * pvTextAreaId
 * pvMotifAreaId
 * pvCategoryAreaId
 * pvCategoryFormId
 * 
 * document.styleSheets
 * 
 * - pvRun is the main function to execute the whole thing
 * - 
 * 
 * 
 *
 * - pvQryTxtFlag
 *   We want to know which character in the original text has been covered by concepts.
 *   Use the pvQryTxtFlagChar1 where the text has been covered
 *   Use the pvQryTxtFlagChar0 where the text has not been covered 
 *   
 * - pvDatObj captures the important aspect of pvQryObj
 *   Query -> Data object 
 * 
 * - pvTextStyleClr 
 * It controls the text coloring schema.
 * It is set once in the query analysis
 * 
 * - pvTextStyleSheetBrightnessId
 * this id is use to control the random color generator
 * - pvTextStyleSheetBrightnessId2=
 * This set the brac
 *  
 * - pvTextStyleSheetId=0
 * This id is automatically generated.
 * This id is important because it update the style of text area
 * 
 * - pvTextFlagDiscardMotif is the flag to keep displaying motif.
 * If true, the motif description will stay although the mouse has left the word.
 * If false, the motif description will disappear as soon as the mouse left the word.
 * The default value is true.
 * 
 * 
 * [] Document load
 */
$(document).ready(function() { 
	//console.log("document is ready"); 	
	
	// []
	//inJson                    = '{"natural":[{"data":{"motifs":[{"id":"0","type":"cd","start":3,"end":5,"textPattern":"cd"},{"id":"1","type":"gh","start":9,"end":11,"textPattern":"gh"},{"id":"2","type":"kl","start":15,"end":17,"textPattern":"kl"},{"id":"3","type":"mn","start":18,"end":20,"textPattern":"mn"},{"id":"4","type":"op","start":21,"end":23,"textPattern":"op"}]},"text":"ab cd ef gh ij kl mn op qr st uvw xyz"}]}'; 	
	//inJson                    = '{"natural":[{"text":"abc def ghi jk mnop ","data":{"motifs":[{"id":"0","type":"type1","start":0,"end":3,"textPattern":"abc"},{"id":"1","type":"type2","start":4,"end":7,"textPattern":"def"},{"id":"2","type":"type3","start":8,"end":12,"textPattern":"ghij"},{"id":"3","type":"type4","start":13,"end":15,"textPattern":"kl"},{"id":"4","type":"type5","start":16,"end":20,"textPattern":"mnop"}]}}]}';	
	inJson                   = "{\"natural\":[{\"data\":{\"moments\":[{\"id\":\"0\",\"type\":\"dateTime\",\"start\":12,\"end\":21,\"textPattern\":\"yesterday\",\"textDate\":\"Tue Jun 11 13:43:54 EDT 2019\"},{\"id\":\"1\",\"type\":\"dateTime\",\"start\":33,\"end\":38,\"textPattern\":\"today\",\"textDate\":\"Wed Jun 12 13:43:54 EDT 2019\"},{\"id\":\"2\",\"type\":\"dateTime\",\"start\":54,\"end\":62,\"textPattern\":\"tomorrow\",\"textDate\":\"Thu Jun 13 13:43:54 EDT 2019\"}]},\"text\":\" Learn from yesterday , live for today , and hope for tomorrow . \"}]}"
	inAtt1                    = "natural";
	inAtt2                    = "data";
	inAtt3                    = "moments"; //"motifs";			
	inObj                     = JSON.parse(inJson)
	pvRun( inObj, inAtt1, inAtt2, inAtt3 );	
	
});




/**
 * [] pod view
 */
var pvQryObj                     = {};
var pvQryTxt                     = ""; // natural text we are interested in
var pvQryTxtFlag                 = "";
var pvQryTxtFlagChar1            = '1'; // change pvQryTxtFlagRegex if this change
var pvQryTxtFlagChar0            = '0';
var pvQryTxtFlagRegex            = /[^1]/gi; // notice it does not have a quote or string. It is actually 'pvQryTxtFlagChar1' 
var pvQryAtt1                    = "";
var pvQryAtt2                    = "";
var pvQryAtt3                    = "";	

var pvDatObj                     = {}; 
var pvDatAtt1                    = "datum";

var pvTextAreaId                 = "#pvTextAreaId";
var pvMotifAreaId                = "#pvMotifAreaId";
var pvCategoryAreaId             = "#pvCategoryAreaId";
var pvCategoryFormId             = "#idCategoryForm";

var pvTextStyleClr               = {};
var pvTextStyleSheetId           = 0; // document.styleSheets
var pvTextFlagDiscardMotif       = false; //var holdInfoFrame = true;
var pvTextStyleSheetBrightnessId1 = 49; // used to generate random color
var pvTextStyleSheetBrightnessId2 = 194; // used to generate random color





/**
 * main function
 */
function pvRun( inObj, inAtt1, inAtt2, inAtt3  ) {
	
	// []
	pvQryObj                     = inObj;
	pvQryAtt1                    = inAtt1;
	pvQryAtt2                    = inAtt2;
	pvQryAtt3                    = inAtt3;	
	pvQryTxt                     = pvQryObj[pvQryAtt1][0]["text"];
	pvQryTxtFlag                 = pvQryTxt;
	
	 // [] the input is a json json object
	pvQueryAnalysis();	
	
	// [] style sheet
	pvHtmlStyleFnGen(); // style sheet for html page
	pvTextStyleFnGen(); // style sheet for coloring and background color
	
	// [] 
	var strMotif    = '<br>';	
	var strCategory = '<form id=\"'+pvCategoryFormId.replace("#","")+'\"><ul>';	
	strCategory    += '<li><span class=\"nobr\"><input type=\"checkbox\" checked onClick=\"pvCategoryFnTurnAllOnOff(this)\"><strong>(All)</strong><br></span></li>';
	var strText     = '<div id="idText" onClick="pvMotifFnClearInverse()">';
	nowStart = 0; // current text starting 
	nowEnd   = 0; // current text ending	
	for ( let iCtrMtf = 0; iCtrMtf < Object.keys(pvDatObj).length; iCtrMtf++) {
		
			// [] 
			nowObj   = pvDatObj[iCtrMtf];
			strTxt   = nowObj.textPattern;			
			strStart = nowObj.start;								
			strEnd   = nowObj.end;
			strId    = nowObj.id;						
			strType  = nowObj.type;
			
			// [] Motif and Category Update 
			strMotif    += pvMotifFnGen(strTxt, strStart, strEnd, strId, strType);
			strCategory += pvCategoryFnGen(strTxt, strStart, strEnd, strId, strType);
			
			// [] Text Update
			strText     += pvTextFnCoverageEmptyStart(nowStart, nowObj.start);			
			strText     += pvTextFnGen(strTxt, strStart, strEnd, strId, strType);
			nowStart    = Number(strEnd); // nowStart is used inside pvTextFnCoverageEmptyStart 					
	} 		
	// [] append the rest of the text without concept
	nowObj = pvDatObj[Object.keys(pvDatObj).length-1];
	strText += pvTextFnCoverageEmptyEnd(nowStart,nowObj.end);
	strText +='</div>';
	// []
	strCategory += "</ul></form>";
	
	// [] 
	$(pvMotifAreaId).html(strMotif);       // console.log(strMotif);
	$(pvCategoryAreaId).html(strCategory); // console.log(strCategory);
	$(pvTextAreaId).html(strText);         // $(pvTextAreaId).text(strText); 
	
}


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
			//console.log( key + " : " + pvTextStyleClr[key] );
			strStyle += "#"+key+"{"+ pvTextStyleClr[key] +"}";	
		}				
	} 
	//console.log( " strStyle " + strStyle );
	
	// [] 
	sheet = document.createElement('style');
	sheet.innerHTML = strStyle;
	document.body.appendChild(sheet);		
	pvTextStyleSheetId=document.styleSheets.length-1;	
	//console.log("pvTextStyleSheetId:" + pvTextStyleSheetId); // going to be used in pvFnCategorySelected
}

/**
 * In
 *   pvQryObj
 * Out
 *   pvTextStyleClr[strType] : color for the style
 *   pvText
 * 
 * 	
 * console.log(pvQryJson);
 * console.log(pvQryObj.natural[0].data.motifs[0].id);
 * console.log(pvQryObj.natural.length);
 * 
 * @returns
 */
function pvQueryAnalysis( qryObj ) {
	
	
	//var useDefaultColor=true; // default color is only used once, the default color is not used afterwards		
	for (let iCtrNat = 0; iCtrNat < Object.keys(pvQryObj[pvQryAtt1]).length; iCtrNat++) {		
		//console.log( "iCtrNat :"+iCtrNat +"/" + pvQryObj.natural.length );
		
		iCtrMtfMax = Object.keys(pvQryObj[pvQryAtt1]).length
		iCtrMtfMax = Object.keys(pvQryObj[pvQryAtt1][iCtrNat]).length
		iCtrMtfMax = Object.keys(pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2]).length
		iCtrMtfMax = Object.keys(pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2][pvQryAtt3]).length
				
		for (let iCtrMtf = 0; iCtrMtf < Object.keys(pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2][pvQryAtt3]).length; iCtrMtf++) {			
			//console.log( "iCtrMtf :"+iCtrMtf +"/" + "/"+pvQryObj.natural[iCtrNat].data.motifs.length);
			
			// [] copy over to pvDatObj
			objNow = pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2][pvQryAtt3][iCtrMtf];
			pvDatObj[iCtrMtf] = objNow;		
			
			strTxt   = objNow.textPattern;			
			strStart = objNow.start;								
			strEnd   = objNow.end;
			strId    = objNow.id;						
			strType  = objNow.type;			
			
			// [] determine the color style
			pvTextStyleClr[strType] = "background-color:"+pvUtlRandomColor(pvTextStyleSheetBrightnessId2)
            							+";color:"+pvUtlRandomColor(pvTextStyleSheetBrightnessId1);
			
			//pvTextStyleClr[strType] = "background-color:"+pvUtlRandomColor(pvTextStyleSheetBrightnessId2, backColor=true, useDefaultColor);
            //+";color:"+pvUtlRandomColor(pvTextStyleSheetBrightnessId, backColor=false, useDefaultColor);
			//useDefaultColor = false; // default color is only used once, the default color is not used afterwards
			//console.log( ' pvTextStyleClr [ ' +  strType  + ' ] = '+ pvTextStyleClr[strType] );
			
			// [] span coverage
			for( let iCtrCover = Number(strStart); iCtrCover< Number(strEnd); iCtrCover++) {
				pvQryTxtFlag = pvUtlSetCharAt( pvQryTxtFlag, iCtrCover, pvQryTxtFlagChar1);	
			} 
						
		}
	} 	
	//console.log(Object.keys(pvQryObj).length);
	//console.log(Object.keys(pvDatObj).length);
	
	
	// [] pvQryTxtFlag using pvQryTxtFlagRegex, pvQryTxtFlag1, and pvQryTxtFlag0 
	pvQryTxtFlag = pvQryTxtFlag.replace( pvQryTxtFlagRegex , pvQryTxtFlagChar0);

	// [] print out the output text
	//console.log(" text "+ pvQryTxt);
	//console.log(" flag "+ pvQryTxtFlag);	
}

/**
 * Generate random  color based on brightness
 * 
 * If useDefault = true then return a default black color
 * If useDefault = false then generate a random color
 * @param brightness
 * @returns
 */
function pvUtlRandomColor( brightness, backColor=false, useDefault=false ) {
			
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
	  
  var valOut = '#000000';
  if( useDefault == false) {
	  valOut = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  } 
	  	  	 
  if( useDefault == true &&  backColor == true) {
	  valOut = '#FFFFFF';
  }
	  
  //console.log( " backColor:"+ backColor + ",useDefault:" + useDefault );  
  return valOut;
}


/**
 * var str = 'Hello World';
 * str = setCharAt(str,4,',');
 * alert(str);
 * 
 * @param str
 * @param index
 * @param chr
 * @returns
 */
function pvUtlSetCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
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
	
	if (!pvTextFlagDiscardMotif) { 
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
	pvTextFlagDiscardMotif=!pvTextFlagDiscardMotif;
	if (!pvTextFlagDiscardMotif) { // !holdInfoFrame;		
		pvMotifFnClear();	
	}
	
}


function pvMotifFnShow(idToShow) {
	
	if (!pvTextFlagDiscardMotif) {		
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
				//console.log( element.id + " newStyle "+ newStyle );
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


function pvTextFnCoverageEmptyStart( _nowStart, _strStart) {
	
	_nowStart = Math.min( _nowStart,Number( _strStart));
	_nowEnd   = _nowStart;
	while( pvQryTxtFlag.charAt( _nowEnd) == pvQryTxtFlagChar0 ) {
		_nowEnd = _nowEnd+1;				
	} 

	return pvQryTxt.substring(_nowStart, _nowEnd);
}

function pvTextFnCoverageEmptyEnd( _nowStart, _strEnd) {
		
	
	//strEnd   = nowObj.end;
	_nowStart = Math.min(_nowStart,Number(_strEnd));
	_nowEnd   = _nowStart;
	while( pvQryTxtFlag.charAt( _nowEnd) == pvQryTxtFlagChar0 ) {
		_nowEnd = _nowEnd+1;				
	} 

	return pvQryTxt.substring(_nowStart, _nowEnd); 
}