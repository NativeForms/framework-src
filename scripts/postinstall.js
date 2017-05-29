var fs = require('fs');
try {
  fs.unlinkSync('node_modules/intl/.babelrc');
} catch (e) {
  // do nothing
}
