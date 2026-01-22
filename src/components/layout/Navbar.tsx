import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Award, BookOpen, Code, Heart, Mic, FileText, Clock, Mail, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Achievements', href: '/achievements', icon: Award },
  { name: 'Publications', href: '/publications', icon: BookOpen },
  { name: 'Projects', href: '/projects', icon: Code },
  { name: 'Service', href: '/service', icon: Heart },
  { name: 'Media', href: '/media', icon: Mic },
  { name: 'Certificates', href: '/certificates', icon: FileText },
  { name: 'Timeline', href: '/timeline', icon: Clock },
  { name: 'Contact', href: '/contact', icon: Mail },
]

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={cn('bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-medical-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900 hidden sm:block">
                Muhammad Sobri Maulana
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('lg:hidden', isOpen ? 'block' : 'hidden')} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200 shadow-lg">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.href
            
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
