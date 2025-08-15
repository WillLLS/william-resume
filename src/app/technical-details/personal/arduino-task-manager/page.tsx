import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, CheckCircle, Lightbulb, Code } from "lucide-react";

export default function ArduinoTaskManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Arduino Task Manager with 3D Printing
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
              Arduino Task Manager with 3D Printing
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
              First Arduino project combining task management system with 3D printing for domestic task organization
            </p>
            <div className="flex justify-center">
              <a 
                href="https://forum.arduino.cc/t/resolu-merci-beaucoup-taskme-mon-gestionnaire-de-taches-menageres/701446" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                View Arduino Forum Discussion
              </a>
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
                <Target className="w-6 h-6 text-teal-600" />
                Project Overview
              </h2>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  My first Arduino project that combines task management system with 3D printing for domestic task organization. 
                  This project was developed to help manage household tasks using Arduino-based hardware and custom 3D printed components.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The system features an Arduino-based user interface with LCD display and sensors, 
                  integrated with custom 3D printed enclosures and mechanical components for a complete task management solution.
                </p>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-teal-600" />
                Technologies & Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Arduino", "C/C++", "3D Printing", 
                  "Task Management", "LCD Display", "Sensors"
                ].map((tech, index) => (
                  <div key={index} className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 text-center">
                    <span className="text-teal-800 dark:text-teal-200 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Key Achievements
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">First embedded systems project</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Custom 3D printed components</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Domestic task organization system</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Arduino-based user interface</span>
                </div>
              </div>
            </div>

            {/* Project Impact */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Project Impact & Learning
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">First Arduino Experience</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    This project marked my introduction to embedded systems development and Arduino programming, 
                    establishing the foundation for future IoT and embedded projects.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">3D Printing Integration</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Successfully combined software development with hardware fabrication, 
                    creating custom enclosures and mechanical components through 3D printing.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Community Engagement</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Shared the project on Arduino forums, receiving community feedback and contributing to the 
                    open-source hardware community knowledge base.
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
