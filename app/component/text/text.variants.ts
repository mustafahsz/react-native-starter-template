import { TextStyle } from 'react-native';
import { color, fontSize, typography } from '../../theme';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: fontSize.medium,
};

/**
 * A list of variants names.
 */
export type TextVariants =
  | 'default'
  | 'bold'
  | 'header'
  | 'secondary'
  | 'text'
  | 'placeholder'
  | 'error'
  | 'success'
  | 'buttonText';

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const variants: Record<TextVariants, TextStyle> = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: 'bold' },

  /**
   * Large headers.
   */
  header: {
    ...BASE,
    fontSize: fontSize.xxLarge,
    fontWeight: 'bold',
    color: color.headerText,
  },

  /**
   * A smaller piece of secondard information.
   */
  secondary: {
    ...BASE,
    fontSize: fontSize.large,
    color: color.secondaryText,
  },

  /**
   * A Multiline Text
   */
  text: { ...BASE, color: color.text },

  /**
   * for input place holder
   */
  placeholder: { ...BASE, color: color.placeholderText },

  /**
   * red text
   */
  error: { ...BASE, color: color.errorText },

  /**
   * green text
   */
  success: { ...BASE, color: color.successText },

  /**
   * white Text
   */
  buttonText: { ...BASE, color: color.buttonText },
};
