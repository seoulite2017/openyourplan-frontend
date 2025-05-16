'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui';
import styles from './style.module.scss';

const ButtonArea = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/result');
  };
  return (
    <div className={styles.bottomArea}>
      <Button title='다음' onClick={handleClick} />
    </div>
  );
};

export default ButtonArea;
