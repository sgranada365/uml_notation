import { Circle } from "./circle.class";
import { Rectangle } from "./rectangle.class";
import { BadShape } from "./shape.bad.class";
import { SHAPE_TYPES } from "./shapeTypes";
import { Triangle } from "./triangle.class";

function main() {
  const badRectangle = new BadShape(SHAPE_TYPES.RECTANGLE, undefined, 10, 10);
  const badTriangle = new BadShape(
    SHAPE_TYPES.TRIANGLE,
    undefined,
    undefined,
    10,
    20
  );
  const badCircle = new BadShape(SHAPE_TYPES.CIRCLE, 30);

  console.log(
    `Bad rectangle area: ${badRectangle.calculateArea()} 
    \n Bad triangle area: ${badTriangle.calculateArea()}
    \n Bad circle area: ${badCircle.calculateArea()} `
  );

  const rectangle = new Rectangle(10, 10);
  const triangle = new Triangle(20, 10);
  const circle = new Circle(30);

  console.log(
    `Rectangle area: ${rectangle.calculateArea()} 
    \n Triangle area: ${triangle.calculateArea()} 
    \n Circle area: ${circle.calculateArea()} `
  );
}

main();
