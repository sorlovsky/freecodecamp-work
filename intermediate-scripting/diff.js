function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++){
    if (!(arr2.includes(arr1[i]))){
      newArr.push(arr1[i]);
      console.log(arr1[i]);
    }
    
    console.log(arr1.includes(arr2[i]));
    if (!(arr1.includes(arr2[i]))){
      newArr.push(arr2[i]);
      console.log(arr2[i]);
    }
  }
  // Same, same; but different.
  return newArr;
}

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));