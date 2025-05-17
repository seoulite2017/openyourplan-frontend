import styles from './style.module.scss';

const PhotoSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.thumbnail} />
      <div className={styles.metaInfo}>
        <div className={styles.metaInfoBox} />
        <div className={styles.metaInfoBox} />
        <div className={styles.metaInfoBox} />
        <div className={styles.buttonArea}></div>
      </div>
    </div>
  );
};

export default PhotoSkeleton;
