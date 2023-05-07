const fs = require('fs');

class Shape {
    constructor(color, text, textColor, shape) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    render() {}

    generateSVG() {
        let svg = '<svg viewBox="0 0 300 200" xmlns="https://www.w3.org/2000/svg">\n';
    
        switch (this.shape) {
            case 'circle':
                const circle = new Circle(this.color);
                svg += circle.draw();
                break;
            case 'triangle':
                const triangle = new Triangle(this.color);
                svg += triangle.draw;
                break;
            case 'square':
                const square = new Square(this.color);
                svg += square.draw();
                break;
        }
        svg += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`;
        svg += '</svg>';
        return svg;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    generateSVG(){}
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    generateSVG(){}

}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    generateSVG() {}
}

function saveSVG(shape, filename) {
    const svgString = shape.generateSVG();
    createSVG(svgString, {
        filename: filename,
        isDownload: true,
    });
}

module.exports = { Circle, Triangle, Square, saveSVG };