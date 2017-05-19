var google = require('googleapis');
var request = require('request');
var fs = require('fs'),
     path = require('path');
const CONSTANTS = require('.././lib/constants.json'),
       DIR_PATH = CONSTANTS['DIR_PATH'],
       CLIENT_ID = CONSTANTS['CLIENT_ID'],
       CLIENT_SECRET  = CONSTANTS['CLIENT_SECRET'];
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  'urn:ietf:wg:oauth:2.0:oob'
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/analytics.edit'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
});
console.log(url);
// urlをもって、tokenをgetする処理
/*request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('body', body);
  var responseTxt = JSON.stringify(response);
  var time = new Date();
  fs.appendFile(DIR_PATH + "/result/result" + Number(time) + ".json" , responseTxt , function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
  });
   // Print the response status code if a response was received
  /*console.log('body:', body);*/ // Print the HTML for the Google homepage.
//});
