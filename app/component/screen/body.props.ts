import React from 'react';
import {ScrollViewProps, StyleProp, ViewStyle} from 'react-native';
import {KeyboardOffsets, ScreenVariants} from './body.variants';

export interface ScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * One of the different types of variants.
   */
  variant?: ScreenVariants;

  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  keyboardOffset?: KeyboardOffsets | number;

  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll variants.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;
  bounce?: boolean;

  scrollViewProps?: ScrollViewProps;
  whiteImageBackground?: boolean;
  greenImageBackground?: boolean;
  
  title?: string;
}
