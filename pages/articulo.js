import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import essay from '../essay.json';
import styles from '../styles/articulo.module.css';

export default function Articulo() {

  const md = new MarkdownIt({ breaks: true });

  return (
    <Layout>
      <Head>
        <title>Artículo</title>
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
              <li>Abreu López, A. (10 de julio de 2018). ‘Las Gafas Violetas’: de un trabajo de clase a una revista feminista. AmecoPress.
              Recuperado de:&nbsp;
                <Link href="https://amecopress.net/Las-Gafas-Violetas-de-un-trabajo-de-clase-a-una-revista-feminista">
                  <a>https://amecopress.net/Las-Gafas-Violetas-de-un-trabajo-de-clase-a-una-revista-feminista</a>
                </Link>
              </li>
              <li>Arenas, N. (8 de julio de 2020). Junio: 24 mujeres asesinadas. Cerosetenta.
              Recuperado de:&nbsp;
                <Link href="https://cerosetenta.uniandes.edu.co/junio-feminicidios/">
                  <a>https://cerosetenta.uniandes.edu.co/junio-feminicidios/</a>
                </Link>
              </li>
              <li>Chamber, D., Steiner, L y Fleming, C. (2004). Women and Journalism. Londres; Nueva York: Routledge.</li>
              <li>GMMP. (2015). América Latina. Proyecto de Monitoreo Global de Medios 2015 Informe Regional.
              Recuperado de:&nbsp;
                <Link href="http://whomakesthenews.org/gmmp/gmmp-reports/gmmp-2015-reports">
                  <a>http://whomakesthenews.org/gmmp/gmmp-reports/gmmp-2015-reports</a>
                </Link>
              </li>
              <li>Jardine, A. (2010). What Feminism? French Politics, Culture & Society, 28(2), 66-74. doi:10.3167/fpcs.2010.280206</li>
              <li>Lienas, G. (2013). El diario violeta de Carlota. Barcelona: Planeta.</li>
              <li>Observatorio Feminicidios Colombia. (marzo, 2020). Vivas nos queremos.
              Recuperado de:&nbsp;
                <Link href="https://observatoriofeminicidioscolombia.org/index.php/seguimiento/boletin-nacional/424-vivas-nos-queremos-boletin-mensual-sobre-feminicidios-en-colombia-marzo-de-2020">
                  <a>https://observatoriofeminicidioscolombia.org/index.php/seguimiento/boletin-nacional/424-vivas-nos-queremos-boletin-mensual-sobre-feminicidios-en-colombia-marzo-de-2020</a>
                </Link>
              </li>
              <li>Sánchez, S. (s. f.). Mujeres de prensa. El pasado impreso.
              Recuperado de:&nbsp;
                <Link href="https://pasadoimpreso.uniandes.edu.co/mujeres-de-prensa">
                  <a>https://pasadoimpreso.uniandes.edu.co/mujeres-de-prensa</a>
                </Link>
              </li>
              <li>SembraMedia. (2016). Punto de inflexión. Impacto, amenazas y sustentabilidad: estudio de emprendedores de medios digitales latinoamericanos.
              Recuperado de:&nbsp;
                <Link href="http://data.sembramedia.org/sumario/?lang=es">
                  <a>http://data.sembramedia.org/sumario/?lang=es</a>
                </Link>
              </li>
              <li>Tytarenko, M. (2012). Female Narrative Journalism in Contemporary Ukraine. World Literature Today, 86(2), 45-49. doi.org/10.7588/worllitetoda.86.2.0045</li>
              <li>UNESCO. (2010). Por un periodismo no sexista: pautas para comunicar desde una perspectiva de género en Chile.
              Recuperado de:&nbsp;
                <Link href="https://unesdoc.unesco.org/ark:/48223/pf0000190143">
                  <a>https://unesdoc.unesco.org/ark:/48223/pf0000190143</a>
                </Link>
              </li>
              <li>Zobl, E. y Drüeke, Ricarda. (Eds.) (2012). Feminist Media: Participatory Spaces, Networks and Cultural Citizenship. Bielefeld: Transcript Verlag.
              Recuperado de:&nbsp;
                <Link href="https://www.jstor.org/stable/j.ctv1wxr2f">
                  <a>https://www.jstor.org/stable/j.ctv1wxr2f</a>
                </Link>
              </li>
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
