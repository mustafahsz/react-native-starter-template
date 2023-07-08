import React from 'react';
import { View } from 'react-native';

interface RadioButtonProps {
  checked?: boolean;
  size?: number;
}
export const RadioButton: React.FC<RadioButtonProps> = props => {
  const { size = 20, checked = false } = props;
  return (
    <View
      style={{
        flex: 0,
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          height: size,
          width: size,
          borderRadius: size / 2,
          borderWidth: 1,
          borderColor: '#A7ADB6',
          backgroundColor: '#47546708',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {checked ? (
          <View
            style={{
              height: size * 0.7,
              width: size * 0.7,
              borderRadius: (size * 0.7) / 2,
              backgroundColor: 'red',
            }}
          />
        ) : null}
      </View>
    </View>
  );
};
