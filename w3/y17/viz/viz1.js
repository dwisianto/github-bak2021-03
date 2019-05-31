$(document).ready(function() { 
	
	// [] Code to run when the document is ready.
	console.log("document is ready"); 

	crpsSetup();
	rxnorm_ci();
		
    //document.getElementById("section3").innerHTML='<object type="text/html" data="PodViz.html" ></object>';	

	// [] pod.view
    //pvSetup();
});


// [] base
var baseUrl = "http://dwisianto.com/"
	/// [] Corpus
var crpsSourceJsn="w3/y17/viz/MTSamples.mini.json";
var crpsDocs; // corpus document
var crpsDivIdStr="crpsDivId";
var crpsDivId="#"+crpsDivIdStr;
var crpsTableIdStr="crpsTableId"; 
var crpsTableId="#"+crpsTableIdStr;
var crpsTableDatTable; // data table of corpus

var crpsModalIdStr="crpsModalId";
var crpsModalId="#"+crpsModalIdStr;
var crpsModalBtnLoadIdStr="crpsModalBtnLoadId";
var crpsModalBtnLoadId="#"+crpsModalBtnLoadIdStr;

// []
var bio2rdfSrvcUrl="http://bio2rdf.org/";



// [] Annotation

var annoTxtAreaIdStr     = "annoTxtAreaId";
var annoTxtAreaId        = "#" + annoTxtAreaIdStr;
var annoTxtBtnAnnotateId = "#annoTxtBtnAnnotateId";
var annoTxtBtnClearId    = "#annoTxtBtnClearId";
var annoTxtBtnSampleId     = "#annoTxtBtnSampleId";
var annoTxtBtnComprehendId = "#annoTxtBtnComprehendId";

var annoModalFocusId          = "#annoModalFocusId";
var annoModalOptionId         = "#annoModalOptionId";
var annoModalOptionTxtAreaId  = "annoModalOptionTxtAreaId";
var annoModalOptionSrvc1Id    = "annoModalOptionSrvc1Id";
var annoModalOptionSrvc2Id    = "annoModalOptionSrvc2Id";
var annoModalOptionSrvc1BtnId = "annoModalOptionSrvc1BtnId";
var annoModalOptionSrvc2BtnId = "annoModalOptionSrvc2BtnId";
var annoModalOptionMsgErr     = "Service is not responding";

var annoSrvcUrl          = "analyze/a_flow"; // deprecated
var annoSrvc1UrlDefault  = "http://t19a7gcname.us-east-2.elasticbeanstalk.com";
var annoSrvc2UrlDefault  = "http://t19a7gcname.us-east-2.elasticbeanstalk.com";
var annoSrvc1Url         = annoSrvc1UrlDefault; 
var annoSrvc2Url         = annoSrvc2UrlDefault;
var srvc1raw             = "http://t19a7gcname.us-east-2.elasticbeanstalk.com"; // default value              
var srvc1viz             = srvc1raw + "/rest/season";


/*
 * i: crpsSourceJsn
 * o: crpsDoc
 *    crpsSetupTable
 *    crpsSetupModal
 */
function crpsSetup() {
	console.log("crpsSetup");

    //
    //dataType: "application/octet-stream",
    //headers: { "Accept-Encoding" : "gzip" },		
	var ajax_api=baseUrl + crpsSourceJsn;
	$.ajax({
        type: "GET",
        url: ajax_api,
        dataType: "json",
        success: function ( lstDocJsn ) {
        		//console.log( lstDocJsn );
        		
        		crpsDocs = lstDocJsn;
        		crpsSetupTable();
        		crpsSetupModal();
        		
        		annoSetup();           
        }, error: function (errMsg) {
        		console.log(" error loading "+ ajax_api );
        }
    });
	
	
	//$.getJSON(crpsSourceJsn, function(lstDocJsn) {}); // $.getJSON(crpsSourceJsn, function(lstDocJsn) {		
}

