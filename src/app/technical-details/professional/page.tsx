import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Building2 } from "lucide-react";

export default function ProfessionalProjects() {
  const projects = [
    {
      id: "iot-3d-printer",
      title: "IoT Connected 3D Printer Control Solution",
      company: "Symphony 3D",
      period: "2024",
      description: "Complete IoT solution to remotely control an SLA 3D printer with reverse engineering, MQTT protocol, and comprehensive sensor integration",
      context: "End-to-end solution for 3D prints custom-made hearing aids",
      technologies: ["ESP32", "C/C++", "MQTT", "WiFi", "NFC", "Wireshark", "RabbitMQ"],
      achievements: [
        "Reverse engineered 3D printer protocols using Wireshark",
        "Implemented MQTT protocol for remote control",
        "First PoC delivered after 1 month",
        "Added sensors: humidity, temperature, limit switches, NFC readers"
      ],
      slug: "iot-3d-printer"
    },
    {
      id: "pix2vox-ml-model", 
      title: "Pix2Vox Machine Learning Model Training",
      company: "Symphony 3D",
      period: "2024",
      description: "Training and optimizing a machine learning model to generate 3D voxels from 2D images using auto-encoder architecture",
      context: "3D reconstruction for custom-made hearing aids manufacturing",
      technologies: ["Python", "Machine Learning", "Auto-encoder", "Data Augmentation", "STL Processing"],
      achievements: [
        "Improved voxel resolution from 32³ to 128³",
        "Implemented data augmentation from STL files",
        "Generated multi-angle training images",
        "Achieved 60% accuracy in testing phase"
      ],
      slug: "pix2vox-ml-model"
    },
    {
      id: "jetting-3d-printer",
      title: "Next-Generation Jetting 3D Printer Development", 
      company: "Symphony 3D",
      period: "2024",
      description: "Complete development of innovative jetting 3D printer using 2D ink printhead technology for resin-based printing",
      context: "Revolutionary printing technology for high-precision 3D manufacturing",
      technologies: ["C/C++", "Python", "G-Code", "ESP32", "Electronics Design", "3D Printing"],
      achievements: [
        "Full system operational after 3 months",
        "Successfully integrated 2D printhead with 3D printer",
        "Created custom slicer for STL to G-Code conversion",
        "Implemented resin supply and UV curing system"
      ],
      slug: "jetting-3d-printer"
    },
    {
      id: "electroplating-3d-pieces",
      title: "Electroplating on 3D Printed Pieces",
      company: "Symphony 3D", 
      period: "2024",
      description: "Electrochemical process development for depositing copper and nickel on PLA 3D printed components",
      context: "Surface treatment enhancement for 3D printed hearing aid components",
      technologies: ["Electrochemistry", "PLA Processing", "Copper Plating", "Nickel Plating", "Surface Treatment"],
      achievements: [
        "Successfully made PLA pieces conductive with carbon paint",
        "Implemented copper and nickel electroplating process",
        "Mastered electrochemical reaction control",
        "Achieved consistent surface coating quality"
      ],
      slug: "electroplating-3d-pieces"
    },
    {
      id: "sla-electronic-circuits",
      title: "Electronic Circuit Creation with 3D SLA Printer",
      company: "Symphony 3D",
      period: "2024",
      description: "Fast prototyping solution for electronic circuits using 3D SLA printer and chemical etching techniques",
      context: "Rapid prototyping support for jetting 3D printer project",
      technologies: ["3D SLA Printing", "Chemical Etching", "Iron Chloride", "PCB Design", "Rapid Prototyping"],
      achievements: [
        "Created precise masks with 3D SLA printer",
        "Mastered chemical etching with iron chloride",
        "Achieved fast prototype production cycle",
        "Supported jetting printer development with custom PCBs"
      ],
      slug: "sla-electronic-circuits"
    },
    {
      id: "esp32-acoustic-antenna",
      title: "ESP32 Acoustic Antenna System",
      company: "SENSIVIC",
      period: "2023",
      description: "Advanced acoustic localization system using ESP32 and 4 microphones sampling at 100kHz for sound source positioning",
      context: "Semiconductor shortage solution - migration from STM to ESP32 microcontroller",
      technologies: ["ESP32", "C/C++", "MEMS", "i2s Protocol", "DMA", "ESP-IDF"],
      achievements: [
        "Successfully implemented 4-microphone simultaneous sampling",
        "Achieved 100kHz sampling frequency with MEMS",
        "Mastered DMA for high-frequency data processing",
        "Delivered functional PoC in 2 months"
      ],
      slug: "esp32-acoustic-antenna"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Professional Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Professional Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Industrial R&D projects, IoT solutions, machine learning implementations, and enterprise-grade systems
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid - Simplified Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                        <Building2 className="w-4 h-4" />
                        <span>{project.company}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Technologies preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="lg:ml-8 flex flex-col items-end">
                      <Link 
                        href={`/technical-details/professional/${project.slug}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mb-2"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {project.achievements?.length || 0} achievements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/technical-details" className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Technical Details
          </Link>
        </div>
      </section>
    </div>
  );
}