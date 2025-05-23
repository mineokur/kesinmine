// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import backgroundImage from '../../assets/images/img.png'; // Kendi görselinizi buraya ekleyin

const Hero = () => {
    return (
        <section id="home" className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.overlay}></div>
            <div className={`${styles.container} container`}>
                <p className={styles.greeting}>Hoş Geldiniz, benim adım</p>
                <h1 className={styles.name}>Mine Okuroğulları</h1>
                <p className={styles.tagline}>Bir bilgisayar mühendisi adayıyım.</p>
                <div className={styles.buttons}>
                    <a href="#portfolio" className={styles.primaryButton}>Portfolyo</a>
                    <a href="#contact" className={styles.secondaryButton}>Bana Ulaşın</a>
                </div>
            </div>
        </section>
    );
};
/* Hover'da ikon hafifçe büyüsün */
export default Hero;