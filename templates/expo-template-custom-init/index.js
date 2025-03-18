// If an app is using a custom entry point, it must include the following
// import, otherwise `expo-updates` and other Expo packages will not be
// initialized correctly.
import 'expo/src/Expo.fx';

// This React Native entry point registers the "App" component,
// which is the component name expected by the custom
// initialization of the root view in CustomViewController.swift

import { AppRegistry } from 'react-native';

import App from './App';

function getApp() {
  return App;
}

AppRegistry.registerComponent('App', () => getApp());
