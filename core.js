var path = require('path');
var util = require('util');

util.log(path.basename(__filename));
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);
