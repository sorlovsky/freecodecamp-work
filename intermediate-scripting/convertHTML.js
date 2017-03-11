function myReplace(str, before, after) {
	str = str.split(" ")
	for (var i=0; i<str.length; i++){
		if (str[i] == before){
			if (str[i][0] == str[i][0].toUpperCase()){
				console.log(after[0].toUpperCase() + after.substring(1, after.length))
				str[i] = after[0].toUpperCase() + after.substring(1, after.length);
			}
			else {
				str[i] = after;
			}
		}
	}
	return str.join(" ");
}

function convertHTML(str){
	var words = str.split(" ");
	for (var i in words) {
		if (words[i] == "&"){
			str = myReplace(str, words[i], "&amp;"); 
		} else if (words[i] == "<") {
			str = myReplace(str, words[i], "&lt;");
		} else if (words[i] == ">") {
			str = myReplace(str, words[i], "&gt;");
		} else if (words[i] == '"') {
			str = myReplace(str, words[i], "&quot;");
		} else if (words[i] == "'") {
			str = myReplace(str, words[i], "&apos;");
		}
	}
	return str;
}

console.log(convertHTML("<>"));

