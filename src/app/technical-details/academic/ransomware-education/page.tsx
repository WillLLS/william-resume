import Link from "next/link";
import { ArrowLeft, Calendar, GraduationCap, Target, Wrench, CheckCircle, Lightbulb, Shield, Code } from "lucide-react";

export default function EducationalRansomware() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/academic" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Educational Ransomware Analysis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span>Academic Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2023</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Educational Ransomware Analysis
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
              Comprehensive cybersecurity research project analyzing ransomware mechanisms, developing detection systems, and creating educational tools for security awareness
            </p>
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-4 mx-auto max-w-2xl">
              <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
                <Shield className="w-5 h-5" />
                <strong>Educational Purpose Only</strong>
              </div>
              <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                This project was conducted in a controlled academic environment for cybersecurity education and defense research purposes only.
              </p>
            </div>
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
                <Target className="w-6 h-6 text-red-600" />
                Project Overview
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Conducted an academic research project focused on understanding ransomware mechanisms, attack vectors, and defense strategies. The project aimed to develop educational tools and detection systems to enhance cybersecurity awareness and protection.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Working within a controlled university environment, the research explored encryption techniques, system vulnerabilities, and created a comprehensive framework for ransomware detection and prevention education.
                </p>
              </div>
            </div>

            {/* Research Components */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-red-600" />
                Research Components
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Malware Analysis Framework</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Static analysis of ransomware samples using reverse engineering tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Dynamic behavior analysis in isolated sandbox environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Encryption algorithm analysis and pattern recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Network communication and command-and-control analysis</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Detection System Development</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Behavioral monitoring system for suspicious file operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Machine learning models for ransomware pattern detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Real-time file system monitoring and protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Signature-based and heuristic detection algorithms</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Educational Tools Creation</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Interactive simulation environment for cybersecurity training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Comprehensive documentation of attack vectors and defenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Best practices guide for ransomware prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Incident response procedures and recovery strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Analysis */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-600" />
                Security Analysis & Findings
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Attack Vectors Analyzed</h3>
                    <p className="text-orange-700 dark:text-orange-300">Email attachments, exploit kits, and social engineering techniques</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Encryption Methods</h3>
                    <p className="text-purple-700 dark:text-purple-300">Analysis of AES, RSA, and hybrid encryption implementations</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">System Vulnerabilities</h3>
                    <p className="text-blue-700 dark:text-blue-300">Identification of common security weaknesses and entry points</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Defense Mechanisms</h3>
                    <p className="text-green-700 dark:text-green-300">Multi-layered security approaches and prevention strategies</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Recovery Techniques</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Backup strategies and file recovery methodologies</p>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">User Education</h3>
                    <p className="text-teal-700 dark:text-teal-300">Awareness training and behavioral security measures</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Methodology */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Research Methodology & Ethics
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Controlled Environment</h3>
                    <p className="text-slate-600 dark:text-slate-300">All research conducted in isolated virtual machines with university supervision</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Ethical Guidelines</h3>
                    <p className="text-slate-600 dark:text-slate-300">Strict adherence to academic ethics and responsible disclosure principles</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Educational Focus</h3>
                    <p className="text-slate-600 dark:text-slate-300">Research aimed at improving cybersecurity education and defense capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-red-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Knowledge Sharing</h3>
                    <p className="text-slate-600 dark:text-slate-300">Results shared with cybersecurity community for defensive improvements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-red-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Python", "C++", "Assembly", "PowerShell",
                  "IDA Pro", "Wireshark", "VMware", "VirtualBox",
                  "Cuckoo Sandbox", "YARA Rules", "Machine Learning", "Scikit-learn",
                  "Windows API", "File System Monitoring", "Network Analysis", "Cryptography"
                ].map((tech, index) => (
                  <div key={index} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 text-center">
                    <span className="text-red-800 dark:text-red-200 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Research Challenges & Solutions
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Key Challenges</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Safe analysis of malicious code in controlled environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Reverse engineering of obfuscated ransomware samples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Developing effective detection without false positives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Balancing educational value with security risks</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Research Solutions</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Multi-layered isolation using VMs and network segmentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Advanced static and dynamic analysis techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Machine learning models trained on benign and malicious patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Comprehensive documentation and ethical framework</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Impact */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                Educational Impact & Contributions
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cybersecurity Awareness</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Enhanced understanding of ransomware threats and developed educational materials to improve security awareness among students and professionals.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Defense Research</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Contributed to the development of detection systems and defensive strategies that can be applied in real-world cybersecurity scenarios.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Academic Excellence</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Demonstrated advanced technical skills in malware analysis, reverse engineering, and machine learning applied to cybersecurity challenges.
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
