import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View} from 'react-native';

import {Body} from '../../component/screen/body';
import {Text} from '../../component/text/text';
import {AppNavigatorParamList} from '../../navigator/app_navigator';
import {UseGetAllRoles} from '../../services/api/user_api/getAllRoles';
import {spacing} from '../../theme';
import {SignInComponent} from './components';

export const SignInScreen: React.FC<
  StackScreenProps<AppNavigatorParamList, 'signInScreen'>
> = props => {
  const {data, isLoading} = UseGetAllRoles();

  return (
    <Body>
      <View style={{marginHorizontal: 15, marginTop: 80}}>
        <Text
          size={30}
          style={{
            textAlign: 'center',
          }}>
          {'ورود به خَرَجی'}
        </Text>
        <View style={{marginTop: spacing.huge}}>
          <SignInComponent visible={false} navigator={() => {}} />
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            marginTop: spacing.mediumPlus,
          }}>
          <Text>{'کاربر جدید هستین؟'}</Text>
          <Text onPress={() => {}}>{'ثبت‌نام در خَرَجی'}</Text>
        </View>
      </View>
    </Body>
  );
};
