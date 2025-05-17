'use client';

import styles from './style.module.scss';
import apis from '@/apis';
import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui';
import { usePhotoMetaStore } from '@/store/photoMetaStore';
import { useEffect, useState } from 'react';
import Loading from '../loading';

const ButtonArea = () => {
  const router = useRouter();

  const [isDebounced, setIsDebounced] = useState(false);
  const { refetch } = apis.Photo.useGetPhotoMetaData();
  const { setPhotoMetaInfo, photoMetaInfo } = usePhotoMetaStore();

  const handleClick = async () => {
    if (isDebounced) return;

    setIsDebounced(true);
    setTimeout(() => setIsDebounced(false), 5000);

    try {
      const { data } = await refetch();

      if (data) {
        setPhotoMetaInfo({ ...data });
        // router.push('/result');
      }
    } catch (error) {
      console.error('Failed to Update photo metadata:', error);
    }
  };

  useEffect(() => {
    if (photoMetaInfo) {
      router.push('/result');
    }
  }, [photoMetaInfo, router]);

  return (
    <div className={styles.bottomArea}>
      <Button onClick={handleClick} disabled={isDebounced}>
        {isDebounced ? <Loading /> : '다음'}
      </Button>
    </div>
  );
};

export default ButtonArea;
