// let score = 32;
// console.log(typeof score); // number

// score = "32abc";
// console.log(typeof (score)); // string

// let valueInNumber = Number(score)

// console.log( typeof valueInNumber);
// console.log(valueInNumber);

/* 
    32 => "33"
    "32abc" => NaN
    null => 0
    true => 1; false => 0
*/

let isLoggedIn = undefined;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/* 
    1 => true; 0 => false
    "" => false
    "Hello" => true
    null => false
    undefined => false
*/
