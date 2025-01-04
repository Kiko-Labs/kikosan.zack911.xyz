import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Kiko San</h1>
        <h2 className="showcase-header-text h-color">
          One Discord Bot For Everything! 100% Free.
        </h2>

        <p className="showcase-para p-color">
        Kiko San is a helpful, open-source Discord bot built to simplify tasks and bring a fun, interactive experience to your server.
        </p>

        <div className="showcase-btn">
          <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1288827343581872259&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank">
            Invite now!
          </Link>
          </button>

          <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.gg/VEKEfzdyqh" target="_blank">
            Invite now!
          </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
