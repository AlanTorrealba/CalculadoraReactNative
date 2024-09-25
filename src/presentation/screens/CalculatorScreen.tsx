import React from 'react';
import {View, Text} from 'react-native';
import { styles } from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View>
      <Text style={styles.mainResult}>1500</Text>
      <Text style={styles.subResult}>12</Text>
    </View>
  );
};
