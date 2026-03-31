import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding texture-overlay">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="label-caps text-primary mb-4">Contact</p>
            <h2 className="heading-section text-foreground mb-6">Get in touch</h2>
            <div className="space-y-4 text-muted-foreground body-regular">
              <p>
                For commissions, exhibitions, collaborations, or conservation inquiries — 
                I'd love to hear from you.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-foreground font-heading">Studio Location</p>
                <p className="text-sm text-muted-foreground">
                  Coastal Arts Quarter<br />
                  Praia da Rocha, Algarve<br />
                  Portugal
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="heading-sub text-foreground mb-2">Thank you.</p>
                  <p className="text-muted-foreground">I'll respond within a few days.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors font-body"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors font-body"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Inquiry</label>
                  <select className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors font-body">
                    <option>Commission</option>
                    <option>Exhibition</option>
                    <option>Conservation Collaboration</option>
                    <option>Workshop</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none font-body"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 label-caps bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
                >
                  Send <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
