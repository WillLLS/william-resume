'use client';

import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="mb-12">
              <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 mb-6">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{t('hero.location')}</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:lalis.william@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    lalis.william@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+33769652410" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +33 7 69 65 24 10
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <a href="https://github.com/williamlalis" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-slate-800 dark:bg-slate-700 text-white rounded-full hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/william-lalis-90b2531ba/" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('about.title')}</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('experience.title')}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Symphony 3D */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {t('experience.symphony.title')}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">{t('experience.symphony.period')}</p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.symphony.point1')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.symphony.point2')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.symphony.point3')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.symphony.point4')}
                </li>
              </ul>
            </div>

            {/* Technicatome */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {t('experience.technicatome.title')}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">{t('experience.technicatome.period')}</p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.technicatome.point1')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.technicatome.point2')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.technicatome.point3')}
                </li>
              </ul>
            </div>

            {/* SENSIVIC */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {t('experience.sensivic.title')}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">{t('experience.sensivic.period')}</p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  {t('experience.sensivic.point1')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('skills.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('skills.embedded.title')}</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>ESP32 / FreeRTOS</li>
                <li>Arduino / Raspberry Pi</li>
                <li>I2C, SPI, UART</li>
                <li>Circuit Design</li>
                <li>Altium Designer</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('skills.programming.title')}</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>C/C++</li>
                <li>Python (PyTorch)</li>
                <li>JavaScript/TypeScript</li>
                <li>Go</li>
                <li>Git & CI/CD</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('skills.web.title')}</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>Next.js / React</li>
                <li>Node.js / Express</li>
                <li>REST APIs</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('skills.cad.title')}</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>SOLIDWORKS</li>
                <li>Fusion 360</li>
                <li>3D Printing</li>
                <li>Prototyping</li>
                <li>Technical Drawing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('education.title')}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t('education.master.title')}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{t('education.master.school')}</p>
              <p className="text-slate-600 dark:text-slate-300">2022 – 2023</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t('education.engineering.title')}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{t('education.engineering.school')}</p>
              <p className="text-slate-600 dark:text-slate-300">2019 – 2022</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t('education.erasmus.title')}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{t('education.erasmus.school')}</p>
              <p className="text-slate-600 dark:text-slate-300">2021</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t('education.cpge.title')}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{t('education.cpge.school')}</p>
              <p className="text-slate-600 dark:text-slate-300">2017 – 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-2">{t('footer.languages')}</p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">{t('footer.citizenship')}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}
