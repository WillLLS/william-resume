import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, Wrench, CheckCircle, Lightbulb, Cpu, Code } from "lucide-react";

export default function ArduinoTaskManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Arduino Connected Task Manager
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-teal-600 dark:text-teal-400 mb-4">
              <User className="w-5 h-5" />
              <span>Personal Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2021</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Arduino Connected Task Manager
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              IoT task management system combining Arduino hardware with web interface for physical task tracking, LED notifications, and productivity monitoring
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
                <Target className="w-6 h-6 text-teal-600" />
                Project Overview
              </h2>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Created an innovative task management system that bridges the digital and physical worlds by combining an Arduino-based hardware interface with a web application. The system provides tactile task interaction through physical buttons and visual feedback via LEDs.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The project demonstrates IoT principles by creating a seamless connection between embedded hardware and cloud-based software, allowing users to manage tasks both digitally and physically for enhanced productivity.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-teal-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Arduino Hardware System</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Arduino Uno R3 as main microcontroller unit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>ESP8266 WiFi module for internet connectivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>RGB LED strips for visual task status indication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Push buttons for physical task interaction</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Firmware Development</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>C++ firmware for Arduino with WiFi communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>HTTP client implementation for API communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Button debouncing and interrupt handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>LED pattern control for different task states</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Web Application Backend</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Python Flask web framework for REST API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>SQLite database for task storage and management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>RESTful endpoints for task CRUD operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>WebSocket support for real-time updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hardware Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-teal-600" />
                Hardware Features & Interactions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Physical Task Buttons</h3>
                    <p className="text-green-700 dark:text-green-300">Dedicated buttons for each task allowing physical completion marking</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">LED Status Indicators</h3>
                    <p className="text-blue-700 dark:text-blue-300">Color-coded LED feedback showing task priority and completion status</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">WiFi Connectivity</h3>
                    <p className="text-purple-700 dark:text-purple-300">Wireless connection to web backend for real-time synchronization</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Priority Visualization</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Different LED patterns and colors for high, medium, and low priority tasks</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Completion Feedback</h3>
                    <p className="text-red-700 dark:text-red-300">Satisfying LED animations when tasks are completed</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Status Synchronization</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Automatic sync between hardware state and web application</p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Workflow */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                System Workflow & User Experience
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-teal-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Task Creation</h3>
                    <p className="text-slate-600 dark:text-slate-300">Create tasks via web interface with priority levels and descriptions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Hardware Sync</h3>
                    <p className="text-slate-600 dark:text-slate-300">Arduino fetches tasks and displays them via LED indicators</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-teal-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Physical Interaction</h3>
                    <p className="text-slate-600 dark:text-slate-300">Press physical buttons to mark tasks as completed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-teal-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Status Update</h3>
                    <p className="text-slate-600 dark:text-slate-300">Changes sync back to web interface with completion tracking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-teal-600" />
                Technologies & Components
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Arduino Uno", "ESP8266", "C++", "Python",
                  "Flask", "SQLite", "HTML/CSS/JS", "RGB LEDs",
                  "Push Buttons", "HTTP Client", "WebSocket", "REST API",
                  "WiFi", "Interrupt Handling", "Debouncing", "JSON"
                ].map((tech, index) => (
                  <div key={index} className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 text-center">
                    <span className="text-teal-800 dark:text-teal-200 font-medium">{tech}</span>
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
                        <span>Reliable WiFi connectivity and connection recovery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Button debouncing and false trigger prevention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Real-time synchronization between hardware and web</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Power management and system stability</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Automatic reconnection logic with exponential backoff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Hardware and software debouncing with timing controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Polling and webhook combination for bidirectional sync</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Watchdog timer implementation and error handling</span>
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
                Project Impact & Innovation
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">IoT Integration Mastery</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Demonstrated comprehensive IoT development skills by successfully integrating embedded hardware with cloud-based software systems.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Human-Computer Interaction</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Created an innovative tangible user interface that bridges digital task management with physical interaction for enhanced user engagement.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Full-Stack Development</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Showcased end-to-end development capabilities from embedded firmware to web application, demonstrating versatility across technology stacks.
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
