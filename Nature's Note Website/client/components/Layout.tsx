import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-primary tracking-tight">
              Nature's Note
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/personalization"
                className="text-foreground hover:text-primary transition-colors"
              >
                Personalization
              </Link>
              <Link
                to="/reviews"
                className="text-foreground hover:text-primary transition-colors"
              >
                Reviews
              </Link>
              <Link
                to="/custom-order"
                className="text-foreground hover:text-primary transition-colors"
              >
                Custom Order
              </Link>
            </div>

            {/* Mobile Navigation (simplified) */}
            <div className="md:hidden">
              <button className="text-primary text-2xl">☰</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-primary text-lg mb-4">Nature's Note</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Luxury colognes crafted for the discerning gentleman.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Shop</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/custom-order"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Custom Order
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reviews"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Discover</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/personalization"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Scent Quiz
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
            <p>&copy; 2024 Nature's Note Luxury Colognes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
