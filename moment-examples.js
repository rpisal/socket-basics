var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());
//now.subtract(1, 'year');

var timestamp = 1451553904684;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));
//console.log(now.format('MMMM Do YYYY, h:mm a'));