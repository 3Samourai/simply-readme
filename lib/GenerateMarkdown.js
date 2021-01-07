const fs = require("fs");
var path = require('path');
const ora = require('ora')
const GithubREADME_PATH = '/Tamplate.md';
const README_PATH = '/TamplateNoGithub.md';


module.exports.gethub = function(repoURL,msg) { 
	var now = process.cwd() + '/README.md';
	const spinner = ora('Creating README').start()
	const host = "https://github.com/"+repoURL;
	const user = repoURL.split(/([//])/g)[0];
	const Project = repoURL.split(/([//])/g)[2];
	var contributorsShield = "[contributors-shield]: https://img.shields.io/github/contributors/"+repoURL+".svg?style=for-the-badge \n";
	var contributorsUrl = "[contributors-url]: https://github.com/"+repoURL+"/graphs/contributors \n";
    var forksShield = "[forks-shield]: https://img.shields.io/github/forks/"+repoURL+".svg?style=for-the-badge \n";
    var forksUrl = "[forks-url]: https://github.com/"+repoURL+"/network/members \n";
    var starsShield = "[stars-shield]: https://img.shields.io/github/stars/"+repoURL+".svg?style=for-the-badge \n";
    var starsUrl = "[stars-url]: https://github.com/"+repoURL+"/stargazers \n";
  	var issuesShield = "[issues-shield]: https://img.shields.io/github/issues/"+repoURL+".svg?style=for-the-badge \n";
	var issuesUrl = "[issues-url]: https://github.com/"+repoURL+"/issues \n";
	var licenseShield = "[license-shield]: https://img.shields.io/github/license/"+repoURL+".svg?style=for-the-badge \n";
	var licenseUrl = "[license-url]: https://github.com/"+repoURL+"/blob/master/LICENSE.txt \n";
	var name = msg.name;
  fs.readFile(__dirname+GithubREADME_PATH, 'utf8', function (err, data) {
  if (err) {
  return console.log(err);
  }
var tamplate = data;
tamplate = tamplate.replace("Project Title", msg.name);
tamplate = tamplate.replace(/Short Description/g, msg.description);
tamplate = tamplate.replace(/octocat\/Hello-World/g, host);
tamplate = tamplate.replace(/ProjectName/g, Project);
tamplate = tamplate.replace(/Username/g, user);
tamplate = tamplate.replace("OctoLicense", msg.license.name);
tamplate = tamplate.replace("PrerequisitesInstruction", msg.require);
tamplate = tamplate.replace("InstallationInstruction", msg.install);
tamplate = tamplate.replace("TestInstruction ", msg.test);
tamplate = tamplate + contributorsShield+contributorsUrl+forksShield+forksUrl+starsShield+starsUrl+issuesShield+issuesUrl+licenseShield+licenseUrl;
fs.writeFile(now, tamplate, { flag: "wx" },function (err) {
  if (err){
spinner.fail('README already exists. Creation fail')
  } 
  else{
  spinner.succeed('README created')}
});
  })
}
module.exports.getReadMe = function(msg) { 
		var now = process.cwd() + '/README.md';
	const spinner = ora('Creating README').start()
	const badge = "[license-shield]: https://img.shields.io/static/v1?label=License&message="+msg.license+"&color=blue&style=for-the-badge";
 fs.readFile(__dirname+README_PATH, 'utf8', function (err, data) {
  if (err) {
  return console.log(err);
  }
  var tamplate = data;
  tamplate = tamplate.replace("Project Title", msg.name);
  tamplate = tamplate.replace(/Short Description/g, msg.description);
  tamplate = tamplate.replace("OctoLicense", msg.license);
  tamplate = tamplate.replace("PrerequisitesInstruction", msg.require);
  tamplate = tamplate.replace("InstallationInstruction", msg.install);
  tamplate = tamplate.replace("TestInstruction ", msg.test);
  tamplate = tamplate.replace(/websiteLink/g, msg.website);
  tamplate = tamplate.replace(/Username/g, msg.username);
  tamplate = tamplate + badge;
  	  console.log(process.cwd());

    fs.writeFile(now, tamplate, { flag: "wx" }, function (err) {
  if (err){
      spinner.fail('README already exists. Creation fail')
  } 
  else{
  spinner.succeed('README created')}
});
})
}
