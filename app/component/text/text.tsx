import * as React from 'react';
import { Text as ReactNativeText } from 'react-native';
import { typography } from '../../theme';
import { TextProps } from './text.props';
import { variants } from './text.variants';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export const Text: React.FC<TextProps> = props => {
  // grab the props
  const {
    variant = 'default',
    text,
    size = 0,
    children,
    style: styleOverride,
    ...rest
  } = props;

  // figure out which content to use
  const content = text || children;

  const variantStyle = variants[variant];
  const styles = [
    variantStyle,
    size !== 0 ? { fontSize: size } : {},
    styleOverride,
  ];

  return (
    <ReactNativeText
      {...rest}
      style={[{ fontFamily: typography.primary }, styles]}>
      {content}
    </ReactNativeText>
  );
};
