/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';

const RootStack = createStackNavigator(
  {
    //Define your screens.
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
  },
);

//Export default the stateless component
// const App = () => {
//   return <RootStack />
//}

const App = createAppContainer(RootStack);

export default App;
