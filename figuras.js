//Rectangle code
console.group("rectangle");
const rectangleWidth = 4;

console.log("The width of the rectangle is equal to: " + rectangleWidth + "cm");

const rectanglePerimeter = rectangleWidth * 4;

console.log("The perimeter of the rectangle is equal to: " + rectanglePerimeter + "cm");

const rectangleArea = rectangleWidth * rectangleWidth;

console.log("The area of the rectangle is equal to: " + rectangleArea + "cm²");
console.groupEnd();
//Triangle code
console.group("Triangle");
const trianglebottom = 4;
const triangleA = 6;
const triangleD = 6;
const triangleHeight = 5.5;
console.log("The height of the triangle is equal to: " + triangleHeight + "cm");

const trianglePerimeter = triangleA + triangleD + trianglebottom
console.log("The perimeter of the triangle is equal to: " + trianglePerimeter + "cm");

const triangleArea = (trianglebottom * triangleHeight) / 2;
console.log("The area of the triangle is equal to: " + triangleArea + "cm²");

console.groupEnd();

//Circle code
console.group("Circle");
const circleRadius = 4;
const circleDiameter = circleRadius * 2;
const PI = Math.PI;
const circlePerimeter = circleDiameter * PI;
const circleArea = (circleRadius * circleRadius) * PI;
console.log("The diameter of the circle is equal to: " + circleDiameter + "cm");

console.log("The perimeter of the circle is equal to: " + circlePerimeter + "cm");
console.log("PI is equal to: " + PI);


console.log("The area of the circle is equal to: " + circleArea + "cm²");

console.groupEnd();