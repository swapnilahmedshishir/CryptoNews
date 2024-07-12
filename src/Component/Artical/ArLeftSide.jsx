import React from "react";
import Newsletter from "../Newsletter/Newsletter";

const ArLeftSide = () => {
  return (
    <>
      <div className="basis-1/1 lg:basis-2/6 min-w-[300px]">
        {/* nesletter */}
        <Newsletter />
        <div>
          <div className="divide-y border-y">
            <div className="flex justify-start items-center px-10 py-5 w-full">
              <div className="gap-2.5">
                <p className="font-semibold text-left uppercase text-dark">
                  Upcoming Events
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
              <div className="flex flex-col justify-start items-start gap-4 p-10">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-start relative">
                    <p className="flex-grow text-2xl text-left font-semibold text-dark hover:text-gray-800">
                      <a href="/event/permissionless-iii-hackathon">
                        Permissionless III Hackathon
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col justify-start relative text-gray-700">
                    <div className="flex justify-start items-center relative gap-1 text-gray-700">
                      <svg
                        width="8"
                        height="10"
                        viewBox="0 0 8 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.65685 6.65685C6.03287 7.28084 4.31371 9 4.31371 9C4.31371 9 2.64066 7.32695 1.97056 6.65685C0.676479 5.36277 0.676479 3.26465 1.97056 1.97056C3.26465 0.676479 5.36277 0.676479 6.65685 1.97056C7.95094 3.26465 7.95094 5.36277 6.65685 6.65685Z"
                          stroke="#111827"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5.55635 4.31371C5.55635 5 5 5.55635 4.31371 5.55635C3.62742 5.55635 3.07107 5 3.07107 4.31371C3.07107 3.62742 3.62742 3.07107 4.31371 3.07107C5 3.07107 5.55635 3.62742 5.55635 4.31371Z"
                          stroke="#111827"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="flex justify-start items-center relative text-sm text-left uppercase whitespace-nowrap">
                        Salt Lake City, UT
                      </span>
                    </div>
                    <div className="flex justify-start items-center relative gap-1">
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M2.84918 2.77778V1M6.40473 2.77778V1M2.40473 4.55556H6.84918M1.51584 9H7.73806C8.22898 9 8.62695 8.60203 8.62695 8.11111V2.77778C8.62695 2.28686 8.22898 1.88889 7.73806 1.88889H1.51584C1.02492 1.88889 0.626953 2.28686 0.626953 2.77778V8.11111C0.626953 8.60203 1.02492 9 1.51584 9Z"
                          stroke="#110B29"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="flex justify-start items-center relative gap-1">
                        <p className="text-sm text-left uppercase">
                          MON - TUES, OCT. 7 - 8, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch relative gap-2.5">
                  <p className="flex-grow text-base text-left text-[#6a6a6a]">
                    Blockworks and Bankless in collaboration with buidlbox are
                    excited to announce the second installment of the
                    Permissionless Hackathon – taking place October 7-8 in Salt
                    Lake City, Utah. We’ve partnered with buidlbox to bring
                    together the brightest minds in crypto for […]
                  </p>
                </div>
                <div className="flex flex-wrap justify-start items-start self-stretch gap-3">
                  <a
                    href="/event/permissionless-iii-hackathon"
                    className="inline-flex items-center text-left cursor-pointer bg-gray-50 text-gray-900 border border-gray-100 hover:border-gray-200 hover:bg-white hover:text-black uppercase text-base px-3 py-1.5"
                  >
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
              <div className="flex flex-col justify-start items-start gap-4 p-10">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-start relative">
                    <p className="flex-grow text-2xl text-left font-semibold text-dark hover:text-gray-800">
                      <a href="/event/permissionless-iii">Permissionless III</a>
                    </p>
                  </div>
                  <div className="flex flex-col justify-start relative text-gray-700">
                    <div className="flex justify-start items-center relative gap-1 text-gray-700">
                      <svg
                        width="8"
                        height="10"
                        viewBox="0 0 8 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.65685 6.65685C6.03287 7.28084 4.31371 9 4.31371 9C4.31371 9 2.64066 7.32695 1.97056 6.65685C0.676479 5.36277 0.676479 3.26465 1.97056 1.97056C3.26465 0.676479 5.36277 0.676479 6.65685 1.97056C7.95094 3.26465 7.95094 5.36277 6.65685 6.65685Z"
                          stroke="#111827"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5.55635 4.31371C5.55635 5 5 5.55635 4.31371 5.55635C3.62742 5.55635 3.07107 5 3.07107 4.31371C3.07107 3.62742 3.62742 3.07107 4.31371 3.07107C5 3.07107 5.55635 3.62742 5.55635 4.31371Z"
                          stroke="#111827"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="flex justify-start items-center relative text-sm text-left uppercase whitespace-nowrap">
                        Salt Lake City, UT
                      </span>
                    </div>
                    <div className="flex justify-start items-center relative gap-1">
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M2.84918 2.77778V1M6.40473 2.77778V1M2.40473 4.55556H6.84918M1.51584 9H7.73806C8.22898 9 8.62695 8.60203 8.62695 8.11111V2.77778C8.62695 2.28686 8.22898 1.88889 7.73806 1.88889H1.51584C1.02492 1.88889 0.626953 2.28686 0.626953 2.77778V8.11111C0.626953 8.60203 1.02492 9 1.51584 9Z"
                          stroke="#110B29"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="flex justify-start items-center relative gap-1">
                        <p className="text-sm text-left uppercase">
                          WED - FRI, OCTOBER 9 - 11, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch relative gap-2.5">
                  <p className="flex-grow text-base text-left text-[#6a6a6a]">
                    Pack your bags, anon — we’re heading west! Join us in the
                    beautiful Salt Lake City for the third installment of
                    Permissionless. Come for the alpha, stay for the fresh air.
                    Permissionless III promises unforgettable panels, killer
                    networking opportunities, and mountains […]
                  </p>
                </div>
                <div className="flex flex-wrap justify-start items-start self-stretch gap-3">
                  <a
                    href="/event/permissionless-iii"
                    className="inline-flex items-center text-left cursor-pointer bg-gray-50 text-gray-900 border border-gray-100 hover:border-gray-200 hover:bg-white hover:text-black uppercase text-base px-3 py-1.5"
                  >
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="items-start">
            <div className="flex justify-start items-center px-10 py-5 w-full border-b">
              <div className="gap-2.5">
                <p className="font-semibold text-left uppercase text-dark">
                  recent research
                </p>
              </div>
            </div>
            <div className="pt-10 px-10">
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start self-stretch gap-2">
                  <div className="min-h-[100px]">
                    <a
                      href="https://app.blockworksresearch.com/research/ton-not-right-now"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="TON.png"
                        loading="eager"
                        width="384"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-auto"
                        sizes="(min-width: 60em) 300px, (min-width: 28em) 150px"
                        srcSet=""
                        src=""
                      />
                    </a>
                  </div>
                  <div className="flex justify-start items-center self-stretch gap-1">
                    <p className="flex-grow text-xs uppercase text-[#5637CD]">
                      Research
                    </p>
                  </div>
                  <div className="flex justify-start items-start self-stretch gap-2.5">
                    <a
                      href="https://app.blockworksresearch.com/research/ton-not-right-now"
                      target="_blank"
                      className="flex-grow text-[22px] font-headline hover:text-[#5637CD]"
                      rel="noreferrer"
                    >
                      TON: NOT Right Now
                    </a>
                  </div>
                  <div className="flex justify-start items-start self-stretch gap-2.5">
                    <p className="flex-grow text-base text-left text-[#6a6a6a]">
                      We acknowledge TON’s highly unique distribution
                      relationship with Telegram, Telegram’s ambitions as a
                      super app and developer platform rivaling the scale of
                      WeChat as a TON growth driver, and the TON chain’s
                      relatively high scale and speed versus popular EVM chains
                      today. However, we believe the TON ecosystem is at a very
                      early stage, its native smart contract language may be
                      prohibitive to attracting meaningful developer activity,
                      and that Telegram’s distribution is overstated and its
                      viability as a developer platform and super app is far
                      more challenged than the market appreciates.{" "}
                    </p>
                  </div>
                  <div className="flex justify-start items-start self-stretch gap-1">
                    <div className="flex justify-start items-start relative">
                      <p className="text-xs uppercase text-light-gray">
                        by{" "}
                        <a
                          href="https://app.blockworksresearch.com/team/ryan-connor"
                          className="text-[#5637CD] hover:text-dark"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ryan Connor
                        </a>
                      </p>
                    </div>
                    <div className="flex justify-start items-start gap-1">
                      <p className="text-xs uppercase text-light-gray">/</p>
                      <p className="text-xs uppercase text-light-gray">
                        <time>2 days ago</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArLeftSide;
