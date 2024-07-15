const required = require("./point.mjs");
// [Module: null prototype] {
//   default: [class Point],
//   distance: [Function: distance]
// }
console.log(required);

(async () => {
  const imported = await import("./point.mjs");
  console.log(imported === required); // true

  const { default: Point, distance } = imported;
  const pointA = new Point(3, 4);
  const pointB = new Point(10, 15);
  console.log(distance(pointA, pointB));
})();
