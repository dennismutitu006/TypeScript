//An interface declaration is another way to name an object type:

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
//TypeScript is only concerned with the structure of the value we passed to printCoord - 
//it only cares that it has the expected properties.
// Being concerned only with the structure and capabilities of types is why we call TypeScript a structurally typed type system.
