//called “duck typing” or “structural typing”.
//tructural type system, if two objects have the same shape
//they are considered to be of the same type.
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
//he point variable is never declared to be a Point type. 
//However, TypeScript compares the shape of point to the shape of Point in the type-chek
//They have the same shape so the code passes.
