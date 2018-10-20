$(document).ready(function() { 	// [] Code to run when the document is ready. 
	
	console.log("document is ready");
	rschSetup();
	closureSetup();
});





/**
 * 
 * O: 
 * conclusionDivId
 * 
 * 
 * 
 * 

 */
function closureSetup() {
	console.log("conclusionSetup");
	var randomIdClosure = Math.floor(Math.random() * 10);
	
	var rschQuote = ['Technical Debt',
		'\"I tried to find it </br> but there was no answer </br> at the end of the last conversation </br> - closure\"',
		'\"What was closure if not a clock? </br> Not an end as everyone imagined, </br> but a beginning.\"',
		'\"To understand how consumers really think and feel, it is vital to go beyond words.\"',
		'\"Research is about engaging in a conversation with a brand.\"',
		'\"All I\'m armed with is research.\"', 
		'\"Let one not neglect one\'s own welfare for the sake of another, however great. Clearly understanding one\'s own welfare, let one be intent upon the good.\"',		
		'\"Research is formalized curiosity. It is poking and prying with a purpose.\"',
		"\"Research is creating new knowledge.\"",
		'\"Take all the courses in your curriculum. Do the research. Ask questions. Find someone doing what you are interested in! Be curious!\"',		
		'\"Research is what I\'m doing when I don\'t know what I\'m doing.\"',		
		 ""];
	
	var rschAuthor   = ['- Anonymous',
		"― Rupi Kaur, The Sun and Her Flowers",
		' ― Celeste Chaney, In Absence of Fear',
		'- Katja Bressette', '- Matthew Rhodes' ,'- Mike Wallace', '- Buddha, Dhammapada ',		
		'- Anonymous','- Zora Neale Hurston','- Neil Armstrong','- Katherine Johnson',		
		'- Wernher von Braun','- Anonymous' ];
		
	
	var btnQuote  = rschQuote[ randomIdClosure ];
	var btnAuthor = rschAuthor[ randomIdClosure ];
	
	var btnStyle="background:none;border:none;font-style:oblique;text-align:center; font-size:24px";
	var btnStart='<button style=\"'+btnStyle+'\" onClick=\"window.location.reload()\" >';
	var btnEnd="</button>";
	
	
	var btn2Style="background:none;border:none;font-weight:bold;text-align:right; font-size:12px";
	var btn2Start='<button style=\"'+btn2Style+'\" >';
	var btn2End="</button>";
		 
	var conclusionTableContent="</br>"+"</br>"+"</br>"+btnStart+btnQuote+btnEnd+
	"</br>"+"</br>"+btn2Start+btnAuthor+btn2End;	
	
	console.log(conclusionTableContent);
	$(closureDivId).html(conclusionTableContent);				
}


/*
 * style:
 *  button.linky { background:none;border:none; }
 *  onClick=\"window.location.reload()\"
 *  
 * i: crpsSourceJsn
 * o: rsrchDivId
 */
function rschSetup() {
	console.log("rschSetup");
	var rschRandomId = Math.floor(Math.random() * 10);
		
	var rschQuote = ['Technical Debt',
		'\"Academic success depends on research and publications.\"',
		'\"To understand how consumers really think and feel, it is vital to go beyond words.\"',
		'\"Research is about engaging in a conversation with a brand.\"',
		'\"All I\'m armed with is research.\"', 
		'\"Let one not neglect one\'s own welfare for the sake of another, however great. Clearly understanding one\'s own welfare, let one be intent upon the good.\"',		
		'\"Research is formalized curiosity. It is poking and prying with a purpose.\"',
		"\"Research is creating new knowledge.\"",
		'\"Take all the courses in your curriculum. Do the research. Ask questions. Find someone doing what you are interested in! Be curious!\"',		
		'\"Research is what I\'m doing when I don\'t know what I\'m doing.\"',		
		 ""];
	
	var rschAuthor   = ['- Anonymous',
		'- Philip Zimbardo',
		'- Katja Bressette', '- Matthew Rhodes' ,'- Mike Wallace', '- Buddha, Dhammapada ',		
		'- Anonymous','- Zora Neale Hurston','- Neil Armstrong','- Katherine Johnson',		
		'- Wernher von Braun','- Anonymous' ];
		

	
	var btnQuote  = rschQuote[rschRandomId ];
	var btnAuthor = rschAuthor[ rschRandomId ];
	
	var btnStyle="background:none;border:none;font-style:oblique;text-align:center; font-size:24px";
	var btnStart='<button style=\"'+btnStyle+'\" onClick=\"window.location.reload()\" >';
	var btnEnd="</button>";
	
	
	var btn2Style="background:none;border:none;font-weight:bold;text-align:right; font-size:12px";
	var btn2Start='<button style=\"'+btn2Style+'\" >';
	var btn2End="</button>";
		 
	var crpsTableContent="</br>"+"</br>"+"</br>"+btnStart+btnQuote+btnEnd+
	"</br>"+"</br>"+btn2Start+btnAuthor+btn2End;	
	
	console.log(crpsTableContent);
	$(rschDivId).html(crpsTableContent);		
}