import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import essay from '../essay.json';
import styles from '../styles/ensayo.module.css';

export default function Ensayo() {

  const md = new MarkdownIt({ breaks: true });

  return (
    <Layout>
      <Head>
        <title>Ensayo</title>
      </Head>
      <div className={styles.ensayo}>
        <div className={styles.titleContainer}>
          <picture>
            <source media="(min-width: 900px)" srcSet="/images/galaxy-izq.png" />
            <img src="/images/galaxy-small-izq.png" />
          </picture>
          <h3 className={styles.titleEnsayo}>
            Así se hace <span>periodismo feminista</span><br />
            en América Latina
          </h3>
          <picture>
            <source media="(min-width: 900px)" srcSet="/images/galaxy-der.png" />
            <img src="/images/galaxy-small-der.png" />
          </picture>
        </div>
        <div className={styles.ensayoContainer}>
          <div className={styles.ensayoText}
          dangerouslySetInnerHTML={{
            __html: md.render(essay.body),
          }}>
          </div>
          <Link href="/">
            <a className={styles.link}>Volver al inicio</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
