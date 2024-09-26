import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}) => {
  return (
    <View>
      <Pressable
      onPress = {()=>onPress()}
        style={({pressed}) => ({
          ...styles.button,
          backgroundColor: color,
          opacity: pressed ? 0.8 : 1,
          width: doubleSize ? 160 : 70,
        })}>
        <Text
          style={{
            ...styles.buttonText,
            color: blackText ? 'black' : 'white',
            textAlign: doubleSize ? 'left' : 'center',
            marginLeft: doubleSize ? 16 : 0,
          }}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};
