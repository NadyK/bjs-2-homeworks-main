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

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
     this.marks = mark;
  } else {
       this.marks.push(...mark);
    }
}

Student.prototype.getAverage = function() {
  if(this.marks.length === 0){
    return 0;
  }
  let summ = 0;
  for (let i = 0; i < this.marks.length; i++){
    summ += this.marks[i];
  }
  return summ / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subjectName;
  delete this.marks;
}
