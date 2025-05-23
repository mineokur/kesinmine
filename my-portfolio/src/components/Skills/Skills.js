// src/components/Skills/Skills.js
import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    const skillsList = [
        { name: 'React.js', level: 'Orta Düzey', icon: 'fab fa-react' },
        { name: 'JavaScript', level: 'Orta Düzey', icon: 'fab fa-js' },
        { name: 'C#', level: 'Orta Düzey', icon: 'fas fa-code' },
        { name: 'Python', level: 'Orta Düzey', icon: 'fa-brands fa-python' },
        { name: 'İngilizce', level: 'İleri Düzey', icon: 'fa-solid fa-language' },
        { name: 'Almanca', level: 'Temel Düzey', icon: 'fa-solid fa-language' },
        { name: 'Korece', level: 'Temel Düzey', icon: 'fa-solid fa-language' },
        // Daha fazla yetenek ekleyebilirsiniz
    ];


    return (
        <section id="skills" className={styles.skills}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.heading}>Neler Yapabilirim?</h2>
                <p className={styles.subHeading}></p>
                <div className={styles.skillsGrid}>
                    {skillsList.map((skill, index) => (
                        <div key={index} className={styles.skillCard}>
                            <i className={`${skill.icon} ${styles.skillIcon}`}></i>
                            <p className={styles.skillName}>{skill.name}</p>
                            <p className={styles.skillLevel}>{skill.level}</p> {/* Seviye bilgisini ekledik */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;