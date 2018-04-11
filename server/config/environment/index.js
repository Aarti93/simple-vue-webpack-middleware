'use strict';
// Export the config object based on the NODE_ENV
// ==============================================
module.exports = require('./' + process.env.NODE_ENV + '.js');