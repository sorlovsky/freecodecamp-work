function convertHTML(str){
	var words = str.split("");
	var newStr = "";
	//console.log(words);
	for (var i in words) {
		//console.log(words[i])
		if (words[i] == "&"){
			newStr += "&amp;"; 
		} else if (words[i] == "<") {
			newStr += "&lt;";
		} else if (words[i] == ">") {
			newStr += "&gt;";
		} else if (words[i] == '"') {
			newStr += "&quot;";
		} else if (words[i] == "'") {
			newStr += "&apos;";
		} else {
			newStr += words[i]
			console.log(words[i])
		}
	}
	console.log(newStr);
	return newStr;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"))

