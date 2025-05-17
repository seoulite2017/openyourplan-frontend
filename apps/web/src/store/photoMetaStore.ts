import { PhotoMetaInfo } from '@/types/apis/photo';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PhotoMetaStoreType = {
  photoMetaInfo: PhotoMetaInfo | null;
  setPhotoMetaInfo: (meta: PhotoMetaInfo) => void;
};

export const usePhotoMetaStore = create(
  persist<PhotoMetaStoreType>(
    (set) => ({
      photoMetaInfo: null,
      setPhotoMetaInfo: (photoMetaInfo) => set({ photoMetaInfo }),
    }),
    {
      name: 'photoMetaInfoStorage',
    },
  ),
);
