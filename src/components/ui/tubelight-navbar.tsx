"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || '')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// 为了向后兼容，保留 TubelightNavbar 别名
interface LegacyNavItem {
  label: string
  href: string
}

interface TubelightNavbarProps {
  items: LegacyNavItem[]
  logo?: string
  className?: string
}

export function TubelightNavbar({ items, logo = "Logo", className }: TubelightNavbarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.label || '')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative backdrop-blur-2xl bg-black/40 border border-white/30 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            >
              {logo}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {items.map((item, index) => {
                const isActive = activeTab === item.label

                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setActiveTab(item.label)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200",
                      "hover:scale-105",
                      isActive 
                        ? "text-white bg-white/25 shadow-md drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                        : "text-white hover:text-white hover:bg-white/15 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp-desktop"
                        className="absolute inset-0 w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full -z-0"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-t-full">
                          <div className="absolute w-12 h-6 bg-blue-500/30 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-blue-500/30 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-blue-500/30 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation - Fluid Menu Button */}
            <div className="md:hidden relative">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/60 to-purple-500/60 backdrop-blur-lg border border-white/40 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl -z-10 opacity-50" />
              </motion.button>

              {/* Mobile Menu Dropdown */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute right-0 top-14 w-56 backdrop-blur-2xl bg-black/50 border border-white/40 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-2 space-y-1">
                      {items.map((item, index) => {
                        const isActive = pathname === item.href

                        return (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => {
                              setActiveTab(item.label)
                              setIsMenuOpen(false)
                            }}
                            className={cn(
                              "block px-4 py-3 rounded-xl transition-all duration-200",
                              isActive
                                ? "bg-gradient-to-r from-blue-500/60 to-purple-500/60 text-white font-semibold shadow-md drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                : "text-white hover:text-white hover:bg-white/20 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
                            )}
                          >
                            <motion.div
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-3"
                            >
                              <div className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-200",
                                isActive ? "bg-blue-400 scale-100 shadow-[0_0_6px_rgba(59,130,246,0.8)]" : "bg-white/50 scale-75 shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                              )} />
                              <span className="text-sm">{item.label}</span>
                            </motion.div>
                          </Link>
                        );
                      })}
                    </div>
                    
                    {/* Bottom gradient accent */}
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(147,51,234,0.6)]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
