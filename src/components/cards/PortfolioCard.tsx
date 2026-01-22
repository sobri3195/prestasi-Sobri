import { PortfolioItem } from '@/types/portfolio'
import { Badge } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { formatDateShort, getCategoryIcon, getVerificationBadgeVariant, isNewItem, getColorByCategory } from '@/lib/utils'
import { Calendar, ExternalLink } from 'lucide-react'

interface PortfolioCardProps {
  item: PortfolioItem
  category: string
  showCategory?: boolean
  className?: string
}

export const PortfolioCard = ({ 
  item, 
  category, 
  showCategory = true,
  className = '' 
}: PortfolioCardProps) => {
  const isNew = isNewItem(item.date)
  const categoryColor = getColorByCategory(item.category)
  
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {showCategory && (
            <span className={`text-2xl ${categoryColor.split(' ')[0]}`}>
              {getCategoryIcon(item.category)}
            </span>
          )}
          {isNew && (
            <Badge variant="info" size="sm" icon="clock">
              Baru
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Badge 
            variant={getVerificationBadgeVariant(item.verifiedStatus) as any}
            size="sm"
            icon={item.verifiedStatus === 'verified' ? 'check' : item.verifiedStatus === 'pending' ? 'clock' : 'help'}
          >
            {item.verifiedStatus === 'verified' ? 'Verified' : 
             item.verifiedStatus === 'pending' ? 'Pending' : 'Unverified'}
          </Badge>
          <span className="text-sm text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDateShort(item.date)}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {item.title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-3 line-clamp-3">
          {item.summary}
        </p>
        
        <div className="text-sm text-gray-500 mb-3">
          <span className="font-medium">{item.role}</span>
          {item.impact && (
            <>
              <span className="mx-2">•</span>
              <span className="line-clamp-1">{item.impact}</span>
            </>
          )}
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.slice(0, 4).map(tag => (
          <Tag key={tag} variant="outline" size="sm">
            {tag}
          </Tag>
        ))}
        {item.tags.length > 4 && (
          <Tag variant="outline" size="sm">
            +{item.tags.length - 4}
          </Tag>
        )}
      </div>
      
      {/* Evidence Links */}
      {item.evidenceLinks.length > 0 && (
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Bukti:</div>
          <div className="flex flex-wrap gap-2">
            {item.evidenceLinks.slice(0, 2).map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-primary-600 hover:text-primary-800 hover:underline"
              >
                {link.label}
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            ))}
            {item.evidenceLinks.length > 2 && (
              <span className="text-xs text-gray-500">
                +{item.evidenceLinks.length - 2} lainnya
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {item.type}
          </span>
        </div>
        
        <a 
          href={`/${category}/${item.id}`}
          className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors group"
        >
          Detail 
          <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}