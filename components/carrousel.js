import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image'
import styles from './carrusel.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function tarjetas({txs}){
  return (
    <div className={styles.contenedor}>
    <Carousel className={styles.carrousel}>
      <Carousel.Item>
      <div className={styles.item}>
      <div onClick={() => window.open('https://gitlab.com/UrielMarles/keystonedb', '_blank')} className={`${styles.linkable} image-container`}>
      <Image src="/images/experienceProjects/keystone_banner.png" alt="LOGO AVE" width={600} height={250} />
      </div>
            <h4>{txs[25]}<br/> <b>{txs[29]}</b></h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.item}>
      <div onClick={() => window.open('https://github.com/UrielMarles/VISIBLENT', '_blank')} className={`${styles.linkable} image-container`}>
      <Image src="/images/experienceProjects/TITULO.png" alt="LOGO AVE" width={600} height={250} />
      </div>
            <h4>{txs[26]}<br/> <b>{txs[29]}</b>
            </h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.item}>
      <div onClick={() => window.open('https://github.com/UrielMarles/RENT-A-TRONIC', '_blank')} className={`${styles.linkable} image-container`}>
      <Image src="/images/experienceProjects/RENTA.gif" alt="LOGO AVE" width={600} height={250} />
      </div>
            <h4>{txs[27]}<br/> <b>{txs[29]}</b>
            </h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.item}>
      <div onClick={() => window.open('https://github.com/UrielMarles/portfolio', '_blank')} className={`${styles.linkable} image-container`}>
      <Image src="/images/experienceProjects/RECURSIVO.gif" alt="LOGO AVE" width={700} height={400} />
      </div>
            <h4>{txs[28]}<br/> <b>{txs[29]}</b>
            </h4>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};
