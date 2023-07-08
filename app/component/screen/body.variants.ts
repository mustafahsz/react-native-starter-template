import {ViewStyle} from 'react-native';
import {color} from '../../theme';

/**
 * All screen keyboard offsets.
 */
export const offsets = {
  none: 0,
  ios: 40,
};

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets;

/**
 * All the variations of screens.
 */
export const variants = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      // backgroundColor: color.background,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   *
   * Pick this one if you don't know which one you want yet.
   */
  scroll: {
    outer: {
      // backgroundColor: color.background,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {justifyContent: 'flex-start', alignItems: 'stretch'} as ViewStyle,
  },
};

/**
 * The variations of screens.
 */
export type ScreenVariants = keyof typeof variants;

/**
 * Is this preset a non-scrolling one?
 *
 * @param variant The preset to check
 */
export function isNonScrolling(variant?: ScreenVariants) {
  // any of these things will make you scroll
  return !variant || !variants[variant] || variant === 'fixed';
}
