import { TextStyle, ViewStyle } from 'react-native';
import { typography } from '../../theme';

type InputVariantsType = {
  [key: string]: {
    inputStyle: TextStyle;
    labelStyle: TextStyle;
    inputContainerStyle: ViewStyle;
    containerStyle: ViewStyle;
  };
};

export const inputVariants: InputVariantsType = {
  default: {
    inputStyle: {
      marginHorizontal: 8,
      fontSize: 14,
      fontFamily: typography.primary,
    },
    labelStyle: {
      color: '#8992A3',
      fontSize: 12,
      marginBottom: 4,
      fontWeight: 'bold',
      fontFamily: typography.primary,
    },
    inputContainerStyle: {
      borderWidth: 1,
      borderRadius: 8,
      height: 48,
      borderColor: '#D3D6DA',
      backgroundColor: '#F7F7F8',
    },
    containerStyle: {
      paddingHorizontal: 0,
      width: '100%',
    },
  },
};

export type InputVariantsKey = keyof typeof inputVariants;
