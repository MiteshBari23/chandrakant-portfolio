import { motion } from "framer-motion";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCallback, useEffect, useRef, useState } from "react";
import conservationImage from "@/assets/conservation.jpg";
import heroImage2 from "@/assets/heroSection2.jpg";
import heroImage3 from "@/assets/heroSection3.jpg";

const heroSlides = [
  {
    src: conservationImage,
    alt: "Conservation work with turtles on the shore",
  },
  {
    src: heroImage2,
    alt: "Turtle conservation hero section image two",
  },
  {
    src: heroImage3,
    alt: "Turtle conservation hero section image three",
  },
];

const HeroSection = () => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    clearAutoplay();

    if (isPaused) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return clearAutoplay;
  }, [emblaApi, isPaused, clearAutoplay]);

  useEffect(() => {
    return () => {
      clearAutoplay();
    };
  }, [clearAutoplay]);

  return (
    <section className="relative flex flex-col items-start pt-16 texture-overlay md:pb-28">
      {/* Image Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <Carousel
          opts={{ loop: true, align: "start", containScroll: "trimSnaps" }}
          setApi={setEmblaApi}
          className="h-64 md:h-auto md:min-h-[500px]"
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <CarouselContent className="h-full min-h-64 md:min-h-screen ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem
                key={slide.alt}
                className={index === 0 ? "h-full overflow-hidden bg-slate-950/10 pl-0" : "h-full overflow-hidden bg-slate-950/10"}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/45 to-transparent" />
      </div>

      {/* Text Content - positioned differently on mobile vs desktop */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full px-4 py-6 md:absolute md:left-4 md:top-20 md:z-20 md:max-w-sm md:rounded-[2rem] md:bg-transparent md:p-6"
      >
        <p className="heading-display font-bold text-slate-900 md:text-white mb-2 md:mb-4">
          Artist & conservationist
        </p>
        <h2 className="text-2xl sm:text-3xl font-normal text-slate-800 md:text-white">
          Conservation through the medium of art
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;