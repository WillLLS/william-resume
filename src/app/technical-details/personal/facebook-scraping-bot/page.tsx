import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, Wrench, CheckCircle, Lightbulb, Facebook, Code } from "lucide-react";

export default function FacebookBot() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Facebook Automation Bot
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <User className="w-5 h-5" />
              <span>Personal Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2020</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Facebook Automation Bot
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Sophisticated Facebook automation system for managing social interactions, group activities, and content engagement with advanced behavior simulation
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
                <Target className="w-6 h-6 text-blue-600" />
                Project Overview
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Created a comprehensive Facebook automation bot using Python and Selenium to automate various social media activities including friend requests, group interactions, page management, and content engagement while maintaining authentic user behavior.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The system included advanced features for group posting, friend management, automated responses, and social network analysis, all designed to operate safely within Facebook's terms of service.
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
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Core Automation Framework</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Python-based automation engine with Selenium WebDriver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Chrome browser automation with custom user profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Session persistence and cookie management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Multi-account support with isolated browser instances</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Social Interaction Features</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Automated friend requests with intelligent targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Group posting and content sharing automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Page liking and following with category filtering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Automated commenting and reaction systems</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Content Management</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Scheduled posting with optimal timing analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Image and video upload automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Content template system with variable substitution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Hashtag and mention management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Facebook className="w-6 h-6 text-blue-600" />
                Advanced Features & Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Smart Friend Targeting</h3>
                    <p className="text-green-700 dark:text-green-300">Intelligent friend suggestion analysis based on mutual connections and interests</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Group Management</h3>
                    <p className="text-purple-700 dark:text-purple-300">Automated group joining, posting, and member interaction</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Message Automation</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Automated direct messaging with personalized templates</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Activity Analytics</h3>
                    <p className="text-red-700 dark:text-red-300">Comprehensive tracking of engagement rates and growth metrics</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Behavior Simulation</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Human-like activity patterns with realistic timing</p>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Safety Protocols</h3>
                    <p className="text-teal-700 dark:text-teal-300">Built-in limits and monitoring to prevent account restrictions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Performance */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Results & Performance Metrics
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">5K+</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Friends Added</h3>
                  <p className="text-slate-600 dark:text-slate-300">Organic network growth</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">50+</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Groups Managed</h3>
                  <p className="text-slate-600 dark:text-slate-300">Active group participation</p>
                  </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">1K+</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Posts Automated</h3>
                  <p className="text-slate-600 dark:text-slate-300">Content sharing</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">98%</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Success Rate</h3>
                  <p className="text-slate-600 dark:text-slate-300">Action completion</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Python", "Selenium", "Chrome WebDriver", "BeautifulSoup",
                  "SQLite", "JSON", "Threading", "Requests",
                  "PIL (Image Processing)", "Schedule", "Random Library", "Time Management",
                  "CSV Handling", "Regular Expressions", "Logging", "Exception Handling"
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
                        <span>Facebook's complex anti-automation systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Dynamic UI changes and element identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Account security checkpoints and verifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Privacy settings and content visibility</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Advanced stealth techniques and behavior randomization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Robust element detection with multiple selector strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Automated checkpoint handling and recovery mechanisms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Intelligent content filtering and privacy detection</span>
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
                System Architecture & Safety Features
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Modular Design</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Separated modules for different Facebook features (friends, groups, pages, messaging) allowing independent operation and maintenance.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Activity Monitoring</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Real-time monitoring of account activity with automatic pause functionality when unusual patterns are detected.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data Privacy</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Secure handling of user data with encryption and local storage options to protect privacy and sensitive information.
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
