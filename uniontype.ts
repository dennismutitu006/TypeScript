//With a union, you can declare that a type could be one of many types
//For example, you can describe a boolean type as being either true or false:
type MyBool = true | false;

//A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9 ;

