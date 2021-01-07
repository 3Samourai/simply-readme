#!/usr/bin/env node

const figlet = require('figlet');
const ask  = require('./lib/askGithub');
const Githubinfo  = require('./lib/GithubInfo');
const mark  = require('./lib/GenerateMarkdown');
const inquirer = require('inquirer');
const info = require('./lib/NoGithubInfo');
const questionsGithub = [
      {
        name: 'GitHub-Ask',
        type: 'confirm',
        message: 'Have you already a Github Repo',
       }
      ];
const description = [
      {
        name: 'GitHub-description',
        type: 'input',
        message: 'Short Description of your Project',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a Description';
          }
        }
       }
      ];
const installation = [
      {
        name: 'GitHub-install',
        type: 'input',
        message: 'Installation Instruction for your Project',
             validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your Installation Instruction';
          }
        }
       }
      ];
const Requirements = [
      {
        name: 'GitHub-Requirements',
        type: 'input',
        message: 'Requirements for Install your Project',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your Requirements Instruction';
          }
        }

       }
      ];
const testing = [
      {
        name: 'GitHub-Test',
        type: 'input',
        message: 'Command for test your project',
       }
      ];

console.log(
    figlet.textSync('SimplyReadMe', { horizontalLayout: 'full' })
);
const run = async () => {
	const git = await inquirer.prompt(questionsGithub)
	 if (git["GitHub-Ask"] == true){
		 const credentials = await ask.ask();
		 
  		 const repo = await Githubinfo.gethub(credentials["GitHub-Url"]);
if (repo == "error")
{
	console.log("Repository not found please check Username/RepoName");
	return
}
if (repo.description == null){
		const descriptionASK = await inquirer.prompt(description)
		repo.description = descriptionASK["GitHub-description"];

}
if (repo.license == null){
	console.log("License not Found. Add a Licence on Github");
}
	const GR = await inquirer.prompt(Requirements)
		repo.require = GR["GitHub-Requirements"];

    const install = await inquirer.prompt(installation)
		repo.install = install["GitHub-install"];
	const test = await inquirer.prompt(testing)
		repo.test = test["GitHub-Test"];

	const markd = await mark.gethub(credentials["GitHub-Url"],repo);

	 }
	 else {
		 const getInfo = await info.ask();
		 const GR = await inquirer.prompt(Requirements)
         const install = await inquirer.prompt(installation)
		 const test = await inquirer.prompt(testing)
		
		const obj = new Object();
		obj.name = getInfo["Name"];
		obj.description = getInfo["Description"];
		obj.username = getInfo["Username"];
		obj.license = getInfo["License"];
	    obj.website = getInfo["Website"];
		obj.test = test["GitHub-Test"];
		obj.install = install["GitHub-install"];
		obj.require = GR["GitHub-Requirements"];
		const result = await mark.getReadMe(obj);
	 }
};

run();

