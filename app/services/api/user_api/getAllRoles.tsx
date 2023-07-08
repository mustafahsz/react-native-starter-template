import axios, {AxiosResponse} from 'axios';
import {useQuery} from '@tanstack/react-query';

const getAllRolesURL = 'https://back.kharaji.net/api/role';

const getAllRoles = async () => {
  const response: AxiosResponse<{Name: string; Value: string}[], any> =
    await axios.get(getAllRolesURL);

  return response.data;
};

export const UseGetAllRoles = () => {
  const query = useQuery(['allRoles'], getAllRoles, {
    onError(err) {
      console.log('err');
      console.log(err);
    },
  });
  return {...query, allRoles: query.data};
};
