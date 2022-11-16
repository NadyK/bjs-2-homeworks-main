function compareArrays(arr1, arr2) {
  let result
  if (arr1.length !== arr2.length){
   return result=false;
  }
  result=arr1.every((element, index) => element === arr2[index]);
  return result; // boolean
  // можно короче:
  // return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}


function advancedFilter(arr) {
  let resultArr;
  let positiveNumbers = arr.filter(number => number > 0);
  let multiplesOfThree = positiveNumbers.filter(numder => numder%3 == 0);
  resultArr = multiplesOfThree.map(number => number*10);
  
  return resultArr; // array
}
