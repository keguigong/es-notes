// point.mjs
export function distance(a, b) {
  return (b.x - a.x) ** 2 + (b.y - a.y) ** 2;
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Point;
