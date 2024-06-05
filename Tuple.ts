//they are you to express an array with a fixed number of elements whose type
//are known, but need not be the same.
//eg. you may want to rep a value as a pair of a string and a number.

//Declare a tuple type
let x: [string, number];

//Initialize it
x = ["hello", 10]; //ok
//Initialize it incorrectly
x = [10, "hello"]; //Error
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.

//When accessing an element with a known index, the correct type is retrieved:
//Ok
console.log(x[0].substring(1));
 
console.log(x[1].substring(1));
Property 'substring' does not exist on type 'number'.

//Accessing an element outside the set of known indices fails with an error:

x[3] = "world";
Tuple type '[string, number]' of length '2' has no element at index '3'.
 
console.log(x[5].toString());
Object is possibly 'undefined'.
Tuple type '[string, number]' of length '2' has no element at index '5'.
