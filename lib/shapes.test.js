const { Shape, Circle, Triangle, Square } = require('./shapes');

describe("Shape classes", () => {
    describe("Shape", () => {
        it("should have default values", () => {
            const shape = new Shape();
            expect(shape.color).toBe("black");
            expect(shape.text).toBe("");
            expect(shape.textColor).toBe("black");
        });

        it("should set text and text color correctly", () => {
            const shape = new Shape();
            shape.setText("ABC");
            shape.textColor("red");
            expect(shape.text).toBe("ABC");
            expect(shape.textColor).toBe("red");
        });

        it("should set color correctly", () => {
            const shape = new Shape();
            shape.setColor("blue");
            expect(shape.color).toBe("blue");
        });
    });

    describe("Circle", () => {
        it("should render a circle with the correct color", () => {
            const circle = new Circle(100);
            circle.setColor("blue");
            expect(circle.generateSVG()).toBe('<circle cx="100" cy="100" r="100" fill="blue />');
        });
    });

    describe("Triangle", () => {
        it("should render a triangle with the correct color", () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.generateSVG()).toBe('<polygon points="150, 18, 244, 182, 56, 182" fill="blue" />');
        });
    });

    describe("Square", () => {
        it("should render a square with the correct color", () => {
            const square = new Square(200);
            square.setColor("blue");
            expect(square.generateSVG()).toBe('<rect x="0" y="0" width="200" height="200" fill="blue" />');
        });
    });
});