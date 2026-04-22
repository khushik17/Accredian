import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="overflow-hidden pt-0">
      <div className="mx-auto w-full">
        <div className="hero-media-frame relative overflow-hidden rounded-4xl">
          <Image
            src="/hero.png"
            alt="Business team collaboration"
            fill
            priority
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
          />

          <div className="hero-overlay-soft absolute inset-0" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 py-14 md:px-10 lg:px-14">
            <div className="max-w-2xl text-white">
              <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-blue-100">Tailored Course Segmentation</p>
              <h1 className="text-4xl font-black leading-[1.05] md:text-6xl">
                Next-Gen Expertise
                <br />
                For Your Enterprise
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-blue-100 md:text-base">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-white">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Tailored Solutions
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Industry Insights
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Expert Guidance
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="gradient-button ripple-button rounded-md border border-transparent bg-[#2f57ff] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2046e8]"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-[7%] top-[18%] h-8 w-8 rounded-full border-4 border-blue-300/90" />
          <div className="pointer-events-none absolute right-[8%] top-[54%] flex h-10 w-10 items-center justify-center rounded-full bg-[#2f57ff]/80 text-lg text-white">
            +
          </div>
        </div>
      </div>
    </section>
  );
}
