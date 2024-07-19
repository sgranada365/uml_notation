import { Circle } from "./circle.class";
import { Rectangle } from "./rectangle.class";
import { Triangle } from "./triangle.class";

export const goodExample = () => {
  const rectangle = new Rectangle(10, 10);
  const triangle = new Triangle(20, 10);
  const circle = new Circle(30);

  console.log(
    `Rectangle area: ${rectangle.calculateArea()}
Triangle area: ${triangle.calculateArea()}
Circle area: ${circle.calculateArea()} `
  );
};
