import { TextStyle, ViewStyle } from 'react-native';

const BASE_VIEW: ViewStyle = {
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
};

/**
 * All text will start off looking like this.
 */
const BASE_TEXT: TextStyle = {
  alignSelf: 'center',
  fontSize: 21,
  color: 'white',
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */

/**
 * A list of variant names.
 */
export type GradientButtonVariantNames = 'main';

export const viewVariants: Record<GradientButtonVariantNames, ViewStyle> = {
  /**
   * A smaller piece of secondary information.
   */
  main: { ...BASE_VIEW },

  /**
   * A button without extras.
   */
};

export const textVariants: Record<GradientButtonVariantNames, TextStyle> = {
  main: { ...BASE_TEXT, color: 'white' },
};
