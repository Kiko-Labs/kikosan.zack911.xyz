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
// Import the Sidebar components (but don't use them yet)
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar.jsx";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animations only once
    });
  }, []);

  return (
    <SidebarProvider>
      {/* Sidebar is not used yet */}
      <main>
        {/* SidebarTrigger can still be included or removed based on the use */}
        <SidebarTrigger />
        <Component {...pageProps} />
      </main>
    </SidebarProvider>
  );
}
