import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, Wrench, CheckCircle, Lightbulb, Globe, Code } from "lucide-react";

export default function WebScraping() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Web Scraping Automation
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-4">
              <User className="w-5 h-5" />
              <span>Personal Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2020-2021</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Automated Web Scraping System
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive web scraping solution for automated data extraction from various websites including legal databases, real estate platforms, and e-commerce sites
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
                  Developed a comprehensive web scraping automation system to extract structured data from various types of websites. The system was designed to handle different data sources including legal databases, real estate listings, and e-commerce platforms.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The solution included advanced anti-detection mechanisms, data validation, storage systems, and automated reporting capabilities for continuous monitoring and data collection.
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
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Core Scraping Framework</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Python-based scraping engine using Selenium and BeautifulSoup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Multi-threaded architecture for concurrent data extraction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Headless browser automation with Chrome WebDriver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Dynamic content handling with JavaScript execution</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Anti-Detection Mechanisms</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Rotating proxy servers to mask IP addresses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>User-Agent rotation and header spoofing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Random delays and human-like browsing patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>CAPTCHA detection and handling strategies</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Data Processing & Storage</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Structured data extraction with CSS selectors and XPath</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Data validation and cleaning algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>SQLite database for local storage and PostgreSQL for production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>CSV and JSON export capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Target Websites */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-green-600" />
                Target Websites & Use Cases
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Legal Databases</h3>
                    <p className="text-blue-700 dark:text-blue-300">Court decisions, legal precedents, and regulatory documents extraction</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Real Estate Platforms</h3>
                    <p className="text-purple-700 dark:text-purple-300">Property listings, prices, and market trend analysis</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">E-commerce Sites</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Product information, pricing, and inventory monitoring</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">News & Content Sites</h3>
                    <p className="text-green-700 dark:text-green-300">Article extraction and content aggregation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Achievements */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Results & Performance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">10K+</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Records Extracted</h3>
                  <p className="text-slate-600 dark:text-slate-300">Daily data extraction capacity</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">99%</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Success Rate</h3>
                  <p className="text-slate-600 dark:text-slate-300">Data extraction accuracy</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">24/7</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Continuous Operation</h3>
                  <p className="text-slate-600 dark:text-slate-300">Automated monitoring</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-green-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Python", "Selenium", "BeautifulSoup", "Requests",
                  "SQLite", "PostgreSQL", "Chrome WebDriver", "Pandas",
                  "Threading", "JSON", "CSV", "XPath",
                  "Proxy Rotation", "User-Agent Spoofing", "CAPTCHA Handling", "Regex"
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
                        <span>Anti-bot detection systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Dynamic content loading with JavaScript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Rate limiting and IP blocking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Data structure variations across sites</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Implemented Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Advanced stealth techniques and proxy rotation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Selenium WebDriver for JavaScript execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Intelligent delay patterns and request throttling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Flexible parser architecture with fallback strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture & Workflow */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                System Architecture & Workflow
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Modular Design</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Modular scraper components for different website types, allowing easy extension and maintenance of the scraping system.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automated Scheduling</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Cron-based scheduling system for regular data updates with configurable intervals and retry mechanisms.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quality Assurance</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Built-in data validation, duplicate detection, and quality scoring to ensure high-quality extracted data.
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