function crpsSetupTable() {
	
	// [] table content
	divTableContent="";
    $(crpsDocs).each(function() {
		//console.log( this.name + " \t " + this.category + " \t " + this.content);
		divTableContent += "<tr>"+
		"<td>"+this.docId+"</td>"+
	    "<td>"+this.name+"</td>"+
	    "<td>"+this.category+"</td>"+	    	    
		"</tr>";    		
    });
    //console.log(divTableContent);
    
	divTableStart="<table id=\""+crpsTableIdStr +"\" class=\"table\">";
	divTableHead="<thead>"+"<tr>"+"<th>id</th>"+"<th>Name</th>"+"<th>Category</th>"+"</tr>"+"</thead>";
	divTableBody="<tbody>"+divTableContent+"</tbody>";
	divTableEnd="</table>";	
	divTable=divTableStart+divTableHead+divTableContent+divTableEnd;	
	
	divBegin="<div class=\"row\">"+	
	"<div class=\"col-sm-1\"></div>"+		
	"<div class=\"col-sm-10\">";
	divEnd="</div>"+		
			"<div class=\"col-sm-1\"></div>"+
			"</div>"+
			"<br>";

	var crpsTableContent=divBegin+divTable+divEnd;
	//console.log(crpsTableContent);
	$(crpsDivId).html(crpsTableContent);	
	
	crpsTableDatTable = $(crpsTableId).DataTable({ 		
		"paging":   true,
        "ordering": true,
        "info":     true		
	});
	
}

/**
 * Clicking an entry in the table will pop-up corpus 
 * @returns
 */
function crpsSetupModal() {
	console.log("crpsSetupModal id" + crpsTableId);
	
	$(crpsTableId+' tbody').on('click', 'tr', function () {
        var data = crpsTableDatTable.row( this ).data();
        //alert( 'You clicked on row: '+data[0] );

        var docCurrId = data[0];
        var docCurr = crpsDocs[docCurrId-1];
        //console.trace( docCurr.docId +"\t" + docCurr.name + "\t" + docCurr.category + docCurr.content );    
        
        var crpsModelDivStart='<div class="modal-dialog modal-lg"><div class="modal-content">';
		var crpsModelDivEnd='</div></div>';
    		
    		var crpsModelHeaderStart='<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button>';
    		var crpsModelHeaderEntry='<h4 class="modal-title">'+ docCurr.name +'</h4>';
    		var crpsModelHeaderEnd='</div>';

    		var crpsModelFooterStart='<div class="modal-footer">';
    		var crpsModelFooterEntryBtnClose='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    		var crpsModelFooterEntryBtnLoad='<button onclick="crpsSetupModalFnLoad(\''+docCurrId+'\')" type="button" class="btn btn-default" data-dismiss="modal" >Load</button>';
    		var crpsModelFooterEnd='</div>';

    		var crpsModelBodyStart='<div class="modal-body">';
    		var crpsModelBodyEntry='<textarea name="message" rows="10" cols="90">'+docCurr.content+'</textarea>';    		
    		var crpsModelBodyEnd='</div>';
    		
    		$(crpsModalId).html( crpsModelDivStart+        
    							crpsModelHeaderStart + crpsModelHeaderEntry + crpsModelHeaderEnd + 
    							crpsModelBodyStart +  crpsModelBodyEntry + crpsModelBodyEnd + 
    							crpsModelFooterStart + crpsModelFooterEntryBtnLoad + crpsModelFooterEntryBtnClose + crpsModelFooterEnd + 
    							crpsModelDivEnd );        
    		$(crpsModalId).modal('show');        
        
    } );	
	
}

//
/**
 * window.location.reload(); 
 * @returns
 */
function crpsSetupModalFnLoad(strId) {
	
	console.log("loading" + strId);	
	docCurr = crpsDocs[strId-1];
	$(annoTxtAreaId).val(docCurr.content);

}




