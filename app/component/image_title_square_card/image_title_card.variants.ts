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
export type ImageTitleCardVariantNames = 'main';

export const viewVariants: Record<ImageTitleCardVariantNames, ViewStyle> = {
  /**
   * A smaller piece of secondary information.
   */
  main: { ...BASE_VIEW },

  /**
   * A button without extras.
   */
};

export const textVariants: Record<ImageTitleCardVariantNames, TextStyle> = {
  main: { ...BASE_TEXT, color: 'white' },
};
