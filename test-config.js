Date.now = jest.fn(() => 42);

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js',
};

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}
copyProps(document.defaultView, global);

const JSTimers = require('react-native/Libraries/Core/Timers/JSTimers');

global.cancelAnimationFrame = JSTimers.cancelAnimationFrame;
global.requestAnimationFrame = JSTimers.requestAnimationFrame;

jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
}));
