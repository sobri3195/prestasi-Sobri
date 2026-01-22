import { Layout } from '@/components/layout/Layout'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { getLatestUpdates, getStatistics, getPortfolioData } from '@/lib/contentLoader'
import { Award, BookOpen, Code, FileText, Users, Calendar, ExternalLink, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const latestUpdates = getLatestUpdates(6)
  const stats = getStatistics()
  const profile = getPortfolioData().profile

  const categoryStats = [
    { name: 'Achievements', value: stats.totalAchievements, icon: Award, color: 'text-yellow-600' },
    { name: 'Publications', value: stats.totalPublications, icon: BookOpen, color: 'text-blue-600' },
    { name: 'Projects', value: stats.totalProjects, icon: Code, color: 'text-green-600' },
    { name: 'Certificates', value: stats.totalCertificates, icon: FileText, color: 'text-purple-600' }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-medical-600 to-security-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Muhammad Sobri Maulana
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-100">
              {profile.title}
            </p>
            <p className="text-lg mb-8 text-primary-100 max-w-3xl mx-auto">
              {profile.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/files/cv-muhammad-sobri-maulana.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
              >
                Get In Touch
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Portfolio Overview
            </h2>
            <p className="text-lg text-gray-600">
              {stats.yearsActive}+ tahun aktif dalam penelitian dan pengembangan
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryStats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.name}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {stats.citationCount && (
            <div className="text-center mt-8">
              <Badge variant="success" className="text-base px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                {stats.citationCount} Citations in Academic Publications
              </Badge>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {profile.bio}
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.expertise.map((skill) => (
                    <Badge key={skill} variant="primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
              >
                Learn more about me
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="lg:text-right">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Current Position
                </h3>
                <div className="text-gray-700">
                  <div className="font-medium text-lg mb-2">
                    {profile.currentPosition.title}
                  </div>
                  <div className="text-primary-600 font-medium mb-2">
                    {profile.currentPosition.organization}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {profile.currentPosition.period}
                  </div>
                  <p className="text-sm">
                    {profile.currentPosition.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Latest Updates
              </h2>
              <p className="text-gray-600">
                Aktivitas dan pencapaian terbaru
              </p>
            </div>
            <Link
              to="/timeline"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View Timeline
              <Calendar className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestUpdates.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                category="home"
                showCategory={false}
              />
            ))}
          </div>
          
          {latestUpdates.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Belum ada update terbaru</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Portfolio
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Achievements', href: '/achievements', icon: Award, color: 'text-yellow-600' },
              { name: 'Publications', href: '/publications', icon: BookOpen, color: 'text-blue-600' },
              { name: 'Projects', href: '/projects', icon: Code, color: 'text-green-600' },
              { name: 'Service', href: '/service', icon: Users, color: 'text-purple-600' },
              { name: 'Media', href: '/media', icon: Calendar, color: 'text-red-600' },
              { name: 'Certificates', href: '/certificates', icon: FileText, color: 'text-indigo-600' }
            ].map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-primary-300"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                    {item.name}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Interested in collaboration, research, or consultation? 
            Let's discuss how we can create something impactful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get In Touch
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:m.sobri@ui.ac.id"
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Email Me
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}