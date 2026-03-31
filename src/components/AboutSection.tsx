import { motion } from "framer-motion";
import aboutImage from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding texture-overlay">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden">
              <img
                src={aboutImage}
                alt="Artist painting on the coast"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="label-caps text-primary mb-4">About</p>
            <h2 className="heading-section text-foreground mb-8">
              Between canvas and coastline
            </h2>
            <div className="space-y-5 text-muted-foreground body-regular">
              <p>
                For over a decade, I have been walking the line between art and ecology — 
                spending mornings with pigments and afternoons on nesting beaches, documenting 
                the quiet rhythms of sea turtles.
              </p>
              <p>
                My paintings emerge from this dual life: the textures of sand, the depth of 
                the open ocean, the patience required both to wait for a turtle to nest and 
                to let a painting reveal itself.
              </p>
              <p>
                I believe that art and conservation share a common root — an attention to the 
                world that is both careful and deeply felt. Each canvas is an act of witness; 
                each night on the beach, a prayer for continuity.
              </p>
            </div>
            <div className="divider-wave mt-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
