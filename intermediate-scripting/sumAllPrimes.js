function isPrime(n){
    for (i=0; i<n; i++){
        if (n % i===0 && n!==i && n!==2 && n!==1 && i!==1){
            return false;
        }
    }
    return true;
}

function sumPrimes(n){
    // populating array
    var nums = [];
    for (var i=2; i<=n; i++){
        if (isPrime(i)){
            nums.push(i);
        };
    }

    var sum = nums.reduce(function(a, b) {
          return a + b;
    }, 0);
    return sum
}

console.log(sumPrimes(977))
