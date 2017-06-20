var fs = require('fs');
exports.onComplete = function(ev) {
  fs.unlinkSync('doc/package.json');
};
