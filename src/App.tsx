/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import {styles} from './config/theme/app-theme'

function App() {
  return (
    
      <View style={styles.background}>
        <CalculatorScreen/>
      </View>
    
  );
}

export default App;
