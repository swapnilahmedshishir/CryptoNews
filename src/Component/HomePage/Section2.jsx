import React from "react";

const Section2 = () => {
  return (
    <section>
      <div className="md:mt-0 md:flex md:justify-between md:items-center w-full px-10 py-5 border-b border-t">
        <div className="flex justify-start items-center gap-3">
          <div className="relative">
            <h2 className="text-base uppercase text-dark font-semibold">
              <a href="/news">news</a>
            </h2>
          </div>
          <div className="hidden md:flex justify-start items-start text-center md:text-left relative gap-2.5">
            <p className="text-light-gray">
              Breaking headlines across our core coverage categories.
            </p>
          </div>
        </div>
        <div>
          <a
            className="text-sm text-center md:text-left uppercase text-primary"
            href="/news"
          >
            <span className="flex align-middle">
              more from news
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 mt-1.5"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.005 1.5H0V2.5H6.005V4L8 2L6.005 0V1.5Z"
                  fill="#5637CD"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5 px-10 pb-5 w-full">
        <div>
          <div className="uppercase py-8 lg:py-4">
            <div className="md:hidden">
              <label for="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option>Markets</option>
                <option>Finance</option>
                <option>Policy</option>
                <option>DeFi</option>
                <option>Business</option>
                <option>Web3</option>
                <option>Opinion</option>
                <option>People</option>
                <option>Podcast</option>
                <option>Sponsored</option>
                <option>Analysis</option>
                <option>Education</option>
              </select>
            </div>
            <div className="hidden md:block">
              <div className="border-b border-gray-200">
                <nav
                  className="-mb-px absolute px-8 left-0 right-0 h-18 flex flex-row w-full overflow-x-auto no-scrollbar space-x-1 lg:space-x-6 xl:space-x-10 whitespace-nowrap text-xxs md:text-xxs lg:text-md xl:text-sm font-medium"
                  aria-label="Tabs"
                >
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Markets
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Finance
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Policy
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    DeFi
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Business
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Web3
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Opinion
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    People
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Podcast
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Sponsored
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Analysis
                  </span>
                  <span className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer">
                    Education
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0 md:mt-6 lg:mt-12 grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          <div className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full">
            <a
              className="cursor-pointer"
              href="/news/bitcoin-bull-markets-comparison"
            >
              <img
                alt="article-image"
                loading="lazy"
                width="768"
                height="432"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                srcSet=""
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ color: "transparent" }}
              />
            </a>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-primary gap-2">
                <a href="/category/markets">Markets</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <a
                className="font-headline flex-grow text-base font-semibold leading-snug hover:text-primary"
                href="/news/bitcoin-bull-markets-comparison"
              >
                How this bitcoin bull market stacks up against the others
              </a>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
                Bitcoin has been in a bull market for 19 months. If March wasn’t
                the top, that is.
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-1 text-xxs">
              <div className="flex flex-wrap gap-1 uppercase">
                by{" "}
                <span>
                  <a className="link-gray" href="/author/david-canellis">
                    David Canellis
                  </a>
                </span>
                <span> /</span>
              </div>
              <div className="flex justify-start items-start relative gap-1 uppercase">
                <time>June 24, 2024</time>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full">
            <a
              className="cursor-pointer"
              href="/news/riot-nominates-bitfarms-board-directors-takeover"
            >
              <img
                alt="article-image"
                loading="lazy"
                width="768"
                height="432"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                srcSet=""
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ color: "transparent" }}
              />
            </a>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-primary gap-2">
                <a href="/category/business">Business</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <a
                className="font-headline flex-grow text-base font-semibold leading-snug hover:text-primary"
                href="/news/riot-nominates-bitfarms-board-directors-takeover"
              >
                Riot nominates directors for Bitfarms board as part of takeover
                saga
              </a>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
                Colorado-based miner is still “completely committed to pursuing
                a transaction” with its Canadian competitor after deal rejection{" "}
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-1 text-xxs">
              <div className="flex flex-wrap gap-1 uppercase">
                by{" "}
                <span>
                  <a className="link-gray" href="/author/benstrack">
                    Ben Strack
                  </a>
                </span>
                <span> /</span>
              </div>
              <div className="flex justify-start items-start relative gap-1 uppercase">
                <time>June 24, 2024</time>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full">
            <a
              className="cursor-pointer"
              href="/news/empire-newsletter-summer-market-madness"
            >
              <img
                alt="article-image"
                loading="lazy"
                width="768"
                height="432"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                srcSet=""
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ color: "transparent" }}
              />{" "}
            </a>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-primary gap-2">
                <a href="/category/analysis">Analysis</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <a
                className="font-headline flex-grow text-base font-semibold leading-snug hover:text-primary"
                href="/news/empire-newsletter-summer-market-madness"
              >
                Empire Newsletter: Market madness arrives just in time for
                summer
              </a>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
                Plus, Hashkey OTC’s head of trading tells us what traders are
                watching as the pullback continues
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-1 text-xxs">
              <div className="flex flex-wrap gap-1 uppercase">
                by{" "}
                <span>
                  <a className="link-gray" href="/author/katherine-ross">
                    Katherine Ross
                  </a>
                  <span className="ml-1">&amp;</span>
                </span>
                <span>
                  <a className="link-gray" href="/author/david-canellis">
                    David Canellis
                  </a>
                </span>
                <span> /</span>
              </div>
              <div className="flex justify-start items-start relative gap-1 uppercase">
                <time>June 24, 2024</time>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full">
            <a
              className="cursor-pointer"
              href="/news/ethereum-altcoin-etf-sec-gensler"
            >
              <img
                alt="article-image"
                loading="lazy"
                width="768"
                height="432"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                srcSet=""
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ color: "transparent" }}
              />
            </a>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-primary gap-2">
                <a href="/category/opinion">Opinion</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <a
                className="font-headline flex-grow text-base font-semibold leading-snug hover:text-primary"
                href="/news/ethereum-altcoin-etf-sec-gensler"
              >
                Don’t hold your breath for an altcoin ETF
              </a>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
                Despite the approval of the Ethereum ETF, a flurry of approvals
                for other altcoin ETFs is highly unlikely anytime soon
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-1 text-xxs">
              <div className="flex flex-wrap gap-1 uppercase">
                by{" "}
                <span>
                  <a className="link-gray" href="/author/nikita-ovchinnik">
                    Nikita Ovchinnik
                  </a>
                </span>
                <span> /</span>
              </div>
              <div className="flex justify-start items-start relative gap-1 uppercase">
                <time>June 24, 2024</time>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full">
            <a
              className="cursor-pointer"
              href="/news/bondex-gamifies-recruiting-with-web3-blockchain"
            >
              <img
                alt="article-image"
                loading="lazy"
                width="768"
                height="432"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                srcSet=""
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ color: "transparent" }}
              />
            </a>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-primary gap-2">
                <a href="/category/business">Business</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <a
                className="font-headline flex-grow text-base font-semibold leading-snug hover:text-primary"
                href="/news/bondex-gamifies-recruiting-with-web3-blockchain"
              >
                Funding Roundup: A Web3 recruiting network announces $10M raise
              </a>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
                Bondex, which seeks to gamify recruiting, announced a $10
                million raise across rounds
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-1 text-xxs">
              <div className="flex flex-wrap gap-1 uppercase">
                by{" "}
                <span>
                  <a className="link-gray" href="/author/katherine-ross">
                    Katherine Ross
                  </a>
                </span>
                <span> /</span>
              </div>
              <div className="flex justify-start items-start relative gap-1 uppercase">
                <time>June 23, 2024</time>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full">
            <a
              className="cursor-pointer"
              href="/news/former-blackrock-exec-joins-21shares"
            >
              {" "}
              <img
                alt="article-image"
                loading="lazy"
                width="768"
                height="432"
                decoding="async"
                data-nimg="1"
                className="w-full h-auto"
                srcSet=""
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ color: "transparent" }}
              />{" "}
            </a>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
              <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-primary gap-2">
                <a href="/category/business">Business</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <a
                className="font-headline flex-grow text-base font-semibold leading-snug hover:text-primary"
                href="/news/former-blackrock-exec-joins-21shares"
              >
                Crypto Hiring: Former BlackRock leader jumps ship to 21Shares
              </a>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
                Firm’s hire comes as it looks to further expand its US crypto
                ETF lineup{" "}
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-1 text-xxs">
              <div className="flex flex-wrap gap-1 uppercase">
                by{" "}
                <span>
                  <a className="link-gray" href="/author/benstrack">
                    Ben Strack
                  </a>
                </span>
                <span> /</span>
              </div>
              <div className="flex justify-start items-start relative gap-1 uppercase">
                <time>June 23, 2024</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
