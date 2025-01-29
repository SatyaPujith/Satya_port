"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ModeToggle } from "./mode-toggle"

export function Navigation() {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            BSP
          </Link>
          <div className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="relative">
                {pathname === href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-foreground"
                  />
                )}
                {label}
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

