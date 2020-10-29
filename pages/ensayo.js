import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/ensayo.module.css';

export default function Ensayo() {
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
            Este es el título del artículo: <br />
            Título del artículo
          </h3>
          <picture>
            <source media="(min-width: 900px)" srcSet="/images/galaxy-der.png" />
            <img src="/images/galaxy-small-der.png" />
          </picture>
        </div>
        <div className={styles.ensayoContainer}>
          <div className={styles.ensayoText}>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit
            in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis
            dolore te feugait nulla facilisi.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit
            in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis
            dolore te feugait nulla facilisi.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit
            in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis
            dolore te feugait nulla facilisi.
            </p>
          </div>
          <Link href="/">
            <a className={styles.link}>Volver al inicio</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
