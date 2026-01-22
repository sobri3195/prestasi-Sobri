import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchAndFilterProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: any) => void
  categories: { value: string, label: string }[]
  years: string[]
  selectedFilters?: {
    category?: string
    year?: string
    verified?: string
    query?: string
  }
  className?: string
}

export const SearchAndFilter = ({ 
  onSearch, 
  onFilterChange, 
  categories,
  years,
  selectedFilters = {},
  className = ''
}: SearchAndFilterProps) => {
  const [query, setQuery] = useState(selectedFilters.query || '')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = {
      ...selectedFilters,
      [key]: value,
      query
    }
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = { query: '' }
    setQuery('')
    onSearch('')
    onFilterChange(clearedFilters)
  }

  const hasActiveFilters = selectedFilters.category !== 'all' && selectedFilters.category || 
                         selectedFilters.year !== 'all' && selectedFilters.year ||
                         selectedFilters.verified !== 'all' && selectedFilters.verified ||
                         selectedFilters.query

  return (
    <div className={cn('bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6', className)}>
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Cari berdasarkan judul, deskripsi, atau tag..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter
          {hasActiveFilters && (
            <span className="ml-2 bg-primary-100 text-primary-800 px-2 py-0.5 rounded-full text-xs">
              Aktif
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </button>
        )}
      </div>

      {/* Filters */}
      {isFilterOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={selectedFilters.category || 'all'}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="all">Semua Kategori</option>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tahun
              </label>
              <select
                value={selectedFilters.year || 'all'}
                onChange={(e) => handleFilterChange('year', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="all">Semua Tahun</option>
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Verification Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status Verifikasi
              </label>
              <select
                value={selectedFilters.verified || 'all'}
                onChange={(e) => handleFilterChange('verified', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="all">Semua Status</option>
                <option value="verified">Verified</option>
                <option value="unverified">Unverified</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}