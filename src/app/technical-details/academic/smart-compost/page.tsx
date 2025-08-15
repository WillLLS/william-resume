import Link from "next/link";
import { ArrowLeft, Calendar, GraduationCap, Target, Wrench, Lightbulb, Leaf, Code } from "lucide-react";

export default function SmartCompost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/academic" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Smart Compost Monitoring System
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span>Academic Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2023</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Smart Compost Monitoring System
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              IoT-enabled composting system with automated monitoring of temperature, humidity, pH levels, and aeration control for optimal decomposition conditions
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
                <Target className="w-6 h-6 text-green-600" />
                Project Overview
              </h2>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Developed an intelligent composting system that automatically monitors and controls environmental conditions to optimize the decomposition process. The system uses IoT sensors and automated actuators to maintain ideal composting conditions.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The project addresses sustainable waste management by combining environmental science with IoT technology, creating an efficient solution for organic waste processing that reduces manual intervention while maximizing compost quality.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-green-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Sensor Network & Monitoring</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>DHT22 sensors for temperature and humidity monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>pH sensor probes for acidity level measurement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Moisture sensors for optimal water content tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Gas sensors (CO2, CH4) for decomposition process monitoring</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Automated Control Systems</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Arduino Mega 2560 as main controller unit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Servo motors for automated compost mixing and aeration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Water pump system for moisture control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Ventilation fans for oxygen regulation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Data Management & Interface</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>ESP32 module for WiFi connectivity and data transmission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>ThingSpeak cloud platform for data logging and visualization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Mobile app for remote monitoring and control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Alert system for parameter threshold violations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Smart Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Leaf className="w-6 h-6 text-green-600" />
                Smart Composting Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Temperature Control</h3>
                    <p className="text-blue-700 dark:text-blue-300">Maintains optimal 55-65°C range for thermophilic decomposition</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Moisture Management</h3>
                    <p className="text-purple-700 dark:text-purple-300">Automated watering system to maintain 50-60% moisture content</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">pH Balancing</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Monitors and alerts for optimal 6.5-8.0 pH range</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Aeration Control</h3>
                    <p className="text-green-700 dark:text-green-300">Automated mixing and ventilation for proper oxygen levels</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Gas Monitoring</h3>
                    <p className="text-red-700 dark:text-red-300">Tracks CO2 and methane levels for process optimization</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Remote Monitoring</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Real-time data visualization and mobile notifications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-green-600" />
                Technologies & Components
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Arduino Mega", "ESP32", "DHT22", "pH Sensors",
                  "Moisture Sensors", "Gas Sensors", "Servo Motors", "Water Pumps",
                  "ThingSpeak", "C++", "Mobile App", "WiFi",
                  "Alert System", "Data Logging", "Cloud Storage", "Real-time Monitoring"
                ].map((tech, index) => (
                  <div key={index} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                    <span className="text-green-800 dark:text-green-200 font-medium">{tech}</span>
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
                        <span>Sensor calibration in harsh composting environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Maintaining consistent temperature throughout compost pile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Preventing sensor corrosion from organic acids</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Balancing automation with natural decomposition processes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Protective housing and regular calibration routines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Multiple temperature sensors and active mixing systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Stainless steel sensors and protective coatings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Adaptive algorithms based on composting science principles</span>
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
                Sustainability Impact & Future Applications
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Waste Management Innovation</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Demonstrates how IoT technology can optimize organic waste processing, reducing landfill burden and creating valuable soil amendments.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Urban Agriculture Support</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Provides high-quality compost for urban farming initiatives, supporting local food production and soil health improvement.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Scalable Technology</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    System design can be scaled for community composting facilities and industrial organic waste processing applications.
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
