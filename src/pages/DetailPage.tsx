import { useParams, Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Badge } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { getItemById } from '@/lib/contentLoader'
import { formatDate, getCategoryIcon, getVerificationBadgeVariant } from '@/lib/utils'
import { Calendar, ExternalLink, ArrowLeft, CheckCircle, Clock, HelpCircle, Share2 } from 'lucide-react'

export default function DetailPage() {
  const { category, id } = useParams<{ category?: string, id?: string }>()
  const item = id ? getItemById(id) : null

  if (!item) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Item Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The item you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const shareUrl = window.location.href
  const shareText = `${item.title} - Muhammad Sobri Maulana Portfolio`

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: shareText,
          url: shareUrl
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to={category ? `/${category}` : '/'}
            className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Home'}
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">
                {getCategoryIcon(item.category)}
              </span>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge 
                    variant={getVerificationBadgeVariant(item.verifiedStatus) as any}
                    size="lg"
                    icon={
                      item.verifiedStatus === 'verified' ? 'check' : 
                      item.verifiedStatus === 'pending' ? 'clock' : 'help'
                    }
                  >
                    {item.verifiedStatus === 'verified' ? 'Verified' : 
                     item.verifiedStatus === 'pending' ? 'Pending' : 'Unverified'}
                  </Badge>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h1>
                <p className="text-lg text-gray-600">
                  {item.summary}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary-600 border border-gray-300 rounded-lg hover:border-primary-300 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(item.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Role:</span>
              <span>{item.role}</span>
            </div>
            {item.language && (
              <div className="flex items-center gap-2">
                <span className="font-medium">Language:</span>
                <span className="uppercase">{item.language}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            {item.impact && (
              <Card>
                <CardHeader>
                  <CardTitle>Impact & Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Evidence Links */}
            {item.evidenceLinks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Evidence & Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {item.evidenceLinks.map((link, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <ExternalLink className="w-4 h-4 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">
                            {link.label}
                          </h4>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800 text-sm break-all"
                          >
                            {link.url}
                          </a>
                        </div>
                        <Badge variant="outline" size="sm">
                          {link.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} variant="outline">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Verification Info */}
            <Card>
              <CardHeader>
                <CardTitle>Verification Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {item.verifiedStatus === 'verified' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : item.verifiedStatus === 'pending' ? (
                      <Clock className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-gray-500" />
                    )}
                    <div>
                      <p className="font-medium text-gray-900">
                        {item.verifiedStatus === 'verified' ? 'Verified' : 
                         item.verifiedStatus === 'pending' ? 'Pending Verification' : 'Unverified'}
                      </p>
                      <p className="text-sm text-gray-600">
                        Verified by: {item.verifiedBy}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p>This item has been verified through:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {item.evidenceLinks.length > 0 && (
                        <li>Official documentation and evidence links</li>
                      )}
                      {item.verifiedBy === 'institution' && (
                        <li>Official institutional verification</li>
                      )}
                      {item.verifiedBy === 'self' && (
                        <li>Self-reported with evidence provided</li>
                      )}
                      {item.verifiedBy === 'third-party' && (
                        <li>Third-party verification</li>
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share Item
                </button>
                
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Inquire About This
                </a>
              </CardContent>
            </Card>

            {/* Related Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Interested in similar work or collaboration?
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Let's Connect
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Explore More
            </h2>
            <p className="text-gray-600">
              Discover other achievements and projects
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'All Achievements', href: '/achievements', icon: '🏆' },
              { name: 'Publications', href: '/publications', icon: '📚' },
              { name: 'Projects', href: '/projects', icon: '💻' },
              { name: 'Service', href: '/service', icon: '🤝' },
              { name: 'Media', href: '/media', icon: '🎤' },
              { name: 'Timeline', href: '/timeline', icon: '⏰' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-primary-300"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}