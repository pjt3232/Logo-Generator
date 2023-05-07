const Shape = require("./shapes.js");

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

module.exports = { Circle, Triangle, Square}