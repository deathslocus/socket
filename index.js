var exports = {};
var client = require('./lib/socket');
var server = require('./lib/socketserver');
exports.client = client;
exports.server = server;
module.exports = exports;
