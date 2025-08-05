import Link from "next/link";
import { ArrowLeft, Calendar, Building2, Target, Wrench, CheckCircle, Lightbulb, Cpu } from "lucide-react";

export default function Pix2VoxMLModel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details/professional" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Pix2Vox ML Model
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
              Pix2Vox Machine Learning Model Training
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Training and optimizing a machine learning model to generate 3D voxels from 2D images using auto-encoder architecture for custom-made hearing aids manufacturing
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
                  End-to-end solution for 3D prints custom-made hearing aids. The goal was to develop a machine learning model capable of generating 3D voxel representations from 2D images, enabling automated 3D reconstruction for hearing aid manufacturing.
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
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Model Architecture</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Auto-encoder based architecture for 2D to 3D conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Improved voxel resolution from 32x32x32 to 128x128x128</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Multi-epoch training optimization for best results</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Data Processing</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Generated images from different angles for data augmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>STL file processing for training data creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Comprehensive understanding of model behavior and limitations</span>
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
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Model Resolution Enhancement</h3>
                    <p className="text-green-700 dark:text-green-300">Successfully upgraded voxel resolution from 32³ to 128³, significantly improving 3D reconstruction detail</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Data Augmentation Pipeline</h3>
                    <p className="text-blue-700 dark:text-blue-300">Implemented comprehensive data augmentation from STL files with multi-angle image generation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Training Optimization</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Optimized training process across multiple epochs for maximum performance</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Performance Analysis</h3>
                    <p className="text-red-700 dark:text-red-300">Achieved ~60% accuracy in testing phase - identified areas for future improvement</p>
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
                  "Python", "Machine Learning", "Auto-encoder", 
                  "Data Augmentation", "STL Processing", "Neural Networks"
                ].map((tech, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                    <span className="text-blue-800 dark:text-blue-200 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Challenges & Key Learnings
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Model Architecture Optimization</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Learned to modify and optimize auto-encoder architectures for specific 3D reconstruction tasks, including resolution enhancement techniques.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data Augmentation Strategies</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Developed expertise in creating effective training datasets from 3D models, including multi-angle image generation and STL file processing.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Performance Analysis & Iteration</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Gained valuable experience in model evaluation and identifying areas for improvement when results don&apos;t meet production requirements.
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
