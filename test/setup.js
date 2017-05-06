const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.fetch = require('node-fetch');

new JSDOM('<!doctype html><html><body></body></html>');

require('babel-polyfill');
require('react-native-mock/mock');
