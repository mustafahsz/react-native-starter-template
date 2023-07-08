import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { palette } from '../../theme/palette';
import { GradientButtonProps } from './gradient_button.props';
import { textVariants, viewVariants } from './gradient-button.variants';
import { Button } from '@rneui/themed';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export const GradientButton: React.FC<GradientButtonProps> = props => {
  // grab the props
  const {
    variant = 'main',
    text,
    colors,
    start,
    end,
    style: styleOverride,
    textStyle: textStyleOverride,
    ...rest
  } = props;

  const viewVariantStyle = viewVariants[variant];
  const viewStyle = [viewVariantStyle, styleOverride];

  const textVariantStyle = textVariants[variant];
  const textStyle = [textVariantStyle, textStyleOverride];

  const gradientColors = colors ?? [palette.lightGreen, palette.darkGreen];
  const startCoordinates = start || { x: 0.35, y: 0 };
  const endCoordinates = end || { x: 0, y: 0 };

  return (
    <Button
      linearGradientProps={{
        colors: gradientColors,
        start: startCoordinates,
        end: endCoordinates,
        pointerEvents: 'none',
      }}
      ViewComponent={LinearGradient}
      title={text}
      titleStyle={[{}, textStyle]}
      buttonStyle={[
        { borderRadius: 8 },
        { width: '100%', height: 48 },
        viewStyle,
      ]}
      {...rest}></Button>
    // <LinearGradient

    // </LinearGradient>
  );
};
