import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import "@/styles/partials/_showcase.scss";
import "@/styles/partials/_about.scss";
import "@/styles/partials/_joinUs.scss";
import "@/styles/partials/_footer.scss";

import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animations only once
    });
  }, []);

  return <Component {...pageProps} />;
}
