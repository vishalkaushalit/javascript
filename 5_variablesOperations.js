// let value = 5;

// let negValue = -value;

// console.log(negValue);
// console.log(2+2);  // 4
// console.log(2-2);  // 0
// console.log(2*2);  // 4
// console.log(2**3); // 8
// console.log(2/2);  // 1 quotient
// console.log(2%3);  // 2 remainder 
/*
    % is the remainder operator. 
    Since 3 fits into 2 zero times, the remainder is 2.
    console.log(7 % 3); // 1 → 7 = 3 × 2 + 1
    console.log(6 % 3); // 0 → 6 = 3 × 2 + 0
    console.log(2 % 3); // 0 → 2 = 3 × 0 + 2
*/

// str1 = "Hello";
// str2 = " World";

// str3 = str1 +  str2;

// console.log(str3);

// console.log("1" + 2); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log("1" + 2 + "2"); // 122

// console.log(3 + 4 * 5 % 3); // 5

// console.log((3 + 4) * 5 % 3); // 2

// console.log(true) // true
// console.log(+true) // 1
// console.log(true +) // Invalid

// console.log(+ "") // 0

let num1,num2,num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100

gameCounter++;
console.log(`Post gameCounter:${gameCounter}`)

// ++gameCounter;
// console.log(`Pre gameCounter:${gameCounter}`)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Output: "x:4, y:3" Returns the original value (3) for assignment to y, and increases x to 4.

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Output: "a:4, b:4" Increases a to 4, then returns the new value (4) for assignment to b.

// Remember: postfix returns the old value and prefix returns the new value.