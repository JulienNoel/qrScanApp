/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import { CameraView } from './Components/CameraView'

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'
  

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <CameraView />
    </NavigationContainer>
  );
};

export default App;
