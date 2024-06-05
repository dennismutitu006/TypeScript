//TypeScript doesn’t use “types on the left”-style declarations like int x = 0; Type annotations will always go after the thing being typed.

let myName: string = "Dennis";

// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
