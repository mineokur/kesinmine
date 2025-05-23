// src/components/About/About.js
import React from 'react';
import styles from './About.module.css';
import profileImage from '../../assets/images/img_1.png'; // Kendi profil görselinizi buraya ekleyin

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.heading}>Ben Kimim?</h2>
                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <img src={profileImage} alt="Profil Resmi" className={styles.profileImage} />
                        {/* Buraya kendi profil fotoğrafınızın yolunu güncelleyin */}
                    </div>
                    <div className={styles.textWrapper}>
                        <p>
                            Selam! Ben Mine Okuroğulları. Balıkesir Üniversitesi'nin genç ve dinamik 2. sınıf öğrencisi olarak yazılım dünyasında kendime sağlam bir yer edinme yolundayım.
                        </p>
                        <p>
                            Python, Node.js ve React gibi teknolojilerle projeler geliştirmeye bayılıyorum. Masaüstü uygulamaları söz konusu olduğunda ise PyQt6 ile çözüm odaklı adımlar atıyorum. Yaratıcılığımı ve problem çözme becerilerimi birleştirebileceğim her projeye açığım.
                        </p>
                        <p>
                            Dijital dünyanın dışında, örgü örerek, resim yaparak ve yeni diller öğrenerek ruhumu besliyor, farklı ufuklara yelken açıyorum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
/* Hover'da ikon hafifçe büyüsün */
export default About;