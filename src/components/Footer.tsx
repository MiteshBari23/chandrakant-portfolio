import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl mb-3">Marina Soleil</p>
            <p className="text-sm opacity-70">
              Painter & Sea Turtle Conservator
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <p className="label-caps mb-4 opacity-70">Newsletter</p>
            {subscribed ? (
              <p className="text-sm opacity-70">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border-b border-accent-foreground/30 py-2 text-sm text-accent-foreground placeholder:text-accent-foreground/40 focus:outline-none focus:border-accent-foreground transition-colors font-body"
                />
                <button type="submit" className="label-caps ml-4 text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Social */}
          <div className="flex md:justify-end items-start gap-5">
            {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-accent-foreground/50 hover:text-accent-foreground transition-colors"
                aria-label="Social media link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="divider-wave mb-8" />

        <p className="text-xs text-center opacity-40">
          © {new Date().getFullYear()} Marina Soleil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
