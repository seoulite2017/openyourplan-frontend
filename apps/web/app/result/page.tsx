'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui';
import styles from './style.module.scss';
import ctx from 'classnames';

const ResultPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const tempMetaDataGroups = [
    [
      { label: 'id', value: '0' },
      { label: 'author', value: 'Alejandro Escamilla' },
    ],
    [
      { label: 'width', value: '3,333' },
      { label: 'height', value: '5,000' },
    ],
    [
      { label: 'url', value: '0' },
      { label: 'download_url', value: 'Alejandro Escamilla' },
    ],
  ];

  return (
    <section className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.thumbnail}></div>
        <div className={styles.metaInfo}>
          {tempMetaDataGroups.map((group, idx) => {
            const isColumnBox = idx === tempMetaDataGroups.length - 1;
            return (
              <div key={idx} className={ctx(styles.metaInfoBox, isColumnBox && styles.columnBox)}>
                {group.map(({ label, value }) => (
                  <div key={label}>
                    <p className={styles.text}>{label}</p>
                    <p className={ctx(styles.text, styles.gray)}>{value}</p>
                  </div>
                ))}
              </div>
            );
          })}

          <div className={styles.buttonArea}>
            <Button title='이전' size='sm' onClick={handleClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
