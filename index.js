/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppContainer from './containers/app-container';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
