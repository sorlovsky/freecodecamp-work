function toRoman(num){
		num = num.toString()
		var numArr = num.split("");
		var result = '';
		for (var i=0; i<numArr.length; i++){
				numArr[i] = parseInt(numArr[i])*Math.pow(10, numArr.length - i - 1);

				// Less than ten
				if (numArr[i] < 10){
					if (numArr[i] < 4){
						result = result.concat("I".repeat(numArr[i]));
					} else if (numArr[i] == 4){
						result = result.concat("IV");
					} else if (numArr[i] < 9){
						result = result.concat("V"+"I".repeat(numArr[i]-5));
					} else {
						result = result.concat("IX");
					}
				}

				// Less than 100
				if (numArr[i] < 100){
					if (numArr[i] < 40){
						result = result.concat("X".repeat(numArr[i]/10));
					} else if (numArr[i] >= 40 && numArr[i] < 50){
						result = result.concat("XL");
					} else if (numArr[i] < 90){
						result = result.concat("L" + "X".repeat((numArr[i] - 50)/10));
					} else {
						result = result.concat("XC")
					}
				}

				// Less than 1000
				if (numArr[i] < 1000){
					if (numArr[i] < 400){
						result = result.concat("C".repeat(numArr[i]/100));
					} else if (numArr[i] == 400){
						result = result.concat("CD");
					} else if (numArr[i] > 400 && numArr[i] < 900) {
						result = result.concat("D" + "C".repeat((numArr[i] - 500)/100));
					} else {
						result = result.concat("CM");
					}

				}

				if (numArr[i] >= 1000){
					result = result.concat("M".repeat(numArr[i]/1000));
				}
		}

		return result
}

console.log(toRoman(1000));
//for (var i=0; i<10; i++){
	//console.log(toRoman(100*i), i*100);
//}
