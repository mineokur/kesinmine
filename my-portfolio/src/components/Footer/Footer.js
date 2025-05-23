// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.footerText}>
                    &copy; {currentYear} {' '}
                    <a href="#home" className={styles.footerLink}>
                        Mine Okuroğulları
                    </a>
                    . Tüm Hakları Saklıdır.
                </p>
                {/* Bu kısım ikonları eklediğimiz yer */}
                <div className={styles.socialIcons}>
                    {/* GitHub ikonu */}
                    <a href="https://github.com/mineokur" target="_blank" rel="noopener noreferrer" title="GitHub Profilim">
                        <i className="fab fa-github"></i> {/* fab: Font Awesome Brands */}
                    </a>
                    {/* LinkedIn ikonu */}
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn Profilim">
                        <i className="fab fa-linkedin-in"></i> {/* LinkedIn ikonu için fab fa-linkedin-in daha yaygın */}
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialButton} title="X Profilim">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialButton} title="Facebook Profilim">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="mailto:mineokur67@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialButton} title="Bana Mail Gönder">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};
/* Hover'da ikon hafifçe büyüsün */
export default Footer;