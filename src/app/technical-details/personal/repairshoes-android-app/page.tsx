import Link from "next/link";
import { ArrowLeft, Calendar, User, Target } from "lucide-react";

export default function RepairShoesApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/personal" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              RepairShoes SMS App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400 mb-4">
              <User className="w-5 h-5" />
              <span>Personal Project</span>
              <span className="mx-2">•</span>
              <Calendar className="w-5 h-5" />
              <span>2021</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              RepairShoes SMS Application
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Simple Android SMS automation app for shoe repair shop customer notifications
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
                <Target className="w-6 h-6 text-orange-600" />
                Project Overview
              </h2>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  A basic Android application designed to help a local shoe repair shop send automated SMS notifications to customers when their repairs are completed.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  The app allows the shop owner to select a service type (like &quot;shoes&quot;) and enter the customer&apos;s phone number. When clicking send, 
                  the app automatically sends a predefined message such as: &quot;Hello, your shoes are ready and you can come pick them up. Best regards, the cobbler shop.&quot;
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  This mini-project focuses on SMS automation functionality using Android Studio, without complex features like databases, 
                  payment systems, or advanced UI components.
                </p>
              </div>
            </div>

            {/* Technical Stack */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Technical Implementation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Core Technologies</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Android Studio</li>
                    <li>• Java</li>
                    <li>• Android SMS Manager</li>
                    <li>• Basic XML layouts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Service type selection</li>
                    <li>• Phone number input</li>
                    <li>• Predefined SMS templates</li>
                    <li>• One-click send functionality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Learning Outcomes
              </h2>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  This project served as an introduction to Android development, focusing on:
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 ml-4">
                  <li>• Android Studio development environment</li>
                  <li>• SMS permissions and Android security model</li>
                  <li>• Basic user interface design with XML</li>
                  <li>• Simple business automation concepts</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
