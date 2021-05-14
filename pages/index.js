import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';

const ModelTree = dynamic(
  () => {
    return import('../components/ModelTree');
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <ModelTree />
      </div>
    </div>
  );
}
