var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

var host = 'https://api.github.com/repos/';
module.exports.gethub = function(msg) { 
return new Promise((resolve, reject) => {
function printRepoCount() {
  var responseObj = JSON.parse(this.responseText);
  if (!(responseObj == undefined || responseObj.message == "Not Found") ){
  resolve(responseObj);
  }
  else  {
  resolve("error");
	  };
}
request.onload = printRepoCount;
request.open('get', host + msg, true)
request.send();
});
};
