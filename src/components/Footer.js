import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
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
            <p className="text-xxs text-white text-center py-1 px-4 bg-purple-600 rounded-full w-fit border-1 border-purple-500 md:m-auto font-mono md:font-sans">
              <i className="ri-heart-line"></i> ForgeScript is made by @akaneruwumi, and its contributers
            </p>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://github.com/Zack-911"
                className="h-color no-decoration"
                target="_blank"
              >
                Zack-911
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
