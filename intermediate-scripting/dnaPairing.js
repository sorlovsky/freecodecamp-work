function pairElement(str) {
	pairs = [];
	for (var i=0; i<str.length; i++){
		if (str[i] == 'C') {
			pairs.push(['C', 'G']);
		} else if (str[i] == 'G') {
			pairs.push(['G', 'C']);
		} else if (str[i] == 'A'){
			pairs.push(['A', 'T']);
		} else if (str[i] == 'T') {
			pairs.push(['T', 'A']);
		}
	}
	return pairs;
}

console.log(pairElement("GCG"));


