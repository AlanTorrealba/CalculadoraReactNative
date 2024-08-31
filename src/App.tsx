/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';


function App() {
  return (
    <SafeAreaView >
      <View>
        <CalculatorScreen/>
      </View>
    </SafeAreaView>
  );
}

export default App;
