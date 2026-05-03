import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const ContactSection = () => {
 const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill in all fields", variant: "destructive" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      // format time for your template (IST)
      const istTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // ✅ Real send via EmailJS
      await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
        {
          // must match your template placeholders
          name: formData.name,
          time: istTime,
          message: formData.message,

          // helpful extras
          reply_to: formData.email,
          from_email: formData.email,
          subject: `New portfolio inquiry from ${formData.name}`,
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                 Aami Art Studio, Ganeshpeth, Panchgani
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
            {isSubmitting ? (
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
