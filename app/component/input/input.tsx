import { Input as InputElements } from '@rneui/themed';
import React, { forwardRef } from 'react';
import { typography } from '../../theme';
import { InputProps } from './input.props';
import { inputVariants } from './input.variants';

export const Input: React.FC<InputProps> = forwardRef((props, refs) => {
  const {
    variant = 'default',
    labelStyle,
    containerStyle,
    inputStyle,
    inputContainerStyle,
    errorMessage,
    ...rest
  } = props;

  const presetStyles = inputVariants[variant];

  return (
    <InputElements
      errorStyle={{
        fontFamily: typography.primary,
        fontSize: 12,
        color: '#FF2713',
      }}
      labelStyle={[presetStyles.labelStyle, labelStyle]}
      containerStyle={[presetStyles.containerStyle, containerStyle]}
      inputStyle={[presetStyles.inputStyle, inputStyle]}
      errorMessage={errorMessage}
      inputContainerStyle={[
        presetStyles.inputContainerStyle,
        inputContainerStyle,
        props.errorMessage
          ? {
              borderColor: '#FF2713',
            }
          : {},
      ]}
      ref={refs as any}
      {...rest}
    />
  );
});
