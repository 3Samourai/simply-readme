
const inquirer = require('inquirer');

module.exports = {
ask: () => {
const questionsGithub = [
       {
        name: 'Name',
        type: 'input',
        message: 'Enter your Project Name',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a Project Name';
          }
        }
      },
      {
	      name: 'Username',
        type: 'input',
        message: 'Enter your Username',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your Username';
          }
        }
      },
       {
	      name: 'Description',
        type: 'input',
        message: 'Enter a Description for your Project',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a Description';
          }
        }
      },
         {
	      name: 'Website',
        type: 'input',
        message: 'Enter a Website for your Project',
        default: "google.com",
      },
      {
      type: 'list',
      name: 'License',
      message: 'What is your License',
      choices: ['MIT', 'GPLv3', 'ISC', 'Apache 2.0', 'No License'],
    }
];
return inquirer.prompt(questionsGithub);
 },
};


