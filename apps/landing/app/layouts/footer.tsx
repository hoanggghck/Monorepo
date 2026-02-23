import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 px-4 sm:px-6 lg:px-0">
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
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
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
  )
}