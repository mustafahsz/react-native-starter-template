import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useFocusEffect} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Icon} from '@rneui/base';
import {Input} from '@rneui/themed';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppNavigatorParamList} from '../navigators';
import {margins, spacing} from '../theme';
import {palette} from '../theme/palette';
import {Body} from '../component/screen/body';
import {GradientButton} from '../component/gradient_button/gradient_button';
import {useGetBankAccount} from '../services/api/user_api/bank_account/getBankAccount';
import {getAuthorizationHeader} from '../utils/token_handler';

type NavigationProp = StackScreenProps<AppNavigatorParamList, 'splashScreen'>;

export const SplashScreen: React.FC<NavigationProp> = props => {
  const {navigation} = props;

  const EXPIRATION_TIME = 1;
  const [seconds, setSeconds] = useState(EXPIRATION_TIME);

  useEffect(() => {
    let myInterval = setInterval(async () => {
      if (seconds === 0) {
        clearInterval(myInterval);
        const token = await getAuthorizationHeader();
        if (
          token.Authorization?.length != undefined &&
          token.Authorization?.length <= 10
        )
          navigation.navigate('signInScreen');
        else
          navigation.navigate('homeTabNavigator', {
            screen: 'dashboardStack',
            params: {
              screen: 'dashboardScreen',
            },
          });
      }

      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);
  return (
    <ImageBackground
      style={{
        position: 'absolute',
        // top: 0,
        right: 0,
        // bottom: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      source={require('../assets/images/splashScreenImage.jpg')}></ImageBackground>
  );
};
