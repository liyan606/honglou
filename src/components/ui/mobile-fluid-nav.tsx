"use client"

import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu"
import { Menu as MenuIcon, X, Home, Info, FileText, DollarSign, HelpCircle } from "lucide-react"
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

export function MobileFluidNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems: NavItem[] = [
    {
      label: '首页',
      href: '/',
      icon: <Home size={24} strokeWidth={1.5} />
    },
    {
      label: '关于我们',
      href: '/about',
      icon: <Info size={24} strokeWidth={1.5} />
    },
    {
      label: '博客',
      href: '/blog',
      icon: <FileText size={24} strokeWidth={1.5} />
    },
    {
      label: '价格方案',
      href: '/pricing',
      icon: <DollarSign size={24} strokeWidth={1.5} />
    },
    {
      label: 'FAQ',
      href: '/faq',
      icon: <HelpCircle size={24} strokeWidth={1.5} />
    }
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    // Close menu after navigation
    setTimeout(() => {
      setIsExpanded(false)
    }, 300)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl -z-10 rounded-full animate-pulse" />
        <MenuContainer>
          <MenuItem 
            icon={
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                  <MenuIcon size={24} strokeWidth={1.5} className="text-white" />
                </div>
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                  <X size={24} strokeWidth={1.5} className="text-white" />
                </div>
              </div>
            } 
          />
          {navItems.map((item, index) => (
            <MenuItem 
              key={index}
              icon={
                <div className={pathname === item.href ? 'text-blue-500' : 'text-white'}>
                  {item.icon}
                </div>
              }
              onClick={() => handleNavigation(item.href)}
              isActive={pathname === item.href}
            />
          ))}
        </MenuContainer>
      </div>
    </div>
  )
}

