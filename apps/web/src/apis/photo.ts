import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../lib/axios';
import { PhotoMetaInfo } from '../types/apis/photo';

const KEY = {
  getPhotoMetaData: ['photoMetaData'],
};

const API = {
  getPhotoMetaData: async () => {
    const { data } = await axiosInstance.get<PhotoMetaInfo>('id/0/info');
    return data;
  },
};

export const useGetPhotoMetaData = () => {
  return useQuery({
    queryKey: KEY.getPhotoMetaData,
    queryFn: API.getPhotoMetaData,
    enabled: false,
  });
};
