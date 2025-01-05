import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Showcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Run animation only once
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main className="showcase">
        <header className="showcase-header-container">
          <h1 
            className="showcase-header h-color"
            data-aos="fade-up"   // Fade in animation
          >
            Kiko San
          </h1>
          <h2 
            className="showcase-subheader h-color"
            data-aos="fade-up"   // Fade in animation
            data-aos-delay="300"  // Add delay for staggered effect
          >
            One Discord Bot For Everything! 100% Free.
          </h2>
        </header>

        <section className="showcase-description">
          <p 
            className="showcase-para p-color"
            data-aos="fade-up"   // Fade in animation
            data-aos-delay="500"  // Add delay for staggered effect
          >
            Kiko San is a helpful, open-source Discord bot built to simplify tasks and bring a fun, interactive experience to your server.
          </p>
        </section>

        <div className="showcase-actions">
          <Link
            className="showcase-btn h-color no-decoration"
            href="https://discord.com/oauth2/authorize?client_id=1288827343581872259&permissions=8&integration_type=0&scope=bot+applications.commands"
            target="_blank"
          >
            <button
              className="btn"
              data-aos="slide-right"  // Slide-in animation from the right
            >
              Invite now!
            </button>
          </Link>

          <Link
            className="showcase-btn h-color no-decoration"
            href="https://discord.gg/VEKEfzdyqh"
            target="_blank"
          >
            <button
              className="btn"
              data-aos="slide-left"  // Slide-in animation from the left
            >
              Support Server
            </button>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
