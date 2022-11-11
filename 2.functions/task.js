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
    return arr.reduce((acc, current) => acc + current, 0)
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
   return Math.abs(Math.max(...arr)-Math.min(...arr));
}  