function annoSetup() {
	console.log("annoSetup");

	// Populate the 
	$(annoTxtAreaId).val(" natural text language  ");
	
	// clear the text area 
	$(annoTxtBtnClearId).click( function () {
		$(annoTxtAreaId).val("  ");
	} );
	
	// load a sample document
	$(annoTxtBtnSampleId).click(function () {
		//docCurr = crpsDocs[0];
		//$(annoTxtAreaId).val( docCurr.content );		
		$(annoTxtAreaId).val(  " Learn from yesterday , live for today , and hope for tomorrow . " );
	} ); 		 

	// [] annoSetup
	annoSetupOption() 
	annoSetupAnnotate() 
	annoSetupComprehend()
	
}

function annoSetupAnnotate() {

	$(annoTxtBtnAnnotateId).click( function () {
		console.log(" ... analyze" );

		//dataType: "application/json",		
		console.log( $(annoTxtAreaId).val() );		
		var data4annotator=$(annoTxtAreaId).val();
		$.ajax({
			url: annoSrvcUrl,
	        type: "POST",	        
	        data: data4annotator,
	        contentType: "text/plain",
	        	dataType: "json",		
	        success: function ( strResponse ) {
	        		console.log("Success" + strResponse.unstructured[0].data.concepts ); 
	        		annoSetupAnnotateSuccess( strResponse.unstructured[0].data.concepts );
	        }, error: function (strErr) {
	        		console.log("Error" + strErr );
			}
	    });		
		
	} ); 					
	
}

function annoSetupAnnotateSuccess( lstObj ) {
	
	// []	
	strContent = $(annoTxtAreaId).val(); // get the value of text area
	//console.log(strContent);

	// [] 
	prevBegin=0;
	prevEnd=0;
	divContent = document.createElement('section');
	txtContent = "";
	var iCtr;
	//console.log(lstObj.length);
	for (iCtr = 0; iCtr < lstObj.length; iCtr++) {
		//console.log( lstObj[iCtr].cui );
	    currBegin = lstObj[iCtr].begin;
	    currEnd   = lstObj[iCtr].end;
	    prevEnd   = currBegin;
	    
	    if( prevEnd < prevBegin ) { continue; } 
	    	    
	    //console.log(" ====== "+ prevBegin + " " + prevEnd + " " + strContent.substring( prevBegin, prevEnd ) );
		//console.log(" [span] "+ currBegin + " " + currEnd + " " + strContent.substring( currBegin, currEnd ) );
		txtContent +=  strContent.substring( prevBegin, prevEnd ).replace(/\n/g,'<br/>'); 
		
		
		tmp = document.createElement('span');
		tmp.innerHTML = strContent.substring( currBegin, currEnd).replace(/\n/g,'<br/>'); 
		txtContent += tmp.outerHTML;
		
		prevBegin= currEnd;
	} 	// for (iCtr = 0; iCtr < lstObj.length; iCtr++) 
	prevEnd = strContent.length;
	txtContent += strContent.substring( prevBegin, prevEnd ).replace(/\n/g,'<br/>'); 
	divContent.innerHTML = txtContent;
	// console.log(divContent);
	

    var aMdlDivStart='<div class="modal-dialog modal-lg"><div class="modal-content">';
	var aMdlDivEnd='</div></div>';
		
	var aMdlHeaderStart='<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button>';
	var aMdlHeaderEntry='<h4 class="modal-title"> Modal </h4>';
	var aMdlHeaderEnd='</div>';

	var aMdlFooterStart='<div class="modal-footer">';
	var aMdlFooterEntryBtnClose='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
	var aMdlFooterEntryBtnLoad='<button type="button" class="btn btn-default" data-dismiss="modal" >Load</button>';
	var aMdlFooterEnd='</div>';

	var aMdlBodyStart='<div class="modal-body">';
	var aMdlBodyEntry= divContent.innerHTML; 
	var aMdlBodyEnd='</div>';
		
	$(annoModalFocusId).html(  aMdlDivStart+        
						 aMdlHeaderStart + aMdlHeaderEntry + aMdlHeaderEnd + 
						 aMdlBodyStart   + aMdlBodyEntry +   aMdlBodyEnd + 
						 aMdlFooterStart + aMdlFooterEntryBtnLoad + aMdlFooterEntryBtnClose + aMdlFooterEnd + 
						 aMdlDivEnd );        
	$(annoModalFocusId).modal('show');        
	
}

