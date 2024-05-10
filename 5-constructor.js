// BEGIN
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getX = function () {
    return this.x;
};

Point.prototype.getY = function () {
    return this.y;
};

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function () {
    return this.beginPoint;
};

Segment.prototype.getEndPoint = function () {
    return this.endPoint;
};

function reverse(segment) {
    const { beginPoint, endPoint } = segment;
    const begin = new Point(endPoint.getX(), endPoint.getY());
    const end = new Point(beginPoint.getX(), beginPoint.getY());
    return new Segment(begin, end);
}

export { Point, Segment, reverse };

// END
