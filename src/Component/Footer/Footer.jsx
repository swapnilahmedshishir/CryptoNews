import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import {
  FaXTwitter,
  FaLinkedin,
  FaTelegram,
  FaSquareInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import EmailNewsletter from "../Newsletter/EmailNewsletter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#110B29] w-full">
        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center border-b border-[#b4b4b4]/[0.35]">
          <div className="flex flex-col justify-center items-center flex-shrink gap-3 p-10 bg-[#110b29]">
            <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                  <p className="flex-grow-0 flex-shrink-0 text-xl text-center uppercase text-[#f7f7f7] ">
                    newsletter
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
                <p className="flex-grow text-4xl text-center text-white">
                  Tojo News Daily Newsletter
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow text-[1.2rem] text-center text-white">
                Get the daily newsletter that helps thousands of investors
                understand the markets.
              </p>
            </div>
            {/* news letter  */}
            <div className="flex flex-col w-full">
              <EmailNewsletter />
            </div>
          </div>
          {/* <div className="flex flex-col justify-center items-start self-stretch flex-grow gap-3 p-10 bg-[#110b29] border-t border-r-0 border-b-0 sm:border-l border-[#b4b4b4]/[0.35]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#f7f7f7]">
                    Tojo News research
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
                      href=""
                      target="_blank"
                      className="flex-grow-0 flex-shrink-0 text-[10px] text-center uppercase text-[#a38bfc]"
                      rel="noreferrer"
                    >
                      subscribe
                    </a>
                  </div>
                  <FaArrowRight className="flex-grow-0 flex-shrink-0 text-[#A38BFC] size-3 ml-2" />
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <a
                      href=""
                      target="_blank"
                      className="flex-grow-0 flex-shrink-0 text-[10px] text-center uppercase text-[#a38bfc]"
                      rel="noreferrer"
                    >
                      get in touch
                    </a>
                  </div>
                  <FaArrowRight className="flex-grow-0 flex-shrink-0 text-[#A38BFC] size-3 ml-1" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1  lg:grid-cols-2 gap-0 text-white uppercase text-sm md:text-xs lg:text-[0.9rem]  whitespace-nowrap p-8 md:text-center">
          <div>
            <h5 className="font-bold mb-3 md:hidden">Sections</h5>
            <div className="grid grid-cols-1 md:grid-cols-5 md:mb-6 lg:mb-0 gap-3">
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/podcasts">Podcasts</Link>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/newsletters">Newsletters</Link>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/events">Events</Link>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/roundtables">Roundtables</Link>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <Link to="">Research</Link>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-3 md:hidden">Company</h5>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/about">About</Link>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/advertise">Advertise</Link>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/careers">Careers</Link>
              </div>

              <div className="grid hover:text-purple-200 w-20">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className="grid hover:text-purple-200 w-20">
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 sm:gap-4 justify-center md:justify-between items-center self-stretch flex-grow-0 flex-shrink-0 p-8 sm:p-10 border-t border-r-0 border-b-0 border-l-0 border-[#b4b4b4]/[0.35]">
          <div className="text-white flex flex-col justify-center items-center md:items-start flex-grow-0 flex-shrink-0 relative gap-5 sm:gap-3">
            <img
              className="flex-grow-0 flex-shrink-0 h-[5rem] md:h-[7rem] w-[10] md:w-[14rem] relative text-[#F9FAFB] "
              src="\footer.png"
              alt="logo"
            />

            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 text-[1rem] pl-0 md:pl-8">
              <MdOutlineCopyright className="flex-grow-0 flex-shrink-0 w-4 h-4" />
              <p className="flex-grow-0 flex-shrink-0 uppercase text-white">
                Tujo News
              </p>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-center uppercase text-white text-[1rem] pl-0 md:pl-8">
              Dhaka , Bangladesh
            </p>
          </div>
          <div className="text-white flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1 sm:gap-3">
            <a
              href="https://x.com/TOJONews24"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Twitter"
            >
              <FaXTwitter className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#616060]" />
            </a>
            <a
              href="https://www.linkedin.com/company/tojo-news/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Linkedin"
            >
              <FaLinkedin className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#0A66C2]" />
            </a>
            <a
              href="https://t.me/blockworks_news"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Telegram"
            >
              <FaTelegram className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#0498e2] hover:bg-white hover:rounded-full" />
            </a>
            <a
              href="https://www.instagram.com/tojonews?igsh=ZXdiZ3JvbjBoYjB1"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Instagram"
            >
              <FaSquareInstagram className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#E4405F] hover:bg-white" />
            </a>
            <a
              href="https://www.pinterest.com/tojonews/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Pinterest"
            >
              <FaPinterest className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#E60023]" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561671656944&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Facebook"
            >
              <FaFacebook className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#1877F2] hover:bg-white hover:rounded-full" />
            </a>
            <a
              href="https://www.tiktok.com/@tojonewsofficial"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Tiktok"
            >
              <FaTiktok className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#69c9d0]" />
            </a>
            <a
              href="https://www.youtube.com/channel/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Youtube Channel"
            >
              <FaYoutube className="flex-grow-0 flex-shrink-0 text-[1.9rem] sm:text-[2.5rem] relative hover:text-[#FF0000]" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
