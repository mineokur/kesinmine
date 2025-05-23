// src/components/Navigation/Navigation.js
import React, { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    /* Hover'da ikon hafifçe büyüsün */
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="#home">Mine Okuroğulları</a> {/* Buraya kendi isminizi veya takma adınızı yazın */}
            </div>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menüyü Aç/Kapat">
                &#9776; {/* Hamburger ikonu */}
            </button>
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <li><a href="#home" onClick={closeMenu}>ANA SAYFA</a></li>
                <li><a href="#about" onClick={closeMenu}>BEN KİMİM?</a></li>
                <li><a href="#skills" onClick={closeMenu}>NELER YAPABİLİRİM?</a></li>
                <li><a href="#portfolio" onClick={closeMenu}>PORTFOLYO</a></li>
                <li><a href="#contact" onClick={closeMenu}>İLETİŞİM</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;