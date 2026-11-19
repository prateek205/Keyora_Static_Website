import React from "react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-keyora-dark text-white">
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 py-16 sm:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-block text-3xl sm:text-4xl font-bold tracking-tight"
            >
              KEYORA
              <span className="text-keyora-accent">.</span>
            </a>

            <p className="text-white/50 text-sm leading-7 mt-6 max-w-sm">
              Thoughtfully designed mechanical keyboards for those who
              appreciate the art of every keystroke.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-keyora-accent hover:border-keyora-accent transition-colors"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-keyora-accent hover:border-keyora-accent transition-colors"
              >
                <FiFacebook size={17} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-keyora-accent hover:border-keyora-accent transition-colors"
              >
                <FiYoutube size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
              Navigation
            </h3>

            <ul className="flex flex-col gap-4 mt-7">
              <li>
                <a
                  href="#home"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#collections"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Collection
                </a>
              </li>

              <li>
                <a
                  href="#craftsmanship"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Craftsmanship
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#reviews"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
              Support
            </h3>

            <ul className="flex flex-col gap-4 mt-7">
              <li>
                <a
                  href="#footer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#footer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#footer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Shipping Policy
                </a>
              </li>

              <li>
                <a
                  href="#footer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#footer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </h3>

            <div className="mt-7">
              <p className="text-xs text-white/40 mb-3">Have a question?</p>

              <a
                href="mailto:hello@keyora.com"
                className="inline-flex items-center gap-2 text-sm hover:text-keyora-accent transition-colors"
              >
                hello@keyora.com
                <FiArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-6">
              <p className="text-xs text-white/40 mb-3">Customer Support</p>

              <p className="text-sm text-white/70">Monday – Friday</p>

              <p className="text-sm text-white/70 mt-1">9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-[10px] sm:text-xs text-white/40">
              © {new Date().getFullYear()} KEYORA. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <p className="text-[10px] sm:text-xs text-white/40">
                DESIGNED FOR EVERY KEYSTROKE.
              </p>

              {/* Back To Top */}
              <a
                href="#home"
                aria-label="Back to top"
                className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-keyora-accent hover:border-keyora-accent transition-colors"
              >
                <FiArrowUp size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
