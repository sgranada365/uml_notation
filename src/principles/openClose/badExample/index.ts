import { BadShape } from "./shape.bad.class";
import { SHAPE_TYPES } from "./shapeTypes";

export const badExample = () => {
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
Bad triangle area: ${badTriangle.calculateArea()}
Bad circle area: ${badCircle.calculateArea()} `
  );
};
