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
          <div className={styles.ensayoSubtitle}>
            <p>
            Al periodismo feminista el apellido no le quita lo de periodismo. Sin embargo, su forma de construir las historias propone una visión distinta a la de los medios tradicionales sobre la mujer. Tampoco es un fenómeno reciente, pues se pueden encontrar vínculos en el pasado, y la financiación para su supervivencia es su problema más antiguo.
            </p>
          </div>
          <div className={styles.ensayoText}
          dangerouslySetInnerHTML={{
            __html: md.render(essay.body),
          }}>
          </div>
          <div className={styles.ensayoReferences}>
            <h3>Referencias bibliográficas</h3>
            <ul>
              <li>Chamber, D., Steiner, L y Fleming, C. (2004). Women and Journalism. Londres; Nueva York: Routledge.</li>
              <li>SembraMedia. (2016). Punto de inflexión. Impacto, amenazas y sustentabilidad: estudio de emprendedores de medios digitales latinoamericanos. Recuperado de:&nbsp;
                <Link href="http://data.sembramedia.org/sumario/?lang=es">
                  <a>http://data.sembramedia.org/sumario/?lang=es</a>
                </Link>
              </li>
              <li>Zobl, E. y Drüeke, Ricarda. (Eds.) (2012). Feminist Media: Participatory Spaces, Networks and Cultural Citizenship. Bielefeld: Transcript Verlag. Recuperado de:&nbsp;
                <Link href="http://data.sembramedia.org/sumario/?lang=es">
                  <a>https://www.jstor.org/stable/j.ctv1wxr2f</a>
                </Link>
              </li>
              <li>Lienas, G. (2013). El diario violeta de Carlota. Barcelona: Planeta.</li>
            </ul>
          </div>
          <Link href="/">
            <a className={styles.link}>Volver al inicio</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
