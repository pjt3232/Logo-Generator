const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const shapes = ['circle', 'triangle', 'square']

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
        },
        {
            input: 'input',
            name: 'textColor',
            message: 'Enter the text color:',
            default: 'black',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: shapes,
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a keyword or a hexidecimal number for the shape color:',
            default: 'white',
        },
    ])
    .then((answers) => {
        let shape;

        switch (answers.shape) {
            case 'circle':
                shape = new Circle(answers.color, answers.textColor);
                break;
            case 'triangle':
                shape = new Triangle(answers.color, answers.textColor);
                break;
            case 'square':
                shape = new Square(answers.color, answers.textColor);
                break;
            default: 
                console.log('Invalid shape.');
        }

        shape.setText(answers.text);
        const svgString = shape.generateSVG();
        fs.writeFileSync('logo.svg', svgString);
        console.log('Your logo.svg has been succesfully generated!');
    })
    .catch((err) => console.error(err));
