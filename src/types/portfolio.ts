export interface EvidenceLink {
  type: 'certificate' | 'photo' | 'link' | 'video'
  url: string
  label: string
}

export interface PortfolioItem {
  id: string
  title: string
  date: string
  category: 'achievement' | 'publication' | 'project' | 'service' | 'media' | 'certificate'
  type: 'award' | 'competition' | 'research' | 'presentation' | 'volunteer' | 'certification'
  role: string
  summary: string
  description: string
  impact: string
  evidenceLinks: EvidenceLink[]
  tags: string[]
  verifiedStatus: 'verified' | 'unverified' | 'pending'
  verifiedBy: 'institution' | 'self' | 'third-party'
  language: 'id' | 'en'
  priority: 'high' | 'medium' | 'low'
}

export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string
  photo: string
  email: string
  phone?: string
  location: string
  websites: {
    github?: string
    scholar?: string
    blog?: string
    linkedin?: string
  }
  expertise: string[]
  education: {
    degree: string
    institution: string
    year: string
    description?: string
  }[]
  currentPosition: {
    title: string
    organization: string
    period: string
    description: string
  }
}

export interface Statistics {
  totalAchievements: number
  totalPublications: number
  totalProjects: number
  totalCertificates: number
  yearsActive: number
  citationCount?: number
}

export interface PortfolioData {
  profile: Profile
  items: PortfolioItem[]
  statistics: Statistics
  lastUpdated: string
}