/**
 * Get an html representation of a string
 * @returns
 */
function annoSetupAnnotateSuccessContentBak() {
	
	var strContent = $(annoTxtAreaId).val();	
	var strContentBr = strContent.replace(/(?:\r\n|\r|\n)/g, '<br>');
	
	var strContentArr = strContent.split(".");
	var iCtr=0;
	for(iCtr=0; iCtr<10; iCtr++) {
		console.log( iCtr + " " +  strContentArr[iCtr] );
	}
	
	
	strContentBr = '<p><span class="one">Lorem ipsum <span class="two">dolor</span> sit amet,</span>consectetur adipiscing elit. <span class="one">Maecenas <span class="two"><span class="three">finibus</span></span></span><span class="two"> aliquam eros eget accumsan.Pellentesque quis <span class="three">diam lacus.</span></span></p>';

	return strContentBr;
}





function annoSetupOption() {
	
	$(annoTxtBtnOptionId).click( function () {
		console.log(" ... optionSettings " );
		annoSetupOptionSuccess();
	});
}

function annoSetupOptionSuccess() {
	
	var strContent = $(annoTxtAreaId).val();
	var strContentHtml = annoSetupOptionSuccessContent();
	
    var aMdlDivStart='<div class="modal-dialog modal-md"><div class="modal-content">';
	var aMdlDivEnd='</div></div>';
		
	var aMdlHeaderStart='<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button>';
	var aMdlHeaderEntry='<h4 class="modal-title"> Services </h4>';
	var aMdlHeaderEnd='</div>';

	var aMdlFooterStart='<div class="modal-footer">';
	var aMdlFooterEntryBtnClose='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
	var aMdlFooterEntryBtnSave='<button type="button" class="btn btn-default" data-dismiss="modal" onclick="annoSetupOptionSuccessSave()">Save</button>';
	
	var aMdlFooterEnd='</div>';

	var aMdlBodyStart='<div class="modal-body">';
	//var aMdlBodyEntry='<textarea name="message" rows="10" cols="90">'++'</textarea>';    		
	var aMdlBodyEntry=strContentHtml;
	var aMdlBodyEnd='</div>';
		
	$(annoModalOptionId).html(  aMdlDivStart+        
						 aMdlHeaderStart + aMdlHeaderEntry + aMdlHeaderEnd + 
						 aMdlBodyStart   + aMdlBodyEntry +   aMdlBodyEnd + 
						 aMdlFooterStart + aMdlFooterEntryBtnSave + aMdlFooterEntryBtnClose + aMdlFooterEnd + 
						 aMdlDivEnd );        
	$(annoModalOptionId).modal('show');        

}




/**
 * var strContent = $(annoTxtAreaId).val();
 * var strContentBr = strContent.replace(/(?:\r\n|\r|\n)/g, '<br>');	
 * @returns
 */
