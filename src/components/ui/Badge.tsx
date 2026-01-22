import React from 'react'
import { Check, HelpCircle, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'info' | 'default' | 'primary' | 'outline' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'check' | 'help' | 'clock'
  className?: string
}

export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  icon,
  className 
}: BadgeProps) => {
  const variants = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    default: 'bg-gray-100 text-gray-800 border-gray-200',
    primary: 'bg-primary-100 text-primary-800 border-primary-200',
    outline: 'border border-gray-300 text-gray-700 bg-transparent',
    secondary: 'bg-secondary-100 text-secondary-800 border-secondary-200'
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base'
  }
  
  const icons = {
    check: Check,
    help: HelpCircle,
    clock: Clock
  }
  
  const Icon = icon ? icons[icon] : null
  
  return (
    <span className={cn(
      'inline-flex items-center rounded-full border font-medium',
      variants[variant],
      sizes[size],
      className
    )}>
      {Icon && <Icon className="w-3 h-3 mr-1" />}
      {children}
    </span>
  )
}