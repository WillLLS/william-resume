import Link from "next/link";
import { ArrowLeft, Calendar, Building2, Target, Wrench, CheckCircle, Lightbulb, Cpu } from "lucide-react";

export default function SLAElectronicCircuits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/professional" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              SLA Electronic Circuits
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <Building2 className="w-5 h-5" />
              <span>Symphony 3D</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Electronic Circuit Creation with 3D SLA Printer
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Fast prototyping solution for electronic circuits using 3D SLA printer and chemical etching techniques for rapid PCB development
            </p>
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
                <Target className="w-6 h-6 text-blue-600" />
                Project Context
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Rapid prototyping support for the jetting 3D printer project. The goal was to produce simple electronic cards for fast prototype creation, enabling quick iteration and testing of custom PCBs needed for the revolutionary jetting printer development.
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
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3D SLA Printer Utilization</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Using high-precision 3D SLA printer for mask creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Designing and printing precise etching masks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Optimizing print parameters for mask accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Creating detailed circuit patterns with micron precision</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Chemical Etching Process</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Chemical etching using iron chloride solution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Precise timing control for optimal etch depth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Solution temperature and concentration optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Safety protocols for chemical handling</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">PCB Design & Manufacturing</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Custom PCB design for jetting printer components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Rapid iteration and testing capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Cost-effective prototype development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Integration with existing electronic systems</span>
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
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Precise Mask Creation</h3>
                    <p className="text-green-700 dark:text-green-300">Successfully created highly precise etching masks using 3D SLA printer</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Chemical Etching Mastery</h3>
                    <p className="text-blue-700 dark:text-blue-300">Mastered iron chloride etching process for consistent results</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Fast Prototype Cycle</h3>
                    <p className="text-purple-700 dark:text-purple-300">Achieved rapid prototype production cycle for iterative development</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Project Support</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Successfully supported jetting printer development with custom PCBs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "3D SLA Printing", "Chemical Etching", "Iron Chloride", 
                  "PCB Design", "Rapid Prototyping", "Mask Creation",
                  "Electronic Design", "Chemical Processing", "Quality Control"
                ].map((tech, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                    <span className="text-blue-800 dark:text-blue-200 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Innovation */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Process Innovation & Workflow
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Manufacturing Workflow</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                          <span className="font-medium text-slate-900 dark:text-white">PCB Design</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Create electronic circuit design for specific requirements</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                          <span className="font-medium text-slate-900 dark:text-white">3D Mask Printing</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Use SLA printer to create precise etching masks</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                          <span className="font-medium text-slate-900 dark:text-white">Chemical Etching</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Apply iron chloride solution for circuit creation</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Key Advantages</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Rapid prototyping for quick iterations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Cost-effective compared to traditional PCB manufacturing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>High precision with micron-level accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>In-house production capability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Perfect for custom one-off prototypes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications & Impact */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                Applications & Project Impact
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Jetting Printer Support</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Provided essential custom PCB prototypes for the revolutionary jetting 3D printer project, enabling rapid development and testing.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Development Speed</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Significantly accelerated the development cycle by providing in-house rapid prototyping capabilities for electronic components.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost Efficiency</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Reduced prototype costs and lead times compared to external PCB manufacturing services.
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
          <Link href="/technical-details/professional" className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Professional Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
