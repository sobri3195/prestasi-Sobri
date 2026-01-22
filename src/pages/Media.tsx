import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { SearchAndFilter } from '@/components/filters/SearchAndFilter'
import { getItemsByCategory, getYears } from '@/lib/contentLoader'
import { PortfolioItem } from '@/types/portfolio'

const categories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'presentation', label: 'Presentasi' },
  { value: 'interview', label: 'Interview' },
  { value: 'media-coverage', label: 'Media Coverage' },
  { value: 'workshop', label: 'Workshop' }
]

export default function Media() {
  const allItems = getItemsByCategory('media')
  const years = getYears()
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(allItems)
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    year: 'all',
    verified: 'all',
    query: ''
  })

  const handleSearch = (query: string) => {
    setActiveFilters(prev => ({ ...prev, query }))
    filterItems({ ...activeFilters, query })
  }

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters)
    filterItems(filters)
  }

  const filterItems = (filters: any) => {
    let items = [...allItems]
    
    // Filter by category
    if (filters.category && filters.category !== 'all') {
      items = items.filter(item => item.type === filters.category)
    }
    
    // Filter by year
    if (filters.year && filters.year !== 'all') {
      items = items.filter(item => new Date(item.date).getFullYear().toString() === filters.year)
    }
    
    // Filter by verification status
    if (filters.verified && filters.verified !== 'all') {
      items = items.filter(item => item.verifiedStatus === filters.verified)
    }
    
    // Filter by search query
    if (filters.query) {
      const query = filters.query.toLowerCase()
      items = items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    // Sort by date (newest first)
    items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    setFilteredItems(items)
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Media & Talks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conference presentations, media interviews, workshops, and public speaking engagements
          </p>
        </div>

        {/* Search and Filter */}
        <SearchAndFilter
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          categories={categories}
          years={years}
          selectedFilters={activeFilters}
        />

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredItems.length} dari {allItems.length} media coverage
          </p>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                category="media"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tidak ada media coverage yang ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        )}

        {/* Speaking Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Speaking & Media Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                5+
              </div>
              <div className="text-gray-600">Conference Talks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Audience Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-security-600 mb-2">
                10+
              </div>
              <div className="text-gray-600">Media Features</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}