
import React from "react";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-keyora-cream overflow-hidden"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 py-14 sm:py-20 lg:py-24">

          {/* Left Content */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-[1px] bg-keyora-accent" />

              <p className="text-keyora-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                The Art of Typing
              </p>
            </div>

            <h1 className="text-[clamp(36px,8vw,76px)] xl:text-[82px] font-semibold leading-[1.05] tracking-[-0.055em] text-keyora-dark">
              Every Keystroke.
              <span className="block text-keyora-accent">
                An Experience.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm sm:text-base lg:text-lg leading-7 text-keyora-muted">
              Precision-engineered mechanical keyboards
              designed to transform the way you work,
              create and play.
            </p>

            {/* Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 mt-9">

              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-3 bg-keyora-dark text-white px-7 py-4 text-sm font-medium hover:bg-keyora-accent transition-all duration-300 group"
              >
                Explore Collection

                <FiArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>

              <a
                href="#craftsmanship"
                className="inline-flex items-center justify-center gap-3 border border-keyora-dark/20 text-keyora-dark px-7 py-4 text-sm font-medium hover:border-keyora-accent hover:text-keyora-accent transition-all duration-300"
              >
                <FiPlay size={15} />
                Discover More
              </a>

            </div>

            {/* Product Information */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-7 border-t border-black/10">

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  75%
                </h3>
                <p className="text-[10px] sm:text-xs text-keyora-muted mt-1">
                  Compact Layout
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  50M+
                </h3>
                <p className="text-[10px] sm:text-xs text-keyora-muted mt-1">
                  Keystroke Life
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  RGB
                </h3>
                <p className="text-[10px] sm:text-xs text-keyora-muted mt-1">
                  Custom Lighting
                </p>
              </div>

            </div>

          </div>

          {/* Right Product Image */}
          <div className="relative w-full">

            {/* Background */}
            <div className="relative bg-keyora-dark rounded-sm overflow-hidden aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/5]">

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40" />

              <img
                src="/Images/heroSectionImg.jpg"
                alt="Premium mechanical keyboard"
                className="relative w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
              />

              {/* Image Label */}
              <div className="absolute top-5 left-5 sm:top-8 sm:left-8">
                <p className="text-white/60 text-[10px] tracking-[0.3em]">
                  KEYORA / 001
                </p>
              </div>

              <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
                <p className="text-white text-xs tracking-[0.2em] uppercase">
                  Signature Series
                </p>

                <p className="text-white/60 text-xs mt-2">
                  Engineered for excellence.
                </p>
              </div>

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 right-4 sm:right-8 bg-keyora-cream border border-black/10 px-5 py-4 shadow-lg">
              <p className="text-[9px] text-keyora-muted tracking-[0.2em] uppercase">
                Crafted with precision
              </p>

              <p className="text-sm font-semibold mt-1">
                Built Different.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
