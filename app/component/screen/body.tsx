import * as React from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Background from '../../assets/svgs/background';
import {DefaultStatusBar} from '../default-status-bar/default-status-bar';
import {ScreenProps} from './body.props';
import {isNonScrolling, offsets, variants} from './body.variants';
import {Text} from '../text/text';
import {palette} from '../../theme/palette';
import {spacing} from '../../theme';

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = variants.fixed;
  const style = props.style || {};
  const {
    unsafe = true,
    whiteImageBackground = true,
    title = ' ',
    greenImageBackground = false,
  } = props;

  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {};
  const insetStyle = {paddingTop: unsafe ? 0 : insets.top};
  //  const backgroundImageHandler = (
  //   backgroundImage: number,

  // ) => {
  //   if (landscapeChange === undefined) landscapeChange = 0;

  // };

  return (
    <ImageBackground
      style={{
        display: whiteImageBackground || greenImageBackground ? 'flex' : 'none',

        position: 'absolute',
        // top: 0,
        right: 0,
        // bottom: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      source={
        greenImageBackground
          ? require('../../assets/images/greenBg.jpg')
          : require('../../assets/images/whiteBg.png')
      }>
      <DefaultStatusBar />
      <Text
        style={{
          color: palette.white,
          fontSize: 24,
          textAlign: 'center',
          marginTop: spacing.mediumPlus,
        }}>
        {title}
      </Text>
      <View style={[preset.inner, style, insetStyle]}>{props.children}</View>
    </ImageBackground>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = variants.scroll;
  const style = props.style || {};
  const {unsafe = true, bounce = true} = props;
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {};
  const insetStyle = {paddingTop: unsafe ? 0 : insets.top};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={
        typeof props.keyboardOffset === 'number'
          ? props.keyboardOffset
          : offsets[props.keyboardOffset || 'none']
      }>
      <DefaultStatusBar />
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          bounces={bounce}
          removeClippedSubviews
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
          keyboardShouldPersistTaps={
            props.keyboardShouldPersistTaps || 'handled'
          }
          // https://github.com/facebook/react-native/issues/26610#issuecomment-539843444
          scrollIndicatorInsets={{right: 1}}
          {...props.scrollViewProps}>
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Body(props: ScreenProps) {
  if (isNonScrolling(props.variant)) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}
