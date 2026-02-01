const pi=3.14
console.log("The value of pi is :"+" "+pi)

//Reassign and Redeclaration are not allowed
//Example
const x=10
//const x=20 Redeclaring is not allowed
// x=30 Reassign is not allowed
console.log("The value of x :"+x) //Through block const value can be Redeclared
{
    const x=20
    console.log("The value of x :"+x)
}
{
    x=30 //Through block const value can't be Reassigned
    console.log("The value of x :"+x)
}