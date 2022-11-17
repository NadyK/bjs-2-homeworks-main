function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subjectName = subjectName; 
}
// ваш код для остальных методов
Student.prototype.addMark = function (...mark) {
  if(this.mark === undefined){ 
    //добавить первую оценку 
   this.mark = mark;
  } else {
      // добавить вторую и последующие оценки в массив
     this.mark.push(mark);
    }
}
Student.prototype.getAverage = function (addMark) {
let average = addMark.reduce((acc, item, index) => {
  acc+=item;
  if(index === addMark.length - 1){
    return acc / addMark.length
  }
  return acc;
}, 0)
return average
}
Student.prototype.exclude = function (reason) {
delete Student.prototype.addMark;
delete Student.prototype.subjectName;
delete Student.prototype.mark;
return Student.reason;
}
