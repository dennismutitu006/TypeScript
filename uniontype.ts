//a union type is a type formed from two or more other types
//representing values that may be any one of those types.
//each of this types is refered to as the union members
//With a union, you can declare that a type could be one of many types
//For example, you can describe a boolean type as being either true or false:
type MyBool = true | false;

//A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9 ;

//lets write a function that can operate on strings or numbers:

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

//TypeScript will only allow an operation if it is valid for every member of the union
//  For example, if you have the union string | number, you can’t use methods that are only available on string:

function printId(id: number | string) {
  console.log(id.toUpperCase());
Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.
}
