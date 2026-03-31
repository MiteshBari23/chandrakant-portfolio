import { motion } from "framer-motion";

const entries = [
  {
    date: "March 2026",
    title: "First Nests of the Season",
    excerpt: "The loggerheads have begun to arrive. Two nests confirmed on the western stretch this week, earlier than expected.",
    tag: "Field Notes",
  },
  {
    date: "January 2026",
    title: "New Watercolor Series: Tidal Pools",
    excerpt: "Exploring the miniature ecosystems that form between the rocks — anemones, hermit crabs, and the light that passes through shallow water.",
    tag: "Studio",
  },
  {
    date: "November 2025",
    title: "Workshop at the Coastal Museum",
    excerpt: "Spent a weekend teaching ecological illustration to local students. Their observations were sharper than mine.",
    tag: "Teaching",
  },
];

const JournalSection = () => {
  return (
    <section id="journal" className="section-padding bg-card texture-overlay">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="label-caps text-primary mb-4">Journal</p>
          <h2 className="heading-section text-foreground">Notes from the coast</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-0">
          {entries.map((entry, i) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-10 border-b border-border last:border-0 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs text-muted-foreground">{entry.date}</span>
                <span className="label-caps text-primary">{entry.tag}</span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {entry.title}
              </h3>
              <p className="body-regular text-muted-foreground">{entry.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
