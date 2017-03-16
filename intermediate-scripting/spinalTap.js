function spinalCase(str){
	var words = str.split("");
	var newStr = "";
	//console.log(words);
	for (var i in words) {
		//console.log(words[i])
		if (words[i] == " "){
			newStr += "-"; 
		} else if (words[i] == words[i].toUpperCase() && i != 0 && words[i-1] != " "){
			newStr += "-";
			newStr += words[i].toLowerCase();
		} else if (words[i] == words[i].toUpperCase()){
			newStr += words[i].toLowerCase();
		} else if (words[i] == "_") {
			newStr += "_";
		} else if (words[i] == ">") {
			newStr += "-";
		} else {
			newStr += words[i]
			console.log(words[i])
		}
	}
	console.log(newStr);
	return newStr;
}

console.log(spinalCase('The_Andy_Griffith_Show'))
