import Link from "next/link";
import { ArrowLeft, Calendar, GraduationCap, Target, Wrench, CheckCircle, Lightbulb, Activity, Code } from "lucide-react";

export default function HealthMonitoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/academic" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Health Monitoring System
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span>Academic Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2023</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              IoT Health Monitoring System
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Connected health monitoring system using IoT sensors for real-time vital signs tracking, data analysis, and emergency alert system for elderly care
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
                <Target className="w-6 h-6 text-emerald-600" />
                Project Overview
              </h2>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Developed a comprehensive IoT-based health monitoring system designed to track vital signs of elderly patients in real-time. The system combines multiple sensors, cloud connectivity, and intelligent alerting to provide continuous health surveillance.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The solution includes wearable sensors, a central monitoring hub, cloud-based data processing, and a web dashboard for healthcare providers and family members to monitor patient health status remotely.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-emerald-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Sensor Network & Hardware</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Heart rate sensor (MAX30102) for pulse and SpO2 monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Temperature sensor (DS18B20) for body temperature tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Accelerometer (MPU6050) for fall detection and activity monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>ESP32 microcontroller for data processing and WiFi connectivity</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Data Processing & Communication</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Real-time data collection and preprocessing on ESP32</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>MQTT protocol for secure data transmission to cloud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Firebase Realtime Database for data storage and synchronization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Data validation and filtering algorithms</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Data Management & Visualization</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Grafana dashboard connected to database for real-time monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>MQTT receiver for data collection and processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Database integration for sensor data storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>Real-time vital signs monitoring and display</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Health Monitoring Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-emerald-600" />
                Health Monitoring Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Heart Rate Monitoring</h3>
                    <p className="text-red-700 dark:text-red-300">Continuous pulse tracking with abnormal rhythm detection and alert system</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">SpO2 Measurement</h3>
                    <p className="text-blue-700 dark:text-blue-300">Blood oxygen saturation monitoring with threshold-based alerts</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Temperature Tracking</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Body temperature monitoring for fever detection and health assessment</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Fall Detection</h3>
                    <p className="text-purple-700 dark:text-purple-300">Accelerometer-based fall detection with immediate emergency alerts</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Activity Monitoring</h3>
                    <p className="text-green-700 dark:text-green-300">Daily activity tracking and movement pattern analysis</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Emergency Alerts</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Multi-channel notification system for critical health events</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Achievements */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Results & System Performance
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">24/7</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Continuous Monitoring</h3>
                  <p className="text-slate-600 dark:text-slate-300">Real-time data collection</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">&lt;5s</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Alert Response</h3>
                  <p className="text-slate-600 dark:text-slate-300">Emergency notification time</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">95%</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Accuracy Rate</h3>
                  <p className="text-slate-600 dark:text-slate-300">Sensor measurements</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">30</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Battery Life (Days)</h3>
                  <p className="text-slate-600 dark:text-slate-300">Wearable device operation</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-emerald-600" />
                Technologies & Components
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "ESP32", "MAX30102", "DS18B20", "MPU6050",
                  "Grafana", "Database", "MQTT", "MQTT Receiver",
                  "C/C++", "WiFi", "Specialized Sensors", "IoT Protocols",
                  "Real-time Monitoring", "Data Storage", "Contactless Detection", "Team Leadership"
                ].map((tech, index) => (
                  <div key={index} className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 text-center">
                    <span className="text-emerald-800 dark:text-emerald-200 font-medium">{tech}</span>
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
                        <span>Sensor calibration and accuracy optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Power consumption management for wearable device</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Real-time data processing and noise filtering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Reliable WiFi connectivity and data transmission</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Multi-point calibration and digital filtering algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Deep sleep modes and efficient data sampling strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Moving average filters and outlier detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Automatic reconnection and data buffering mechanisms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* System Architecture */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                System Architecture & Impact
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Three-Tier Architecture</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Device layer (sensors + ESP32), cloud layer (Firebase + processing), and presentation layer (web dashboard) for scalable healthcare monitoring.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Healthcare Impact</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Enables early detection of health anomalies, reduces hospital visits, and provides peace of mind for families with elderly members.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Scalability & Future</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Modular design allows easy addition of new sensors and integration with existing healthcare systems and electronic health records.
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
