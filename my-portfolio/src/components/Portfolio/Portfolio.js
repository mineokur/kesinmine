// src/components/Portfolio/Portfolio.js
import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'Metin Düzenleme Uygulaması',
            image: 'https://i.pinimg.com/736x/06/9a/b2/069ab2eb3ce5e4ffc0517b752263c97a.jpg',
            description: 'Bu proje, metin düzenleme ve dosya kaydetme/açma gibi temel işlevlere sahip basit bir not defteri uygulamasıdır . [Kullanılan teknolojiler: Pyqt6, Python]',
            link: 'https://github.com/mineokur/metin-duzenleme-uygulama.git' // Proje detay linki veya GitHub linki
        },
        {
            title: 'Yemek Tarifi Uygulaması',
            image: 'https://i.pinimg.com/736x/d7/fb/c3/d7fbc3f9c6dd709e588241f130232fed.jpg',
            description: 'Bu proje, kullanıcıların tarif ekleyip görüntüleyebildiği ve üye girişi yapabildiği yemek tarifi defteridir. [Kullanılan teknolojiler: Python, Pyqt6, SQLite]',
            link: 'https://github.com/mineokur/yemek-tarifi-uygulama.git'
        },
        {
            title: 'Soru Bankası Uygulaması',
            image: 'https://i.pinimg.com/736x/3b/9d/7b/3b9d7b748c886423a0bb950a51ceddbf.jpg',
            description: 'Bu proje, kullanıcıların soru ekleyebildiği, bu sorulardan bir soru bankası oluşturabildiği ve oluşturulan bankayı Excele aktarabildiğibir sorubankası yönetimsistemidir. [Kullanılan teknolojiler:Python, Pyqt6, SQLite]',
            link: 'https://github.com/mineokur/soru-bankasi-uygulama.git'
        },
        // Daha fazla proje ekleyin
    ];

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.heading}>Portfolyo</h2>
                <p className={styles.subHeading}></p>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
                            <div className={styles.projectInfo}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    Projeyi İncele <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Portfolio;