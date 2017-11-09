console.log('my application just ran');
// var myMod = require('./myModule');
// myMod.sayHi();
var Moment = require('moment');
var a = new Moment();
console.log(a.format('h:mm:ss a')); //logs the current time

// var rp  = require('request-promise');
// var info = {
//     uri: 'https://jsonplaceholder.typicode.com/posts/1',
//     json: true // Automatically parses the JSON string in the response
// };
//
// setInterval(() => {           //with => shorthand
// var a = new Moment();
// console.log(a.format('h:mm:ss a')); //logs the current time
// rp(info)
//     .then(res => {            //with => shorthand
//         console.log(res);
//     })
//     .catch(function (err) {
//         // API call failed...
//     });
// }, 3000);

var dataAccess = require('./dataAccessModule');
dataAccess.getPost('https://jsonplaceholder.typicode.com/posts/1');
