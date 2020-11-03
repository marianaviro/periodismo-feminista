import Head from 'next/head';
import Layout from '../../components/layout';
import MarkdownIt from 'markdown-it';
import Link from 'next/link';
import db from '../../db.json';
import styles from '../../styles/perfiles.module.css';

export async function getStaticPaths() {
  return {
    paths: db.map((record) => `/perfil/${record.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const profile = db.find((record) => record.slug === params.slug);
  return {
    props: {
      profile,
    },
  };
}

export default function Profile({ profile }) {
  const md = new MarkdownIt({ breaks: true });

  return profile ? (
    <Layout>
      <Head>
        <title>{profile.profile_title} · Periodismo feminista</title>
      </Head>
      <div className={styles.perfil}>
        <div className={styles.titleContainer}>
          <div className={styles.titleSvg}>
            <img src="/images/perfil.svg" alt="Perfil" />
            <img src="/images/planeta.svg" alt="Ilustración de planeta" />
          </div>
          <div className={styles.titlePerfil}>
            <h1>{profile.media}</h1>
          </div>
          <div className={styles.arrows}>
            <img src="/images/flecha_izq.svg" alt="Ilustración de flecha" />
            <img src="/images/flecha_der.svg" alt="Ilustración de flecha" />
          </div>
        </div>
        <div className={styles.perfilContainer}>
          <h3 className={styles.perfilTitle}>{profile.profile_title}</h3>
          <div
            className={styles.perfilText}
            dangerouslySetInnerHTML={{
              __html: md.render(profile.profile_body),
            }}
          ></div>
          <Link href="/#mapa-de-medios">
            <a className={styles.link}>Volver al mapa</a>
          </Link>
        </div>
      </div>
    </Layout>
  ) : null;
}
