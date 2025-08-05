import { ArrowLeft, Calendar, Users, Wifi, Database, Smartphone, Brain } from 'lucide-react';
import Link from 'next/link';

export default function ConnectedTablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/technical-details/personal" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Personal Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Connected Table
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              IoT Smart Table with Integrated Connectivity and User Management
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>2023</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>Personal Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Wifi className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Connectivity System</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Developed a comprehensive connectivity solution integrating multiple wireless protocols 
                for seamless device communication and user interaction management.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Wi-Fi 802.11ac integration
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Bluetooth Low Energy (BLE) 5.0
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NFC proximity detection
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time data synchronization
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Data Management</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Implemented a robust data management system with secure storage, real-time processing, 
                and intelligent analytics for user behavior and device optimization.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  SQLite local database
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Cloud synchronization (Firebase)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  User session management
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Encrypted data transmission
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Architecture Overview</h3>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                The Connected Table represents a sophisticated IoT solution that bridges physical and 
                digital interactions. The system architecture is built around a central ESP32 
                microcontroller that manages multiple communication protocols and sensors.
              </p>
              <p className="mb-4">
                <strong>Core Components:</strong> The table integrates pressure sensors for surface 
                interaction detection, proximity sensors for user presence, and environmental sensors 
                for ambient conditions. A central processing unit manages all data flows and 
                communication protocols.
              </p>
              <p>
                <strong>Smart Features:</strong> The table can detect user presence, adapt lighting and 
                temperature, manage connected devices, and provide personalized experiences based on 
                user profiles and interaction patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Device Support</h3>
              <p className="text-gray-600">Seamless integration with smartphones, tablets, and laptops</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Learning</h3>
              <p className="text-gray-600">Adaptive behavior based on usage patterns and preferences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-User Management</h3>
              <p className="text-gray-600">Individual profiles and personalized experiences</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Milestones</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Real-time multi-protocol communication system
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advanced sensor fusion algorithms
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Secure authentication and data encryption
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cross-platform mobile application
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Innovation Impact</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Enhanced workspace productivity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Intuitive human-computer interaction
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personalized smart environment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Energy-efficient operation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Hardware</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>ESP32-WROOM-32</li>
                <li>Pressure sensors</li>
                <li>NFC module</li>
                <li>LED strips</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-2xl mb-2">💻</div>
              <h3 className="font-semibold text-gray-900 mb-2">Firmware</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Arduino IDE</li>
                <li>FreeRTOS</li>
                <li>ESP-IDF</li>
                <li>C/C++</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>React Native</li>
                <li>Expo</li>
                <li>AsyncStorage</li>
                <li>Bluetooth API</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-2xl mb-2">☁️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Firebase</li>
                <li>Node.js</li>
                <li>WebSocket</li>
                <li>MQTT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Challenges & Solutions</h2>
          
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Challenge: Multi-Protocol Communication</h3>
              <p className="text-red-700 mb-4">
                Managing simultaneous Wi-Fi, Bluetooth, and NFC communications without interference 
                while maintaining stable connections and optimal power consumption.
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="text-green-800 font-semibold mb-2">Solution</h4>
                <p className="text-green-700">
                  Implemented a sophisticated task scheduler using FreeRTOS with priority-based 
                  communication protocol switching, dynamic power management, and interference 
                  detection algorithms that automatically adjust transmission parameters.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Challenge: User Recognition & Privacy</h3>
              <p className="text-red-700 mb-4">
                Accurately identifying users while respecting privacy concerns and ensuring secure 
                data handling without compromising the user experience.
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="text-green-800 font-semibold mb-2">Solution</h4>
                <p className="text-green-700">
                  Developed a multi-factor authentication system combining NFC proximity, device 
                  MAC address filtering, and behavioral pattern recognition with end-to-end 
                  encryption and local data processing to maintain privacy.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Challenge: Real-Time Responsiveness</h3>
              <p className="text-red-700 mb-4">
                Ensuring immediate response to user interactions while processing multiple sensor 
                inputs, managing device connections, and maintaining system stability.
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="text-green-800 font-semibold mb-2">Solution</h4>
                <p className="text-green-700">
                  Optimized sensor polling rates, implemented interrupt-driven event handling, 
                  and created a priority queue system for critical operations with predictive 
                  caching to minimize response latency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <Link href="/technical-details/personal" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Personal Projects
            </Link>
            <Link href="/technical-details" 
                  className="text-gray-600 hover:text-gray-800 transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
