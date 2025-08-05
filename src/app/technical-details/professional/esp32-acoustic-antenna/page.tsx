import Link from "next/link";
import { ArrowLeft, Calendar, Building2, Target, Wrench, CheckCircle, Lightbulb, Cpu } from "lucide-react";

export default function ESP32AcousticAntenna() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/professional" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              ESP32 Acoustic Antenna
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <Building2 className="w-5 h-5" />
              <span>SENSIVIC</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              ESP32 Acoustic Antenna System
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Advanced acoustic localization system using ESP32 and 4 microphones sampling at 100kHz for precise sound source positioning in space
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            
            {/* Context */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                Project Context
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Due to the semiconductor shortage, SENSIVIC needed to migrate from STM to ESP32 microcontroller. The project goal was to develop a solution based on ESP32 to create an acoustic antenna capable of sampling 4 microphones at 100 kHz to localize sound sources in 3D space with high precision.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-blue-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">ADC Development & Testing</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Started with single microphone ADC implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Tested and optimized analog-to-digital conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Analyzed sampling rates and signal quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Established baseline performance metrics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">DMA Integration for Multi-Channel</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Implemented Direct Memory Access (DMA) for simultaneous sampling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Configured 4-channel simultaneous data acquisition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Optimized memory management for high-frequency data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Ensured synchronized sampling across all channels</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">MEMS Microphone Implementation</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Integrated MEMS (micro-electromechanical systems) microphones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Achieved target frequency of 100kHz sampling rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Implemented i2s protocol for digital audio interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Optimized signal processing for acoustic localization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results & Achievements */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Results & Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Successful Migration</h3>
                    <p className="text-green-700 dark:text-green-300">Successfully migrated from STM to ESP32 platform</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">High-Frequency Sampling</h3>
                    <p className="text-blue-700 dark:text-blue-300">Achieved 100kHz sampling rate with MEMS microphones</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Multi-Channel Processing</h3>
                    <p className="text-purple-700 dark:text-purple-300">Implemented simultaneous 4-microphone data acquisition</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">PoC Delivery</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Delivered functional Proof of Concept in 2 months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "ESP32", "C/C++", "MEMS", 
                  "i2s Protocol", "DMA", "ESP-IDF",
                  "Digital Signal Processing", "ADC", "Real-time Systems"
                ].map((tech, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                    <span className="text-blue-800 dark:text-blue-200 font-medium">{tech}</span>
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
                        <span>Simultaneous sampling of 4 microphones at 100kHz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Memory management for high-frequency data streams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Maintaining synchronization across channels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Real-time processing requirements</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>DMA implementation for efficient data handling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>MEMS microphones for high-frequency capability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>i2s protocol for synchronized digital audio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>ESP-IDF framework optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* System Architecture */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                System Architecture & Applications
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Acoustic Localization Principle</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Using time difference of arrival (TDOA) between 4 microphones to triangulate sound source position in 3D space with high precision.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Real-time Processing</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    ESP32 processes audio streams in real-time, calculating spatial coordinates of detected sounds for immediate response applications.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industrial Applications</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Ideal for security systems, industrial monitoring, and automated response systems requiring precise sound source localization.
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
          <Link href="/technical-details/professional" className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Professional Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
