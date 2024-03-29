# Logo-Generator

[![Logo-Generator-Screenshot.png](https://i.postimg.cc/gjBvQDMJ/Logo-Generator-Screenshot.png)](https://postimg.cc/Fk3dJjX5)

## Description
My motivation for the project was to become a better web developer and prepare for a career in this field. I built this project to get a better understanding of how the back-end of web development uses classes, create test.js files, and to get more familiar wit back-end applications. This application solves the problem of wanting to create a personal logo, but not wanting to use a photo editor. Based off the criteria you enter, the application will generate your logo and save you time in the process. I learned how to run tests on your application, how to create svg files, and how to use classes, constructors, and imports.
  
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
      
## Installation
To install this application, you must be working on node.js version 16.0 to version 18.16. To install node.js go to [Node.js](https://nodejs.org), which gives insturctions on how to install this back-end JavaScript runtime environment. After installing node, you need to download inquirer version 8.2.4 because it will not work with the latest version. To do this, go to your desired directory and type this line of code in your terminal 'npm init -y'. After installing a package.json file, type this line of code 'npm install inquirer@8.2.4' to grab the necessary npm package. After installing the npm package inquirer at the said version, the application will be functional. If you want to run the tests on the backend, you can install jest at its latest version. This is optional and only if you want to take it a step further and see how the shapes.test.js file works and applies to the application. To install jest, you've already set up the package.json file and all you need to do is type this line of code, 'npm install jest', but make sure that it is in the same directory as the package.json file. After you've installed these applications, you can access the whole app!
  
## Usage
To use this application, you must follow the install directions. Once you have that set up just type 'node index.js' in your terminal and the application will run. The first question will ask what characters you want in your logo, but if you type more than three characters the app will say you can only type a maximum of three total. The application will change any of your characters into uppercase if they're not a number. Fill out the rest of the following questions and it will generate your logo.svg file with your own personal logo. To skip through the questions, you can use the default values and get a black circle with no text, however I recommend you be creative and create a unique logo using hexadecimals values, various colors, and try different shapes to get the right fit for you. Below is a video of the running application and a walkthrough on how to use it:

![Screen recording of the application in action](./videos/Logo-Walkthrough-Recording.mov)

The examples that were created in the video are also shown in the examples folder in the main directory this allows you can look at the generated svg file. The logo.svg file in the finished repo is an example of an svg file generated with all default values.

## Contributions
To contribute to this application, it would be super benefical to offer more shape designs and to allow the colors to be a mixture of colors rather than just one fill color. Another contribution could be adding more tests in the shapes.test.js file to make a stronger app with less chances to fail while running. Any of the contributions listed would only make this a better application and could definitely be of use.
  
## Tests
The tests used in the shapes.test.js file test are for the color of the text and fill color of the shape for each of the child classes of the parent class Shape(). All three tests pass, but this is more of an MVP and could be more in depth to tests various aspects of the application. 
  
## Questions
If you have any questions or issues, feel free to reach out to me on [GitHub](https://github.com/pjt3232) or contact me at 20peytra@gmail.com.
