//*Variable Creation*//
    //console.log is used to "print" to the console
//let firstName = 'Arhan';
//let lastName = 'Sethi';
//console.log(firstName);
//console.log(lastName);


//*Constants*//
    //If you attempt to assign to a constant variable, an Uncaught TypeError is thrown.
//let interestRate = 0.3;
//const interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);


//*Primitive Types*//
    //Null is used in situations in which you want to clear the value of a variable. 
//let name = 'Arhan'; 
    // String Literal
//let age = 16; 
    // Number Literal
//let isApproved = true; 
    // Boolean Literal
//let firstName = undefined; 
    // Undefined
//let lastName = null; 
    // Null


//*Dynamic Typing*//
    //In a dynamic language like JS, the type of the object can be changed at runtime.
//Example:
//    let name = 'Arhan';
//    Arhan 
//    ___________
//    typeof name
//    "string"
//    ___________
//    name = 1;
//    1
//    ___________
//    typeof name 
//    "number"
//    ___________


//*Reference Types*//
// let name = 'Arhan';
// let age = 16;
//let person = {
//    name: 'Arhan', 
//    age: 16
//};
//Dot Notation (Reccomended)
//  person.name = 'John';
//  console.log(person);

//Bracket Notation
//  person['name'] = 'Mary';
//  console.log(person)


//*Arrays*//
    //Since js is a dynamic langauge, the length and elements of the array can be changed
//let selectedColors = ['red', 'green'];
//selectedColors[2] = 'blue'; //dynamically changing length
//selectedColors[3] = 1;
//console.log(selectedColors);
//console.log(selectedColors[0]);
//console.log(selectedColors.length);


//*Functions*//
//function greet(name, lastName) {
//    console.log('Hello ' + name + ' ' + lastName);
//}
//greet('Arhan', 'Sethi');
//greet('Vikash');

//*Types of Functions*//
//Preforming a task
    function greet(name){
        console.log('Hello ' + name);
    }
    greet('Arhan');
//Calculates a value
    function square(number){
        return number*number;
    }
    square(2);
    let number = square(2);
    console.log(number);

