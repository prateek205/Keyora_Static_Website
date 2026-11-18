
import React from "react";
import {
  FiCpu,
  FiLayers,
  FiZap,
  FiSliders,
  FiArrowUpRight,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    number: "01",
    icon: FiCpu,
    title: "Mechanical Precision",
    description:
      "Experience responsive mechanical switches engineered for consistent feedback and satisfying keystrokes.",
    tag: "PREMIUM SWITCHES",
  },
  {
    id: 2,
    number: "02",
    icon: FiLayers,
    title: "Aluminum Craft",
    description:
      "A refined construction with a premium finish, designed to bring durability and elegance to your desk.",
    tag: "SOLID CONSTRUCTION",
  },
  {
    id: 3,
    number: "03",
    icon: FiZap,
    title: "Everyday Performance",
    description:
      "Enjoy a responsive typing experience whether you're creating, working or gaming.",
    tag: "BUILT FOR PERFORMANCE",
  },
  {
    id: 4,
    number: "04",
    icon: FiSliders,
    title: "Your Personal Setup",
    description:
      "Explore different layouts, colors and lighting options to create a setup that feels uniquely yours.",
    tag: "CUSTOM EXPERIENCE",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="craftsmanship"
      className="bg-[#EDEAE3] py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">

          <p className="text-keyora-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-5">
            The KEYORA Difference
          </p>

          <h2 className="text-[clamp(34px,5vw,62px)] font-semibold tracking-tight leading-[1.1]">
            Engineering meets
            <span className="text-keyora-accent"> craftsmanship.</span>
          </h2>

          <p className="text-keyora-muted text-sm sm:text-base leading-7 mt-6 max-w-2xl">
            Every detail matters. From the feel of each switch
            to the finish of the frame, every KEYORA keyboard
            is designed around a better typing experience.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="relative group">

            <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-keyora-dark">

              <img
                src="https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=1400&q=85"
                alt="Mechanical keyboard craftsmanship and key details"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-9 sm:left-9">
                <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase">
                  Designed with intention
                </p>

                <h3 className="text-white text-2xl sm:text-3xl font-semibold mt-3">
                  Details make
                  <br />
                  the difference.
                </h3>
              </div>

            </div>

            {/* Image Label */}
            <div className="absolute -top-3 -right-3 sm:-right-5 bg-keyora-accent text-white px-4 py-3">
              <p className="text-[9px] tracking-[0.2em]">
                KEYORA / CRAFT
              </p>
            </div>

          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.id}
                  className="group bg-keyora-cream p-6 sm:p-7 border border-black/5 hover:border-keyora-accent/50 transition-all duration-300"
                >

                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-9">

                    <div className="w-11 h-11 flex items-center justify-center bg-[#EDEAE3] text-keyora-dark group-hover:bg-keyora-accent group-hover:text-white transition-colors duration-300">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    <span className="text-xs text-keyora-muted tracking-widest">
                      {feature.number}
                    </span>

                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-keyora-muted leading-6 mt-3">
                    {feature.description}
                  </p>

                  {/* Tag */}
                  <div className="mt-6 pt-4 border-t border-black/10">
                    <span className="text-[9px] font-semibold tracking-[0.18em] text-keyora-accent">
                      {feature.tag}
                    </span>
                  </div>

                </article>
              );
            })}

          </div>

        </div>

        {/* Bottom Brand Statement */}
        <div className="mt-20 lg:mt-28 pt-8 border-t border-black/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <p className="text-keyora-muted text-[10px] tracking-[0.25em] uppercase">
              Our Philosophy
            </p>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
              Not just a keyboard. A better experience.
            </h3>
          </div>

          <a
            href="#collections"
            className="inline-flex items-center gap-3 text-sm font-semibold text-keyora-dark hover:text-keyora-accent transition-colors group"
          >
            Explore Our Collection

            <FiArrowUpRight
              size={19}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
