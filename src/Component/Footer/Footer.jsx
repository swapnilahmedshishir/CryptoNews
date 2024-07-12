import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import {
  FaXTwitter,
  FaLinkedin,
  FaTelegram,
  FaSquareInstagram,
  FaDiscord,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import EmailNewsletter from "../Newsletter/EmailNewsletter";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#110B29] w-full">
        <div className="flex flex-wrap sm:flex-nowrap justify-center border-b border-[#b4b4b4]/[0.35]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-3 p-10 bg-[#110b29]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#f7f7f7] ">
                    newsletter
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow text-xl text-left text-white">
                  Blockworks Daily Newsletter
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow text-sm text-left text-white">
                Get the daily newsletter that helps thousands of investors
                understand the markets.
              </p>
            </div>
            {/* news letter  */}
            <div className="flex flex-col w-full">
              <EmailNewsletter />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch flex-grow gap-3 p-10 bg-[#110b29] border-t border-r-0 border-b-0 sm:border-l border-[#b4b4b4]/[0.35]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#f7f7f7]">
                    blockworks research
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow text-[22px] text-left text-white">
                  Unlock crypto's most powerful research platform.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow text-sm text-left text-[#f7f7f7]">
                Our research packs a punch and gives you actionable takeaways
                for each topic.
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <a
                      href="https://blockworksresearch.com"
                      target="_blank"
                      className="flex-grow-0 flex-shrink-0 text-[10px] text-center uppercase text-[#a38bfc]"
                      rel="noreferrer"
                    >
                      subscribe
                    </a>
                  </div>
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M4 0.837402L3.295 1.5424L6.085 4.3374H0V5.3374H6.085L3.295 8.1324L4 8.8374L8 4.8374L4 0.837402Z"
                      fill="#A38BFC"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <a
                      href="https://app.blockworksresearch.com/support"
                      target="_blank"
                      className="flex-grow-0 flex-shrink-0 text-[10px] text-center uppercase text-[#a38bfc]"
                      rel="noreferrer"
                    >
                      get in touch
                    </a>
                  </div>
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M4 0.837402L3.295 1.5424L6.085 4.3374H0V5.3374H6.085L3.295 8.1324L4 8.8374L8 4.8374L4 0.837402Z"
                      fill="#A38BFC"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1  lg:grid-cols-2 gap-0 text-white uppercase text-sm md:text-xs lg:text-sm  whitespace-nowrap p-8 md:text-center">
          <div>
            <h5 className="font-bold mb-3 md:hidden">Sections</h5>
            <div className="grid grid-cols-1 md:grid-cols-7 md:mb-6 lg:mb-0 gap-2">
              <div className="grid hover:text-purple-200 w-20">
                <a href="/news">News</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/podcasts">Podcasts</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/newsletter">Newsletters</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/events">Events</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/roundtables">Roundtables</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="https://blockworksresearch.com">Research</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/sitemap">Sitemap</a>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-3 md:hidden">Company</h5>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
              <div className="grid hover:text-purple-200 w-20">
                <a href="/about">About</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/advertise">Advertise</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/careers">Careers</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/trust-ethics">Trust &amp; Ethics</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <a href="/contact-us">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-between items-center self-stretch flex-grow-0 flex-shrink-0 p-10 border-t border-r-0 border-b-0 border-l-0 border-[#b4b4b4]/[0.35]">
          <div className="text-white flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <img
              className="flex-grow-0 flex-shrink-0 h-14 w-28 relative text-[#F9FAFB] "
              src="\footer.png"
              alt="logo"
            />

            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <MdOutlineCopyright className="flex-grow-0 flex-shrink-0 w-3 h-3" />
              <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-white">
                Tujo News
              </p>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-white">
              133 W 19th St., New York, NY 10011
            </p>
          </div>
          <div className="text-white flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Twitter"
            >
              <FaXTwitter className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
            </a>
            <a
              href="https://www.linkedin.com/company/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Linkedin"
            >
              <FaLinkedin className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
            </a>
            <a
              href="https://t.me/blockworks_news"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Telegram"
            >
              <FaTelegram className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <FaSquareInstagram className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
            </a>
            <a
              href="https://discord.com/invite/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Discord"
            >
              <FaDiscord className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Tiktok"
            >
              <FaTiktok className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
            </a>
            <a
              href="https://www.youtube.com/channel/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Youtube Channel"
            >
              <FaYoutube className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
