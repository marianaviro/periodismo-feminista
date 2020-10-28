import Head from 'next/head';
import Layout from '../../components/layout';
import MarkdownIt from 'markdown-it';
import db from '../../db.json';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/perfiles.module.css';

export default function Profile() {
  const router = useRouter();
  const { slug } = router.query;

  const md = new MarkdownIt({ breaks: true });
  const [profile, setProfile] = useState();

  useEffect(() => {
    const match = db.find((record) => record.slug === slug);
    setProfile(match);
  }, [slug]);

  return profile ? (
    <Layout>
      <Head>
        <title>{profile.profile_title} · Periodismo feminista</title>
      </Head>
      <div className={styles.perfil}>
        <div className={styles.titlePerfil}>
          <h1>{profile.profile_title}</h1>
          <img src="/images/ilustracion-creditos.svg" alt="Ver créditos" />
        </div>
        <div className={styles.textPerfil}>
          <div
            dangerouslySetInnerHTML={{
              __html: md.render(profile.profile_body),
            }}
          ></div>
        </div>
      </div>
    </Layout>
  ) : null;
}
