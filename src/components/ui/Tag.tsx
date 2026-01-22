import React from 'react'
import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export const Tag = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className,
  onClick
}: TagProps) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
    secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  }
  
  return (
    <span 
      className={cn(
        'inline-flex items-center rounded-md font-medium transition-colors',
        variants[variant],
        sizes[size],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  )
}