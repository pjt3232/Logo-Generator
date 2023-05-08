class Shape {
    constructor(shape, color, textColor) {
        this.shape = shape;
        this.color = color;
        this.text = '';
        this.textColor = textColor;
    }

    setText(text) {
        this.text = text.substring(0,3).toUpperCase();
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    generateSVG() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="100%" height="100%" fill="${this.color}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Circle extends Shape {
    constructor(color, textColor) {
        super('cicrle', color, textColor);
    }

    generateSVG() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy"100" r="50" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Triangle extends Shape {
    constructor(color, textColor) {
        super('triangle', color, textColor);
    }

    generateSVG() {
        const points= "150, 18, 244, 182, 56, 182";

        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${points}" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Square extends Shape {
    constructor(color, textColor) {
        super('square', color, textColor);
    }

    generateSVG() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="50" width="100" height="100" fill="${this.color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}


module.exports = { Shape, Circle, Triangle, Square };