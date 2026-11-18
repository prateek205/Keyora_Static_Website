
import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiShoppingBag,
  FiArrowUpRight,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Craftsmanship", href: "#craftsmanship" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-keyora-cream/95 backdrop-blur-md border-b border-black/10">
      <nav className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl sm:text-3xl font-extrabold tracking-tighter"
          >
            KEYORA<span className="text-keyora-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-keyora-dark/70 hover:text-keyora-accent transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* Shopping Bag */}
            <button
              type="button"
              aria-label="Shopping bag"
              className="relative p-2 hover:text-keyora-accent transition-colors"
            >
              <FiShoppingBag size={21} strokeWidth={1.5} />

              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-keyora-accent" />
            </button>

            {/* Desktop CTA */}
            <a
              href="#collections"
              className="hidden lg:inline-flex items-center gap-2 bg-keyora-dark text-white px-5 py-3 text-sm font-medium hover:bg-keyora-accent transition-colors duration-300"
            >
              Explore Collection
              <FiArrowUpRight size={16} />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="lg:hidden p-2 text-keyora-dark"
            >
              {isOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pb-6"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col border-t border-black/10 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3 text-sm font-medium text-keyora-dark/80 hover:text-keyora-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#collections"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 bg-keyora-dark text-white px-5 py-3 text-sm font-medium hover:bg-keyora-accent transition-colors"
              >
                Explore Collection
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
