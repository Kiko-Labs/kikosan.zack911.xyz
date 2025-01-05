import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div>
      <navbar className="navbar">
        <nav
          className="navbar-header"
          data-aos="fade-down" // Add animation to navbar header
          data-aos-duration="1500"
        >
          <ul>
            <li>
              <Link className="h-color" href="/">
                Kiko San
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className="navbar-items"
          data-aos="fade-up" // Add animation to navbar items
          data-aos-duration="1500"
        >
          <ul>
            <li>
              <Link className="p-color" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/docs">
                Documentation
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://github.com/Kiko-Labs/Kiko-San"
                target="_blank"
              >
                Source Code
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
