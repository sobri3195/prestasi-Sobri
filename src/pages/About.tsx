import { Layout } from '@/components/layout/Layout'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { getPortfolioData } from '@/lib/contentLoader'
import { MapPin, Mail, Calendar, Award, BookOpen, ExternalLink, Github, Globe } from 'lucide-react'

export default function About() {
  const portfolioData = getPortfolioData()
  const { profile } = portfolioData

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-medical-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-4xl">SM</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {profile.name}
          </h1>
          <p className="text-xl text-primary-600 mb-2">
            {profile.title}
          </p>
          <p className="text-lg text-gray-600 italic mb-6">
            "{profile.tagline}"
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {profile.location}
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <a href={`mailto:${profile.email}`} className="hover:text-primary-600">
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {profile.bio}
                </p>
              </CardContent>
            </Card>

            {/* Expertise */}
            <Card>
              <CardHeader>
                <CardTitle>Expertise & Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.expertise.map((skill) => (
                    <Badge key={skill} variant="primary" size="lg">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {profile.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-3 h-3 bg-primary-500 rounded-full"></div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                      {edu.description && (
                        <p className="text-gray-700">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Position */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Current Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-l-4 border-medical-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {profile.currentPosition.title}
                  </h4>
                  <p className="text-medical-600 font-medium mb-2">
                    {profile.currentPosition.organization}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {profile.currentPosition.period}
                  </div>
                  <p className="text-gray-700">
                    {profile.currentPosition.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Years Active</span>
                    <span className="font-semibold">{portfolioData.statistics.yearsActive}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Publications</span>
                    <span className="font-semibold">{portfolioData.statistics.totalPublications}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-semibold">{portfolioData.statistics.totalProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Achievements</span>
                    <span className="font-semibold">{portfolioData.statistics.totalAchievements}</span>
                  </div>
                  {portfolioData.statistics.citationCount && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Citations</span>
                      <span className="font-semibold">{portfolioData.statistics.citationCount}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profile.websites.github && (
                    <a
                      href={profile.websites.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-3" />
                      GitHub Profile
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  )}
                  
                  {profile.websites.scholar && (
                    <a
                      href={profile.websites.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <BookOpen className="w-4 h-4 mr-3" />
                      Google Scholar
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  )}
                  
                  {profile.websites.blog && (
                    <a
                      href={profile.websites.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Globe className="w-4 h-4 mr-3" />
                      Personal Blog
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  )}
                  
                  {profile.websites.linkedin && (
                    <a
                      href={profile.websites.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-3" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Download CV */}
            <Card>
              <CardContent className="pt-6">
                <a
                  href="/files/cv-muhammad-sobri-maulana.pdf"
                  download
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Download Complete CV
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}