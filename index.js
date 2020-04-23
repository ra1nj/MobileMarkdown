/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LiveEditor from './src/view/Screens/LiveEditor';

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App);
