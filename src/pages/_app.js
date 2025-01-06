import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import "@/styles/partials/_showcase.scss";
import "@/styles/partials/_about.scss";
import "@/styles/partials/_joinUs.scss";
import "@/styles/partials/_footer.scss";
import '@/styles/partials/_docs.scss';

import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head"; // Import the Head component

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animations only once
    });
  }, []);

  return (
    <>
      <Head>
        <title>Kiko San - The Ultimate Discord Bot for Your Server</title>
        <meta name="description" content="Kiko San is a powerful and easy-to-use Discord bot designed to enhance your server's experience. Get started with amazing features today!" />
        <meta name="keywords" content="Kiko San, Discord bot, server bot, automation, fun bot, moderation, custom commands" />

        <meta property="og:title" content="Kiko San - The Ultimate Discord Bot" />
        <meta property="og:description" content="Discover Kiko San, the most feature-packed and user-friendly Discord bot. Automate, moderate, and entertain your server with ease." />
        <meta property="og:image" content="https://kikosan.zack911.xyz/favicon.png" />
        <meta property="og:url" content="https://kikosan.zack911.xyz" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kiko San - The Ultimate Discord Bot" />
        <meta name="twitter:description" content="Kiko San brings a collection of powerful features for your Discord server. Perfect for moderation, entertainment, and server management!" />
        <meta name="twitter:image" content="https://kikosan.zack911.xyz/favicon.png" />


        <link rel="icon" href="/favicon.png" />
      </Head>


      <Component {...pageProps} />
    </>
  );
}
