import AsyncStorage from '@react-native-async-storage/async-storage';

const handleTokenOnLogin = (token: string) => {
  AsyncStorage.setItem('token', token);
};

const handleTokenOnLogout = () => {
  AsyncStorage.removeItem('token');
};

const getAuthorizationHeader = async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    return {Authorization: `Bearer ${token}`};
  } else {
    return {};
  }
};
export {handleTokenOnLogin, handleTokenOnLogout, getAuthorizationHeader};
