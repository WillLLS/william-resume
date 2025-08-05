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
    'hero.subtitle': 'Embedded Systems & IoT Engineer | Python | C/C++ | SaaS-Oriented Mindset',
    'hero.location': 'Hamburg, Germany',
    
    // About Section
    'about.title': 'PROFILE',
    'about.description': 'French embedded systems engineer with a solid background in C/C++, Python, and IoT development. Passionate about building software and hardware interfaces, with professional experience in firmware development, API integration, and prototyping. Looking for a full-time opportunity in Hamburg (or remote) within a company that develops and markets SaaS products, to grow both technically and strategically.',
    
    // Experience Section
    'experience.title': 'PROFESSIONAL EXPERIENCE',
    'experience.symphony.title': 'R&D&I Engineer – SYMPHONY 3D',
    'experience.symphony.period': '2023 – 2024 | Full-time',
    'experience.symphony.point1': 'Led end-to-end development of embedded IoT solutions, from hardware integration to firmware deployment (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Designed and deployed reliable server communication protocols for remote 3D printer control',
    'experience.symphony.point3': 'Engineered a novel proof-of-concept for jetting-based 3D printing, enabling micro-precision material deposition',
    'experience.symphony.point4': 'Built robust pipelines for sensor data acquisition and preprocessing to train custom deep learning models (PyTorch)',
    
    'experience.technicatome.title': 'Consultant – Technicatome',
    'experience.technicatome.period': '2024 – Coordination & Development missions',
    'experience.technicatome.point1': 'Coordinated technical support operations: prioritized tickets, optimized planning, and improved SLA performance',
    'experience.technicatome.point2': 'Developed a secure Python API for automated software signing using a Hardware Security Module (HSM)',
    'experience.technicatome.point3': 'Integrated HSM-based signature workflows into CI/CD pipelines for high-assurance software deployment',
    
    'experience.sensivic.title': 'R&D Engineer Intern – SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Developed real-time embedded firmware for high-frequency acoustic detection systems using ESP32 and C++',
    
    // Skills Section
    'skills.title': 'SKILLS',
    'skills.embedded.title': 'Embedded Systems & IoT',
    'skills.programming.title': 'Programming',
    'skills.web.title': 'Web & Servers',
    'skills.cad.title': 'CAD & Tools',
    
    // Education Section
    'education.title': 'EDUCATION',
    'education.master.title': 'Master of Science – Internet of Things (Data Science)',
    'education.master.school': 'École de l\'IoT – Orléans, France',
    'education.engineering.title': 'Engineering Degree – Embedded Systems & Applied Physics',
    'education.engineering.school': 'Polytech Orléans – France',
    'education.erasmus.title': 'Erasmus+ – Computer Science',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila – Italy',
    'education.cpge.title': 'CPGE – Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo – Caen, France',
    
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
    'hero.subtitle': 'Ingénieur Systèmes Embarqués & IoT | Python | C/C++ | Mentalité SaaS',
    'hero.location': 'Hambourg, Allemagne',
    
    // About Section
    'about.title': 'PROFIL',
    'about.description': 'Ingénieur français en systèmes embarqués avec une solide expérience en C/C++, Python et développement IoT. Passionné par la création d\'interfaces logicielles et matérielles, avec une expérience professionnelle en développement firmware, intégration d\'API et prototypage. À la recherche d\'une opportunité à temps plein à Hambourg (ou en télétravail) dans une entreprise qui développe et commercialise des produits SaaS, pour évoluer techniquement et stratégiquement.',
    
    // Experience Section
    'experience.title': 'EXPÉRIENCE PROFESSIONNELLE',
    'experience.symphony.title': 'Ingénieur R&D&I – SYMPHONY 3D',
    'experience.symphony.period': '2023 – 2024 | Temps plein',
    'experience.symphony.point1': 'Direction du développement de bout en bout de solutions IoT embarquées, de l\'intégration matérielle au déploiement firmware (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Conception et déploiement de protocoles de communication serveur fiables pour le contrôle d\'imprimantes 3D à distance',
    'experience.symphony.point3': 'Ingénierie d\'une preuve de concept novatrice pour l\'impression 3D par jet, permettant un dépôt de matériau de micro-précision',
    'experience.symphony.point4': 'Construction de pipelines robustes pour l\'acquisition et le prétraitement de données de capteurs pour entraîner des modèles d\'apprentissage automatique personnalisés (PyTorch)',
    
    'experience.technicatome.title': 'Consultant – Technicatome',
    'experience.technicatome.period': '2024 – Missions de coordination et développement',
    'experience.technicatome.point1': 'Coordination des opérations de support technique : priorisation des tickets, optimisation de la planification et amélioration des performances SLA',
    'experience.technicatome.point2': 'Développement d\'une API Python sécurisée pour la signature automatisée de logiciels utilisant un module de sécurité matériel (HSM)',
    'experience.technicatome.point3': 'Intégration des flux de signature basés sur HSM dans les pipelines CI/CD pour un déploiement logiciel haute assurance',
    
    'experience.sensivic.title': 'Stagiaire Ingénieur R&D – SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Développement de firmware embarqué temps réel pour systèmes de détection acoustique haute fréquence utilisant ESP32 et C++',
    
    // Skills Section
    'skills.title': 'COMPÉTENCES',
    'skills.embedded.title': 'Systèmes Embarqués & IoT',
    'skills.programming.title': 'Programmation',
    'skills.web.title': 'Web & Serveurs',
    'skills.cad.title': 'CAO & Outils',
    
    // Education Section
    'education.title': 'FORMATION',
    'education.master.title': 'Master of Science – Internet des Objets (Science des Données)',
    'education.master.school': 'École de l\'IoT – Orléans, France',
    'education.engineering.title': 'Diplôme d\'Ingénieur – Systèmes Embarqués & Physique Appliquée',
    'education.engineering.school': 'Polytech Orléans – France',
    'education.erasmus.title': 'Erasmus+ – Informatique',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila – Italie',
    'education.cpge.title': 'CPGE – Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo – Caen, France',
    
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
    'hero.subtitle': 'Embedded Systems & IoT Ingenieur | Python | C/C++ | SaaS-orientierte Denkweise',
    'hero.location': 'Hamburg, Deutschland',
    
    // About Section
    'about.title': 'PROFIL',
    'about.description': 'Französischer Embedded-Systems-Ingenieur mit solidem Hintergrund in C/C++, Python und IoT-Entwicklung. Leidenschaftlich beim Aufbau von Software- und Hardware-Schnittstellen, mit Berufserfahrung in Firmware-Entwicklung, API-Integration und Prototyping. Suche eine Vollzeitstelle in Hamburg (oder remote) in einem Unternehmen, das SaaS-Produkte entwickelt und vermarktet, um sowohl technisch als auch strategisch zu wachsen.',
    
    // Experience Section
    'experience.title': 'BERUFSERFAHRUNG',
    'experience.symphony.title': 'F&E&I Ingenieur – SYMPHONY 3D',
    'experience.symphony.period': '2023 – 2024 | Vollzeit',
    'experience.symphony.point1': 'Leitung der End-to-End-Entwicklung eingebetteter IoT-Lösungen, von der Hardware-Integration bis zur Firmware-Bereitstellung (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Entwurf und Bereitstellung zuverlässiger Server-Kommunikationsprotokolle für die Fernsteuerung von 3D-Druckern',
    'experience.symphony.point3': 'Entwicklung eines neuartigen Proof-of-Concept für strahlbasiertes 3D-Drucken, das Mikropräzisions-Materialabscheidung ermöglicht',
    'experience.symphony.point4': 'Aufbau robuster Pipelines für Sensordatenerfassung und -vorverarbeitung zum Training maßgeschneiderter Deep-Learning-Modelle (PyTorch)',
    
    'experience.technicatome.title': 'Berater – Technicatome',
    'experience.technicatome.period': '2024 – Koordinations- und Entwicklungsaufträge',
    'experience.technicatome.point1': 'Koordination technischer Support-Operationen: Priorisierung von Tickets, Optimierung der Planung und Verbesserung der SLA-Leistung',
    'experience.technicatome.point2': 'Entwicklung einer sicheren Python-API für automatisierte Software-Signierung mit einem Hardware-Sicherheitsmodul (HSM)',
    'experience.technicatome.point3': 'Integration HSM-basierter Signatur-Workflows in CI/CD-Pipelines für hochsichere Software-Bereitstellung',
    
    'experience.sensivic.title': 'F&E Ingenieur Praktikant – SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Entwicklung von Echtzeit-Embedded-Firmware für Hochfrequenz-Akustik-Erkennungssysteme mit ESP32 und C++',
    
    // Skills Section
    'skills.title': 'FÄHIGKEITEN',
    'skills.embedded.title': 'Embedded Systems & IoT',
    'skills.programming.title': 'Programmierung',
    'skills.web.title': 'Web & Server',
    'skills.cad.title': 'CAD & Tools',
    
    // Education Section
    'education.title': 'BILDUNG',
    'education.master.title': 'Master of Science – Internet der Dinge (Datenwissenschaft)',
    'education.master.school': 'École de l\'IoT – Orléans, Frankreich',
    'education.engineering.title': 'Ingenieurabschluss – Embedded Systems & Angewandte Physik',
    'education.engineering.school': 'Polytech Orléans – Frankreich',
    'education.erasmus.title': 'Erasmus+ – Informatik',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila – Italien',
    'education.cpge.title': 'CPGE – Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo – Caen, Frankreich',
    
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
    'hero.subtitle': 'Ingegnere Sistemi Embedded & IoT | Python | C/C++ | Mentalità SaaS',
    'hero.location': 'Amburgo, Germania',
    
    // About Section
    'about.title': 'PROFILO',
    'about.description': 'Ingegnere francese di sistemi embedded con solida esperienza in C/C++, Python e sviluppo IoT. Appassionato di costruzione di interfacce software e hardware, con esperienza professionale nello sviluppo firmware, integrazione API e prototipazione. Cerco un\'opportunità a tempo pieno ad Amburgo (o da remoto) in un\'azienda che sviluppa e commercializza prodotti SaaS, per crescere sia tecnicamente che strategicamente.',
    
    // Experience Section
    'experience.title': 'ESPERIENZA PROFESSIONALE',
    'experience.symphony.title': 'Ingegnere R&S&I – SYMPHONY 3D',
    'experience.symphony.period': '2023 – 2024 | Tempo pieno',
    'experience.symphony.point1': 'Leadership dello sviluppo end-to-end di soluzioni IoT embedded, dall\'integrazione hardware al deployment firmware (ESP32, FreeRTOS)',
    'experience.symphony.point2': 'Progettazione e implementazione di protocolli di comunicazione server affidabili per il controllo remoto di stampanti 3D',
    'experience.symphony.point3': 'Ingegnerizzazione di un proof-of-concept innovativo per la stampa 3D a getto, abilitando deposizione di materiale di micro-precisione',
    'experience.symphony.point4': 'Costruzione di pipeline robuste per acquisizione e preprocessing di dati di sensori per addestrare modelli di deep learning personalizzati (PyTorch)',
    
    'experience.technicatome.title': 'Consulente – Technicatome',
    'experience.technicatome.period': '2024 – Missioni di coordinamento e sviluppo',
    'experience.technicatome.point1': 'Coordinamento operazioni di supporto tecnico: prioritizzazione ticket, ottimizzazione pianificazione e miglioramento performance SLA',
    'experience.technicatome.point2': 'Sviluppo di un\'API Python sicura per firma automatizzata software utilizzando un Hardware Security Module (HSM)',
    'experience.technicatome.point3': 'Integrazione di workflow di firma basati su HSM in pipeline CI/CD per deployment software ad alta sicurezza',
    
    'experience.sensivic.title': 'Stagista Ingegnere R&S – SENSIVIC',
    'experience.sensivic.period': '2022',
    'experience.sensivic.point1': 'Sviluppo di firmware embedded real-time per sistemi di rilevamento acustico ad alta frequenza utilizzando ESP32 e C++',
    
    // Skills Section
    'skills.title': 'COMPETENZE',
    'skills.embedded.title': 'Sistemi Embedded & IoT',
    'skills.programming.title': 'Programmazione',
    'skills.web.title': 'Web & Server',
    'skills.cad.title': 'CAD & Strumenti',
    
    // Education Section
    'education.title': 'FORMAZIONE',
    'education.master.title': 'Master of Science – Internet delle Cose (Data Science)',
    'education.master.school': 'École de l\'IoT – Orléans, Francia',
    'education.engineering.title': 'Laurea in Ingegneria – Sistemi Embedded & Fisica Applicata',
    'education.engineering.school': 'Polytech Orléans – Francia',
    'education.erasmus.title': 'Erasmus+ – Informatica',
    'education.erasmus.school': 'Università degli Studi dell\'Aquila – Italia',
    'education.cpge.title': 'CPGE – Classe Prépa PC*',
    'education.cpge.school': 'Lycée Victor Hugo – Caen, Francia',
    
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
