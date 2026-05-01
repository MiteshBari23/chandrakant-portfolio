import { motion } from "framer-motion";
import aboutImage from "@/assets/artist.jpg";

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
            </h2>
            <div className="space-y-5 text-muted-foreground body-regular">
              <p>
                I am a visual artist with a Bachelor’s and Master’s degree in Painting from Sir J. J. School of Art, Mumbai. My work in painting and sculpture is inspired by turtles, their form, movement, and quiet symbolism in nature. Alongside my art practice, I’ve been actively involved in turtle conservation for several years that includes volunteering on the west coast of Maharashtra, assisting in metal tagging, collaborating with the Turtle Survival Alliance, and contributing to India’s first prosthetic turtle flipper. I also create and sell products to support conservation and awareness.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-section text-foreground mb-8">
                Artist Statement
              </h2>
              <div className="space-y-5 text-muted-foreground body-regular text-justify">  
                <p>
                  A pond in my backyard is the place from where the form of turtle in my paintings has emerged. It was a pond of inspiration for me. I used to spend a lot of time capturing moments and life inside it. It was more like a canvas for me with the continuous play of various elements creating visuals but with a constant change. I used to observe the turtles and their routine, their forms, their moods, their postures and their colors. My paintings are the reflection of the very pond in my backyard. It had its own world inside it but with a continuous dialogue with the surrounding.
                </p>
                <p>
                  Various reflections creating various moods, forms and patterns with colors changing with the seasons. All the phases of moon reflected on the floating back of the turtles created interesting compositions. The earthy colours of the pond, the greyish shades of turtles and all the faded reflections together made my colour palette.
                </p>
                <p>
                  I work primarily in oil and watercolour but also love to explore mixed media.
                </p>
                <p>
                  I also draw from my years of experience in turtle conservation, blending observation with advocacy. Through my art, I hope to inspire greater care for the wildlife we share our world with.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
