// src/components/Header/Header.js
import React from 'react';
import Navigation from '../Navigation/Navigation'; // Navigation bileşenini dahil ediyoruz
import styles from './Header.module.css'; // Header'a özel stiller için

const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation />
        </header>
    );
};
/* Hover'da ikon hafifçe büyüsün */
export default Header;