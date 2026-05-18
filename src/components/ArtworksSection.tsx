import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import galleryOcean1 from "@/assets/gallery-ocean-1.jpg";
import oil1 from "@/assets/IMG_2080.jpg";
import oil2 from "@/assets/IMG_2079.jpg";
import oil3 from "@/assets/IMG_2075.jpg";
import oil4 from "@/assets/IMG_2074.jpg";
import oil5 from "@/assets/IMG_2076.jpg";
import oil6 from "@/assets/IMG_2077.jpg";
import oil7 from "@/assets/IMG_2078.jpg";

import sculptures1 from "@/assets/IMG_2081.jpg";
import sculptures2 from "@/assets/IMG_2082.jpg";
import sculptures3 from "@/assets/IMG_2083.jpg";
import sculptures4 from "@/assets/IMG_2084.jpg";
import sculptures5 from "@/assets/IMG_2085.jpg";
import sculptures6 from "@/assets/IMG_2086.jpg";

import waterColor1 from "@/assets/IMG_2088.jpg";
import waterColor2 from "@/assets/IMG_2089.jpg";
import waterColor3 from "@/assets/IMG_2090.jpg";
import waterColor4 from "@/assets/IMG_2091.jpg";
import waterColor5 from "@/assets/IMG_2092.jpg";
import waterColor6 from "@/assets/IMG_2093.jpg";
import waterColor7 from "@/assets/IMG_2094.jpg";
import waterColor8 from "@/assets/IMG_2095.jpg";

type Category =
  | "all"
  | "Oil Colour Paintings"
  | "Water Colour Paintings"
  | "Sculptures";

const artworks = [
  {
    src: oil1,
    title: "Back on nature",
    category: "Oil Colour Paintings" as const,
    description: "Size - 20” x 20” ",
  },
  {
    src: oil2,
    title: "Life Cycle",
    category: "Oil Colour Paintings" as const,
    description: "Size - 48” x 54”",
  },
  {
    src: oil3,
    title: "Yamuna",
    category: "Oil Colour Paintings" as const,
    description: "Size - 36” x 48”",
  },
  {
    src: oil4,
    title: "",
    category: "Oil Colour Paintings" as const,
    description: "Size - 18” x 18”",
  },
  {
    src: oil5,
    title: "Belife",
    category: "Oil Colour Paintings" as const,
    description: "Size - 12” x 12”",
  },
  {
    src: oil6,
    title: "",
    category: "Oil Colour Paintings" as const,
    description: "Size - 18” x 18”",
  },
  {
    src: oil7,
    title: "",
    category: "Oil Colour Paintings" as const,
    description: "Size - 18” x 18”",
  },

  {
    src: sculptures1,
    title: "Chess",
    category: "Sculptures" as const,
    description: "Medium - Stone & brass Size - 20” x 20” ",
  },
  {
    src: sculptures2,
    title: "Pond of inspiration ",
    category: "Sculptures" as const,
    description:
      "Medium - Rock Dhokra (Devrai art village’s patented fusion) & Stone base  Size - 10”",
  },
  {
    src: sculptures3,
    title: "Survival ",
    category: "Sculptures" as const,
    description:
      "Medium - Rock Dhokra ( Devrai art Village’s Petented fusion of stone and brass) & brass Size - 9” x 8” x 6”",
  },
  {
    src: sculptures4,
    title: "Resilience ",
    category: "Sculptures" as const,
    description: "Medium - Stone Size - 42” x 18” x 15”",
  },
  {
    src: sculptures5,
    title: "Prakriti & Sanskriti ",
    category: "Sculptures" as const,
    description: "Medium - Terracotta, Fiberhlass & Metal Size - 48” x 48”",
  },
  {
    src: sculptures6,
    title: "Kurmavatar ",
    category: "Sculptures" as const,
    description:
      "Medium - Rock-Dhokra ( Devrai art village’s patented fusion of stone and brass) Size - 18”",
  },

  {
    src: waterColor1,
    title: " ",
    category: "Water Colour Paintings" as const,
    description: "Medium - Watercolour on handmade paper  Size - 22” x 22",
  },
  {
    src: waterColor2,
    title: " ",
    category: "Water Colour Paintings" as const,
    description: "Medium - Watercolour on handmade paper Size - 22” x 22”",
  },
  {
    src: waterColor3,
    title: " ",
    category: "Water Colour Paintings" as const,
    description: "Medium - Watercolour on handmade paper Size - 8” x 8”",
  },
  {
    src: waterColor4,
    title: "Chitra",
    category: "Water Colour Paintings" as const,
    description: "Medium - Watercolour on handmade paper Size - 8” x 8”",
  },
  {
    src: waterColor5,
    title: " ",
    category: "Water Colour Paintings" as const,
    description: "Medium - Watercolour on handmade paper Size - 8” x 8”",
  },
  {
    src: waterColor6,
    title: " ",
    category: "Water Colour Paintings" as const,
    description: "Medium - Watercolour on handmade paper Size - 9” x 9”",
  },
  {
    src: waterColor7,
    title: " ",
    category: "Water Colour Paintings" as const,
    description: "Watercolor on handmade paper Size - 11” x 11” ",
  },
  {
    src: waterColor8,
    title: " ",
    category: "Water Colour Paintings" as const,
    description: "Watercolor on handmade paper Size - 11” x 11”",
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "All Works", value: "all" },
  { label: "Oil Colorus Paintings", value: "Oil Colour Paintings" },
  { label: "Water Colour Paintings", value: "Water Colour Paintings" },
  { label: "Sculptures", value: "Sculptures" },
];

const ArtworksSection = () => {
  const [filter, setFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  const filtered =
    filter === "all" ? artworks : artworks.filter((a) => a.category === filter);

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((artwork) => (
              <motion.div
                key={artwork.src}
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
                  <h3 className="font-heading text-lg text-foreground">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {artwork.category}
                  </p>
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
                <h3 className="heading-sub text-foreground mb-2">
                  {selected.title}
                </h3>
                <p className="body-regular text-muted-foreground">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtworksSection;
