import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";

export default function PersonalProjects() {
  const projects = [
    {
      id: "telegram-crypto-bot",
      title: "Telegram Cryptocurrency Bot (TON Network)",
      period: "2024",
      description: "Telegram bot for crypto trending on TON Network with hosting and real-time market notifications",
      technologies: ["Python", "Telegram API", "TON Network", "Cryptocurrency APIs", "Hosting", "Real-time Data"],
      achievements: [
        "Successfully deployed on TON Network",
        "Real-time crypto trending notifications",
        "Integrated with multiple crypto data sources",
        "Active bot: t.me/hunton_live"
      ],
      url: "https://t.me/hunton_live",
      slug: "telegram-crypto-bot"
    },
    {
      id: "web-scraping-suite",
      title: "Advanced Web Scraping Suite",
      period: "2024",
      description: "Comprehensive web scraping framework using Beautiful Soup, Selenium, and Puppeteer for diverse data extraction needs",
      technologies: ["Python", "Beautiful Soup", "Selenium", "Node.js", "Puppeteer", "Data Processing"],
      achievements: [
        "Multi-technology scraping approach",
        "Browser automation with Selenium",
        "JavaScript rendering with Puppeteer",
        "Robust data extraction pipeline"
      ],
      slug: "web-scraping-suite"
    },
    {
      id: "locksmith-website",
      title: "Custom Locksmith Company Website",
      period: "2024",
      description: "Complete custom website development and hosting solution for a professional locksmith company",
      technologies: ["Web Development", "HTML/CSS", "JavaScript", "Hosting", "Domain Management"],
      achievements: [
        "Full custom website design and development",
        "Professional hosting setup",
        "SEO optimization for local business",
        "Live website: laserrurerie76.fr"
      ],
      url: "https://laserrurerie76.fr",
      slug: "locksmith-website"
    },
    {
      id: "connected-table",
      title: "IoT Connected Smart Table",
      period: "2024",
      description: "Smart interactive table with WiFi-controlled LEDs, Spotify integration, and environmental monitoring display",
      technologies: ["ESP32", "Arduino", "WiFi", "Spotify API", "LCD Display", "LED Control", "3D Printing"],
      achievements: [
        "Custom electronic board design",
        "Spotify API integration with physical buttons",
        "Real-time humidity & temperature display",
        "Custom 3D printed enclosure"
      ],
      slug: "connected-table"
    },
    {
      id: "instagram-automation",
      title: "Instagram Profile Automation Bot",
      period: "2024",
      description: "Dual-approach Instagram automation system using browser automation and HTTP request manipulation",
      technologies: ["Python", "Browser Automation", "HTTP Requests", "Reverse Engineering", "Instagram API"],
      achievements: [
        "Two distinct automation approaches implemented",
        "Browser automation for complex interactions",
        "HTTP request reverse engineering",
        "Automated profile management and engagement"
      ],
      slug: "instagram-automation"
    },
    {
      id: "facebook-scraping-bot",
      title: "Facebook Group Posting Automation",
      period: "2024",
      description: "Automated bot for scraping Facebook content and posting to specific groups with intelligent content distribution",
      technologies: ["Python", "Web Scraping", "Facebook Automation", "Content Management", "Group Targeting"],
      achievements: [
        "Automated Facebook content scraping",
        "Intelligent group targeting system",
        "Content filtering and distribution",
        "Automated posting scheduling"
      ],
      slug: "facebook-scraping-bot"
    },
    {
      id: "resume-website",
      title: "Personal Resume Website",
      period: "2024",
      description: "Professional personal resume website showcasing skills, projects, and experience with modern web design",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Responsive Design"],
      achievements: [
        "Clean, professional web design",
        "Fully responsive layout",
        "GitHub Pages deployment",
        "Live site: willlls.github.io"
      ],
      url: "https://willlls.github.io/",
      slug: "resume-website"
    },
    {
      id: "repairshoes-android-app",
      title: "RepairShoes Service Shop Android App",
      period: "2024",
      description: "Android application for shoe repair service shop with semi-automatic customer messaging based on multiple service types",
      technologies: ["Android Development", "Java/Kotlin", "SMS Integration", "Service Management", "Customer Communication"],
      achievements: [
        "Semi-automatic customer messaging system",
        "Multiple service type management",
        "Integrated customer communication workflow",
        "Streamlined shop operations"
      ],
      slug: "repairshoes-android-app"
    },
    {
      id: "arduino-task-manager",
      title: "Arduino Task Manager with 3D Printing",
      period: "2024",
      description: "First Arduino project combining task management system with 3D printing for domestic task organization",
      technologies: ["Arduino", "C/C++", "3D Printing", "Task Management", "LCD Display", "Sensors"],
      achievements: [
        "First embedded systems project",
        "Custom 3D printed components",
        "Domestic task organization system",
        "Arduino-based user interface"
      ],
      slug: "arduino-task-manager"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/technical-details" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <ArrowLeft className="w-5 h-5" />
              Personal Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Personal Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Personal development projects, automation tools, IoT devices, and innovative solutions
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
                      <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-2">
                        <User className="w-4 h-4" />
                        <span>Personal Project</span>
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
                          <span key={i} className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
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
                        href={`/technical-details/personal/${project.slug}`}
                        className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors mb-2"
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