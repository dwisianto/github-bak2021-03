$(document).ready( function() { 
	
	// [] Code to run when the document is ready.
	console.log("document is ready"); 

	crpsSetup();
		
});


//[] base
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
        		console.log( lstDocJsn );
        		
        		crpsDocs = lstDocJsn;
        		crpsSetupTable();
        		crpsSetupModal();
        		
        		//annoSetup();           
        }, error: function (errMsg) {
        		console.log(" error loading "+ ajax_api );
        }
    });
	
}


function crpsSetupTable() {
	
	// [] table content
	divTableContent="";
    $(crpsDocs).each(function() {
		console.log( this.name + " \t " + this.category + " \t " + this.content);
		divTableContent += "<tr>"+
		"<td>"+this.docId+"</td>"+
	    "<td>"+this.name+"</td>"+
	    "<td>"+this.category+"</td>"+	    	    
		"</tr>";    		
    });
    console.log(divTableContent);
    
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
	docCurr = crpsDocs[strId];
	$(annoTxtAreaId).val(docCurr.content);

}
