import { SHAPE_TYPES } from "./shapeTypes";

export class BadShape {
  private type: SHAPE_TYPES;
  private radius?: number;
  private width?: number;
  private height?: number;
  private base?: number;

  constructor(
    type: SHAPE_TYPES,
    radius?: number,
    width?: number,
    height?: number,
    base?: number
  ) {
    this.type = type;
    switch (type) {
      case SHAPE_TYPES.CIRCLE:
        this.radius = radius;
        break;
      case SHAPE_TYPES.RECTANGLE:
        this.width = width;
        this.height = height;
        break;
      case SHAPE_TYPES.TRIANGLE:
        this.base = base;
        this.height = height;
        break;
    }
  }

  calculateArea(): number {
    switch (this.type) {
      case SHAPE_TYPES.CIRCLE:
        if (this.radius == undefined) break;
        return Math.PI * this.radius * this.radius;
      case SHAPE_TYPES.RECTANGLE:
        if (this.width == undefined || this.height == undefined) break;
        return this.width * this.height;
      case SHAPE_TYPES.TRIANGLE:
        if (this.base == undefined || this.height == undefined) break;
        return 0.5 * this.base * this.height;
    }

    throw new Error("Shape not supported");
  }
}
