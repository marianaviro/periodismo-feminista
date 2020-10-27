import Head from 'next/head';
import Layout from '../../components/layout';
import MarkdownIt from 'markdown-it';
import db from '../../db.json';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
      <h1>{profile.profile_title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(profile.profile_body),
        }}
      ></div>
    </Layout>
  ) : null;
}
