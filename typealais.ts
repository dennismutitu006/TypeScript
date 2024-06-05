//A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//you can use type alais to give name to any type at all not just obj type.
//e.g. a type alias can name a union type.

type ID = number | string;

//nb: aliases are only aliases ou cannot use type aliases to create different/distinct “versions” of the same type.
//his code might look illegal, but is OK according to TypeScript because both types are aliases for the same type:

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";
