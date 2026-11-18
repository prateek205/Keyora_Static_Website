
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    title: "The Signature Collection",
    subtitle: "DESIGNED TO STAND OUT",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1400&q=85",
    size: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/3] md:aspect-auto md:min-h-[620px]",
  },
  {
    id: 2,
    title: "Every Detail Matters",
    subtitle: "PRECISION KEYCAPS",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=85",
    size: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Built With Purpose",
    subtitle: "PREMIUM CONSTRUCTION",
    image:
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=1000&q=85",
    size: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    title: "Your Creative Space",
    subtitle: "MADE FOR YOUR WORKSPACE",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=1400&q=85",
    size: "md:col-span-12",
    aspect: "aspect-[4/3] md:aspect-[21/7]",
  },
];

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="bg-keyora-cream py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">

          <div className="max-w-2xl">

            <p className="text-keyora-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Inside The Details
            </p>

            <h2 className="text-[clamp(34px,5vw,62px)] font-semibold tracking-tight leading-[1.1]">
              A closer look at
              <span className="text-keyora-accent"> KEYORA.</span>
            </h2>

            <p className="text-keyora-muted text-sm sm:text-base leading-7 mt-5 max-w-xl">
              Explore the materials, craftsmanship and
              thoughtful details behind every KEYORA
              mechanical keyboard.
            </p>

          </div>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-sm font-semibold border-b border-keyora-accent pb-2 w-fit hover:text-keyora-accent transition-colors"
          >
            Explore Collection
            <FiArrowUpRight size={18} />
          </a>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">

          {galleryItems.map((item) => (
            <article
              key={item.id}
              className={`relative group overflow-hidden bg-[#EAE7E0] ${item.size} ${item.aspect}`}
            >

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9 flex items-end justify-between gap-3">

                <div>
                  <p className="text-white/70 text-[9px] sm:text-[10px] font-medium tracking-[0.25em] mb-3">
                    {item.subtitle}
                  </p>

                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/50 text-white flex items-center justify-center group-hover:bg-white group-hover:text-keyora-dark transition-all duration-300">
                  <FiArrowUpRight size={20} />
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Gallery Footer */}
        <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

          <p className="text-[10px] sm:text-xs text-keyora-muted tracking-[0.2em]">
            DESIGNED WITH PRECISION. BUILT WITH PURPOSE.
          </p>

          <p className="text-[10px] sm:text-xs text-keyora-muted">
            KEYORA VISUAL COLLECTION / 2026
          </p>

        </div>

      </div>
    </section>
  );
};

export default GallerySection;
