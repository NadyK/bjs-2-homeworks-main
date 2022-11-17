function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName; 
}
// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
 if(this.marks === undefined){ 
    //добавить первую оценку 
   this.marks = [mark];
  } else {
      // добавить вторую и последующие оценки в массив
     this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
 this.marks = [marks];
}

Student.prototype.getAverage = function (addMarks) {
  let average = addMarks.reduce((acc, item, index) => {
    acc+=item;
      if(index === addMarks.length - 1){
       return acc / addMarks.length
      }
    return acc;
  }, 0)
  return average
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subjectName;
  delete this.marks;
}
