import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { getPortfolioData } from '@/lib/contentLoader'
import { formatDate, getCategoryIcon } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { Calendar, Filter } from 'lucide-react'

export default function Timeline() {
  const portfolioData = getPortfolioData()
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const years = ['2024', '2023', '2022', '2021', 'all']
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'achievement', label: 'Achievements' },
    { value: 'publication', label: 'Publications' },
    { value: 'project', label: 'Projects' },
    { value: 'service', label: 'Service' },
    { value: 'media', label: 'Media' },
    { value: 'certificate', label: 'Certificates' }
  ]

  const filteredItems = portfolioData.items
    .filter(item => selectedYear === 'all' || new Date(item.date).getFullYear().toString() === selectedYear)
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const groupedItems = filteredItems.reduce((groups: any, item) => {
    const year = new Date(item.date).getFullYear()
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(item)
    return groups
  }, {})

  const sortedYears = Object.keys(groupedItems).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Timeline & Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chronological overview of achievements, projects, and milestones in my professional journey
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Timeline</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {sortedYears.map(year => (
            <div key={year} className="relative">
              {/* Year Header */}
              <div className="sticky top-4 z-10 bg-primary-500 text-white px-6 py-3 rounded-lg inline-block text-xl font-bold shadow-lg">
                {year}
              </div>
              
              {/* Timeline Items */}
              <div className="ml-6 space-y-8">
                {groupedItems[year].map((item: any, index: number) => (
                  <div key={item.id} className="relative">
                    {/* Timeline Line */}
                    {index < groupedItems[year].length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200"></div>
                    )}
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-4 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-md"></div>
                    
                    {/* Content */}
                    <Card className="ml-12 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">
                              {getCategoryIcon(item.category)}
                            </span>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">
                                {item.title}
                              </h3>
                              <p className="text-gray-600">{item.role}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(item.date)}
                            </div>
                            <Badge 
                              variant={item.verifiedStatus === 'verified' ? 'success' : 'warning'}
                              size="sm"
                            >
                              {item.verifiedStatus}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4">
                          {item.summary}
                        </p>
                        
                        {item.impact && (
                          <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Impact</h4>
                            <p className="text-sm text-gray-700">{item.impact}</p>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 3).map((tag: string) => (
                              <Tag key={tag} variant="outline" size="sm">
                                {tag}
                              </Tag>
                            ))}
                            {item.tags.length > 3 && (
                              <Tag variant="outline" size="sm">
                                +{item.tags.length - 3}
                              </Tag>
                            )}
                          </div>
                          
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            {item.type}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No timeline items found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}

        {/* Summary Stats */}
        {filteredItems.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-medical-500 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Journey Summary
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{portfolioData.statistics.yearsActive}+</div>
                <div className="text-primary-100">Years Active</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{portfolioData.items.length}</div>
                <div className="text-primary-100">Total Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {filteredItems.filter(item => item.verifiedStatus === 'verified').length}
                </div>
                <div className="text-primary-100">Verified Achievements</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {new Set(filteredItems.map(item => item.category)).size}
                </div>
                <div className="text-primary-100">Categories</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}