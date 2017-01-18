function smallestCommon(arr){
    var xMults = [];
    var yMults = [];
    var x = arr[0];
    var y = arr[1];

    var counter = 1;
    var notFound = true
    while (notFound){
        xMults.push(x*counter);
        yMults.push(y*counter);
        console.log(xMults);
        console.log(yMults);
        
        if (xMults.includes(y*counter)){
            console.log("hello");
            notFound = true;
            return y*counter;
        }
        
        if (yMults.includes(x*counter)){
            console.log("hello");
            notFound = true;
            return x*counter;
        }
        counter+=1;
    }
    return "error";
}

console.log(smallestCommon([17, 5]));
