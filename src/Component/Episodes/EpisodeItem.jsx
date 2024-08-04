import React from "react";

const EpisodeItem = () => {
  return (
    <div>
      <div
        className="gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[300px_1fr] md:space-x-10 items-center justify-start p-6 md:p-8 lg:p-10"
        itemType="https://schema.org/AudioObject"
      >
        <meta
          itemProp="contentUrl"
          content="https://traffic.megaphone.fm/BWG3254101509.mp3"
        />
        <div className="display-none md:block w-full h-full lg:h-full">
          <img
            alt=""
            itemProp="image"
            fetchPriority="high"
            width="512"
            height="512"
            decoding="async"
            data-nimg="1"
            className="w-full"
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
            srcSet=""
            src="/Images/istockphoto-1346125184-612x612.jpg"
          />
        </div>
        <div className="flex flex-col space-y-3 items-start justify-center">
          <div className="flex flex-col space-y-2 items-start justify-start w-full">
            <div className="inline-flex space-x-2 items-center justify-start">
              <div className="flex space-x-2 items-center justify-start">
                <p className="text-xs font-buch tracking-widest leading-none text-indigo-700 uppercase">
                  <a href="/">home</a>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="7"
                  viewBox="0 0 4 7"
                  fill="none"
                >
                  <path
                    d="M3.705 1.205L3 0.5L0 3.5L3 6.5L3.705 5.795L1.415 3.5L3.705 1.205Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <p className="text-xs font-buch tracking-widest leading-none text-indigo-700 uppercase">
                  <a href="/podcasts">podcasts</a>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="7"
                  viewBox="0 0 4 7"
                  fill="none"
                >
                  <path
                    d="M3.705 1.205L3 0.5L0 3.5L3 6.5L3.705 5.795L1.415 3.5L3.705 1.205Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <p className="text-xs font-buch tracking-widest leading-none text-indigo-700 uppercase">
                  <a href="/podcast/bitcoinbuilders">Bitcoin Builders</a>
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-start">
                <div className="flex space-x-2 items-center justify-start">
                  <p className="text-xs font-buch tracking-widest leading-none text-gray-500 uppercase">
                    ep.{" "}
                  </p>
                </div>
                <div className="flex space-x-2 items-center justify-start align-center">
                  <p className="text-xs text-gray-500 uppercase">
                    / <time>June 5, 2024</time>
                  </p>
                </div>
              </div>
            </div>
            <p
              className="text-4xl text-[28px] lg:text-[36] font-semibold font-tiempos max-w-[800px] leading-10 text-gray-900"
              itemProp="name"
            >
              The Modular Integration Spectrum | Keone &amp; Zon
            </p>
            <a
              className="flex items-center text-sm font-bold leading-6 text-[#5637CD] hover:text-gray-700 active:text-gray-900 cursor-pointer"
              aria-label="Play episode The Modular Integration Spectrum | Keone &amp; Zon"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                fill="none"
                className="h-2.5 w-2.5 fill-current"
              >
                <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path>
              </svg>
              <span className="ml-3" aria-hidden="true">
                Listen
              </span>
            </a>
          </div>
          <p
            className="text-base font-buch leading-relaxed text-gray-900"
            itemProp="description"
          >
            <div>
              <p>
                In this episode, Keone from Monad and Zon from Initia to discuss
                the spectrum between modular and integrated blockchain designs.
                They explore the tradeoffs in decentralization, performance and
                scalability between the two approaches. They explore AppChains,
                rollups, composability challenges in modular systems, EVM
                compatibility, and when to scale blockchains horizontally vs
                vertically. To close out Keone and Zon also share valuable
                insights on building Web3 communities organically. Thanks for
                tuning in!
              </p>
              <p>- -</p>
              <p>
                Subscribe on YouTube:{" "}
                <a href="https://www.youtube.com/@expansionpod">
                  https://www.youtube.com/@expansionpod
                </a>
              </p>
              <p>
                Subscribe on Apple:{" "}
                <a href="https://t.co/QdU3g6YyHb">http://apple.co/4bGKYYM</a>{" "}
              </p>
              <p>
                Subscribe on Spotify:{" "}
                <a href="https://t.co/z3aE2ch3Aw">http://spoti.fi/3Vaubq1</a>
              </p>
              <p>
                <br />
              </p>
              <p>
                Follow Zon:{" "}
                <a href="https://x.com/ItsAlwaysZonny">
                  https://x.com/ItsAlwaysZonny
                </a>
              </p>
              <p>
                Follow Keone:{" "}
                <a href="https://x.com/keoneHD">https://x.com/keoneHD</a>
              </p>
              <p>
                Follow Rex:{" "}
                <a href="https://x.com/LogarithmicRex">
                  https://x.com/LogarithmicRex
                </a>
              </p>
              <p>
                Follow nosleepjon:{" "}
                <a href="https://x.com/nosleepjon">https://x.com/nosleepjon</a>
              </p>
              <p>
                Follow Expansion:{" "}
                <a href="https://x.com/ExpansionPod_">
                  https://x.com/ExpansionPod_
                </a>
              </p>
              <p>
                <br />
              </p>
              <p>
                Get top market insights and the latest in crypto news. Subscribe
                to Blockworks Daily Newsletter:{" "}
                <a href="https://blockworks.co/newsletter/">
                  https://blockworks.co/newsletter/
                </a>{" "}
              </p>
              <p>- -</p>
              <p>Timestamps:</p>
              <p>(00:00) Introduction </p>
              <p>(03:01) Modular vs Integrated </p>
              <p>(11:24) Who are Appchains for? </p>
              <p>(28:35) Composability in Modular World </p>
              <p>(35:52) Monad's Endgame </p>
              <p>(39:24) Importance of Decentralization </p>
              <p>(47:42) Building Web3 Community</p>
              <p>- -</p>
              <p>Disclaimer</p>
              <p>
                Expansion was kickstarted by a grant from the Celestia
                Foundation.
              </p>
              <p>
                <br />
              </p>
              <p>
                Nothing said on Expansion is a recommendation to buy or sell
                securities or tokens. This podcast is for informational purposes
                only, and any views expressed by anyone on the show are solely
                our opinions, not financial advice. Rex, Jon, and our guests may
                hold positions in the companies, funds, or projects discussed.
              </p>
            </div>
          </p>
          <ul className="flex gap-2 flex-wrap items-start justify-start">
            <li>
              <a
                href="https://open.spotify.com/episode/4N0dnP7b63GE3QQcGn62Up"
                target="_blank"
                className="group flex space-x-2 items-center justify-start px-2 py-0.5 bg-white border border-t-[1px] border-slate"
                aria-label="Spotify"
                rel="noreferrer"
              >
                <div className="w-5 h-5 rounded-lg bg-white">
                  <svg aria-hidden="true" viewBox="0 0 32 32">
                    <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06"></path>
                  </svg>
                </div>
                <div className="inline-flex flex-col items-start justify-start pl-2">
                  <p className="text-xs font-buch text-gray-500">Listen on</p>
                  <p className="w-full text-xs font-halbfett leading-none text-gray-900">
                    Spotify
                  </p>
                </div>
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
