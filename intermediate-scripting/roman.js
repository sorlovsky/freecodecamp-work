function convertToRoman(num){
	var result = ''
	var thousands = Math.floor(num/1000);
	num -= thousands*1000;
	
	var hundreds = Math.floor(num/100);
	num -= hundreds*100;

	var fifties = Math.floor(num/50);
	num -= fifties*50;

	var tens = Math.floor(num/10);
	num -= tens*10;

	var fives = Math.floor(num/5);
	num -= fives*5;

	var ones = num;
	num -= ones
	
	// thousands
	

	// hundreds

	// tens
	if (tens >= 1 && tens < 4){
		result = result.concat("X".repeat(tens));
	} else if (tens == 4 && fives == 1) {
		result = result.concat("XL");
	}

 	// fives	
	if (fives == 1 && ones == 4){
		result = result.concat("IX");
		ones -= 4;
	} else if (fives == 1){
		result = result.concat("V");
	}

	// ones
	if (ones == 4){
		result = result.concat("IV");
	} else {
		result = result.concat("I".repeat(ones));
	}

	console.log(thousands, hundreds, tens, fives, ones)
	return result 
}

console.log(convertToRoman(29));
