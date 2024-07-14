import React from "react";
import EmailNewsletter from "./EmailNewsletter";

const NewsLetterOffer = () => {
  return (
    <div className="mx-auto pt-10 pb-20">
      <div className="flex justify-center gap-20 p-4">
        <div className="flex flex-col justify-center items-start gap-7 max-w-lg">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col relative gap-3">
              <p className="text-40px text-left text-[#110b29]">Newsletters</p>
              <p className="text-2xl text-left text-[#5637cd]">
                Understand the markets in just 5 minutes
              </p>
            </div>
            <div className="flex justify-start items-center gap-5 w-full">
              <div className="flex flex-col w-full">
                <EmailNewsletter />
              </div>
            </div>
          </div>

          <span className="uppercase">all services</span>
          {/* Newsletter Items */}
          {newsletterItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-start self-stretch gap-4"
            >
              <div
                className="flex w-25px relative gap-2.5"
                tabIndex="0"
                role="checkbox"
                aria-checked="true"
              >
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-25px h-25px"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="0.869141"
                    y="9.5"
                    width="15"
                    height="15"
                    stroke="#B4B4B4"
                    strokeOpacity="0.35"
                  ></rect>
                  <path
                    d="M9.52995 16.5365L5.1862 12.1927L3.70703 13.6615L9.52995 19.4844L22.0299 6.98437L20.5612 5.51562L9.52995 16.5365Z"
                    fill="#5637CD"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-4">
                <div className="flex flex-col justify-start items-start self-stretch relative gap-2">
                  <div className="flex relative gap-2.5">
                    <p className="flex-grow text-2xl text-left text-[#110b29] max-w-500px">
                      {item.title}
                    </p>
                  </div>
                  <p className="self-stretch text-base text-left text-[#110b29]">
                    {item.description}
                  </p>
                </div>
                {/* <div className="flex justify-start items-center flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start text-violet-600  items-center relative gap-1">
                    <a
                      className="text-sm text-left uppercase text-primary"
                      href={item.link}
                    >
                      subscribe
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 hidden lg:block">
          <img
            src="/Images/Wallpaper.png"
            className="h-[494px]"
            alt="phone-newsletter"
          />
        </div>
      </div>
    </div>
  );
};

const newsletterItems = [
  {
    title: "Tujo News Daily",
    description:
      "The newsletter that helps thousands of investors understand crypto and the markets, by Byron Gilliam.",
    link: "/newsletter/daily",
  },
  {
    title: "0x Research",
    description:
      "Alpha directly in your inbox, including market highlights, charts, degen trade ideas, governance updates, token performance, can’t-miss-tweets and more, by Tujo News Research.",
    link: "/newsletter/research",
  },
  {
    title: "The Empire Newsletter",
    description:
      "Start your morning with the top news, analysis and data to inform your day in crypto, by the Tujo News News team.",
    link: "/newsletter/empire",
  },
  {
    title: "Lightspeed Newsletter",
    description:
      "A daily newsletter built for Solana investors, developers and community members. The latest news, analysis and data from one of crypto's hottest networks.",
    link: "/newsletter/lightspeed",
  },
  {
    title: "On The Margin Newsletter",
    description:
      "Daily reporting, analysis and more on the growing intersection between crypto and macroeconomics, policy and finance.",
    link: "/newsletter/onthemargin",
  },
];

export default NewsLetterOffer;
