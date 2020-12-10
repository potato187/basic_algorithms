function insideCircle(point, center, radius) {
  return Math.sqrt(
    Math.pow(center[0] - point[0], 2) + Math.pow(center[1] - point[1], 2)
  ) > radius
    ? false
    : true;
}

insideCircle([1, 1], [0, 0], 3);
