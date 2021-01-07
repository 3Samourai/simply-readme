
const inquirer = require('inquirer');

module.exports = {
ask: () => {
const questionsGithub = [
       {
        name: 'GitHub-Url',
        type: 'input',
        message: 'Enter your GitHub Username/RepoName (Ex: 3Samourai/Holopad) ',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your Github Url';
          }
        }
      }];
return inquirer.prompt(questionsGithub);
 },
};