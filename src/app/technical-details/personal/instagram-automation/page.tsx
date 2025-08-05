import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, Wrench, CheckCircle, Lightbulb, Instagram, Code } from "lucide-react";

export default function InstagramBot() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Instagram Automation Bot
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400 mb-4">
              <User className="w-5 h-5" />
              <span>Personal Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2020</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Instagram Automation Bot
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Advanced Instagram automation system for managing followers, automated interactions, and content engagement with sophisticated anti-detection mechanisms
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
                <Target className="w-6 h-6 text-pink-600" />
                Project Overview
              </h2>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Developed a comprehensive Instagram automation bot using Python and Selenium to automate social media interactions while maintaining human-like behavior patterns. The system was designed to grow follower base organically through strategic engagement.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The bot included advanced features like targeted audience interaction, automated posting, story viewing, and comprehensive analytics tracking, all while avoiding Instagram's anti-bot detection systems.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-pink-600" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Core Automation Engine</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Python-based automation using Selenium WebDriver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Chrome browser automation in headless mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Session management and cookie handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Multi-account support with profile switching</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Interaction Features</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Automated following/unfollowing with smart targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Intelligent liking based on hashtags and user profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Automated commenting with customizable message templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Story viewing and direct message automation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Anti-Detection Systems</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Human-like behavior simulation with random delays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Activity limits and cooldown periods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Proxy rotation and IP address management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Browser fingerprint randomization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Instagram className="w-6 h-6 text-pink-600" />
                Key Features & Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Smart Targeting</h3>
                    <p className="text-blue-700 dark:text-blue-300">Hashtag-based and competitor follower targeting for relevant audience engagement</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Analytics Dashboard</h3>
                    <p className="text-green-700 dark:text-green-300">Comprehensive tracking of follower growth, engagement rates, and bot performance</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Content Scheduling</h3>
                    <p className="text-purple-700 dark:text-purple-300">Automated post scheduling with optimal timing analysis</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Safe Operation</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Built-in safety limits and Instagram TOS compliance measures</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Multi-Account Support</h3>
                    <p className="text-red-700 dark:text-red-300">Manage multiple Instagram accounts simultaneously with isolated sessions</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Custom Filters</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Advanced filtering based on follower count, engagement rate, and account age</p>
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
                  <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-pink-600">15K+</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Followers Gained</h3>
                  <p className="text-slate-600 dark:text-slate-300">Over 6 months period</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">500+</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Daily Interactions</h3>
                  <p className="text-slate-600 dark:text-slate-300">Likes, follows, comments</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">95%</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Uptime</h3>
                  <p className="text-slate-600 dark:text-slate-300">Bot reliability</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">0</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Account Bans</h3>
                  <p className="text-slate-600 dark:text-slate-300">Safe operation record</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-pink-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Python", "Selenium", "Chrome WebDriver", "BeautifulSoup",
                  "SQLite", "JSON", "Threading", "Requests",
                  "Random Library", "Time Management", "Proxy Rotation", "User-Agent Spoofing",
                  "Cookie Management", "Session Handling", "Data Analytics", "Logging"
                ].map((tech, index) => (
                  <div key={index} className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-3 text-center">
                    <span className="text-pink-800 dark:text-pink-200 font-medium">{tech}</span>
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
                    <h3 className="font-semibold text-slate-900 dark:text-white">Key challenges</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Instagram's sophisticated bot detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Dynamic UI elements and frequent layout changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Rate limiting and action blocks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Maintaining human-like behavior patterns</span>
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
                        <span>Robust element detection with multiple fallback selectors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Intelligent cooldown periods and activity monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Machine learning-inspired interaction timing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety & Compliance */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                Safety Features & Compliance
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Activity Limits</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Built-in daily and hourly limits for all actions (follows, likes, comments) to stay within Instagram's acceptable usage patterns.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Smart Monitoring</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Real-time monitoring of account health with automatic pause functionality when unusual activity is detected.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Educational Purpose</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Project developed for learning automation techniques and understanding social media platform mechanics.
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
