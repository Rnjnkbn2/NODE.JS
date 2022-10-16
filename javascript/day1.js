// let name = 'ranjan';
// let age = 24;
// let approved = true;
// let firstName = undefined;
// let selectedColor = null;
// console.log(name);
// console.log(age);
// console.log(approved);
// console.log(firstName);
// console.log(selectedColor);


// How to create Object
let person = {
    name: 'ranjan',
    age: 24
};
console.log(person);

// dot notation
 person.name = 'Arvind';
 console.log(person.name);

//  Bracket notation 
let selection = 'name'
person[selection]='Bablu';
console.log(person.name);


// ARRAY is object in javaScript
  
     //Intialasation
     let selectedColors = ["red","blue"];
     console.log(selectedColors[0]);    //retrive by index
     selectedColors[2] = 'green';      //insert element because of java is dynamic language
     console.log(selectedColors.length);


// FUNCTION
   function greet(name1, lastName) {
    console.log('Hello ' +name1+" "+lastName);
   }
    greet('Ranjan', 'kumar')

    // Types of Function
    function square(number) {
        return number * number;
    }

    let number = square(2);
    console.log(number);
    //OR
    //console.log(square(2))
   
//   const arvind = (firstName, lastName)=>console.log("Welcome "+firstName+" "+lastName); 


//   arvind("Arvind", "Kumar")


//SPread operator
// let arr1 = ["Jan", "Feb", "March"];
// let arr2 = ["Apr", "May", "June", ...arr1];

// // arr1.concat(arr2);
// console.log(arr2);
