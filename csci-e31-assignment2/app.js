var logger = require('./logger');

var d = require('./data');
var e = require('./data');

// logger.log(d.school);
// logger.log(e.school);
// d.school = 'MIT';
// logger.log(d.school);
// logger.log(e.school);

console.log("manual logging");
logger.log("first logger.log call");

var log2 = require('./logger');
log2.showtime = false;
log2.log("first log2 call");

logger.log("second logger call");