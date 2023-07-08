import React from 'react';
import {FlatList, View} from 'react-native';
import {Icon, Input} from '@rneui/themed';
import {useState} from 'react';
import {palette} from '../../../theme/palette';
import {GradientButton} from '../../../component/gradient_button/gradient_button';
import {UseGetAllRoles} from '../../../services/api/user_api/getAllRoles';
import {UserType} from './user_type_button';
import {Space} from '../../../component/space/space';
import {handleTokenOnLogin} from '../../../utils/token_handler';
import {useSignin} from '../../../services/api/user_api/signIn&SignUp/signIn';

interface SignUpComponentProps {
  visible: boolean;
  navigator: () => void;
}

export const SignInComponent: React.FC<SignUpComponentProps> = props => {
  const {data, isLoading} = UseGetAllRoles();
  const {mutate, isLoading: signinLoading} = useSignin();
  const handleSignin = () => {
    // props.navigator();
    const signInInput = {
      phoneNumber: phoneNumber,
      passwordHash: password,
      role: userType.Value,
    };

    mutate(signInInput, {
      onSuccess(response) {
        handleTokenOnLogin(response.data.SecurityStamp);
        props.navigator();
      },
    });
  };
  const [open, setOpen] = useState(false);
  const [passwordInputSelection, setPasswordInputSelection] =
    useState<boolean>(false);
  const [phoneInputSelection, setPhoneInputSelection] =
    useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<{
    phoneNumberErrorMessage: string;
    passwordErrorMessage: string;
  }>({phoneNumberErrorMessage: '', passwordErrorMessage: ''});
  type DataItem = {
    Name: string;
    Value: string;
  };
  const [userType, setUserType] = useState<DataItem>(
    data?.[0] ?? {Name: '', Value: ''},
  );

  const renderItem = ({item}: {item: DataItem}) => {
    return (
      <View style={{flex: 1}}>
        <UserType
          selected={item.Value === userType.Value}
          onPress={() => {
            setUserType(item);
          }}
          title={item.Name}
        />
      </View>
    );
  };

  return (
    <View>
      <Input
        errorMessage={errorMessage.phoneNumberErrorMessage}
        style={{
          borderBottomColor: !phoneInputSelection
            ? palette.darkGreen
            : palette.black,
          borderBottomWidth: 1,
        }}
        keyboardType="numeric"
        labelStyle={{
          textAlign: 'right',
          color: palette.black,
        }}
        label={'شماره موبایل'}
        onChangeText={value => {
          setPhoneNumber(value);
        }}
        onBlur={() => {
          {
            phoneNumber.length < 1 ? setPhoneInputSelection(false) : null;
          }
        }}
        onFocus={() => {
          setPhoneInputSelection(true);
        }}
      />

      <Input
        errorMessage={errorMessage.passwordErrorMessage}
        style={{
          borderBottomColor: !passwordInputSelection
            ? palette.darkGreen
            : palette.black,
          borderBottomWidth: 1,
        }}
        labelStyle={{textAlign: 'right', color: palette.black}}
        label={'رمزعبور'}
        onChangeText={value => {
          setPassword(value);
        }}
        secureTextEntry={true}
        onBlur={() => {
          setPasswordInputSelection(false);
        }}
        onFocus={() => {
          setPasswordInputSelection(true);
        }}
        rightIcon={
          <Icon
            name="remove-red-eye"
            type="MaterialIcons"
            size={20}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      <Space size={10} />

      <Space size={20} />
      <GradientButton
        loading={signinLoading}
        title={'ورود'}
        titleStyle={{color: palette.white, fontWeight: 'bold', fontSize: 25}}
        style={{borderRadius: 10, width: '70%', alignSelf: 'center'}}
        onPress={handleSignin}
      />
    </View>
  );
};
