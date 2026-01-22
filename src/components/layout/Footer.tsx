import { Github, Mail, Globe, ExternalLink } from 'lucide-react'

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-medical-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="ml-3 text-xl font-bold">Muhammad Sobri Maulana</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Medical Doctor & Security Researcher yang passionate dalam menggabungkan 
              expertise medis dengan teknologi untuk menciptakan inovasi yang bermakna.
            </p>
            <p className="text-sm text-gray-400">
              "Melangkah Melintasi Batas: Dari Ruang Operasi ke Ruang Digital"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/publications" className="text-gray-300 hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/timeline" className="text-gray-300 hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sobri3195"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:m.sobri@ui.ac.id"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://pegasus-hacker.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Blog"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
            
            <div className="mt-6">
              <a
                href="/files/cv-muhammad-sobri-maulana.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
              >
                Download CV
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Muhammad Sobri Maulana. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}