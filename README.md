[![Stories in Ready](https://badge.waffle.io/psychobolt/react-native-boilerplate.png?label=ready&title=Ready)](https://waffle.io/psychobolt/react-native-boilerplate)
# React Native Boilerplate [![Build Status](https://travis-ci.org/psychobolt/react-native-boilerplate.svg)](https://travis-ci.org/psychobolt/react-native-boilerplate) [![Dependency Status](https://david-dm.org/psychobolt/react-native-boilerplate.svg)](https://david-dm.org/psychobolt/react-native-boilerplate) [![devDependency Status](https://david-dm.org/psychobolt/react-native-boilerplate/dev-status.svg)](https://david-dm.org/psychobolt/react-native-boilerplate?type=dev)

> The React Native, Redux boilerplate for personal usage. React Navigation, Native Base example and Remote Redux DevTools control

## Included

* [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native) v0.42
* [React Navigation](https://github.com/react-community/react-navigation)
* [Redux](https://github.com/reactjs/redux) & [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) & [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger)
* [Immutable](https://github.com/facebook/immutable-js) & [Immutable DevTools](https://github.com/andrewdavey/immutable-devtools)
* [Babel](https://github.com/babel/babel) & Plugins: [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ npm install -g react-native-cli
$ npm install
```

Also, you can use [generator-rnb](https://github.com/jhen0409/generator-rnb) to create project with this boilerplate.

## Development

#### Start local server

```bash
$ npm start
```

#### iOS

Run command to open iOS simulator and run app:

```bash
$ rnpm run ios
```

#### Android (5.0+)

Open Android emulator and run command: (Or connect real device via USB)

```bash
$ npm run android
```

> With Hyper-V enabled, download and install [Visual Studio Android Emulator](https://aka.ms/vscomemudownload). You should run Android device Marshmallow (6.0.0) API Level 23. For network access to debugger, you also need to install and configure [Telerik Fiddler](https://blogs.msdn.microsoft.com/visualstudioalm/2015/05/06/using-fiddler-to-monitor-network-traffic-from-the-vs-emulator-for-android/).

## DevTools

In development mode, you can install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) as default debugger. if not install, it will use [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) and [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger).

## Visual Studio Code

It might be better to debug in a lightweight IDE. [Visual Studio Code](https://code.visualstudio.com/) provides a few extensions to debug React Native applications. You should install [React Native Tools](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native) and [Redux DevTools](https://marketplace.visualstudio.com/items?itemName=jingkaizhao.vscode-redux-devtools). Make sure to configure local (custom) server for Redux DevlTools (host: localhost, port: 5678)

## Test

We used [react-native-mock](https://github.com/lelandrichardson/react-native-mock), and test with [Mocha](https://github.com/mochajs/mocha), [Enzyme](https://github.com/airbnb/enzyme).

```bash
$ npm test
```

## Credits

* [react-native-boilerplate](https://github.com/jhen0409/react-native-boilerplate)

## LICENSE

[MIT](LICENSE)
