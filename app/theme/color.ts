import { palette } from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  //FreeStyle
  palette,
  //Texts
  headerText: palette.black,
  text: palette.offBlack,
  placeholderText: palette.lightGray,
  errorText: palette.lightRed,
  successText: palette.lightGreen,
  secondaryText: palette.darkGray,
  buttonText: palette.white,
  //Backgrounds
  pageBackground: palette.offWhite,
  cardBackground: palette.white,
  //Buttons
  confirmButtonBackground: palette.lightGreen,
  rejectButtonBackground: palette.lightRed,
  submitButtonBackground: palette.lightBlue,
  //Page List
  listItemDividerColor: palette.veryLightGray,
};
