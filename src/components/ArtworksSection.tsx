import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import galleryOcean1 from "@/assets/gallery-ocean-1.jpg";
import galleryOcean2 from "@/assets/gallery-ocean-2.jpg";
import galleryTurtle1 from "@/assets/gallery-turtle-1.jpg";
import galleryTurtle2 from "@/assets/gallery-turtle-2.jpg";
import gallerySketch1 from "@/assets/gallery-sketch-1.jpg";

type Category = "all" | "ocean" | "turtle" | "sketchbook";

const artworks = [
  { src: galleryOcean1, title: "Sunset on the Rocks", category: "ocean" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: galleryTurtle1, title: "Evening Return", category: "turtle" as const, description: "Oil on canvas, 2023. A green sea turtle rests on the sand after nesting." },
  { src: gallerySketch1, title: "Coastal Specimens", category: "sketchbook" as const, description: "Mixed media journal page, 2024. Field notes from the mangrove coast." },
  { src: galleryOcean2, title: "Coral Garden", category: "ocean" as const, description: "Watercolor, 2023. The reef ecosystem rendered in warm and cool washes." },
  { src: galleryTurtle2, title: "First Journey", category: "turtle" as const, description: "Photography & paint, 2024. Hatchlings heading to sea for the first time." },
];

const categories: { label: string; value: Category }[] = [
  { label: "All Works", value: "all" },
  { label: "Ocean Paintings", value: "ocean" },
  { label: "Turtle Series", value: "turtle" },
  { label: "Sketchbooks", value: "sketchbook" },
];

const ArtworksSection = () => {
  const [filter, setFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<typeof artworks[0] | null>(null);

  const filtered = filter === "all" ? artworks : artworks.filter((a) => a.category === filter);

  return (
    <section id="artworks" className="section-padding bg-card texture-overlay">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="label-caps text-primary mb-4">Artworks</p>
          <h2 className="heading-section text-foreground">Selected works</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`label-caps px-4 py-2 border transition-colors ${
                filter === cat.value
                  ? "border-primary text-primary bg-primary/5"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((artwork) => (
              <motion.div
                key={artwork.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer group"
                onClick={() => setSelected(artwork)}
              >
                <div className="overflow-hidden">
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 mb-6">
                  <h3 className="font-heading text-lg text-foreground">{artwork.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{artwork.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full object-contain max-h-[60vh]"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-background/80 p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="heading-sub text-foreground mb-2">{selected.title}</h3>
                <p className="body-regular text-muted-foreground">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtworksSection;
