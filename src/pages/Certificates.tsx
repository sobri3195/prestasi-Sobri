import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { SearchAndFilter } from '@/components/filters/SearchAndFilter'
import { getItemsByCategory, getYears } from '@/lib/contentLoader'
import { PortfolioItem } from '@/types/portfolio'

const categories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'certification', label: 'Professional Certification' },
  { value: 'training', label: 'Training Completion' },
  { value: 'course', label: 'Online Course' },
  { value: 'workshop', label: 'Workshop Certificate' }
]

export default function Certificates() {
  const allItems = getItemsByCategory('certificate')
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
            Certificates & Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications, training completions, and skill development achievements
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
            Menampilkan {filteredItems.length} dari {allItems.length} sertifikat
          </p>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                category="certificates"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tidak ada sertifikat yang ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        )}

        {/* Certificate Categories */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Certification Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-indigo-100">Cybersecurity</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-indigo-100">Medical Informatics</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-indigo-100">Programming</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-indigo-100">Research Methods</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}