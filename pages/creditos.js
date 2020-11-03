import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../styles/credits.module.css';

export default function Credits() {
  return (
    <Layout>
      <Head>
        <title>Créditos</title>
      </Head>
      <div className={styles.acknowledge}>
        <div className={styles.credits}>
          <h1>Créditos</h1>
          <img src="/images/ilustracion-creditos.svg" alt="Ver créditos" />
        </div>
        <div className={styles.project}>
          <img src="/images/proyecto.svg" alt="Proyecto de grado de" />
          <h1>Johan Sebastián Romero Rodríguez</h1>
        </div>
        <div className={styles.separator}>
          <img src="/images/punto-final.svg" alt="Ilustración de rombo" />
        </div>
        <div className={styles.thanks}>
          <img
            src="/images/agradecimientos.svg"
            className="title"
            alt="Proyecto de grado de"
          />
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3>Sandra Sánchez López</h3>
              <p>Asesora de proyecto de grado</p>
            </div>
            <div className={styles.column}>
              <h3>Mariana Villamizar Rodríguez</h3>
              <p>Diseño y desarrollo web</p>
            </div>
            <div className={styles.column}>
              <h3>David Daza</h3>
              <p>Desarrollo de mapa interactivo</p>
            </div>
            <div className={styles.column}>
              <img
                src="/images/logo-uniandes.png"
                className={styles.logo}
                alt="Logo del Centro de Investigación y Creación de la Facultad de Artes y Humanidades de la Universidad de los Andes"
              />
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            En esta investigación se analizan catorce medios feministas de América Latina y sus respectivas publicaciones entre el 20 de noviembre de 2019 y el 15 de marzo de 2020 con el propósito de identificar sus similitudes y diferencias narrativas, sus audiencias y sus formas de financiamiento. En resumen, son catorce medios, ocho países y más de 1.200 artículos revisados. Los resultados son, por un lado, una cartografía, por supuesto aún incompleta, de los medios de la región; estos, presentados a partir de perfiles que rescatan su línea editorial. Por el otro, un ensayo elaborado a partir de los perfiles en los que, ya en conjunto, dialogan los unos con los otros, con medios que no son de la región y con el pasado. El objetivo final de este proyecto es que sea un espacio de consulta para quienes investigan en periodismo o para quienes quieren encontrar un medio feminista en su país o en otros países.
          </p>
        </div>
      </div>
    </Layout>
  );
}
