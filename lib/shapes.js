const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = this.color;
    }

    render() {}

}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    }

    setSideLength(sideLength) {
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="75" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}


module.exports= { Shape, Circle, Triangle, Square };