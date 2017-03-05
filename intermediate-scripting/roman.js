function convertToRoman(num){
	var result = ''

	var thousands = num/1000
	result.concat("M".repeat(thousands))
	num -= thousands*1000

	var hundreds = num/100
	result.concat("D".repeat(hundreds))
	num -= hundreds*100

	var tens = num/10
	num -= tens*10
	ones = num
	
	return result 
}

console.log(convertToRoman(15));
