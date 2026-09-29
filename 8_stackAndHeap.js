// Stack Memory and Heap Memory

// All primitive datatype uses Stack Memory
// All non-primitive datatype uses Heap Memory


// Stack Memory

let num1 = 5

let num2 = num1 

num2 = 4

console.log(num1) // 5
console.log(num2) // 4

// Heap Memory

let student1 = {
    name: "Demo",
    email: "demo@gmail.com",
    age: 25,
}

let student2 = student1

student2.email = "test@gmail.com"

console.log(student1) // test@gmail.com
console.log(student2) // test@gmail.com

/*
    In stack the value given as a copy that's why the original value remains as it is 
    In heap the value given as a reference that's why the original value get's changed with new one
*/