import {AxiosResponse} from 'axios';
import {useMutation} from '@tanstack/react-query';
import {SigninInput} from './userApiInputTypes';
import {instance} from '../../../../config/axios_config';
import {SigninURL} from '../../api_urls';

export interface User {
  PresentingCode: string;
  PresenterUserId: string;
  UserRate: number;
  Id: string;
  UserName: string;
  NormalizedUserName: string;
  Email: string | null;
  NormalizedEmail: string | null;
  EmailConfirmed: boolean;
  PasswordHash: string | null;
  SecurityStamp: string;
  ConcurrencyStamp: string;
  PhoneNumber: string;
  PhoneNumberConfirmed: boolean;
  TwoFactorEnabled: boolean;
  LockoutEnd: Date | null;
  LockoutEnabled: boolean;
  AccessFailedCount: number;
}

export const useSignin = () => {
  const signinMutation = useMutation<AxiosResponse<User>, Error, SigninInput>(
    async signinInput => {
      const res = await instance.post(SigninURL, signinInput);
      console.log(res);

      return res;
    },
  );
  return signinMutation;
};
