import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import products from "../Data/Product";
import ProductCard from "../Components/Cards/ProductCards";

const CollectionSection = () => {
  return (
    <section
      id="collections"
      className="bg-keyora-cream py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-keyora-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Our Collection
            </p>

            <h2 className="text-[clamp(34px,5vw,58px)] font-semibold tracking-tight leading-tight">
              Designed to
              <span className="text-keyora-accent"> Perform.</span>
            </h2>

            <p className="text-keyora-muted text-sm sm:text-base leading-7 mt-5 max-w-xl">
              Discover mechanical keyboards crafted with precision, premium
              materials and attention to every detail.
            </p>
          </div>

          {/* View All */}
          <a
            href="#craftsmanship"
            className="inline-flex items-center gap-3 text-sm font-semibold border-b border-keyora-accent pb-2 w-fit hover:text-keyora-accent transition-colors"
          >
            Explore All Products
            <FiArrowUpRight size={18} />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 pt-7 border-t border-black/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-keyora-muted tracking-wide">
            MADE FOR THOSE WHO APPRECIATE EVERY DETAIL.
          </p>

          <p className="text-xs text-keyora-muted">KEYORA COLLECTION / 2026</p>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
