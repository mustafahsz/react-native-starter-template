import { Icon, Image, Text } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { spacing } from '../../theme';
import { palette } from '../../theme/palette';
import { ImageTitleCardProps } from './image_title_card.props';
import { textVariants, viewVariants } from './image_title_card.variants';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export const ImageTitleCard: React.FC<ImageTitleCardProps> = props => {
  // grab the props
  const {
    variant = 'main',
    text,
    containerStyle,
    style: styleOverride,
    titleStyle: textStyleOverride,
    children,
    ...rest
  } = props;

  const viewVariantStyle = viewVariants[variant];
  const viewStyle = [viewVariantStyle, styleOverride];

  const textVariantStyle = textVariants[variant];
  const titleStyle = [textVariantStyle, textStyleOverride];

  return (

    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          backgroundColor: palette.white,
          alignContent: 'center',
          alignItems: 'center',
          paddingVertical: spacing.medium,
          borderRadius: 10,
        },
        containerStyle,
      ]}
      onPress={props.onPress}
      {...rest}>
      <Image
        source={props.imagePath ?? 0}
        style={{
          width: props.imageWidth,
          height: props.imageHeight,
          display: props.imageType === 'image' ? 'flex' : 'none',
        }}
      />

      <Icon
        style={{ display: props.imageType === 'icon' ? 'flex' : 'none' }}
        name={props.iconDetail?.name ?? ''}
        type={props.iconDetail?.type}
        color={props.iconDetail?.color}
        size={props.iconDetail?.size}
      />

      <Text
        style={[
          {
            backgroundColor: palette.white,
            width: props.imageWidth,
            textAlign: 'center',
            paddingTop: spacing.medium,
            fontSize: 20,
            fontWeight: 'bold',
          },
          titleStyle,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
