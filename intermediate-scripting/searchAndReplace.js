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

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
