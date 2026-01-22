import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

export const Card = ({ 
  children, 
  className = '',
  padding = 'md',
  hover = false
}: CardProps) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-md border border-gray-200',
      paddingClasses[padding],
      hover && 'hover:shadow-lg transition-shadow duration-200',
      className
    )}>
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

export const CardTitle = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <h3 className={cn('text-lg font-semibold text-gray-900', className)}>
      {children}
    </h3>
  )
}

export const CardDescription = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <p className={cn('text-sm text-gray-600', className)}>
      {children}
    </p>
  )
}

export const CardContent = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn('text-gray-900', className)}>
      {children}
    </div>
  )
}