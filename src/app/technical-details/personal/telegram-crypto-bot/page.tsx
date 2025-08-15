import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, Wrench, CheckCircle, Lightbulb, Cpu, ExternalLink } from "lucide-react";

export default function TelegramCryptoBot() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Telegram Crypto Bot
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 mb-4">
              <User className="w-5 h-5" />
              <span>Personal Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Telegram Cryptocurrency Bot (TON Network)
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
              Telegram bot for crypto trending on TON Network with hosting and real-time market notifications. Allowing the user to buy a trending place automaticaly from a second bot. All the paiment processus in cryptocurrency was automatic, even the refund system.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://t.me/hunton_live" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Bot: @hunton_live
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Interface Screenshots */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Bot Interface & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/hunton_project_list_trending.jpg" 
                alt="Hunton bot project list and trending interface"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Project List & Trending</h3>
                <p className="text-slate-600 dark:text-slate-300">Interface showing crypto project listings and trending analysis features</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/hunton_project_trending.jpg" 
                alt="Hunton bot trending functionality"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Trending Analytics</h3>
                <p className="text-slate-600 dark:text-slate-300">Real-time trending analysis with automatic payment system for placement</p>
              </div>
            </div>
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
                <Target className="w-6 h-6 text-purple-600" />
                Project Overview
              </h2>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Developed a sophisticated Telegram bot specifically designed for the TON Network ecosystem, providing real-time cryptocurrency trending analysis, market notifications, and comprehensive tracking services. The bot serves as a comprehensive tool for crypto enthusiasts to stay updated with TON Network developments and market movements.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-purple-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Bot Core Functionality</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Real-time cryptocurrency trending analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>TON Network specific market data integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Automated notification system for price changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Multi-source data aggregation and analysis</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Hosting & Infrastructure</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Reliable cloud hosting setup for 24/7 availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Scalable architecture to handle multiple users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Automated deployment and monitoring systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Error handling and recovery mechanisms</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Data Processing</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Real-time data fetching from multiple cryptocurrency APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Data filtering and analysis algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Trend detection and pattern recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>User-customizable notification thresholds</span>
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
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Live Deployment</h3>
                    <p className="text-green-700 dark:text-green-300">Successfully deployed and operational at t.me/hunton_live</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">TON Network Integration</h3>
                    <p className="text-blue-700 dark:text-blue-300">Specialized integration with TON Network ecosystem and APIs</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Real-time Notifications</h3>
                    <p className="text-purple-700 dark:text-purple-300">Immediate market trend notifications and price alerts</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">24/7 Reliability</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Continuous operation with robust hosting infrastructure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-purple-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Python", "Telegram API", "TON Network", 
                  "Cryptocurrency APIs", "Cloud Hosting", "Real-time Data",
                  "Data Processing", "API Integration", "Automation"
                ].map((tech, index) => (
                  <div key={index} className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center">
                    <span className="text-purple-800 dark:text-purple-200 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features & Capabilities */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Key Features & Capabilities
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Market Analysis</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Real-time crypto trending analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>TON Network specific insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Market movement notifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Price trend detection</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">User Experience</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Intuitive Telegram interface</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Customizable notification settings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Multi-source data aggregation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>24/7 availability and reliability</span>
                      </li>
                    </ul>
                  </div>
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
