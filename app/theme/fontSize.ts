import { responsiveHandler } from '../utils/responsive_handler';

export const fontSize = {
  tiny: responsiveHandler(9, 1, 1),
  xxxSmall: responsiveHandler(10, 1, 1),
  xxSmall: responsiveHandler(11, 1, 1),
  xSmall: responsiveHandler(12, 1, 1),
  small: responsiveHandler(13, 1, 1),
  medium: responsiveHandler(14, 1, 1),
  mediumPlus: responsiveHandler(16, 1, 1),
  large: responsiveHandler(18, 1, 1),
  xLarge: responsiveHandler(20, 1, 1),
  xxLarge: responsiveHandler(24, 1, 1),
  xxxLarge: responsiveHandler(26, 1, 1),
  huge: responsiveHandler(40, 1, 1),
  massive: responsiveHandler(50, 1, 1),
};
