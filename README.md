# React Native Boilerplate 
[![Build Status](https://travis-ci.org/psychobolt/react-native-boilerplate.svg)](https://travis-ci.org/psychobolt/react-native-boilerplate) [![CircleCI](https://circleci.com/gh/psychobolt/react-native-boilerplate.svg?style=svg)](https://circleci.com/gh/psychobolt/react-native-boilerplate)
[![codecov](https://codecov.io/gh/psychobolt/react-native-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/react-native-boilerplate)
[![ES Doc Coverage](https://doc.esdoc.org/github.com/psychobolt/react-native-boilerplate/badge.svg)](https://doc.esdoc.org/github.com/psychobolt/react-native-boilerplate/)

[![Dependency Status](https://david-dm.org/psychobolt/react-native-boilerplate.svg)](https://david-dm.org/psychobolt/react-native-boilerplate) [![devDependency Status](https://david-dm.org/psychobolt/react-native-boilerplate/dev-status.svg)](https://david-dm.org/psychobolt/react-native-boilerplate?type=dev)

[![Stories in Ready](https://badge.waffle.io/psychobolt/react-native-boilerplate.png?label=ready&title=Ready)](https://waffle.io/psychobolt/react-native-boilerplate)

> The React Native, Redux boilerplate for personal usage. It also includes a example app which utilizes React Navigation, Native Base, Redux, and supports Remote Redux DevTools control.

## Screenshots

### iOS
[![iOS preview](https://cloud.githubusercontent.com/assets/560721/25835113/29f9bc18-3431-11e7-9b02-4be8ae1c317a.png)](https://cloud.githubusercontent.com/assets/560721/25835113/29f9bc18-3431-11e7-9b02-4be8ae1c317a.png)

### Android
[![Android preview](https://cloud.githubusercontent.com/assets/560721/25835556/7dffae0a-3434-11e7-9a47-34793d91f15e.PNG)](https://cloud.githubusercontent.com/assets/560721/25835556/7dffae0a-3434-11e7-9a47-34793d91f15e.PNG)

## Included

* [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native) v0.42
* [React Navigation](https://github.com/react-community/react-navigation)
* [Redux](https://github.com/reactjs/redux) & [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) & [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger)
* [Redux Observable](https://redux-observable.js.org/)
* [Immutable](https://github.com/facebook/immutable-js) & [Immutable DevTools](https://github.com/andrewdavey/immutable-devtools)
* [Babel](https://github.com/babel/babel) & Plugins: [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
* [Native Base](https://nativebase.io/)
* [React Intl](https://github.com/yahoo/react-intl)
* [ESDoc](https://esdoc.org/)
* [Visual Studio Code](https://code.visualstudio.com/) Configurations

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install required tools.

```bash
$ npm install -g react-native-cli
$ npm install # install npm packages. Required for every package.json update
```

## Development

### Start local server

```bash
$ npm start
```

### iOS

Run command to open iOS simulator and run app:

```bash
$ npm run ios
```

### Android (5.0+)

Open Android emulator and run command: (Or connect real device via USB)

```bash
$ npm run android
```

> For Windows with Hyper-V enabled, download and install [Visual Studio Android Emulator](https://aka.ms/vscomemudownload). You should run a Android device Marshmallow (6.0.0) API Level 23. Next, configure Internet Connection for the device. See [Enable Internet Connection](http://blog.tpcware.com/2017/03/visual-studio-2017-android-emulation/) for instructions. For network access to debugger, you also need to install and configure [Telerik Fiddler](https://blogs.msdn.microsoft.com/visualstudioalm/2015/05/06/using-fiddler-to-monitor-network-traffic-from-the-vs-emulator-for-android/). After setup, shake the emulator to display the Developer Menu (Tools > Shake > Play).

### DevTools

In development mode, you can install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) as default debugger. if not install, it will use [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) and [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger). As an alternative, you can install Visual Studio Code with Extensions.


### Remote JS Debuggging and Hot Reload

Don't forget to Enable Remote JS Debugging and Hot Reload in your application running in the Device Emulator. This can be configued from the Developer Menu (Command+D on Mac).

### Visual Studio Code

It might be better to debug in a lightweight IDE. [Visual Studio Code](https://code.visualstudio.com/) provides a few extensions to debug React Native applications. Under extensions, install [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [React Native Tools](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native), and [Redux DevTools](https://marketplace.visualstudio.com/items?itemName=jingkaizhao.vscode-redux-devtools). Make sure to configure local (custom) server for Redux DevlTools (host: localhost, port: 5678)

> You may need to install Flow globally: ```npm install -g flow-bin```

## Testing

We used [react-native-mock](https://github.com/lelandrichardson/react-native-mock), and test with [Jest](https://facebook.github.io/jest/), [Enzyme](https://github.com/airbnb/enzyme).

```bash
$ npm test
```

Updating Snapshot tests
```bash
$ npm test -- -u
```

> When appropriate, you should commit and push the new snapshots

Running Tests w/ coverage report:
```bash
$ npm test -- --coverage
```

Running ESLint:

```bash
$ npm run lint
```

## API Docs

Generate documentation with coverage
```bash
$ npm run esdoc
```

> Local generated docs are at `doc/`.

## Credits

* [react-native-boilerplate](https://github.com/jhen0409/react-native-boilerplate)

## LICENSE

[MIT](LICENSE)
