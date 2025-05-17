'use client';

import { useRouter } from 'next/navigation';
import { usePhotoMetaStore } from '@/store/photoMetaStore';
import { Button } from '@repo/ui';
import Image from 'next/image';
import styles from './style.module.scss';
import ctx from 'classnames';
import { useEffect } from 'react';
import PhotoSkeleton from '../_components/photoSkeleton';

type MetaItem = {
  label: string;
  value?: string;
  isLink?: boolean;
};

const ResultPage = () => {
  const router = useRouter();
  const { photoMetaInfo } = usePhotoMetaStore();

  const handleClick = () => {
    router.back();
  };

  const metaDataGroups: MetaItem[][] = [
    [
      { label: 'id', value: photoMetaInfo?.id },
      { label: 'author', value: photoMetaInfo?.author },
    ],
    [
      { label: 'width', value: photoMetaInfo?.width.toLocaleString() },
      { label: 'height', value: photoMetaInfo?.height.toLocaleString() },
    ],
    [
      { label: 'url', value: photoMetaInfo?.url, isLink: true },
      { label: 'download_url', value: photoMetaInfo?.download_url, isLink: true },
    ],
  ];

  useEffect(() => {
    if (!photoMetaInfo) {
      const timer = setTimeout(() => {
        router.replace('/');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [photoMetaInfo, router]);

  return (
    <section className={styles.container}>
      {!photoMetaInfo ? (
        <PhotoSkeleton />
      ) : (
        <div className={styles.contents}>
          <div className={styles.thumbnail}>
            <Image
              src={photoMetaInfo.download_url}
              alt={`${photoMetaInfo.author}-img`}
              sizes='660px'
              fill
              priority
            />
          </div>
          <div className={styles.metaInfo}>
            {metaDataGroups.map((group, idx) => {
              const isColumnBox = idx === metaDataGroups.length - 1;
              return (
                <div key={idx} className={ctx(styles.metaInfoBox, isColumnBox && styles.columnBox)}>
                  {group.map(({ label, value, isLink }) => (
                    <div key={label}>
                      <p className={styles.text}>{label}</p>
                      {isLink ? (
                        <a
                          href={value}
                          target='_blank'
                          rel='noreferrer'
                          className={ctx(styles.text, styles.gray)}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className={ctx(styles.text, styles.gray)}>{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}

            <div className={styles.buttonArea}>
              <Button size='sm' onClick={handleClick}>
                이전
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultPage;
