// Exercise 1
String.prototype.filter = function (...bannedWords) {
    let newString = this.toString();

    for (let i = 0; i < bannedWords.length; i++) {
        if (newString.includes(bannedWords[i])) {
            let indexNo = newString.indexOf(bannedWords[i]);
            let firstPart = newString.substring(0, indexNo - 1).trim();
            let secondPart = newString.substring((indexNo + bannedWords[i].length), newString.length).trim();
            newString = firstPart != "" ? firstPart + " " + secondPart : secondPart;
        }
    }

    return newString;
};

// Exercise 2
Array.prototype.bubbleSort = function () {
    let newValues = this;

    for (var i = 0; i < newValues.length; i++) {
        for (var j = 0; j < newValues.length - i - 1; j++) {
            if (newValues[j] > newValues[j + 1]) {
                var temp = newValues[j];
                newValues[j] = newValues[j + 1];
                newValues[j + 1] = temp;
            }
        }
    }
    return newValues;
};

// Exercise 3
var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
};

var Student = function () { };
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
    console.log(this.name + " just learned " + subject);
};

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function () { };

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.teach = function (subject) {
    return this.name + " is now teaching " + subject;
};

var michaelZijlstra = new Teacher();
michaelZijlstra.initialize("Michael Zijlstra")
console.log(michaelZijlstra.teach("WAP"));


// Examples..
console.log("\n\n");

console.log("Example: String.prototype.filter() - Argument: 'not'")
console.log("This house is not nice!".filter("not"));

console.log("\n\n");

console.log("Example: Array.prototype.bubbleSort() - Original Array: [6,4,0,3,-2,1]")
console.log("Result: " + [6, 4, 0, 3, -2, 1].bubbleSort());