function annoSetupOptionSuccessContent() {
	
	strContentBr = 
		'<label>'+'Service1:'+'</label>'	
		+' <input type="text" size="46"'
		+' value="'+annoSrvc1Url
		+'" id="'+annoModalOptionSrvc1Id 
		+'" >'
		+'<button onclick="annoSetupOptionSuccessContentFn1()"> Test</button>'
		+'<br>'
		+'<label>'+'Service2:'+'</label>'	
		+' <input type="text" size="46"'
		+' value="'+annoSrvc2Url	
		+'" id="'+annoModalOptionSrvc2Id 
		+'" >'
		+'<button onclick="annoSetupOptionSuccessContentFn2()"> Test</button>'
		+'<br><br><label>'+'Response:'+'</label><br>'
		+'<textarea id="'+annoModalOptionTxtAreaId+'" rows="14" cols="54"></textarea>'
		+'<button onclick="annoSetupOptionSuccessContentFnX()"> Clear</button>';

	return strContentBr;
}

/**
 * 	$("#"+annoModalOptionSrvc1BtnId).click( function () { alert(annoModalOptionSrvc1BtnId); });
 * @returns
 */
function annoSetupOptionSuccessContentFn1() {
	//console.log(" ...  annoModalOptionSrvc1BtnId ");
	
	var sUrl=annoSrvc1Url+"/rest/feats/jsn";
	console.log(sUrl);
	$.ajax({
		url: sUrl,
        type: "GET",        
        crossDomain : true,
        dataType: "json",
        success: function ( lstFeats ) {
        	console.log( lstFeats);        		
        	$('#'+annoModalOptionTxtAreaId).val(JSON.stringify( lstFeats));
        },
        error: function ( errObj) {
        	console.log("errors ... ");
        	console.log( errObj);        	
        	$('#'+annoModalOptionTxtAreaId).val(JSON.stringify( lstFeats));
        }        
    });
	
}

function annoSetupOptionSuccessContentFn2() {
	
	var sUrl=annoSrvc2Url+"/rest/feats/jsn";
	console.log(sUrl);
	$.ajax({
		url: sUrl,
        type: "GET",        
        crossDomain : true,
        dataType: "json",
        success: function ( lstFeats ) {
        	console.log( lstFeats);        		
        	$('#'+annoModalOptionTxtAreaId).val(JSON.stringify( lstFeats));
        },
        error: function ( errObj) {
        	console.log("errors ... ");
        	console.log( errObj);        	
        	$('#'+annoModalOptionTxtAreaId).val(JSON.stringify( lstFeats));
        }        
    });	
	
}

function annoSetupOptionSuccessContentFnX() {
	      		
   	$('#'+annoModalOptionTxtAreaId).val("");
}


function annoSetupOptionSuccessSave() {
	console.log( "annoSetupOptionSuccessSave" );
	annoSrvc1Url = $("#"+annoModalOptionSrvc1Id).val(); 
	annoSrvc2Url = $("#"+annoModalOptionSrvc2Id).val(); 
	console.log( annoSrvc1Url ); 
	console.log( annoSrvc2Url ); 

}


function annoSetupComprehend() {
	
	$(annoTxtBtnComprehendId).click( function () {
		console.log(" ... comprehend " );

        //contentType: "text/plain",		
		//dataType: "text",		  	
		console.log( $(annoTxtAreaId).val() );		
		var data4annotator=$(annoTxtAreaId).val();		
		$.ajax({
			url: srvc1viz,
	        type: "POST",
	        data: data4annotator,
	        contentType: "application/json",
	        dataType: "json",
	        	crossDomain : true,
	        	error: function (errObj, errOpt, errThrown) { 
	        		console.log("Ajax Error"); 
	        		console.log(errObj ); 
	        		console.log(errObj.status);
	        		console.log(errOpt);
	        		console.log(errThrown);
	        	}, 
	        	success: function ( strResponse ) {
	        		console.log("Ajax Success");
	        		console.log( strResponse );
	        	    //$("#section3").html(strResponse);	        		
	        		//annoSetupAnnotateSuccess( strResponse.unstructured[0].data.concepts );
	        }	        					
	    });		
		
	} ); 					
	
}





/**
 * alert(JSON.stringify(json_obj));
 * @returns
 */
