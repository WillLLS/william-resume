import Link from "next/link";
import { ArrowLeft, ExternalLink, Users, GraduationCap } from "lucide-react";

export default function AcademicProjects() {
  const projects = [
    {
      id: "retirement-monitoring",
      title: "Contactless Health Monitoring System",
      period: "Semester Project",
      type: "Team Leader",
      description: "Non-contact heartbeat and respiration monitoring system for retirement homes during sleep",
      context: "Healthcare IoT solution for elderly care facilities",
      technologies: ["ESP32", "UART", "WiFi", "MQTT", "Specialized Sensors", "C/C++"],
      responsibilities: [
        "Project leadership and team coordination",
        "Task distribution and timeline management",
        "Embedded systems development",
        "Communication protocol implementation"
      ],
      achievements: [
        "2-meter range contactless vital signs detection",
        "Real-time data transmission to local server",
        "MQTT protocol integration for reliable communication",
        "Complete team project delivery on schedule",
        "Alert system for abnormal readings"
      ],
      slug: "retirement-monitoring"
    },
    {
      id: "smart-lamp-linky",
      title: "Energy-Aware Connected Lamp",
      period: "Semester Project",
      type: "Team Leader & Project Initiator",
      description: "Modular connected lamp responding to home energy consumption via French Linky smart meter integration",
      context: "Collaboration with art school students for aesthetic and functional design",
      technologies: ["ESP32", "Linky API", "Servo Motors", "WiFi", "Third-party APIs", "C/C++"],
      concept: "Visual representation of energy consumption - higher consumption dims the lamp visibility",
      responsibilities: [
        "Project concept development and proposal",
        "Technical architecture design",
        "API research and integration",
        "Cross-disciplinary team coordination"
      ],
      achievements: [
        "Successful Linky smart meter API integration",
        "Motor-controlled lamp positioning system",
        "Real-time energy consumption visualization",
        "Artistic collaboration with design students"
      ],
      challenges: [
        "Legal entity requirement for Linky API access",
        "Third-party server integration complexity",
        "Mechanical design for smooth lamp movement"
      ],
      slug: "smart-lamp-linky"
    },
    {
      id: "ransomware-education",
      title: "Educational Ransomware Development",
      period: "Cybersecurity Course",
      type: "Individual Practice Project",
      description: "Ethical hacking exercise to understand ransomware mechanics and defense strategies",
      context: "Cybersecurity education and awareness training",
      technologies: ["Python", "Encryption", "File System", "VPS Hosting", "Networking"],
      educationalGoals: [
        "Understanding malware attack vectors",
        "Learning encryption/decryption processes",
        "Studying network communication patterns"
      ],
      implementation: [
        "File encryption targeting specific extensions",
        "Secure key generation and storage",
        "Network communication with command server",
        "User notification and recovery procedures"
      ],
      ethicalNote: "This was a controlled educational exercise in a sandboxed environment for learning cybersecurity defense mechanisms.",
      slug: "ransomware-education"
    },
    {
      id: "smart-compost",
      title: "IoT Connected Compost Bin",
      period: "Semester Project", 
      type: "Team Leader",
      description: "Smart composting system with environmental monitoring and LoRa-WAN connectivity",
      context: "Sustainable technology and environmental monitoring solution",
      technologies: ["ESP32", "LoRa-WAN", "Raspberry Pi", "Environmental Sensors", "C/C++", "Python"],
      sensorSuite: [
        "Humidity monitoring for optimal composting",
        "Gas sensors for decomposition tracking", 
        "Temperature measurement",
        "pH level monitoring",
        "Motion detection for maintenance alerts"
      ],
      achievements: [
        "Complete sensor integration and calibration",
        "LoRa-WAN long-range communication implementation",
        "Raspberry Pi data collection node setup",
        "Real-time environmental monitoring dashboard"
      ],
      networkArchitecture: [
        "LoRa sensor nodes in compost bins",
        "Raspberry Pi gateway for data aggregation",
        "Cloud dashboard for remote monitoring",
        "Alert system for maintenance needs"
      ],
      slug: "smart-compost"
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
              Academic Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Academic Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              University research projects, semester work, team leadership experience, and innovative academic solutions
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
                      <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{project.period}</span>
                        <span className="mx-2">•</span>
                        <Users className="w-4 h-4" />
                        <span>{project.type}</span>
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
                          <span key={i} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
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
                        href={`/technical-details/academic/${project.slug}`}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mb-2"
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