import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Run animation only once
    });
  }, []);

  return (
    <>
      <section className="about-section" id="about-section">
        <div
          className="about-header"
          data-aos="fade-up" // Fade in for header
        >
          <h3 className="h-color">Why Use Kiko San?</h3>
        </div>

        <div className="about-container">
          <div className="about-card">
            <div data-aos="fade-up">
              <h4 className="h-color">⚡ Commands</h4>
              <p className="p-color">
                Bot is still in development. Will be shown here after initial development phase.
              </p>
              <hr />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                Bot is still in development. Will be shown here after initial development phase.
              </p>
              <hr />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="h-color">✏️ Customization</h4>
              <p className="p-color">
                Bot is still in development. Will be shown here after initial development phase.
              </p>
              <hr />
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <h4 className="h-color">💰 Price</h4>
              <p className="p-color">
                100% Free
              </p>
              <hr />
            </div>
          </div>
        </div>

        <p data-aos="fade-up" data-aos-delay="800">
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div
            className="about-stats-card"
            data-aos="slide-right" // Slide-in from the right
          >
            <h4 className="h-color">17k+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div
            className="about-stats-card"
            data-aos="slide-up" // Slide-up animation
            data-aos-delay="200"
          >
            <h4 className="h-color">94k+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div
            className="about-stats-card"
            data-aos="slide-left" // Slide-in from the left
            data-aos-delay="400"
          >
            <h4 className="h-color">375k+</h4>
            <p className="p-color">Total Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
