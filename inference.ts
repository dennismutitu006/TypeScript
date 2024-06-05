//TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.
//to create an object with an inferred type which includes name: string and id: number, you can write:
const user = {
	name: "Hayes",
	id: 0,
};

//You can explicitly describe this object’s shape using an interface declaration:

interface User {
	name: string;
	id: number;
}
//you can declare that a js object conforms to the shape of ur new interface by using
//synatx like : TypeName after variable declaration:
const user: User = {
	name: "Hayes",
	id: 0,
};
//If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
