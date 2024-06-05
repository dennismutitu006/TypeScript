// an enum is a way of giving more friendly names to sets of numeric values.

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

//By default, enums begin numbering their members starting at 0
//You can change this by manually setting the value of one of its members.
//For example, we can start the previous example at 1 instead of 0:

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

//Or, even manually set all the values in the enum:

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;

//with enums you can also go from a numeric value to the name of the value in the enum.
//e.g if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:

enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

// Displays 'Green'
console.log(colorName);
