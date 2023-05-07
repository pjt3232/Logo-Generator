const inquirer = require('inquirer');
const { Circle, Triangle, Square, saveSVG } = require('./lib/shapes');

function generateLogo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters:',
                validate: function(value) {
                    if(value.length > 3) {
                        return 'Please enter a maximum of three characters.'
                    }
                    return true;
                },
            },
            {
                input: 'input',
                name: 'textColor',
                message: 'Enter the text color:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape:',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter a keyword or a hexidecimal number for the shape color:',
            },
        ])
        .then((answers) => {
            let shape;
            if (answers.shape === 'Circle') {
                shape = new Circle (100);
            } else if (answers.shape === 'Triangle') {
                shape = new Triangle(150, 100);
            } else if (answers.shape === 'Square') {
                shape = new Square(200);
            }
            shape.setText(answers.text);
            shape.setTextColor(answers.textColor);
            shape.setColor(answers.color);
            saveSVG(shape, 'logo.svg');
            console.log('Succesfully generateed your logo!');
        });
}
    
generateLogo();