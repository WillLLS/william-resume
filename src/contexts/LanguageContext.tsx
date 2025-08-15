'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr' | 'de' | 'it';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.technicalDetails': 'Technical Details',
    
    // Hero Section
    'hero.title': 'WILLIAM LALIS',
    'hero.subtitle': 'Embedded Systems & IoT Engineer | Python | C/C++',
    'hero.citizenship': 'French & EU citizen • Open to relocation or remote',
    'hero.location': 'Hamburg, Germany',
    
    // About Section
    'about.title': 'PROFILE',
    'about.description': 'French embedded systems engineer with a solid background in C/C++, Python, and IoT development. Passionate about building software and hardware interfaces, with professional experience in firmware development, API integration, and prototyping. Looking for a full-time opportunity in Hamburg (or remote) within a company that develops and markets SaaS products, to grow both technically and strategically.',
    
    // Experience Section
    'experience.title': 'PROFESSIONAL EXPERIENCE',
    'experience.symphony.title': 'R&D&I Engineer - SYMPHONY 3D',
    'experience.symphony.period': '2023 - 2024 | Full-time',
    'experience.symphony.point1': 'Led end-to-end development of embedded IoT solutions, from hardware integration to firmware deployment (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Designed and deployed reliable server communication protocols for remote 3D printer control',
    'experience.symphony.point3': 'Engineered a novel proof-of-concept for jetting-based 3D printing, enabling micro-precision material deposition',
    'experience.symphony.point4': 'Built robust pipelines for sensor data acquisition and preprocessing to train custom deep learning models (PyTorch)',
    
    'experience.technicatome.title': 'Consultant - Technicatome',
    'experience.technicatome.period': '2024 - Coordination & Customer Service Management',
    'experience.technicatome.point1': 'Coordinated after-sales support operations: ticket tracking, intervention prioritization, and processing time optimization',
    'experience.technicatome.point2': 'Managed client and supplier relationships to ensure proper resolution of after-sales service cases',
    'experience.technicatome.point3': 'Monitored repairs and supplier interventions through case closure',
    'experience.technicatome.point4': 'Drafted and updated service-related documentation (reports, procedures, minutes)',
    
    'experience.technicatome_consultant.title': 'Consultant - Technicatome',
    'experience.technicatome_consultant.period': '2025 - Present | Developer',
    'experience.technicatome_consultant.project1.title': 'Project 1 - Secure Binary Signing API (Autonomous, project owner)',
    'experience.technicatome_consultant.project1.point1': 'Designed and developed a Flask-based API for binary signing using a Hardware Security Module (HSM) and PKCS#11',
    'experience.technicatome_consultant.project1.point2': 'Built a secure SQL database and deployed the solution in a closed, secure network',
    'experience.technicatome_consultant.project1.point3': 'Proposed and implemented system architecture using Nginx, Gunicorn, and Flask',
    'experience.technicatome_consultant.project1.point4': 'Produced full technical documentation for deployment and maintenance',
    'experience.technicatome_consultant.project2.title': 'Project 2 - PyQt Graphical Interface for Actuator Module Testing (Autonomous, project owner)',
    'experience.technicatome_consultant.project2.point1': 'Developed a PyQt application for actuator module acceptance testing',
    'experience.technicatome_consultant.project2.point2': 'Implemented Modbus protocol for broadcast/unicast command sending',
    'experience.technicatome_consultant.project2.point3': 'Designed a manual frame editing interface for advanced control operations',
    
    'experience.freelance.title': 'Freelance Developer',
    'experience.freelance.period': '2023 - Present',
    'experience.freelance.point1': 'Built SaaS-oriented Telegram bots for automation, subscription management, and API-based services',
    'experience.freelance.point2': 'Developed crypto trading tools (Solana, Helius API) for token monitoring and automated sniping',
    'experience.freelance.point3': 'Delivered custom Python automation scripts and scraping solutions for clients',
    
    'experience.other.title': 'Other Work Experience',
    'experience.other.bar.title': 'Bar Assistant - Local Bar-Tabac',
    'experience.other.bar.period': 'June 2021 - Dec 2021',
    'experience.other.bar.point1': 'Managed bar operations, including drink preparation and service',
    'experience.other.bar.point2': 'Welcomed and seated customers, ensuring a positive guest experience',
    'experience.other.bar.point3': 'Maintained cleanliness and organization of the bar area',
    'experience.other.bar.point4': 'Handled customer payments and transactions',
    'experience.other.repair.title': 'Sales & Repair Assistant - La Cordonnerie',
    'experience.other.repair.period': 'Summer 2019 & Summer 2020',
    'experience.other.repair.point1': 'Performed shoe and leather goods repairs (stitching, sole replacement, handbag restoration)',
    'experience.other.repair.point2': 'Provided key duplication services with precision and quality control',
    'experience.other.repair.point3': 'Managed supplier orders and inventory follow-up',
    'experience.other.repair.point4': 'Welcomed and assisted customers, ensuring personalized service and issue resolution',
    'experience.other.pool.title': 'Seasonal Worker - Swimming Pool Staff',
    'experience.other.pool.period': 'Summer 2018',
    
    'experience.sensivic.title': 'R&D Engineer Intern - SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Developed real-time embedded firmware for high-frequency acoustic detection systems using ESP32 and C++',
    
    // Skills Section
    'skills.title': 'SKILLS',
    'skills.embedded.title': 'Embedded Systems & IoT',
    'skills.embedded.item1': 'ESP32/ESP-IDF, Raspberry Pi, Arduino',
    'skills.embedded.item2': 'FreeRTOS, Real-time systems',
    'skills.embedded.item3': 'LoRa, Wi-Fi, BLE protocols',
    'skills.embedded.item4': 'I2C, SPI, UART communication',
    'skills.embedded.item5': 'Low-power optimization',
    'skills.programming.title': 'Programming',
    'skills.programming.item1': 'C/C++ (Embedded & Desktop)',
    'skills.programming.item2': 'Python (Flask, PyQt, Automation)',
    'skills.programming.item3': 'JavaScript/TypeScript (Node.js)',
    'skills.programming.item4': 'SQL, Database design',
    'skills.programming.item5': 'Git, Docker, CI/CD',
    'skills.web.title': 'Web & Servers',
    'skills.web.item1': 'Flask, RESTful APIs',
    'skills.web.item2': 'Nginx, Gunicorn deployment',
    'skills.web.item3': 'Linux server administration',
    'skills.web.item4': 'Web scraping (Selenium, BeautifulSoup)',
    'skills.web.item5': 'MQTT, WebSocket protocols',
    'skills.cad.title': 'CAD & Tools',
    'skills.cad.item1': 'Fusion 360 (3D modeling)',
    'skills.cad.item2': 'EasyEDA (PCB design)',
    'skills.cad.item3': '3D printing maintenance',
    'skills.cad.item4': 'Oscilloscope, Multimeter',
    'skills.cad.item5': 'Virtual environments, Testing',
    
    // Education Section
    'education.title': 'EDUCATION',
    'education.master.title': 'Master of Science - Internet of Things (Data Science)',
    'education.master.school': 'École de l\'IoT - Orléans, France',
    'education.master.watchVideo': 'Watch Video',
    'education.master.videoTitle': 'École de l\'IoT Presentation',
    'education.engineering.title': 'Engineering Degree - Embedded Systems & Applied Physics',
    'education.engineering.school': 'Polytech Orléans - France',
    'education.erasmus.title': 'Erasmus+ - Computer Science',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila - Italy',
    'education.cpge.title': 'CPGE - Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo - Caen, France',
    'education.baccalaureat.title': 'French Baccalauréat - Physics & Chemistry, Music (Honors)',
    'education.baccalaureat.school': 'Lycée Guillaume le Conquérant - France',
    'education.music.title': 'Music study certificate',
    'education.music.school': 'Music Academy - Lillebonne, France',
    'education.music.option': 'Piano option',
    
    // Footer
    'footer.languages': 'Languages: French (Native) • English (Fluent C1)',
    'footer.citizenship': 'French & EU citizen • Open to relocation or remote',
    'footer.rights': '© 2025 William Lalis. All rights reserved.',
  },
  
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.education': 'Formation',
    'nav.technicalDetails': 'Détails Techniques',
    
    // Hero Section
    'hero.title': 'WILLIAM LALIS',
    'hero.subtitle': 'Ingénieur Systèmes Embarqués & IoT | Python | C/C++',
    'hero.citizenship': 'Citoyen français et européen • Ouvert à la relocalisation ou au télétravail',
    'hero.location': 'Hambourg, Allemagne',
    
    // About Section
    'about.title': 'PROFIL',
    'about.description': 'Ingénieur français en systèmes embarqués avec une solide expérience en C/C++, Python et développement IoT. Passionné par la création d\'interfaces logicielles et matérielles, avec une expérience professionnelle en développement firmware, intégration d\'API et prototypage. À la recherche d\'une opportunité à temps plein à Hambourg (ou en télétravail) dans une entreprise qui développe et commercialise des produits SaaS, pour évoluer techniquement et stratégiquement.',
    
    // Experience Section
    'experience.title': 'EXPÉRIENCE PROFESSIONNELLE',
    'experience.symphony.title': 'Ingénieur R&D&I - SYMPHONY 3D',
    'experience.symphony.period': '2023 - 2024 | Temps plein',
    'experience.symphony.point1': 'Direction du développement de bout en bout de solutions IoT embarquées, de l\'intégration matérielle au déploiement firmware (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Conception et déploiement de protocoles de communication serveur fiables pour le contrôle d\'imprimantes 3D à distance',
    'experience.symphony.point3': 'Ingénierie d\'une preuve de concept novatrice pour l\'impression 3D par jet, permettant un dépôt de matériau de micro-précision',
    'experience.symphony.point4': 'Construction de pipelines robustes pour l\'acquisition et le prétraitement de données de capteurs pour entraîner des modèles d\'apprentissage automatique personnalisés (PyTorch)',
    
    'experience.technicatome.title': 'Consultant - Technicatome',
    'experience.technicatome.period': '2024 - Mission de coordination et gestion du SAV',
    'experience.technicatome.point1': 'Coordination des opérations de support après-vente : suivi des tickets, priorisation des interventions et optimisation des délais de traitement',
    'experience.technicatome.point2': 'Gestion des relations avec les clients et les fournisseurs pour assurer la bonne résolution des dossiers SAV',
    'experience.technicatome.point3': 'Suivi des réparations et interventions chez les fournisseurs jusqu\'à clôture des dossiers',
    'experience.technicatome.point4': 'Rédaction et mise à jour des documents liés à la prestation (rapports, procédures, comptes rendus)',
    
    'experience.technicatome_consultant.title': 'Consultant - Technicatome',
    'experience.technicatome_consultant.period': '2025 - Présent | Développeur',
    'experience.technicatome_consultant.project1.title': 'Projet 1 - API de Signature Binaire Sécurisée (Autonome, responsable projet)',
    'experience.technicatome_consultant.project1.point1': 'Conception et développement d\'une API Flask pour la signature binaire utilisant un module de sécurité matériel (HSM) et PKCS#11',
    'experience.technicatome_consultant.project1.point2': 'Construction d\'une base de données SQL sécurisée et déploiement de la solution dans un réseau fermé et sécurisé',
    'experience.technicatome_consultant.project1.point3': 'Proposition et implémentation d\'une architecture système utilisant Nginx, Gunicorn et Flask',
    'experience.technicatome_consultant.project1.point4': 'Production de documentation technique complète pour le déploiement et la maintenance',
    'experience.technicatome_consultant.project2.title': 'Projet 2 - Interface Graphique PyQt pour Tests de Modules d\'Actionneurs (Autonome, responsable projet)',
    'experience.technicatome_consultant.project2.point1': 'Développement d\'une application PyQt pour les tests d\'acceptation de modules d\'actionneurs',
    'experience.technicatome_consultant.project2.point2': 'Implémentation du protocole Modbus pour l\'envoi de commandes broadcast/unicast',
    'experience.technicatome_consultant.project2.point3': 'Conception d\'une interface d\'édition manuelle de trames pour opérations de contrôle avancées',
    
    'experience.freelance.title': 'Développeur Freelance',
    'experience.freelance.period': '2023 - Présent',
    'experience.freelance.point1': 'Construction de bots Telegram orientés SaaS pour automatisation, gestion d\'abonnements et services basés sur API',
    'experience.freelance.point2': 'Développement d\'outils de trading crypto (Solana, API Helius) pour surveillance de tokens et sniping automatisé',
    'experience.freelance.point3': 'Livraison de scripts d\'automatisation Python personnalisés et solutions de scraping pour clients',
    
    'experience.other.title': 'Autres Expériences Professionnelles',
    'experience.other.bar.title': 'Assistant de Bar - Bar-Tabac Local',
    'experience.other.bar.period': 'Juin 2021 - Déc 2021',
    'experience.other.bar.point1': 'Gestion des opérations de bar, y compris préparation et service des boissons',
    'experience.other.bar.point2': 'Accueil et placement des clients, garantissant une expérience client positive',
    'experience.other.bar.point3': 'Maintien de la propreté et organisation de l\'espace bar',
    'experience.other.bar.point4': 'Gestion des paiements et transactions clients',
    'experience.other.repair.title': 'Assistant Vente & Réparation - La Cordonnerie',
    'experience.other.repair.period': 'Été 2019 & Été 2020',
    'experience.other.repair.point1': 'Réparations de chaussures et maroquinerie (couture, remplacement semelles, restauration sacs)',
    'experience.other.repair.point2': 'Services de duplication de clés avec précision et contrôle qualité',
    'experience.other.repair.point3': 'Gestion des commandes fournisseurs et suivi des stocks',
    'experience.other.repair.point4': 'Accueil et assistance clients, garantissant service personnalisé et résolution de problèmes',
    'experience.other.pool.title': 'Employé Saisonnier - Personnel Piscine',
    'experience.other.pool.period': 'Été 2018',
    
    'experience.sensivic.title': 'Stagiaire Ingénieur R&D - SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Développement de firmware embarqué temps réel pour systèmes de détection acoustique haute fréquence utilisant ESP32 et C++',
    
    // Skills Section
    'skills.title': 'COMPÉTENCES',
    'skills.embedded.title': 'Systèmes Embarqués & IoT',
    'skills.embedded.item1': 'ESP32/ESP-IDF, Raspberry Pi, Arduino',
    'skills.embedded.item2': 'FreeRTOS, systèmes temps réel',
    'skills.embedded.item3': 'Protocoles LoRa, Wi-Fi, BLE',
    'skills.embedded.item4': 'Communication I2C, SPI, UART',
    'skills.embedded.item5': 'Optimisation basse consommation',
    'skills.programming.title': 'Programmation',
    'skills.programming.item1': 'C/C++ (Embarqué & Desktop)',
    'skills.programming.item2': 'Python (Flask, PyQt, Automatisation)',
    'skills.programming.item3': 'JavaScript/TypeScript (Node.js)',
    'skills.programming.item4': 'SQL, conception base de données',
    'skills.programming.item5': 'Git, Docker, CI/CD',
    'skills.web.title': 'Web & Serveurs',
    'skills.web.item1': 'Flask, APIs RESTful',
    'skills.web.item2': 'Déploiement Nginx, Gunicorn',
    'skills.web.item3': 'Administration serveur Linux',
    'skills.web.item4': 'Scraping web (Selenium, BeautifulSoup)',
    'skills.web.item5': 'Protocoles MQTT, WebSocket',
    'skills.cad.title': 'CAO & Outils',
    'skills.cad.item1': 'Fusion 360 (modélisation 3D)',
    'skills.cad.item2': 'EasyEDA (conception PCB)',
    'skills.cad.item3': 'Maintenance impression 3D',
    'skills.cad.item4': 'Oscilloscope, Multimètre',
    'skills.cad.item5': 'Environnements virtuels, Tests',
    
    // Education Section
    'education.title': 'FORMATION',
    'education.master.title': 'Master of Science - Internet des Objets (Science des Données)',
    'education.master.school': 'École de l\'IoT - Orléans, France',
    'education.master.watchVideo': 'Regarder la vidéo',
    'education.master.videoTitle': 'Présentation de l\'École de l\'IoT',
    'education.engineering.title': 'Diplôme d\'Ingénieur - Systèmes Embarqués & Physique Appliquée',
    'education.engineering.school': 'Polytech Orléans - France',
    'education.erasmus.title': 'Erasmus+ - Informatique',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila - Italie',
    'education.cpge.title': 'CPGE - Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo - Caen, France',
    'education.baccalaureat.title': 'Baccalauréat Français - Physique & Chimie, Musique (Mention)',
    'education.baccalaureat.school': 'Lycée Guillaume le Conquérant - France',
    'education.music.title': 'Brevet d\'études musicales',
    'education.music.school': 'Académie de Musique - Lillebonne, France',
    'education.music.option': 'Option Piano',
    
    // Footer
    'footer.languages': 'Langues : Français (Natif) • Anglais (Courant C1)',
    'footer.citizenship': 'Citoyen français et européen • Ouvert à la relocalisation ou au télétravail',
    'footer.rights': '© 2025 William Lalis. Tous droits réservés.',
  },
  
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.experience': 'Erfahrung',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Bildung',
    'nav.technicalDetails': 'Technische Details',
    
    // Hero Section
    'hero.title': 'WILLIAM LALIS',
    'hero.subtitle': 'Embedded Systems & IoT Ingenieur | Python | C/C++',
    'hero.citizenship': 'Französischer & EU-Bürger • Offen für Umzug oder Remote-Arbeit',
    'hero.location': 'Hamburg, Deutschland',
    
    // About Section
    'about.title': 'PROFIL',
    'about.description': 'Französischer Embedded-Systems-Ingenieur mit solidem Hintergrund in C/C++, Python und IoT-Entwicklung. Leidenschaftlich beim Aufbau von Software- und Hardware-Schnittstellen, mit Berufserfahrung in Firmware-Entwicklung, API-Integration und Prototyping. Suche eine Vollzeitstelle in Hamburg (oder remote) in einem Unternehmen, das SaaS-Produkte entwickelt und vermarktet, um sowohl technisch als auch strategisch zu wachsen.',
    
    // Experience Section
    'experience.title': 'BERUFSERFAHRUNG',
    'experience.symphony.title': 'F&E&I Ingenieur - SYMPHONY 3D',
    'experience.symphony.period': '2023 - 2024 | Vollzeit',
    'experience.symphony.point1': 'Leitung der End-to-End-Entwicklung eingebetteter IoT-Lösungen, von der Hardware-Integration bis zur Firmware-Bereitstellung (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Entwurf und Bereitstellung zuverlässiger Server-Kommunikationsprotokolle für die Fernsteuerung von 3D-Druckern',
    'experience.symphony.point3': 'Entwicklung eines neuartigen Proof-of-Concept für strahlbasiertes 3D-Drucken, das Mikropräzisions-Materialabscheidung ermöglicht',
    'experience.symphony.point4': 'Aufbau robuster Pipelines für Sensordatenerfassung und -vorverarbeitung zum Training maßgeschneiderter Deep-Learning-Modelle (PyTorch)',
    
    'experience.technicatome.title': 'Berater - Technicatome',
    'experience.technicatome.period': '2024 - Koordination und Kundendienstverwaltung',
    'experience.technicatome.point1': 'Koordination von Kundendienstoperationen: Ticket-Verfolgung, Interventionspriorisierung und Optimierung der Bearbeitungszeiten',
    'experience.technicatome.point2': 'Verwaltung von Kunden- und Lieferantenbeziehungen zur ordnungsgemäßen Lösung von Kundendienstfällen',
    'experience.technicatome.point3': 'Überwachung von Reparaturen und Lieferanteninterventionen bis zum Fallabschluss',
    'experience.technicatome.point4': 'Erstellung und Aktualisierung dienstleistungsbezogener Dokumentation (Berichte, Verfahren, Protokolle)',
    
    'experience.technicatome_consultant.title': 'Berater - Technicatome',
    'experience.technicatome_consultant.period': '2025 - Heute | Entwickler',
    'experience.technicatome_consultant.project1.title': 'Projekt 1 - Sichere Binär-Signatur-API (Autonom, Projektverantwortlicher)',
    'experience.technicatome_consultant.project1.point1': 'Entwurf und Entwicklung einer Flask-basierten API für Binär-Signierung mit Hardware-Sicherheitsmodul (HSM) und PKCS#11',
    'experience.technicatome_consultant.project1.point2': 'Aufbau einer sicheren SQL-Datenbank und Bereitstellung der Lösung in einem geschlossenen, sicheren Netzwerk',
    'experience.technicatome_consultant.project1.point3': 'Vorschlag und Implementierung einer Systemarchitektur mit Nginx, Gunicorn und Flask',
    'experience.technicatome_consultant.project1.point4': 'Erstellung vollständiger technischer Dokumentation für Bereitstellung und Wartung',
    'experience.technicatome_consultant.project2.title': 'Projekt 2 - PyQt Grafische Benutzeroberfläche für Aktuator-Modultests (Autonom, Projektverantwortlicher)',
    'experience.technicatome_consultant.project2.point1': 'Entwicklung einer PyQt-Anwendung für Akzeptanztests von Aktuator-Modulen',
    'experience.technicatome_consultant.project2.point2': 'Implementierung des Modbus-Protokolls für Broadcast/Unicast-Befehlsübertragung',
    'experience.technicatome_consultant.project2.point3': 'Entwurf einer manuellen Frame-Bearbeitungsschnittstelle für erweiterte Steuerungsvorgänge',
    
    'experience.freelance.title': 'Freelance-Entwickler',
    'experience.freelance.period': '2023 - Heute',
    'experience.freelance.point1': 'Entwicklung SaaS-orientierter Telegram-Bots für Automatisierung, Abonnement-Management und API-basierte Dienste',
    'experience.freelance.point2': 'Entwicklung von Krypto-Trading-Tools (Solana, Helius API) für Token-Überwachung und automatisiertes Sniping',
    'experience.freelance.point3': 'Bereitstellung maßgeschneiderter Python-Automatisierungsskripte und Scraping-Lösungen für Kunden',
    
    'experience.other.title': 'Sonstige Berufserfahrung',
    'experience.other.bar.title': 'Bar-Assistent - Lokale Bar-Tabac',
    'experience.other.bar.period': 'Juni 2021 - Dez 2021',
    'experience.other.bar.point1': 'Verwaltung des Barbetriebs, einschließlich Getränkezubereitung und -service',
    'experience.other.bar.point2': 'Begrüßung und Platzierung von Kunden, Gewährleistung einer positiven Gästeerfahrung',
    'experience.other.bar.point3': 'Aufrechterhaltung der Sauberkeit und Organisation des Barbereichs',
    'experience.other.bar.point4': 'Abwicklung von Kundenzahlungen und Transaktionen',
    'experience.other.repair.title': 'Verkaufs- und Reparatur-Assistent - La Cordonnerie',
    'experience.other.repair.period': 'Sommer 2019 & Sommer 2020',
    'experience.other.repair.point1': 'Reparaturen von Schuhen und Lederwaren (Nähen, Sohlenersatz, Handtaschen-Restaurierung)',
    'experience.other.repair.point2': 'Schlüsselvervielfältigungsdienste mit Präzision und Qualitätskontrolle',
    'experience.other.repair.point3': 'Verwaltung von Lieferantenbestellungen und Bestandsverfolgung',
    'experience.other.repair.point4': 'Begrüßung und Betreuung von Kunden, Gewährleistung personalisierter Service und Problemlösung',
    'experience.other.pool.title': 'Saisonarbeiter - Schwimmbad-Personal',
    'experience.other.pool.period': 'Sommer 2018',
    
    'experience.sensivic.title': 'F&E Ingenieur Praktikant - SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Entwicklung von Echtzeit-Embedded-Firmware für Hochfrequenz-Akustik-Erkennungssysteme mit ESP32 und C++',
    
    // Skills Section
    'skills.title': 'FÄHIGKEITEN',
    'skills.embedded.title': 'Embedded Systems & IoT',
    'skills.embedded.item1': 'ESP32/ESP-IDF, Raspberry Pi, Arduino',
    'skills.embedded.item2': 'FreeRTOS, Echtzeitsysteme',
    'skills.embedded.item3': 'LoRa, Wi-Fi, BLE Protokolle',
    'skills.embedded.item4': 'I2C, SPI, UART Kommunikation',
    'skills.embedded.item5': 'Niedrigenergie-Optimierung',
    'skills.programming.title': 'Programmierung',
    'skills.programming.item1': 'C/C++ (Embedded & Desktop)',
    'skills.programming.item2': 'Python (Flask, PyQt, Automatisierung)',
    'skills.programming.item3': 'JavaScript/TypeScript (Node.js)',
    'skills.programming.item4': 'SQL, Datenbankdesign',
    'skills.programming.item5': 'Git, Docker, CI/CD',
    'skills.web.title': 'Web & Server',
    'skills.web.item1': 'Flask, RESTful APIs',
    'skills.web.item2': 'Nginx, Gunicorn Bereitstellung',
    'skills.web.item3': 'Linux Server-Administration',
    'skills.web.item4': 'Web Scraping (Selenium, BeautifulSoup)',
    'skills.web.item5': 'MQTT, WebSocket Protokolle',
    'skills.cad.title': 'CAD & Tools',
    'skills.cad.item1': 'Fusion 360 (3D-Modellierung)',
    'skills.cad.item2': 'EasyEDA (PCB-Design)',
    'skills.cad.item3': '3D-Druck-Wartung',
    'skills.cad.item4': 'Oszilloskop, Multimeter',
    'skills.cad.item5': 'Virtuelle Umgebungen, Tests',
    
    // Education Section
    'education.title': 'BILDUNG',
    'education.master.title': 'Master of Science - Internet der Dinge (Datenwissenschaft)',
    'education.master.school': 'École de l\'IoT - Orléans, Frankreich',
    'education.master.watchVideo': 'Video ansehen',
    'education.master.videoTitle': 'École de l\'IoT Präsentation',
    'education.engineering.title': 'Ingenieurabschluss - Embedded Systems & Angewandte Physik',
    'education.engineering.school': 'Polytech Orléans - Frankreich',
    'education.erasmus.title': 'Erasmus+ - Informatik',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila - Italien',
    'education.cpge.title': 'CPGE - Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo - Caen, Frankreich',
    'education.baccalaureat.title': 'Französisches Baccalauréat - Physik & Chemie, Musik (Auszeichnung)',
    'education.baccalaureat.school': 'Lycée Guillaume le Conquérant - Frankreich',
    'education.music.title': 'Musikstudium-Zeugnis',
    'education.music.school': 'Musikakademie - Lillebonne, Frankreich',
    'education.music.option': 'Klavier-Option',
    
    // Footer
    'footer.languages': 'Sprachen: Französisch (Muttersprache) • Englisch (Fließend C1)',
    'footer.citizenship': 'Französischer & EU-Bürger • Offen für Umzug oder Remote-Arbeit',
    'footer.rights': '© 2025 William Lalis. Alle Rechte vorbehalten.',
  },
  
  it: {
    // Navigation
    'nav.about': 'Chi sono',
    'nav.experience': 'Esperienza',
    'nav.skills': 'Competenze',
    'nav.education': 'Formazione',
    'nav.technicalDetails': 'Dettagli Tecnici',
    
    // Hero Section
    'hero.title': 'WILLIAM LALIS',
    'hero.subtitle': 'Ingegnere Sistemi Embedded & IoT | Python | C/C++',
    'hero.citizenship': 'Cittadino francese e UE • Aperto a trasferimento o lavoro remoto',
    'hero.location': 'Amburgo, Germania',
    
    // About Section
    'about.title': 'PROFILO',
    'about.description': 'Ingegnere francese di sistemi embedded con solida esperienza in C/C++, Python e sviluppo IoT. Appassionato di costruzione di interfacce software e hardware, con esperienza professionale nello sviluppo firmware, integrazione API e prototipazione. Cerco un\'opportunità a tempo pieno ad Amburgo (o da remoto) in un\'azienda che sviluppa e commercializza prodotti SaaS, per crescere sia tecnicamente che strategicamente.',
    
    // Experience Section
    'experience.title': 'ESPERIENZA PROFESSIONALE',
    'experience.symphony.title': 'Ingegnere R&S&I - SYMPHONY 3D',
    'experience.symphony.period': '2023 - 2024 | Tempo pieno',
    'experience.symphony.point1': 'Leadership dello sviluppo end-to-end di soluzioni IoT embedded, dall\'integrazione hardware al deployment firmware (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Progettazione e implementazione di protocolli di comunicazione server affidabili per il controllo remoto di stampanti 3D',
    'experience.symphony.point3': 'Ingegnerizzazione di un proof-of-concept innovativo per la stampa 3D a getto, abilitando deposizione di materiale di micro-precisione',
    'experience.symphony.point4': 'Costruzione di pipeline robuste per acquisizione e preprocessing di dati di sensori per addestrare modelli di deep learning personalizzati (PyTorch)',
    
    'experience.technicatome.title': 'Consulente - Technicatome',
    'experience.technicatome.period': '2024 - Coordinamento e gestione servizio clienti',
    'experience.technicatome.point1': 'Coordinamento operazioni di supporto post-vendita: tracciamento ticket, prioritizzazione interventi e ottimizzazione tempi di elaborazione',
    'experience.technicatome.point2': 'Gestione relazioni con clienti e fornitori per assicurare risoluzione adeguata dei casi di servizio post-vendita',
    'experience.technicatome.point3': 'Monitoraggio riparazioni e interventi fornitori fino alla chiusura dei casi',
    'experience.technicatome.point4': 'Redazione e aggiornamento documentazione relativa ai servizi (rapporti, procedure, verbali)',
    
    'experience.technicatome_consultant.title': 'Consulente - Technicatome',
    'experience.technicatome_consultant.period': '2025 - Presente | Sviluppatore',
    'experience.technicatome_consultant.project1.title': 'Progetto 1 - API di Firma Binaria Sicura (Autonomo, responsabile progetto)',
    'experience.technicatome_consultant.project1.point1': 'Progettazione e sviluppo di un\'API basata su Flask per firma binaria utilizzando Hardware Security Module (HSM) e PKCS#11',
    'experience.technicatome_consultant.project1.point2': 'Costruzione di un database SQL sicuro e deployment della soluzione in una rete chiusa e sicura',
    'experience.technicatome_consultant.project1.point3': 'Proposta e implementazione di architettura di sistema utilizzando Nginx, Gunicorn e Flask',
    'experience.technicatome_consultant.project1.point4': 'Produzione di documentazione tecnica completa per deployment e manutenzione',
    'experience.technicatome_consultant.project2.title': 'Progetto 2 - Interfaccia Grafica PyQt per Test Moduli Attuatori (Autonomo, responsabile progetto)',
    'experience.technicatome_consultant.project2.point1': 'Sviluppo di un\'applicazione PyQt per test di accettazione moduli attuatori',
    'experience.technicatome_consultant.project2.point2': 'Implementazione protocollo Modbus per invio comandi broadcast/unicast',
    'experience.technicatome_consultant.project2.point3': 'Progettazione di un\'interfaccia di editing manuale frame per operazioni di controllo avanzate',
    
    'experience.freelance.title': 'Sviluppatore Freelance',
    'experience.freelance.period': '2023 - Presente',
    'experience.freelance.point1': 'Costruzione di bot Telegram orientati SaaS per automazione, gestione abbonamenti e servizi basati su API',
    'experience.freelance.point2': 'Sviluppo di strumenti di trading crypto (Solana, API Helius) per monitoraggio token e sniping automatizzato',
    'experience.freelance.point3': 'Consegna di script di automazione Python personalizzati e soluzioni di scraping per clienti',
    
    'experience.other.title': 'Altre Esperienze Lavorative',
    'experience.other.bar.title': 'Assistente Bar - Bar-Tabacchi Locale',
    'experience.other.bar.period': 'Giugno 2021 - Dic 2021',
    'experience.other.bar.point1': 'Gestione operazioni bar, inclusa preparazione e servizio bevande',
    'experience.other.bar.point2': 'Accoglienza e sistemazione clienti, garantendo esperienza ospite positiva',
    'experience.other.bar.point3': 'Mantenimento pulizia e organizzazione area bar',
    'experience.other.bar.point4': 'Gestione pagamenti e transazioni clienti',
    'experience.other.repair.title': 'Assistente Vendite & Riparazioni - La Cordonnerie',
    'experience.other.repair.period': 'Estate 2019 & Estate 2020',
    'experience.other.repair.point1': 'Riparazioni scarpe e pelletteria (cucitura, sostituzione suole, restauro borse)',
    'experience.other.repair.point2': 'Servizi duplicazione chiavi con precisione e controllo qualità',
    'experience.other.repair.point3': 'Gestione ordini fornitori e monitoraggio inventario',
    'experience.other.repair.point4': 'Accoglienza e assistenza clienti, garantendo servizio personalizzato e risoluzione problemi',
    'experience.other.pool.title': 'Lavoratore Stagionale - Staff Piscina',
    'experience.other.pool.period': 'Estate 2018',
    
    'experience.sensivic.title': 'Stagista Ingegnere R&S - SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Sviluppo di firmware embedded real-time per sistemi di rilevamento acustico ad alta frequenza utilizzando ESP32 e C++',
    
    // Skills Section
    'skills.title': 'COMPETENZE',
    'skills.embedded.title': 'Sistemi Embedded & IoT',
    'skills.embedded.item1': 'ESP32/ESP-IDF, Raspberry Pi, Arduino',
    'skills.embedded.item2': 'FreeRTOS, sistemi real-time',
    'skills.embedded.item3': 'Protocolli LoRa, Wi-Fi, BLE',
    'skills.embedded.item4': 'Comunicazione I2C, SPI, UART',
    'skills.embedded.item5': 'Ottimizzazione basso consumo',
    'skills.programming.title': 'Programmazione',
    'skills.programming.item1': 'C/C++ (Embedded & Desktop)',
    'skills.programming.item2': 'Python (Flask, PyQt, Automazione)',
    'skills.programming.item3': 'JavaScript/TypeScript (Node.js)',
    'skills.programming.item4': 'SQL, progettazione database',
    'skills.programming.item5': 'Git, Docker, CI/CD',
    'skills.web.title': 'Web & Server',
    'skills.web.item1': 'Flask, API RESTful',
    'skills.web.item2': 'Deployment Nginx, Gunicorn',
    'skills.web.item3': 'Amministrazione server Linux',
    'skills.web.item4': 'Web scraping (Selenium, BeautifulSoup)',
    'skills.web.item5': 'Protocolli MQTT, WebSocket',
    'skills.cad.title': 'CAD & Strumenti',
    'skills.cad.item1': 'Fusion 360 (modellazione 3D)',
    'skills.cad.item2': 'EasyEDA (progettazione PCB)',
    'skills.cad.item3': 'Manutenzione stampa 3D',
    'skills.cad.item4': 'Oscilloscopio, Multimetro',
    'skills.cad.item5': 'Ambienti virtuali, Test',
    
    // Education Section
    'education.title': 'FORMAZIONE',
    'education.master.title': 'Master of Science - Internet delle Cose (Data Science)',
    'education.master.school': 'École de l\'IoT - Orléans, Francia',
    'education.master.watchVideo': 'Guarda il video',
    'education.master.videoTitle': 'Presentazione École de l\'IoT',
    'education.engineering.title': 'Laurea in Ingegneria - Sistemi Embedded & Fisica Applicata',
    'education.engineering.school': 'Polytech Orléans - Francia',
    'education.erasmus.title': 'Erasmus+ - Informatica',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila - Italia',
    'education.cpge.title': 'CPGE - Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo - Caen, Francia',
    'education.baccalaureat.title': 'Baccalauréat Francese - Fisica & Chimica, Musica (Lode)',
    'education.baccalaureat.school': 'Lycée Guillaume le Conquérant - Francia',
    'education.music.title': 'Certificato di studi musicali',
    'education.music.school': 'Accademia Musicale - Lillebonne, Francia',
    'education.music.option': 'Opzione Pianoforte',
    
    // Footer
    'footer.languages': 'Lingue: Francese (Madrelingua) • Inglese (Fluente C1)',
    'footer.citizenship': 'Cittadino francese e UE • Aperto a trasferimento o lavoro remoto',
    'footer.rights': '© 2025 William Lalis. Tutti i diritti riservati.',
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'fr', 'de', 'it'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (['en', 'fr', 'de', 'it'].includes(browserLang)) {
        setCurrentLanguage(browserLang);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations[typeof currentLanguage]] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
