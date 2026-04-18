import { motion } from "framer-motion";
import conservationImage from "@/assets/conservation.jpg";
import { Shell, Waves, Leaf } from "lucide-react";

const stats = [
  { icon: Shell, label: "Nests Protected", value: "340+" },
  { icon: Waves, label: "Coastline Monitored", value: "12 km" },
  { icon: Leaf, label: "Years Active", value: "11" },
];

const ConservationSection = () => {
  return (
    <section id="conservation" className="section-padding texture-overlay">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="label-caps text-secondary mb-4">Conservation</p>
          <h2 className="heading-section text-foreground mb-6">
            Turtle Conservation Highlights
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Sea turtles have navigated the world's oceans for over 100 million
            years. Our work ensures they continue to return to these shores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={conservationImage}
              alt="Field conservation work monitoring sea turtle nests"
              className="w-full aspect-[1] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground body-regular">
              <p>
                Made India’s first one-of-it’s-kind prosthetic turtle flipper.
              </p>
              <p>
                Volunteer and Hands-on experience in metal tagging & rescue on
                Maharashtra’s west coast.
              </p>
              <p>
                Rescue and rehabilitation of many fresh water turtles in the
                rural area by using awareness as a key.
              </p>
              <p>Collaboration with Turtle Survival Alliance,
              products made & sold to generate conservation fund</p>
              <p>
                Collaboration with Turtle Survival Alliance Products made & sold
                to generate conservation fund
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-heading text-2xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Educational cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid sm:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Green Sea Turtle",
              text: "Chelonia mydas — the most common visitor to our beaches, named for the green color of their fat.",
            },
            {
              title: "Hawksbill Turtle",
              text: "Eretmochelys imbricata — critically endangered, with a beautiful shell pattern that has made them targets for centuries.",
            },
            {
              title: "Loggerhead Turtle",
              text: "Caretta caretta — named for their large heads, these powerful swimmers migrate thousands of miles each year.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-card p-8 border border-border">
              <h3 className="font-heading text-lg text-foreground italic mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConservationSection;
