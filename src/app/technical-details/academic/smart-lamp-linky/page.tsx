import Link from "next/link";
import { ArrowLeft, Calendar, GraduationCap, Target, Wrench, CheckCircle, Lightbulb, Lightbulb as LightIcon, Code } from "lucide-react";

export default function SmartLampLinky() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/academic" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Smart Lamp Linky Project
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span>Academic Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2023</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Smart Lamp Linky Integration
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              IoT smart lighting system integrated with French national smart grid (Linky meters) for energy-aware illumination and consumption optimization
            </p>
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
                <Target className="w-6 h-6 text-amber-600" />
                Project Overview
              </h2>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Developed an innovative smart lighting system that interfaces with France&apos;s national smart electricity grid through Linky smart meters. The system automatically adjusts lighting based on real-time energy consumption data and electricity pricing.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                  The Smart Lamp Linky project demonstrates France&apos;s commitment to smart grid technology
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-amber-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Linky Integration & Communication</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>TIC (Télé-Information Client) protocol implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Serial communication with Linky meter via UART</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Real-time energy consumption data extraction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Electricity pricing information parsing (HCHP/HCHC)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Smart Lighting Control</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>ESP32 microcontroller for WiFi connectivity and processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>PWM-controlled LED strips for variable brightness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Motion sensors for automatic presence detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Light intensity sensors for ambient light adaptation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Energy Management Algorithm</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Dynamic brightness adjustment based on energy cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Peak hour detection and consumption optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Predictive lighting patterns based on usage history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Emergency lighting mode during high consumption periods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Smart Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <LightIcon className="w-6 h-6 text-amber-600" />
                Smart Features & Automation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Energy-Aware Dimming</h3>
                    <p className="text-green-700 dark:text-green-300">Automatic brightness reduction during high-cost electricity periods</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Peak Hour Management</h3>
                    <p className="text-blue-700 dark:text-blue-300">Intelligent lighting scheduling to avoid peak consumption times</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Presence Detection</h3>
                    <p className="text-purple-700 dark:text-purple-300">Motion-activated lighting with customizable timeout settings</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Ambient Adaptation</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Natural light sensor integration for optimal illumination balance</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Usage Analytics</h3>
                    <p className="text-red-700 dark:text-red-300">Energy consumption tracking and optimization recommendations</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Remote Control</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Web interface for manual control and system configuration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Linky Integration Details */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Linky Smart Grid Integration
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-amber-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">TIC Protocol Connection</h3>
                    <p className="text-slate-600 dark:text-slate-300">Direct connection to Linky meter&apos;s Télé-Information Client interface</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-amber-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Real-time Data Processing</h3>
                    <p className="text-slate-600 dark:text-slate-300">Parse consumption data, tariff information, and grid status updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-amber-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Smart Decision Making</h3>
                    <p className="text-slate-600 dark:text-slate-300">Algorithm analyzes energy data to optimize lighting consumption</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-amber-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Automated Control</h3>
                    <p className="text-slate-600 dark:text-slate-300">Dynamic lighting adjustment based on grid conditions and pricing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-amber-600" />
                Technologies & Components
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "ESP32", "TIC Protocol", "UART", "C++",
                  "PWM Control", "LED Strips", "Motion Sensors", "Light Sensors",
                  "WiFi", "Web Interface", "HTML/CSS/JS", "JSON",
                  "Linky Meter", "Smart Grid", "Energy Management", "Real-time Processing"
                ].map((tech, index) => (
                  <div key={index} className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 text-center">
                    <span className="text-amber-800 dark:text-amber-200 font-medium">{tech}</span>
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
                        <span>TIC protocol implementation and data parsing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Real-time processing of energy consumption data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Balancing energy savings with user comfort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Reliable communication with national grid infrastructure</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Robust serial communication with error handling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Efficient buffering and data structure optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Adaptive algorithms with user preference learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Fallback modes and connection recovery mechanisms</span>
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
                Educational Impact & Smart Grid Future
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Smart Grid Integration</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Demonstrated practical integration with national energy infrastructure, showcasing the potential of IoT devices in smart grid ecosystems.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Energy Efficiency Innovation</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Created an intelligent system that balances user comfort with energy conservation, contributing to sustainable technology development.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Future Applications</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    The project serves as a foundation for broader smart home applications that can integrate with national infrastructure for optimized resource management.
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
          <Link href="/technical-details/academic" className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Academic Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
