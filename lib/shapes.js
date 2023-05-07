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
        this.text = text;
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

    saveSVG() {
        const svg =this.generateSVG();
        fs.writeFileSync('logo.svg', svg);
        console.log("Your logo.svg has been generated");
    }
}

class Circle extends Shape {
    constructor(radius, color, textColor, text) {
        super(color, textColor, text);
        this.radius = radius;
    }

    setColor(color) {
        super.setColor(color);
    }

    setText(text) {
        super.setText(text);
    }

    setTextColor(textColor) {
        super.setTextColor(textColor);
    }

    setRadius(radius) {
        this.radius = radius;
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    setColor(color) {
        super.setColor(color);
    }

    setText(text) {
        super.setText(text);
    }

    setTextColor(textColor) {
        super.setTextColor(textColor);
    }

    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(sideLength, color, text, textColor) {
        super(color, text, textColor);
        this.sideLength = sideLength;
    }

    setColor(color) {
        super.setColor(color);
    }

    setText(text) {
        super.setText(text);
    }

    setTextColor(textColor) {
        super.setTextColor(textColor);
    }

    setSideLength(sideLength) {
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="75" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}


module.exports= { Shape, Circle, Triangle, Square };