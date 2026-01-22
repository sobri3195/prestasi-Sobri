import { PortfolioData, PortfolioItem } from '../types/portfolio'
import portfolioData from '../data/portfolioData.json'

export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData
}

export const getItemsByCategory = (category: string): PortfolioItem[] => {
  const data = getPortfolioData()
  if (category === 'all') return data.items
  
  return data.items.filter(item => item.category === category)
}

export const getItemById = (id: string): PortfolioItem | undefined => {
  const data = getPortfolioData()
  return data.items.find(item => item.id === id)
}

export const getLatestUpdates = (limit: number = 5): PortfolioItem[] => {
  const data = getPortfolioData()
  return data.items
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export const searchItems = (query: string): PortfolioItem[] => {
  const data = getPortfolioData()
  const lowerQuery = query.toLowerCase()
  
  return data.items.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.summary.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

export const filterItems = (filters: {
  category?: string
  year?: string
  verified?: string
  tags?: string[]
}): PortfolioItem[] => {
  let items = getPortfolioData().items
  
  if (filters.category && filters.category !== 'all') {
    items = items.filter(item => item.category === filters.category)
  }
  
  if (filters.year && filters.year !== 'all') {
    items = items.filter(item => new Date(item.date).getFullYear().toString() === filters.year)
  }
  
  if (filters.verified && filters.verified !== 'all') {
    items = items.filter(item => item.verifiedStatus === filters.verified)
  }
  
  if (filters.tags && filters.tags.length > 0) {
    items = items.filter(item => 
      filters.tags!.some(tag => item.tags.includes(tag))
    )
  }
  
  return items
}

export const getYears = (): string[] => {
  const data = getPortfolioData()
  const years = new Set(data.items.map(item => new Date(item.date).getFullYear().toString()))
  return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a))
}

export const getAllTags = (): string[] => {
  const data = getPortfolioData()
  const tags = new Set(data.items.flatMap(item => item.tags))
  return Array.from(tags).sort()
}

export const getItemsByTag = (tag: string): PortfolioItem[] => {
  const data = getPortfolioData()
  return data.items.filter(item => item.tags.includes(tag))
}

export const getStatistics = () => {
  const data = getPortfolioData()
  return data.statistics
}