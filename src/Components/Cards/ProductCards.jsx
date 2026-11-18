
import React from "react";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <article className="group">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#EAE7E0] aspect-[4/3]">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Product Badge */}
        <span className="absolute top-4 left-4 bg-keyora-cream text-keyora-dark text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] px-3 py-2">
          {product.badge}
        </span>

        {/* View Product */}
        <a
          href="#craftsmanship"
          aria-label={`Discover ${product.name}`}
          className="absolute bottom-4 right-4 w-11 h-11 bg-keyora-cream flex items-center justify-center text-keyora-dark hover:bg-keyora-accent hover:text-white transition-colors duration-300"
        >
          <FiArrowUpRight size={20} />
        </a>

      </div>

      {/* Product Information */}
      <div className="pt-5">

        <div className="flex justify-between items-center gap-3">
          <p className="text-[10px] sm:text-xs text-keyora-accent font-semibold tracking-[0.18em]">
            {product.category}
          </p>

          <div className="flex items-center gap-1 text-xs text-keyora-dark">
            <FiStar className="fill-keyora-accent text-keyora-accent" size={13} />
            {product.rating}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-3 tracking-tight">
          {product.name}
        </h3>

        <p className="text-sm text-keyora-muted leading-6 mt-2 min-h-[48px]">
          {product.description}
        </p>

        {/* Color Options */}
        <div className="flex items-center gap-2 mt-4">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-4 h-4 rounded-full border border-black/15"
              style={{ backgroundColor: color }}
              title={`Color option ${index + 1}`}
            />
          ))}

          <span className="text-[10px] text-keyora-muted ml-1">
            {product.colors.length} colors
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-black/10">

          <span className="text-lg font-semibold">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-keyora-muted line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}

        </div>

      </div>
    </article>
  );
};

export default ProductCard;
