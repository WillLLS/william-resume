import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, Wrench, CheckCircle, Lightbulb, Globe, Code, ExternalLink } from "lucide-react";

export default function ResumeWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Professional Resume Website
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 mb-4">
              <User className="w-5 h-5" />
              <span>Personal Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2022-2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Professional Resume Website
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Modern, responsive portfolio website showcasing professional experience, technical projects, and skills with interactive design and multilingual support
            </p>
            <div className="flex justify-center">
              <Link href="https://williamlalisse.netlify.app" target="_blank" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                <Globe className="w-4 h-4" />
                View Live Website
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            
            {/* Project Overview */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-indigo-600" />
                Project Overview
              </h2>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Designed and developed a comprehensive professional portfolio website to showcase technical expertise, project achievements, and professional experience. The website serves as a dynamic resume with interactive elements and detailed project presentations.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Built with modern web technologies, the site features responsive design, smooth animations, dark mode support, and multilingual capabilities to reach a broader professional audience.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-indigo-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Frontend Development</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>HTML5, CSS3, and JavaScript for core functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Responsive design with mobile-first approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>CSS animations and smooth scrolling effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Progressive Web App (PWA) capabilities</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Design & User Experience</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Modern, minimalist design with professional aesthetics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Dark and light theme toggle functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Interactive project galleries and portfolios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Smooth page transitions and micro-interactions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Content Management</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Dynamic content loading with JSON data structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Multilingual support (French, English, German, Italian)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>SEO optimization with meta tags and structured data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Contact form with email integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-indigo-600" />
                Key Features & Sections
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Professional Experience</h3>
                    <p className="text-blue-700 dark:text-blue-300">Detailed timeline of work experience with company information and achievements</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Technical Projects</h3>
                    <p className="text-green-700 dark:text-green-300">Interactive showcase of engineering and software development projects</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Skills & Technologies</h3>
                    <p className="text-purple-700 dark:text-purple-300">Comprehensive overview of technical skills with proficiency levels</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Education & Certifications</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Academic background and professional certifications</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Contact & Social Links</h3>
                    <p className="text-red-700 dark:text-red-300">Professional contact information and social media integration</p>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Downloadable CV</h3>
                    <p className="text-teal-700 dark:text-teal-300">PDF resume download functionality with multiple language versions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Performance & Analytics
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">95+</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Lighthouse Score</h3>
                  <p className="text-slate-600 dark:text-slate-300">Performance rating</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">&lt;2s</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Load Time</h3>
                  <p className="text-slate-600 dark:text-slate-300">Initial page load</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">100%</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Mobile Responsive</h3>
                  <p className="text-slate-600 dark:text-slate-300">Cross-device compatibility</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">4</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Languages</h3>
                  <p className="text-slate-600 dark:text-slate-300">Multilingual support</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-indigo-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "HTML5", "CSS3", "JavaScript", "SCSS",
                  "Responsive Design", "PWA", "SEO", "Git",
                  "Netlify", "JSON", "Font Awesome", "Google Fonts",
                  "Lighthouse", "Performance Optimization", "Accessibility", "Cross-browser Testing"
                ].map((tech, index) => (
                  <div key={index} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 text-center">
                    <span className="text-indigo-800 dark:text-indigo-200 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Technical Challenges & Solutions
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Key Challenges</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Cross-browser compatibility issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Performance optimization for mobile devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>SEO optimization for better visibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Maintaining consistent design across languages</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Progressive enhancement and feature detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Image optimization and lazy loading implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Structured data markup and meta tag optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Flexible layout system with CSS Grid and Flexbox</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Impact */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                Project Impact & Results
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Professional Visibility</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Enhanced professional online presence with a modern, comprehensive portfolio that effectively showcases technical expertise and project achievements.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">User Experience</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Intuitive navigation and responsive design ensuring optimal viewing experience across all devices and screen sizes.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">International Reach</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Multilingual support enabling access to a broader international audience and professional opportunities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/technical-details/personal" className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Personal Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
