//To declare the variable we use var and let
//ES5 and ES6
/**var  
let**/
//Use variable names for relevant names
//Js ma semicolon is not compulsory
//To acccess, print variables use console.log
console.log(fullName) //undefined
var fullName = "Shisir Kafle" //hoisting
fullName = "Changing name"
console.log(fullName)
var fullName = "Shisir Kafle" //undefined
let email = "shisir.kafle@gmail.com"

//Declaration gareko line bhanda tala pati globally accessbile hunxa its accessibility is global
//Let ma declaration bhanda tala matra use garna painxa

// if we declare something in {} then it is block
var a = 10
console.log(a)
{

    var a = 20;
    console.log(a)
}
    console.log(a)

//var always use global scope no redeclaration

let b = 10
console.log(b) //10
{
    let b = 20
    console.log(b) //20
}
console.log(b) //10

//Difference between var and let is that var ley chai global scope dinxa whereas let ley duitai scope dinxa
let c = "Value";
//let c = Another values
c = "Another value"

