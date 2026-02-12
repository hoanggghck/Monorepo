'use client'
import { IconMenu, IconX } from "@repo/icons";
import Link from "next/link";
import { useState } from "react";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#hero", code: "hero" },
    { label: "Experience", href: "/#experience", code: "experience" },
    { label: "Client", href: "/#client", code: "client" },
    { label: "Solution", href: "/#solution", code: "solution" },
    { label: "Technologies", href: "/#technology", code: "technology" },
    { label: "Recuiting", href: "/#recuiting", code: "recuiting" },
    { label: "Contact", href: "/#contact", code: "contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:inline">
                Goldz Consulting
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="/#contact"
                className="hidden sm:inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden border-t border-border">
              <nav className="flex flex-col gap-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      <main className="grid grid-cols-1">{children}</main>
      <footer className="bg-foreground text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="font-bold text-lg">TechFlow</span>
              </div>
              <p className="text-white/70 text-sm">
                Leading IT outsourcing and consulting services for your digital transformation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/70 text-sm">
                  <a
                    href="mailto:hello@techflow.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@techflow.com
                  </a>
                </li>
                <li className="text-white/70 text-sm">
                  <a
                    href="tel:+1234567890"
                    className="hover:text-white transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="text-white/70 text-sm">Hanoi, Vietnam</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © 2024 TechFlow. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
