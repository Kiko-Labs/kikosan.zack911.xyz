import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Run animation only once
    });
  }, []);

  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1" data-aos="fade-up" data-aos-duration="1500">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  Kiko San
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <p
              className="text-xxs text-white text-center py-1 px-4 bg-purple-600 rounded-full w-fit border-1 border-purple-500 md:m-auto font-mono md:font-sans"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <i className="ri-heart-line"></i> Kiko San Is Made By The Kiko-Labs Team!
            </p>
          </div>
        </div>
        <div className="footer-sec2" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
          <hr />
          <div>
            <p className="p-color" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
              Head Developer{" "}
              <Link
                href="https://github.com/Zack-911"
                className="h-color no-decoration"
                target="_blank"
              >
                Zack-911
              </Link>
            </p>
            <p className="p-color" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
              {year} &copy; All rights reserved!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
