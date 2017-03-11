function translatePigLatin(str) {
	var consGroup = '';
	var cons = true;
	var counter = 0;
	var vowels = ["a", "e", "i", "o", "u"];

	while (cons){
		if (vowels.indexOf(str[counter]) == -1){
			consGroup += str[counter];
			counter+=1;
		} else {
			cons = false;
		}
	}

	if (consGroup.length !== 0){
		str = str.slice(consGroup.length, str.length);
		str += consGroup;
		str += "ay";
	} else {
		str += "way";
	}

	return str;
}

console.log(translatePigLatin("onsonant"));

