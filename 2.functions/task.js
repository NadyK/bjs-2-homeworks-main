// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = Infinity;
  max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] < min){
          min = arr[i];
      }
      if (arr[i] > max){
        max = arr[i];
      }
    }
avg = +(sum / arr.length).toFixed(2);
   return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
     for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
     }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
   for (let i = 0; i < arrOfArr.length; i++) {
  result=func(arrOfArr[i]);
    if (max < result){
      max = result;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min, max;
  sum = 0;
  min = Infinity;
  max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (Math.abs(arr[i]) < min){
          min = Math.abs(arr[i]);
      }
      if (Math.abs(arr[i]) > max){
        max = Math.abs(arr[i]);
      }
    }
  difference = max - min;
  return difference;
}  
