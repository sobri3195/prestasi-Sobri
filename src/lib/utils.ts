import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateString: string, locale: string = 'id-ID'): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short'
  })
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Hari ini'
  if (diffInDays === 1) return '1 hari yang lalu'
  if (diffInDays < 7) return `${diffInDays} hari yang lalu`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu yang lalu`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} bulan yang lalu`
  
  return `${Math.floor(diffInDays / 365)} tahun yang lalu`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    achievement: '🏆',
    publication: '📚',
    project: '💻',
    service: '🤝',
    media: '🎤',
    certificate: '📜'
  }
  return icons[category] || '📄'
}

export function getVerificationBadgeVariant(status: string) {
  switch (status) {
    case 'verified':
      return 'success'
    case 'unverified':
      return 'warning'
    case 'pending':
      return 'info'
    default:
      return 'default'
  }
}

export function generateCVPDF(): string {
  // Generate a simple CV URL - in real implementation this would generate actual PDF
  // For now, return placeholder URL
  return '/files/cv-muhammad-sobri-maulana.pdf'
}

export function isNewItem(dateString: string, days: number = 30): boolean {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  return diffInDays <= days
}

export function getColorByCategory(category: string): string {
  const colors: Record<string, string> = {
    achievement: 'text-yellow-600 bg-yellow-100',
    publication: 'text-blue-600 bg-blue-100',
    project: 'text-green-600 bg-green-100',
    service: 'text-purple-600 bg-purple-100',
    media: 'text-red-600 bg-red-100',
    certificate: 'text-indigo-600 bg-indigo-100'
  }
  return colors[category] || 'text-gray-600 bg-gray-100'
}