import {useQuery} from '@tanstack/react-query';
import {instance} from '../../../../config/axios_config';
import {Get_All_Categories} from '../../api_urls';
import {getAuthorizationHeader} from '../../../../utils/token_handler';
import {Category} from './getAllCategoriesInterface';

const useGetAllCatergories = () => {
  const {isLoading, error, data} = useQuery('categories', async () => {
    const headers = await getAuthorizationHeader();
    const res = await instance.get<Category[]>(Get_All_Categories, {
      headers,
    });


    return res;
  });

  return {isLoading, error, data};
};

export {useGetAllCatergories};
