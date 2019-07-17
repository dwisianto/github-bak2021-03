// tools.js
// ========
module.exports = {
  underline: function () {
	  
    strBuf = {};
	strBuf["1"]="a";
	strBuf["2"]="b";
	strBuf["3"]="c";
	strBuf["4"]="d";
	strBuf["5"]="e";
	strBuf["6"]="";
	strBuf["7"]="f";
	strBuf["8"]="g";
	strBuf["9"]="h";
	strBuf["10"]="";
	
	strBuf[ ObjKeyRnd( strBuf, "2" ) ]="<span>";
	strBuf[ ObjKeyRnd( strBuf, "3" ) ]="</span>";
	strBuf[ ObjKeyRnd( strBuf, "7" ) ]="<span>";
	strBuf[ ObjKeyRnd( strBuf, "8" ) ]="</span>";
	console.log( strBuf );
	
		
	// sort an object
	// convert a dictionary into array of array
	var items = Object.keys(strBuf).map( function(key) {
		return [key, strBuf[key]];
	});
	items.sort( function(first,second) {
		return Number(first[0]) - Number(second[0]) ;
	});	
	console.log(items);
	console.log( Object.values(items).join() );
	
	// [] joining
	strOut = "";
	items.forEach(function(itemVal,itemIdx) {
		console.log(itemIdx + " : " + " k: "+ itemVal[0] + " v: "+ itemVal[1]);
		strOut +=itemVal[1];
	});
	console.log(strOut);

  },
  objKeyRnd: function( _dict, _value ) {
	 /**
	* _value is an integer lower bound
	* check if the dictionary contains the _value or not
	* append a random number to the _value
	* response with a new real number that can be used as a key
	*/
	
	let keyNew = _value;
	while( _dict.hasOwnProperty(keyNew) ) {
		keyNew = Number(_value)+Number(Math.random());	
		//console.log(keyNew);
	}
	
	// [] console.log(keyNew);	
	return keyNew;
	}
};

var zemba = function () {
}
