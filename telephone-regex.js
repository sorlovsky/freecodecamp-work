function matchExact(r, str) {
	var match = str.match(r);
	return match != null && str == match[0];
}

function telephoneCheck(str) {
	var seven = /[0-9]{10}/;
	var euro = /[1]{1}\s[0-9]{3}-[0-9]{3}-[0-9]{4}/;
	var regular  = /[1]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
	var nospaceregular  = /[1]{1}\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;
	var nospaceregularweird  = /\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;
	var threedash = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
	var threespace = /[0-9]{3}\b[0-9]{3}\b[0-9]{4}/;
	var last = /[1]{1} [0-9]{3} [0-9]{3} [0-9]{4}/;
	return matchExact(seven, str) || matchExact(euro, str) || matchExact(regular, str) || matchExact(threedash, str) || matchExact(nospaceregular, str) || matchExact(nospaceregularweird, str) || matchExact(last, str); 
}

telephoneCheck("555-555-5555");
