import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { ImageTitleCardVariantNames } from './image_title_card.variants';

export interface ImageTitleCardProps extends ViewProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional style override useful for the button text.
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * One of the different types of button variant.
   */

  variant?: ImageTitleCardVariantNames;

  children?: React.ReactNode;

  imagePath?: ImageSourcePropType;

  imageWidth?: number;

  imageHeight?: number;

  title: string;

  imageType: 'icon' | 'image';

  iconDetail?: { name: string; type: string; color?: string; size?: number };

  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
