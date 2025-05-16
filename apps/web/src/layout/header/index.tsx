'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import styles from './style.module.scss';
import ctx from 'classnames';

const Header = () => {
  const routeSegment = useSelectedLayoutSegment();

  return (
    <header className={styles.header}>
      <p className={ctx(styles.text, routeSegment === 'result' && styles.white)}>김대업 입니다.</p>
    </header>
  );
};

export default Header;
