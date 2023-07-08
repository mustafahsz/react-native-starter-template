import {
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {navigationRef} from './navigation_utilities';
import {SplashScreen} from '../screens/splash_screen';
import {SignInScreen} from '../screens/sign_in/sign_in_screen';

export type AppNavigatorParamList = {
  firstScreen: undefined;
  splashScreen: undefined;
  signInScreen: undefined;
};

const RootStack = createStackNavigator<AppNavigatorParamList>();

export const AppStack = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splashScreen">
      <RootStack.Screen name="splashScreen" component={SplashScreen} />
      <RootStack.Screen name="signInScreen" component={SignInScreen} />
    </RootStack.Navigator>
  );
};

type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} theme={DefaultTheme} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
