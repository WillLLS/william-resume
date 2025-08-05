import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Target, CheckCircle, Zap, AlertTriangle, Code, Wifi, Settings } from "lucide-react";

export default function IoT3DPrinterProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/professional" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              IoT 3D Printer Control
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 text-sm text-blue-600 dark:text-blue-400 mb-4">
              <Calendar className="w-4 h-4" />
              <span>2023-2024</span>
              <span className="mx-2">•</span>
              <MapPin className="w-4 h-4" />
              <span>Symphony 3D</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              IoT Solution for Remote 3D Printer Control
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Complete IoT ecosystem enabling remote control and monitoring of SLA 3D printers through internet connectivity
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              Project Context
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Symphony 3D needed a comprehensive solution to remotely monitor and control their SLA 3D printers for their custom hearing aid manufacturing process. The challenge was to create an end-to-end IoT system that could handle file transfers, printer control, real-time monitoring, and over-the-air updates while maintaining industrial reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                Key Technologies
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">ESP32</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">MQTT</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">WiFi</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">NFC</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">C/C++</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">RabbitMQ</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">HTTP</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">EEPROM</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-600" />
                Tools & Platforms
              </h3>
              <ul className="space-y-2">
                <li className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  RabbitMQ for message queuing
                </li>
                <li className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  EasyEDA for PCB design
                </li>
                <li className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Fusion 360 for mechanical design
                </li>
                <li className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Wireshark for protocol analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Technical Implementation
          </h2>

          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                Reverse Engineering & Protocol Analysis
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  Discovered local WiFi control capabilities of the SLA printer
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  Used Wireshark for network traffic analysis due to incomplete documentation
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  Reverse-engineered communication protocols and API endpoints
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  Adapted to new firmware versions from printer manufacturer
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-blue-600" />
                IoT Architecture & Communication
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  ESP32-based control unit with comprehensive sensor integration
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  MQTT protocol implementation to avoid client port forwarding
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  Hybrid MQTT/HTTP approach for optimized file transfer performance
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  Real-time heartbeat monitoring for printer status tracking
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Sensor Integration & Hardware Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Environmental Monitoring</h4>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Humidity & Temperature sensors</li>
                    <li>• Real-time environmental tracking</li>
                    <li>• Optimal printing condition alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Security & Access Control</h4>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>• NFC readers for user authentication</li>
                    <li>• Door limit switch sensors</li>
                    <li>• LED status visualization system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Results & Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Major Achievements
              </h3>
              <ul className="space-y-2">
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  First functional PoC delivered in just 1 month
                </li>
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  Complete remote printer control capabilities
                </li>
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  Optimized file upload system implementation
                </li>
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  EEPROM-based platform recognition system
                </li>
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  Over-the-air firmware update capability
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Technical Challenges Overcome
              </h3>
              <ul className="space-y-2">
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></span>
                  Incomplete manufacturer documentation requiring reverse engineering
                </li>
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></span>
                  Protocol adaptation for new firmware versions
                </li>
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></span>
                  Real-time communication reliability requirements
                </li>
                <li className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></span>
                  Large file transfer optimization over MQTT
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              System Capabilities
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">File Management</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Remote file upload to printer</li>
                  <li>• Progress tracking</li>
                  <li>• File validation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Print Control</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Start/Stop/Pause operations</li>
                  <li>• Real-time status monitoring</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Maintenance</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• OTA firmware updates</li>
                  <li>• Remote diagnostics</li>
                  <li>• Health monitoring</li>
                </ul>
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
