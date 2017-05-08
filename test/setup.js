const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const JSTimers = require('react-native/Libraries/Core/Timers/JSTimers');

global.cancelAnimationFrame = JSTimers.cancelAnimationFrame;
global.requestAnimationFrame = JSTimers.requestAnimationFrame;

global.fetch = require('node-fetch');

/* eslint-disable no-new */
new JSDOM('<!doctype html><html><body></body></html>');

require('babel-polyfill');
require('react-native-mock/mock');
require('jest-enzyme');

