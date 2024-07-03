import React from "react";

const Section3 = () => {
  return (
    <section>
      <div className="md:mt-0 md:flex md:justify-between md:items-center w-full px-10 py-5 border-b border-t">
        <div className="flex justify-start items-center gap-3">
          <div className="relative">
            <h2 className="text-base uppercase text-dark font-semibold">
              <a href="/events">Events &amp; Roundtables</a>
            </h2>
          </div>
        </div>
        <div>
          <a
            className="text-sm text-center md:text-left uppercase text-[#5637CD]"
            href="/events"
          >
            <span className="align-middle flex sm:hidden">
              Calendar
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 mt-1.5"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M3.22222 2.37788V0.600098M6.77778 2.37788V0.600098M2.77778 4.15565H7.22222M1.88889 8.6001H8.11111C8.60203 8.6001 9 8.20213 9 7.71121V2.37788C9 1.88696 8.60203 1.48899 8.11111 1.48899H1.88889C1.39797 1.48899 1 1.88696 1 2.37788V7.71121C1 8.20213 1.39797 8.6001 1.88889 8.6001Z"
                  stroke="#5637CD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="align-middle hidden sm:flex">
              Events Calendar
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 mt-1.5"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M3.22222 2.37788V0.600098M6.77778 2.37788V0.600098M2.77778 4.15565H7.22222M1.88889 8.6001H8.11111C8.60203 8.6001 9 8.20213 9 7.71121V2.37788C9 1.88696 8.60203 1.48899 8.11111 1.48899H1.88889C1.39797 1.48899 1 1.88696 1 2.37788V7.71121C1 8.20213 1.39797 8.6001 1.88889 8.6001Z"
                  stroke="#5637CD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 flex-grow-0 flex-shrink-0 w-full relative gap-10 p-10 xl:grid-cols-4">
        <div className="flex flex-col justify-start items-start flex-grow gap-3">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="text-xxs text-left uppercase text-[#5637CD]">
                  events
                </p>
              </div>
            </div>
            <div className="flex justify-start relative gap-2.5">
              <p className="flex-grow">
                <a
                  className="text-xl font-semibold text-dark hover:text-[#5637CD]"
                  href="/event/permissionless-iii"
                >
                  Permissionless III
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <div className="flex justify-start items-center gap-1">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5.55228 4.93339C5.05014 5.43553 3.66667 6.81901 3.66667 6.81901C3.66667 6.81901 2.3203 5.47264 1.78105 4.93339C0.73965 3.89199 0.73965 2.20355 1.78105 1.16215C2.82245 0.120754 4.51089 0.120754 5.55228 1.16215C6.59368 2.20355 6.59368 3.89199 5.55228 4.93339Z"
                    stroke="#111827"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4.66667 3.04777C4.66667 3.60006 4.21895 4.04777 3.66667 4.04777C3.11438 4.04777 2.66667 3.60006 2.66667 3.04777C2.66667 2.49549 3.11438 2.04777 3.66667 2.04777C4.21895 2.04777 4.66667 2.49549 4.66667 3.04777Z"
                    stroke="#111827"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-dark">
                    Salt Lake City, UT
                  </p>
                </div>
              </div>
              <svg
                width="2"
                height="15"
                viewBox="0 0 2 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-stretch flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <line
                  x1="1.0835"
                  y1="14.6001"
                  x2="1.0835"
                  y2="0.600098"
                  stroke="#B4B4B4"
                  strokeOpacity="0.35"
                  strokeWidth="0.5"
                ></line>
              </svg>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.00016 1.93343V0.600098M4.66683 1.93343V0.600098M1.66683 3.26676H5.00016M1.00016 6.6001H5.66683C6.03502 6.6001 6.3335 6.30162 6.3335 5.93343V1.93343C6.3335 1.56524 6.03502 1.26676 5.66683 1.26676H1.00016C0.631973 1.26676 0.333496 1.56524 0.333496 1.93343V5.93343C0.333496 6.30162 0.631973 6.6001 1.00016 6.6001Z"
                    stroke="#110B29"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-dark">
                    WED - FRI, OCTOBER 9 - 11, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch gap-2.5">
            <div className="flex-grow text-sm text-left font-light text-dark">
              Pack your bags, anon — we’re heading west! Join us in the
              beautiful Salt Lake City for the third installment of
              Permissionless. Come for the alpha, stay for the fresh air.
              Permissionless III promises unforgettable panels, killer
              networking opportunities, and mountains […]
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <a
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 text-[#5637CD] hover:text-black"
              href="/event/permissionless-iii"
            >
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left uppercase">
                  learn more
                </p>
              </div>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.67067 5.18341H1.6665V6.01674H6.67067V7.26674L8.33317 5.60008L6.67067 3.93341V5.18341Z"
                  fill="#5637CD"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow gap-3">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="text-xxs text-left uppercase text-[#5637CD]">
                  events
                </p>
              </div>
            </div>
            <div className="flex justify-start relative gap-2.5">
              <p className="flex-grow">
                <a
                  className="text-xl font-semibold text-dark hover:text-[#5637CD]"
                  href="/event/permissionless-iii-hackathon"
                >
                  Permissionless III Hackathon
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <div className="flex justify-start items-center gap-1">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5.55228 4.93339C5.05014 5.43553 3.66667 6.81901 3.66667 6.81901C3.66667 6.81901 2.3203 5.47264 1.78105 4.93339C0.73965 3.89199 0.73965 2.20355 1.78105 1.16215C2.82245 0.120754 4.51089 0.120754 5.55228 1.16215C6.59368 2.20355 6.59368 3.89199 5.55228 4.93339Z"
                    stroke="#111827"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4.66667 3.04777C4.66667 3.60006 4.21895 4.04777 3.66667 4.04777C3.11438 4.04777 2.66667 3.60006 2.66667 3.04777C2.66667 2.49549 3.11438 2.04777 3.66667 2.04777C4.21895 2.04777 4.66667 2.49549 4.66667 3.04777Z"
                    stroke="#111827"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-dark">
                    Salt Lake City, UT
                  </p>
                </div>
              </div>
              <svg
                width="2"
                height="15"
                viewBox="0 0 2 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-stretch flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <line
                  x1="1.0835"
                  y1="14.6001"
                  x2="1.0835"
                  y2="0.600098"
                  stroke="#B4B4B4"
                  strokeOpacity="0.35"
                  strokeWidth="0.5"
                ></line>
              </svg>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.00016 1.93343V0.600098M4.66683 1.93343V0.600098M1.66683 3.26676H5.00016M1.00016 6.6001H5.66683C6.03502 6.6001 6.3335 6.30162 6.3335 5.93343V1.93343C6.3335 1.56524 6.03502 1.26676 5.66683 1.26676H1.00016C0.631973 1.26676 0.333496 1.56524 0.333496 1.93343V5.93343C0.333496 6.30162 0.631973 6.6001 1.00016 6.6001Z"
                    stroke="#110B29"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-dark">
                    MON - TUES, OCT. 7 - 8, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch gap-2.5">
            <div className="flex-grow text-sm text-left font-light text-dark">
              Blockworks and Bankless in collaboration with buidlbox are excited
              to announce the second installment of the Permissionless Hackathon
              – taking place October 7-8 in Salt Lake City, Utah. We’ve
              partnered with buidlbox to bring together the brightest minds in
              crypto for […]
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <a
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 text-[#5637CD] hover:text-black"
              href="/event/permissionless-iii-hackathon"
            >
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left uppercase">
                  learn more
                </p>
              </div>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.67067 5.18341H1.6665V6.01674H6.67067V7.26674L8.33317 5.60008L6.67067 3.93341V5.18341Z"
                  fill="#5637CD"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow gap-3">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="text-xxs text-left uppercase text-[#5637CD]">
                  webinar
                </p>
              </div>
            </div>
            <div className="flex justify-start relative gap-2.5">
              <p className="flex-grow">
                <a
                  className="text-xl font-semibold text-dark hover:text-[#5637CD]"
                  href="/webinar/bringing-onchain-gaming-to-the-masses"
                >
                  Bringing Onchain Gaming to the Masses
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.00016 1.93343V0.600098M4.66683 1.93343V0.600098M1.66683 3.26676H5.00016M1.00016 6.6001H5.66683C6.03502 6.6001 6.3335 6.30162 6.3335 5.93343V1.93343C6.3335 1.56524 6.03502 1.26676 5.66683 1.26676H1.00016C0.631973 1.26676 0.333496 1.56524 0.333496 1.93343V5.93343C0.333496 6.30162 0.631973 6.6001 1.00016 6.6001Z"
                    stroke="#110B29"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-dark">
                    <time>July 23, 2024</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch gap-2.5">
            <div className="flex-grow text-sm text-left font-light text-dark">
              High-throughput blockchain technology has unlocked one of crypto’s
              most promising use cases: bringing the world’s 3.3 billion gamers
              onchain. The onchain gaming industry not only has the potential to
              bring this massive amount of users onchain, but also develop
              highly profitable […]
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <a
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 text-[#5637CD] hover:text-black"
              href="/webinar/bringing-onchain-gaming-to-the-masses"
            >
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left uppercase">
                  learn more
                </p>
              </div>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.67067 5.18341H1.6665V6.01674H6.67067V7.26674L8.33317 5.60008L6.67067 3.93341V5.18341Z"
                  fill="#5637CD"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow gap-3">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="text-xxs text-left uppercase text-[#5637CD]">
                  webinar
                </p>
              </div>
            </div>
            <div className="flex justify-start relative gap-2.5">
              <p className="flex-grow">
                <a
                  className="text-xl font-semibold text-dark hover:text-[#5637CD]"
                  href="/webinar/crypto-state-of-the-union-etfs-defi-activity"
                >
                  Crypto State of the Union: ETFs &amp; DeFi Activity
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.00016 1.93343V0.600098M4.66683 1.93343V0.600098M1.66683 3.26676H5.00016M1.00016 6.6001H5.66683C6.03502 6.6001 6.3335 6.30162 6.3335 5.93343V1.93343C6.3335 1.56524 6.03502 1.26676 5.66683 1.26676H1.00016C0.631973 1.26676 0.333496 1.56524 0.333496 1.93343V5.93343C0.333496 6.30162 0.631973 6.6001 1.00016 6.6001Z"
                    stroke="#110B29"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-dark">
                    <time datetime="2024-07-11T16:00:00.000Z">
                      July 11, 2024
                    </time>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch gap-2.5">
            <div className="flex-grow text-sm text-left font-light text-dark">
              "Where are we in the cycle?" is frequently asked of crypto
              markets, and there’s never a simple answer. Weighing bullish
              indicators like ETF flows and further institutional adoption
              against volatile price action and negative sentiment makes for
              elusive conclusions. This Blockworks […]
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <a
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 text-[#5637CD] hover:text-black"
              href="/webinar/crypto-state-of-the-union-etfs-defi-activity"
            >
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left uppercase">
                  learn more
                </p>
              </div>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.67067 5.18341H1.6665V6.01674H6.67067V7.26674L8.33317 5.60008L6.67067 3.93341V5.18341Z"
                  fill="#5637CD"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
