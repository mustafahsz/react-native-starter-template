import React, {Fragment, useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '../../../component/text/text';
import {spacing} from '../../../theme';
import {palette} from '../../../theme/palette';

export type UserTypeProps = {
  title: string;
  onPress?: () => void;
  selected?: boolean;
};

export const UserType: React.FC<UserTypeProps> = props => {
  return (
    <TouchableOpacity
      style={{
        margin: spacing.tiny,
        // marginVertical: spacing.small,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.selected ? palette.lightGreen : palette.white,
        borderRadius: 20,
      }}
      onPress={props.onPress}>
      <Image
        source={
          props.selected
            ? require('../../../assets/images/recycle_white.png')
            : require('../../../assets/images/recycle.png')
        }
        style={{
          width: 50,
          height: 50,
          margin: spacing.medium,
          marginBottom: 0,
        }}
      />
      <Text
        style={{
          color: props.selected ? palette.white : palette.black,
          textAlign: 'center',
          justifyContent: 'center',
          marginVertical: spacing.tiny,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
