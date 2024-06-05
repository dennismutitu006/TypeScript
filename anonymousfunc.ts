//When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
//Even though the parameter s didn’t have a type annotation,
//TypeScript used the types of the forEach function, along with the
//inferred type of the array, to determine the type s will have.
//This process is called contextual typing because the context that the function occurred within informs what type it should have.
