import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { SearchAndFilter } from '@/components/filters/SearchAndFilter'
import { getItemsByCategory, getYears } from '@/lib/contentLoader'
import { PortfolioItem } from '@/types/portfolio'

const categories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'research', label: 'Research Papers' },
  { value: 'conference', label: 'Conference Papers' },
  { value: 'journal', label: 'Journal Articles' },
  { value: 'book', label: 'Book Chapters' }
]

export default function Publications() {
  const allItems = getItemsByCategory('publication')
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
            Publications & Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Published research papers, journal articles, and academic contributions in medical informatics and cybersecurity
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
            Menampilkan {filteredItems.length} dari {allItems.length} publikasi
          </p>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                category="publications"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tidak ada publikasi yang ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        )}

        {/* Academic Info */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Academic Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {allItems.length}
              </div>
              <div className="text-gray-600">Published Papers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-600 mb-2">
                23
              </div>
              <div className="text-gray-600">Citations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-security-600 mb-2">
                5
              </div>
              <div className="text-gray-600">Research Areas</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}