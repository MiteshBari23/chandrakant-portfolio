import { motion } from "framer-motion";
import heroImage from "@/assets/hero-turtle.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-28 pt-16 texture-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sea turtle swimming through watercolor ocean"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="label-caps text-primary mb-4">Painter · Sea Turtle Conservator</p>
          <h1 className="heading-display text-foreground mb-6">
            Artist & conservationist
            Conservation through the medium of art
          </h1>
          <p className="body-large text-muted-foreground max-w-lg">
            Where brushstrokes meet the tide — painting the living world and protecting the creatures that inhabit it.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
