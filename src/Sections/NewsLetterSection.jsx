import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    alert(`Thank you for subscribing with ${email}!`);

    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="bg-keyora-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-keyora-dark text-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-keyora-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                Stay In The Loop
              </p>

              <h2 className="text-[clamp(34px,5vw,58px)] font-semibold tracking-tight leading-[1.1]">
                A better typing
                <span className="block text-keyora-accent">
                  experience starts here.
                </span>
              </h2>

              <p className="text-white/55 text-sm sm:text-base leading-7 mt-6 max-w-lg">
                Join the KEYORA community for new product releases, exclusive
                offers and inspiration for your workspace.
              </p>
            </div>

            {/* Right Form */}
            <div>
              <form onSubmit={handleSubmit} className="w-full">
                <label
                  htmlFor="newsletter-email"
                  className="block text-xs text-white/60 mb-3"
                >
                  Your email address
                </label>

                <div className="flex flex-col sm:flex-row border border-white/20 focus-within:border-keyora-accent transition-colors">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 min-w-0 bg-transparent text-white placeholder:text-white/30 px-5 py-4 text-sm outline-none"
                  />

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-keyora-accent text-white px-6 py-4 text-sm font-medium hover:bg-[#a48760] transition-colors"
                  >
                    Subscribe
                    <FiArrowUpRight size={18} />
                  </button>
                </div>

                <p className="text-white/35 text-[10px] sm:text-xs leading-5 mt-4">
                  By subscribing, you agree to receive updates from KEYORA. You
                  can unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
