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

type Category = "all" | "Oil Colour Paintings" | "Water Colour Paintings" | "Sculptures";

const artworks = [
  { src: oil1, title: "Sunset on the Rocks", category: "Oil Colour Paintings" as const, 
  description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." 
},
  { src: oil2, title: "Sunset on the Rocks", category: "Oil Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: oil3, title: "Sunset on the Rocks", category: "Oil Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: oil4, title: "Sunset on the Rocks", category: "Oil Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: oil5, title: "Sunset on the Rocks", category: "Oil Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: oil6, title: "Sunset on the Rocks", category: "Oil Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: oil7, title: "Sunset on the Rocks", category: "Oil Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },




  { src: sculptures1, title: "Sunset on the Rocks", category: "Sculptures" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: sculptures2, title: "Sunset on the Rocks", category: "Sculptures" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: sculptures3, title: "Sunset on the Rocks", category: "Sculptures" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: sculptures4, title: "Sunset on the Rocks", category: "Sculptures" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: sculptures5, title: "Sunset on the Rocks", category: "Sculptures" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: sculptures6, title: "Sunset on the Rocks", category: "Sculptures" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },




  { src: waterColor1, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: waterColor2, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: waterColor3, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: waterColor4, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: waterColor5, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: waterColor6, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: waterColor7, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },
  { src: waterColor8, title: "Sunset on the Rocks", category: "Water Colour Paintings" as const, description: "Watercolor on handmade paper, 2024. Inspired by the western coast at dusk." },



];

const categories: { label: string; value: Category }[] = [
  { label: "All Works", value: "all" },
  { label: "Oil Colorus Paintings", value: "Oil Colour Paintings" },
  { label: "Water Colour Paintings", value: "Water Colour Paintings" },
  { label: "Sculptures", value: "Sculptures" },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
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
