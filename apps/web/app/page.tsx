import ButtonArea from './_components/buttonArea';
import styles from './style.module.scss';

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.text}>
          안녕하세요 <br />
          김대업입니다.
        </h2>
      </div>
      <ButtonArea />
    </section>
  );
}
