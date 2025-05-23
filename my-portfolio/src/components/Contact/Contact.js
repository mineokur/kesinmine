// src/components/Contact/Contact.js
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Gönderildi:', formData);
        alert('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.heading}>İletişim</h2>
                <p className={styles.subHeading}>Her türlü iş birliği ve soru için bana ulaşın.</p>

                <div className={styles.contactContent}>
                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Ad Soyad</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Adınız Soyadınız" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Mail</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="mail@example.com" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">İçerik</label>
                                <textarea id="message" name="message" rows="7" value={formData.message} onChange={handleChange} required placeholder="Mesajınızı buraya yazın..."></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Gönder
                                 <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>

                    <div className={styles.socialMedia}>
                        <h3>Beni Sosyal Medyada Takip Edin</h3>
                        <p>Dijital dünyanın bu köşelerinde de beni bulabilirsiniz.</p>
                        <div className={styles.socialLinksList}>
                            {/* Sadece ikonları bırakıyoruz, metinleri kaldırıyoruz */}
                            <a href="https://github.com/mineokur" target="_blank" rel="noopener noreferrer" className={styles.socialButton} title="GitHub Profilim">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialButton} title="LinkedIn Profilim">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialButton} title="X Profilim">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialButton} title="Facebook Profilim">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="mailto:mineokur67@gmail.com" className={styles.mailButton} title="Bana Mail Gönder">
                                <i className="fas fa-envelope"></i> mineokur67@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
/* Hover'da ikon hafifçe büyüsün */
export default Contact;