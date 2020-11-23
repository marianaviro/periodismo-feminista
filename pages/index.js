import Head from 'next/head';
import Layout from '../components/layout';
import Map from '../components/map';
import CountryCard from '../components/countryCard';
import Iframe from '../components/iframe';
import Link from 'next/link';
import Chart from 'chart.js';
import styles from '../styles/home.module.css';
import BarChart from '../components/barChart.js';
import { useState } from 'react';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState({ ISO_A3: 'ARG' });

  const onCountrySelected = (geo) => {
    setSelectedCountry(geo);
  };
  return (
    <Layout>
      <Head>
        <title>Periodismo feminista de América Latina</title>
      </Head>
      <div className={styles.homeIntro}>
        <div className={styles.homeIntroText}>
          <p>
            Este es un rastreo y análisis de catorce medios feministas de diferentes países de América Latina y sus respectivas publicaciones entre el 20 de noviembre de 2019, primera vez que el colectivo Las Tesis hizo público su performance “Un violador en tu camino”, y el 15 de marzo de 2020, una semana posterior a las marchas del 8 de marzo Día Internacional de la Mujer. Aquí se identifican sus similitudes y diferencias narrativas, sus audiencias y sus formas de financiamiento. Una interpretación crítica del periodismo feminista de en América Latina, sus trazos generales en conjunto y catorce perfiles específicos de los medios en el mapa de la región son el resultado de este proyecto. Quien lo consulte encontrará aquí un espacio para empaparse de este tipo de periodismo o encontrará un lugar para enriquecer su conocimiento.
          </p>
        </div>
        <div className={styles.homeIntroImage}>
          <img
            src="/images/vivas-libres.png"
            alt="Periodismo feminista de América Latina"
          />
        </div>
      </div>
      <div id="articulo" className={styles.articleBanner}>
        <picture>
          <source media="(min-width: 900px)" srcSet="/images/galaxy-izq.png" />
          <img src="/images/galaxy-small-izq.png" />
        </picture>
        <div className={styles.articleTitle}>
        <h3>
          Así se hace <span>periodismo feminista</span><br />
          en América Latina
        </h3>
          <Link href="/articulo">
            <a className={styles.articleLink}>Leer artículo</a>
          </Link>
        </div>
        <picture>
          <source media="(min-width: 900px)" srcSet="/images/galaxy-der.png" />
          <img src="/images/galaxy-small-der.png" />
        </picture>
      </div>
      <div id="medios-en-conjunto" className={styles.vizBannerContainer}>
        <div className={styles.storytelling}>
          <img src="/images/storytelling.svg" alt="Los medios en conjunto" />
        </div>
        <div className={styles.storysubtitle}>
          <h3>Así se ven los medios feministas de América Latina cuando se agrupan</h3>
        </div>
        <div className={styles.arrows}>
          <img src="/images/flecha_izq.svg" alt="Ilustración de flecha" />
          <img src="/images/flecha_der.svg" alt="Ilustración de flecha" />
        </div>
        <div className={styles.vizBanner}>
          <div className={styles.vizBannerText}>
            <img className={styles.rayo} src="/images/rayo.svg"/>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>Ecosistema de medios jóvenes</h3>
              <p className={styles.storyText}>
                En este ecosistema de medios solo hay uno que supera la mayoría
                de edad, pero esto no significa una explosión de medios
                feministas en años recientes. Es, más bien, la muestra de que
                mantenerse en funcionamiento por más de dos décadas es un logro
                al alcance de pocos. En la web, como fósiles, aún se pueden
                consultar medios feministas cuya vida no superó un lustro.
                Sin <Link href="/perfil/cimac-noticias"><a className={styles.navbarLink}>Cimac Noticias</a></Link>, el
                promedio de vida de los restantes trece medios es de cuatro años.
              </p>
            </div>
          </div>
          <div className={styles.vizBannerIframe}>
            <Iframe src="/viz/bars2.html"></Iframe>
          </div>
        </div>
        <div className={styles.vizBanner}>
          <div className={styles.vizBannerText}>
            <img className={styles.rayo} src="/images/rayo.svg"/>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>Pequeños, medianos, grandes y fuera de categoría</h3>
              <p className={styles.storyText}>
                Una de las mayores diferencias de estos catorce medios es la periodicidad
                de sus publicaciones. Aquí, si bien <Link href="/perfil/cimac-noticias"><a className={styles.navbarLink}>Cimac Noticias</a></Link> y <Link href="/perfil/voces-feministas"><a className={styles.navbarLink}>Voces Feministas</a></Link> forman
                parte de los medios fuera de categoría porque publican más de dos
                notas al día, es necesario mencionar que este último es en esencia un medio
                republicador, es decir, produce muy poco del contenido que aparece en su página
                web. Los grandes son <Link href="/perfil/latfem"><a className={styles.navbarLink}>Latfem</a></Link> y <Link href="/perfil/malvestida"><a className={styles.navbarLink}>Malvestida</a></Link> que
                en promedio sacan una nota al día
                y con tipos de contenido muy distintos. El primero apuesta por artículos largos;
                el segundo, por textos cortos.
              </p>
            </div>
          </div>
          <div className={styles.vizBannerIframe}>
            <Iframe src="/viz/bars.html"></Iframe>
          </div>
        </div>
        <div className={styles.vizBanner}>
          <div className={styles.vizBannerText}>
            <img className={styles.rayo} src="/images/rayo.svg"/>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>Más publicaciones no implica más seguidores</h3>
              <p className={styles.storyText}>
                El desempeño en redes se comporta de manera homogénea en la mayoría de los medios.
                Ninguno supera los 500.000 seguidores en alguna de las redes sociales, lo que hace
                pensar que su alcance aún es marginal respecto del alcance que pueden tener los
                medios tradicionales de sus respectivos países. Aquí destacan los tres picos, de
                tres medios, en tres redes sociales
                distintas. <Link href="/perfil/voces-feministas"><a className={styles.navbarLink}>Voces Feministas</a></Link> y <Link href="/perfil/malvestida"><a className={styles.navbarLink}>Malvestida</a></Link> son
                dos de los medios que más publican, lo que podría explicar su éxito en redes.
                Sin embargo, <Link href="/perfil/economia-feminita"><a className={styles.navbarLink}>Economía Femini(s)ta</a></Link> tiene un
                promedio de publicación de tres artículos al mes, pero es el medio con más seguidores
                en Twitter.
              </p>
            </div>
          </div>
          <div className={styles.vizBannerIframe}>
            <Iframe src="/viz/groupedbars.html"></Iframe>
          </div>
        </div>
        <div className={styles.vizBanner}>
          <div className={styles.vizBannerText}>
            <img className={styles.rayo} src="/images/rayo.svg"/>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>Medios, en esencia, noticiosos</h3>
              <p className={styles.storyText}>
                Entre el 20 de noviembre de 2019 y el 15 de marzo de 2020, estos
                catorce medios publicaron juntos 1.236 artículos en sus páginas web.
                Más del 40% de esas publicaciones fueron noticias sobre hechos puntuales
                de cada país: una movilización feminista, la aprobación de una ley
                contra la violencia, la denuncia de un feminicidio. Notas cortas con
                información específica.
              </p>
            </div>
          </div>
          <div className={styles.vizBannerIframe}>
            <Iframe src="/viz/bubbles.html"></Iframe>
          </div>
        </div>
        <div className={styles.vizBanner}>
          <div className={styles.vizBannerText}>
            <img className={styles.rayo} src="/images/rayo.svg"/>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>Sitios para informarse sobre las movilizaciones</h3>
              <p className={styles.storyText}>
                Por fuera de las categorías periodísticas, más del 50% de los artículos
                tienen un carácter explicativo en sentido amplio, es decir, cuentan o
                evidencian alguna problemática que va desde por qué los piropos en la
                calle son acoso hasta cómo hacerle el test de Bechdel a una película.
                Ahora, lo más relevante es que por su naturaleza estos medios cubren los
                movimientos feministas de sus países e informan constantemente sobre las
                manifestaciones y marchas que se hacen en el continente, de ahí que más del
                20% de sus artículo sean precisamente sobre este tema.
              </p>
            </div>
          </div>
          <div className={styles.vizBannerIframe}>
            <Iframe src="/viz/bubbles2.html"></Iframe>
          </div>
        </div>
      </div>
      <div className={styles.mapaExternalContainer}>
        <div className={styles.mapaTitleContainer}>
          <div id="mapa-de-medios" className={styles.mapaTitle}>
            <img className={styles.mapaTitleBg} src="/images/mapa-medios-bg.png"/>
            <img className={styles.mapaTitleSvg} src="/images/mapa-medios.svg"/>
          </div>
          <div className={styles.mapaSubtitle}>
            <p>Más de 1.200 artículos en ocho países son la base de esta cartografía</p>
          </div>
          <div className={styles.arrows}>
            <img src="/images/flecha_izq.svg" alt="Ilustración de flecha" />
            <img src="/images/flecha_der.svg" alt="Ilustración de flecha" />
          </div>
          <div className={styles.directions}>
            <p>Selecciona algún país para consultar los medios que hemos identificado.</p>
          </div>
        </div>
        <div className={styles.mapaContainer}>
          <CountryCard
            selectedCountry={selectedCountry}
          />
          <Map
            selectedCountry={selectedCountry}
            onCountrySelected={onCountrySelected}
          />
        </div>
        <div className={styles.fuego}>
        </div>
      </div>
    </Layout>
  );
}
