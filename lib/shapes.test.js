const { Circle, Triangle, Square } = require('./shapes');



describe("Circle", () => {
    it("should render a circle with the correct color and text color", () => {
        const circle = new Circle("green", "black");
        const newCircle = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n    <circle cx="150" cy="100" r="50" fill="green"/>\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black"></text>\n</svg>';
        expect(circle.generateSVG()).toEqual(newCircle);
    });
});

describe("Triangle", () => {
    it("should render a triangle with the correct color and text color", () => {
        const triangle = new Triangle("blue", "white");
        const newTriangle = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n    <polygon points="150, 18, 244, 182, 56, 182" fill="blue"/>\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white"></text>\n</svg>';
        expect(triangle.generateSVG()).toEqual(newTriangle);
    });
});

describe("Square", () => {
    it("should render a square with the correct color and text color", () => {
        const square = new Square("red", "white");
        const newSquare = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n    <rect x="100" y="50" width="100" height="100" fill="red"/>\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white"></text>\n</svg>';
        expect(square.generateSVG()).toEqual(newSquare);
    });
});