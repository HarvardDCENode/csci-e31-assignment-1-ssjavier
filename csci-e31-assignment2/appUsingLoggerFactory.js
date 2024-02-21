var logFac = require('./loggerFactory');
var logger = logFac();

console.log("manual logging");
logger.log("first logger.log call");

var log2 = logFac();
log2.showtime = false;
log2.log("first log2 call");

logger.log("second logger call");