import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../styles/credits.module.css';

export default function Credits() {
  return (
    <Layout>
      <Head>
        <title>Cŕeditos</title>
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
              <h3>Sandra Beatriz Gutiérrez Bermúdez</h3>
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
        </div>
      </div>
    </Layout>
  );
}
