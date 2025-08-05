import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Briefcase, User, GraduationCap } from "lucide-react";

export default function TechnicalDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              William Lalis
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Experience
              </Link>
              <Link href="/#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </Link>
              <Link href="/#education" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Education
              </Link>
              
              {/* Language Selector */}
              <div className="relative">
                <select className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-1 text-sm text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="en">🇺🇸 EN</option>
                  <option value="fr">🇫🇷 FR</option>
                  <option value="de">🇩🇪 DE</option>
                  <option value="it">🇮🇹 IT</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Technical Details
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Detailed overview of my projects, technical contributions, and development work across professional, personal, and academic domains
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/technical-details/professional" className="group bg-slate-50 dark:bg-slate-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">Professional Projects</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm text-center mb-4">
                IoT systems, embedded firmware, 3D printing innovations, machine learning, and enterprise solutions
              </p>
              <div className="text-center">
                <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium">
                  View Projects <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/technical-details/personal" className="group bg-slate-50 dark:bg-slate-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">Personal Projects</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm text-center mb-4">
                Telegram bots, web scraping, websites, connected objects, automation tools, and creative experiments
              </p>
              <div className="text-center">
                <span className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium">
                  View Projects <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/technical-details/academic" className="group bg-slate-50 dark:bg-slate-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">Academic Projects</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm text-center mb-4">
                University research, semester projects, internship work, IoT solutions, and academic innovations
              </p>
              <div className="text-center">
                <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                  View Projects <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technologies and tools used across all projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Embedded & IoT</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">ESP32</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">C/C++</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">FreeRTOS</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">MQTT</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">LoRa</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">PyTorch</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Pix2Vox</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Computer Vision</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Web & Automation</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Selenium</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">BeautifulSoup</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Telegram API</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Hardware & CAD</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">Fusion 360</span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">EasyEDA</span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">3D Printing</span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">PCB Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to main */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Main CV
          </Link>
        </div>
      </section>
    </div>
  );
}
