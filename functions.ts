//TypeScript allows you to specify the types of both the input and output values of functions.
//When you declare a function, you can add type annotations after each
// parameter to declare what types of parameters the function accepts.
// Parameter type annotations go after the parameter name:
//  Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

//hen a parameter has a type annotation, arguments to that function will be checked
// Would be a runtime error if executed!
greet(42);
Argument of type 'number' is not assignable to parameter of type 'string'

//You can also add return type annotations. Return type annotations appear after the parameter list:

function getFavoriteNumber(): number {
  return 26;
}

//unctions Which Return Promises
//f you want to annotate the return type of a function which returns a promise, you should use the Promise type:

async function getFavoriteNumber(): Promise<number> {
  return 26;
}
