import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    buildNumber,
    clearBuild,
    delBuild,
    toggleSing,
    subtracOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    prevNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>{number}</Text>
        <Text style={styles.subResult}>
          {prevNumber === '0' ? '' : prevNumber}
        </Text>

        <View style={styles.row}>
          <CalculatorButton
            onPress={clearBuild}
            blackText
            label="C"
            color={colors.lightGray}
          />
          <CalculatorButton
            onPress={toggleSing}
            blackText
            label="+/-"
            color={colors.lightGray}
          />
          <CalculatorButton
            onPress={delBuild}
            blackText
            label="del"
            color={colors.lightGray}
          />
          <CalculatorButton
            onPress={multiplyOperation}
            label="*"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            onPress={() => buildNumber('7')}
            label="7"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={() => buildNumber('8')}
            label="8"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={() => buildNumber('9')}
            label="9"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={divideOperation}
            label="÷"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            onPress={() => buildNumber('4')}
            label="4"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={() => buildNumber('5')}
            label="5"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={() => buildNumber('6')}
            label="6"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={subtracOperation}
            label="-"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            onPress={() => buildNumber('1')}
            label="1"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={() => buildNumber('2')}
            label="2"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={() => buildNumber('3')}
            label="3"
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={addOperation}
            label="+"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            onPress={() => buildNumber('0')}
            label="0"
            color={colors.darkGray}
            doubleSize
          />
          <CalculatorButton
            onPress={() => buildNumber('.')}
            label="."
            color={colors.darkGray}
          />
          <CalculatorButton
            onPress={() => console.log('1')}
            label="="
            color={colors.orange}
          />
        </View>
      </View>
    </View>
  );
};
