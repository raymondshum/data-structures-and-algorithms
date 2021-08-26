/**
 * ES2015
 *
 * JS doesn't support true OOP, but can approximate it. JS uses prototype
 * based inheritance.
 */

/**
 * Class Syntax
 */

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  /**
   * Instance Methods
   */

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  markLate() {
    this.tardies++;
    if (this.tardies >= 3) {
      return `You are expelled!`;
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s)`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  /**
   * Class Methods
   */

  static EnrollStudents() {
    return "Enrolling Students!";
  }
}

/**
 * Demonstrating Class Instantiation & Instance Methods
 */

let firstStudent = new Student("Raymond", "Shum", 4);

console.log(firstStudent.fullName());
for (let i = 0; i <= 3; i++) {
  console.log(firstStudent.markLate());
}

for (let i = 0; i <= 3; i++) {
  firstStudent.addScore(i + 95);
}

console.log("Scores: ", firstStudent.scores);
console.log("Average: ", firstStudent.calculateAverage());

/**
 * Demonstrating Class Methods
 */

console.log(Student.EnrollStudents());
