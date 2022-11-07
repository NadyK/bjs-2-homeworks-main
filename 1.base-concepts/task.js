"use strict"

function solveEquation(a, b, c) {
  let arr;
   // код для задачи №1 
   let d = Math.pow(b, 2)-4*a*c
    if (d>0) {
     let x1 = (-b + Math.sqrt(d) )/(2*a)
     let x2 = (-b - Math.sqrt(d) )/(2*a)
     arr= [x1, x2]}
   else if (d===0){
     let x0 = -b/(2*a)
     arr=[x0]}
   else if (d<0){
     arr=[`корней нет`]}
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
