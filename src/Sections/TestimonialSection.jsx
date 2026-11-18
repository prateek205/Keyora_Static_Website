
import React from "react";

import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonials from "../Data/Testimonial";



const TestimonialsSection = () => {
  return (
    <section
      id="reviews"
      className="bg-keyora-dark text-white py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-16">

          <div className="max-w-2xl">

            <p className="text-keyora-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Words From Our Community
            </p>

            <h2 className="text-[clamp(34px,5vw,62px)] font-semibold tracking-tight leading-[1.1]">
              Made to be felt.
              <span className="block text-keyora-accent">
                Loved to be used.
              </span>
            </h2>

            <p className="text-white/55 text-sm sm:text-base leading-7 mt-5 max-w-xl">
              Discover what our keyboard enthusiasts appreciate
              about the KEYORA typing experience.
            </p>

          </div>

          {/* Slider Navigation */}
          <div className="flex items-center gap-3">

            <button
              type="button"
              aria-label="Previous testimonial"
              className="testimonial-prev w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-keyora-accent hover:border-keyora-accent transition-colors duration-300"
            >
              <FiArrowLeft size={19} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="testimonial-next w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-keyora-accent hover:border-keyora-accent transition-colors duration-300"
            >
              <FiArrowRight size={19} />
            </button>

          </div>

        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="testimonial-swiper"
        >

          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">

              <article className="h-full min-h-[330px] bg-white/[0.05] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">

                <div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-keyora-accent mb-7">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <FiStar
                        key={index}
                        size={15}
                        className="fill-current"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-white/80 text-sm sm:text-base leading-7">
                    "{item.review}"
                  </p>

                </div>

                {/* Customer Information */}
                <div className="mt-9 pt-6 border-t border-white/10">

                  <div className="flex items-center justify-between gap-3">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-keyora-accent/20 text-keyora-accent flex items-center justify-center text-xs font-semibold">
                        {item.initials}
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-white/45 text-xs mt-1">
                          {item.role}
                        </p>
                      </div>

                    </div>

                    <span className="text-[9px] text-keyora-accent tracking-wider text-right">
                      {item.product}
                    </span>

                  </div>

                </div>

              </article>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Pagination */}
        <div className="testimonial-pagination flex justify-center items-center gap-2 mt-10" />

        {/* Bottom Label */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between gap-3">

          <p className="text-white/40 text-[10px] tracking-[0.2em]">
            BUILT FOR EVERY KEYSTROKE.
          </p>

          <p className="text-white/40 text-xs">
            THE KEYORA COMMUNITY
          </p>

        </div>

      </div>

      {/* Swiper Pagination Styling */}
      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: #B99B70;
          opacity: 0.35;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          width: 24px;
          opacity: 1;
        }

        .testimonial-prev.swiper-button-disabled,
        .testimonial-next.swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
      `}</style>

    </section>
  );
};

export default TestimonialsSection;
