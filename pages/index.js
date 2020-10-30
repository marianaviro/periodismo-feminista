import Head from 'next/head';
import Layout from '../components/layout';
import Map from '../components/map';
import CountryCard from '../components/countryCard';
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
            Ut wisi enim ad minim veniam, quis nostrud exerci.
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
          <Link href="/ensayo">
            <a className={styles.articleLink}>Leer ensayo</a>
          </Link>
        </div>
        <picture>
          <source media="(min-width: 900px)" srcSet="/images/galaxy-der.png" />
          <img src="/images/galaxy-small-der.png" />
        </picture>
      </div>
      <div className={styles.vizBannerContainer}>
        <div className={styles.vizBanner}>
          <div className={styles.vizBannerText}>
            <img className={styles.rayo} src="/images/rayo.svg"/>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>LOREM IPSUM DOLOR SIT AMET,</h3>
              <p className={styles.storyText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>
          <div className={styles.vizBannerIframe}>
            <BarChart></BarChart>
          </div>
        </div>
        <div className={styles.vizBanner}>
          <div className={styles.vizBannerText}>
            <img className={styles.rayo} src="/images/rayo.svg"/>
            <div className={styles.story}>
              <h3 className={styles.storyTitle}>LOREM IPSUM DOLOR SIT AMET,</h3>
              <p className={styles.storyText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>
          <div className={styles.vizBannerIframe}>
            <BarChart></BarChart>
          </div>
        </div>
      </div>
      <div id="mapa-de-medios">
        <div className={styles.mapaTitleContainer}>
          <div className={styles.mapaTitle}>
            <img className={styles.mapaTitleBg} src="/images/mapa-medios-bg.png"/>
            <img className={styles.mapaTitleSvg} src="/images/mapa-medios.svg"/>
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
