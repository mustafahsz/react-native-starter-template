import {
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';
import { TextVariants } from './text.variants';

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * The size of the Text to overRide
   */
  size?: number;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;

  /**
   * One of the different types of text variants.
   */
  variant?: TextVariants;
}
