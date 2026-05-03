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
            <p className="font-heading text-2xl mb-3">Chandrakant Halyal</p>
            <p className="text-sm opacity-70">
              Artist & Conservationist
            </p>
          </div>


          {/* Social */}
          <div className="flex md:justify-end items-start gap-5">
            {[
              { Icon: Instagram, label: "Studio", href: "https://www.instagram.com/aami_art_studio?igsh=MWw0cnJ4dTF0enUyNw==" },
              { Icon: Instagram, label: "Artist", href: "https://www.instagram.com/chandrakanthalyal?igsh=ZG1ycTgwd3ByZnRj" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-accent-foreground/50 hover:text-accent-foreground transition-colors text-center"
                aria-label={`${item.label} social media link`}
              >
                <item.Icon size={18} />
                <span className="block text-[10px] opacity-70 mt-1">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="divider-wave mb-8" />

        <p className="text-xs text-center opacity-40">
          © {new Date().getFullYear()} Chandrakant Halyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
