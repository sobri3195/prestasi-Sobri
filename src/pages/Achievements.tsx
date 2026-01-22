import { useState, useMemo } from 'react'
import { Layout } from '@/components/layout/Layout'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { SearchAndFilter } from '@/components/filters/SearchAndFilter'
import { getItemsByCategory, getYears } from '@/lib/contentLoader'
import { PortfolioItem } from '@/types/portfolio'

const categories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'achievement', label: 'Prestasi & Penghargaan' },
  { value: 'award', label: 'Awards' },
  { value: 'competition', label: 'Kompetisi' },
  { value: 'grant', label: 'Hibah Penelitian' }
]

export default function Achievements() {
  const allItems = getItemsByCategory('achievement')
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
      if (filters.category === 'achievement') {
        items = items.filter(item => item.category === 'achievement')
      } else {
        items = items.filter(item => item.type === filters.category)
      }
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

  const displayedItems = useMemo(() => filteredItems, [filteredItems])

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prestasi, penghargaan, dan pencapaian dalam bidang medis, teknologi, dan penelitian
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
            Menampilkan {displayedItems.length} dari {allItems.length} prestasi
          </p>
        </div>

        {/* Items Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                category="achievements"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0012 15c-2.34 0-4.47-.881-6.063-2.33M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tidak ada prestasi yang ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        )}

        {/* Call to Action */}
        {displayedItems.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-medical-500 rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Have a Question About My Achievements?
            </h2>
            <p className="text-primary-100 mb-6">
              I'm always happy to discuss my work and collaborate on new projects
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </Layout>
  )
}