import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const JoinNow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Run animation only once
    });
  }, []);

  return (
    <>
      <section className="joinUs" data-aos="fade-up" data-aos-duration="1200">
        <div className="h-color joinUs-header" data-aos="slide-left" data-aos-duration="1200">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
          Invite Kiko San to your Discord server!
        </div>
        <button className="btn" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">
          <Link
            className="h-color no-decoration"
            href="https://discord.com/oauth2/authorize?client_id=1288827343581872259&permissions=8&integration_type=0&scope=bot+applications.commands"
            target="_blank"
          >
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