function tmpl_ajax_get() {
	
	$.ajax({
        url: "http://localhost:8301/d.umls.wb/rest/contacts",
        type: "GET",
        crossDomain : true,
        dataType: "json",
        success: function (xmlLstContacts) {
        		console.log(xmlLstContacts);        		
        		 $(xmlLstContacts).find('contacts').each(function(){
        			 $(this).find('contact').each(function() {
        				 	$(this).find('id').each(function() {
        				 		var name = $(this).text();
        				 		alert(name);
        				 	});
                     });
                 });
        }
    });

	
}

function tmpl_ajax_post() {
	
	console.log( $(annoTxtAreaId).val() );		
	var data4annotator=$(annoTxtAreaId).val();
	$.ajax({
		url: annoSrvcUrl,
		type: "POST",	        
        data: data4annotator,
        dataType: "application/json",
        	contentType: "text/plain",
        success: function ( strResponse ) {
        		console.log( strResponse );        		
        }, error: function (strErr) {			
			console.log( strErr );        		
		}
    });		

}

function tmpl_ajax_post2() {
	
	function annoInitComprehend() {

		$(annoTxtBtnComprehendId).click( function () {
			console.log(" ... comprehend " );

			//dataType: "application/json",		
			console.log( $(annoTxtAreaId).val() );		
			var data4annotator=$(annoTxtAreaId).val();
			$.ajax({
				url: annoSrvcUrl,
		        type: "POST",	        
		        data: data4annotator,
		        	contentType: "text/plain",
		        	dataType: "json",		
		        success: function ( strResponse ) {
		        		console.log("Success" + strResponse.unstructured[0].data.concepts ); 
		        		annoSetupAnnotateSuccess( strResponse.unstructured[0].data.concepts );
		        }, error: function (strErr) {
		        		console.log("Error" + strErr );
				}
		    });		
			
		} ); 					
		
	}

	
}


function tmpl_modal() {
	
    var aMdlDivStart='<div class="modal-dialog modal-lg"><div class="modal-content">';
	var aMdlDivEnd='</div></div>';
		
	var aMdlHeaderStart='<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button>';
	var aMdlHeaderEntry='<h4 class="modal-title"> Modal </h4>';
	var aMdlHeaderEnd='</div>';

	var aMdlFooterStart='<div class="modal-footer">';
	var aMdlFooterEntryBtnClose='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
	var aMdlFooterEntryBtnLoad='<button type="button" class="btn btn-default" data-dismiss="modal" >Load</button>';
	var aMdlFooterEnd='</div>';

	var aMdlBodyStart='<div class="modal-body">';
	var aMdlBodyEntry='<textarea name="message" rows="10" cols="90"> area </textarea>';    		
	var aMdlBodyEnd='</div>';
		
	$(annoModalFocusId).html(  aMdlDivStart+        
						 aMdlHeaderStart + aMdlHeaderEntry + aMdlHeaderEnd + 
						 aMdlBodyStart   + aMdlBodyEntry +   aMdlBodyEnd + 
						 aMdlFooterStart + aMdlFooterEntryBtnLoad + aMdlFooterEntryBtnClose + aMdlFooterEnd + 
						 aMdlDivEnd );        
	$(annoModalFocusId).modal('show');        

}

//LZW-compress a string
function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}

// Decompress an LZW-encoded string
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
           phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    return out.join("");
}

 
function rxnorm_ci() {

	
	var ajax_api='https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?relaSource=MEDRT&relas=CI_with&rxcui=595060';
	$.ajax({
		url: ajax_api,
        type: "GET",        
        crossDomain : true,
        success: function ( response) {
        		console.log( response );
        		
        		 $(response).find('userInput').each(function(){
        			 //$(this).find('contact').each(function() {
        				 	//$(this).find('id').each(function() {
        				 		var name = $(this).relas();
        				 		alert(name);
        				 	//});
                     //});
              });
            
        }
    });

	
}
