import {useMutation, useQuery} from '@tanstack/react-query';
import {SignupInput} from './userApiInputTypes';
import {instance} from '../../../../config/axios_config';
import {signupURL} from '../../api_urls';

const useSignup = () => {
  const signupMutation = useMutation(async (signupInput: SignupInput) => {
    const res = await instance.post(signupURL, signupInput);
    return res;
  });
  return signupMutation;
};

export default useSignup;
