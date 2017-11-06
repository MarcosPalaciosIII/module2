// const = BLOCK scoped variables

const myObject = {};

//WORKS
// (const only prevents re-assignment of the WHOLE variable)
myObject.name = "Marcos";
myObject.age = 35;

// DOESN'T WORK
// (you can't re-assign a const variable)
// myObject = {name: "Dapper Dan"};



// default tip 15%
const defaultTip = 0.15;

// DOESN'T work
// (you can't re-assign a const variable)
// defaultTip = 0.30;
// TypeError: Assignment to constant variable.

// let = BLOCK scoped variables
// (only exists within the curly braces)

for (let j = 1; j <= 30; j++){
  console.log("Iteration number (j): " + j);
}

console.log("After the loop J", j);
// referenceError: j is not defined




// var = FUNCTION scoped variables
// (only exists within the FUNCTION)
for (var i = 1; i <= 30; i++){
  console.log("Iteration number (i): " + i);
}

console.log("After the loop I", i);
// 31


let name1 = "Ironhacker";

if (true){
  let name1 = "Ted";
  console.log("Name inside of if statement: " + name1);
}

console.log("Name outside of if statement: " + name1);

// Name inside of if statement: Ted
// Name outside of if statement: Ironhacker

var name = "Ironhacker";

if (true){
  var name = "Ted";
  console.log("Name inside of if statement: " + name);
}

console.log("Name outside of if statement: " + name);

// Name inside of if statement: Ted
// Name outside of if statement: Ted
