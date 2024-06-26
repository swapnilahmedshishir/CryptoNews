import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="flex flex-row flex-wrap xl:flex-nowrap overflow-hidden divide-x">
      {/* frist part Start */}
      <div className="order-2 lg:order-1 h-full w-full lg:basis-1/3 xl:basis-1/4">
        <div className="gap-2.5 px-10 py-5 border-b w-full">
          <p className="text-xs uppercase font-semibold">
            <a href="/news">latest news</a>
          </p>
        </div>
        <div className="gap-10 px-10 py-5 divide-y divide-gray-200 w-full">
          <section className="flex gap-3 py-5 w-full">
            <div className="item-center py-1.5 w-1/12 flex">
              <p className="text-xs uppercase text-primary">8h</p>
            </div>
            <div className="flex items-center w-11/12">
              <Link to="/">
                <span className="text-sm font-semibold font-headline visited:text-gray-700 hover:text-primary whitespace-normal">
                  On the Margin Newsletter: How low BTC’s price might go after
                  Monday’s dip
                </span>
              </Link>
            </div>
          </section>
        </div>
      </div>
      {/* secdond Part Start */}
      <div className="order-1 lg:order-2 lg:basis-2/3 xl:basis-1/2 h-full">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="hidden sm:flex gap-2.5 px-4 md:px-10 py-5 border-b border-gray-200 w-full">
            <p className="text-xs uppercase font-semibold">featured</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4 md:gap-6 lg:gap-10 px-4 md:px-10 py-4 md:py-6 lg:py-8">
            {/* ======== */}
            <div className="flex flex-col justify-center items-start self-stretch gap-3">
              <div className="flex flex-col justify-start items-start self-stretch gap-2">
                <div className="flex justify-start items-center relative gap-1">
                  <p>
                    <Link to="/" className="text-primary text-xs uppercase">
                      Analysis
                    </Link>
                  </p>
                </div>
                <div className="gap-2.5 font-headline">
                  <Link
                    to="/"
                    className="flex-grow text-2xl md:text-3xl xl:text-4xl leading-snug hover:text-primary"
                  >
                    On the Margin Newsletter: How low BTC’s price might go after
                    Monday’s dip
                  </Link>
                </div>
                <div className="gap-2.5">
                  <p className="text-gray-500">
                    Plus, an update on the ether ETF front and an overview of
                    this week’s economic calendar
                  </p>
                </div>
                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by
                    <span>
                      <a className="link-gray" href="/author/benstrack">
                        Ben Strack
                      </a>
                      <span className="ml-1">&amp;</span>
                    </span>
                    <span>
                      <a className="link-gray" href="/author/casey-wagner">
                        Casey Wagner
                      </a>
                    </span>
                    <span></span>
                  </div>
                </div>
                <div className="mt-0.5 w-full">
                  <Link to="/" className="cursor-pointer">
                    <img
                      alt="article-image"
                      fetchPriority="high"
                      width="768"
                      height="432"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-auto"
                      style={{ color: "transparent" }}
                      src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      srcSet=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* ==== */}
            <div className="flex justify-center items-start self-stretch gap-3">
              <div className="justify-start items-center flex-grow gap-2 w-full">
                <div className="gap-1">
                  <p className="flex gap-2 flex-grow">
                    <Link
                      className="text-primary text-xs uppercase"
                      to="/category/business"
                    >
                      Business
                    </Link>
                  </p>
                </div>
                <div className="mt-1 gap-2.5">
                  <Link
                    className="flex-grow text-lg md:text-xl xl:text-2xl font-headline hover:text-primary"
                    to="/news/riot-nominates-bitfarms-board-directors-takeover"
                  >
                    Riot nominates directors for Bitfarms board as part of
                    takeover saga
                  </Link>
                </div>
                <div className="mt-1 gap-2.5 text-gray-500">
                  Colorado-based miner is still “completely committed to
                  pursuing a transaction” with its Canadian competitor after
                  deal rejection
                </div>
                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
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
            </div>
            {/* ===== */}
            <div className="flex flex-col lg:flex-row justify-start items-start self-stretch gap-4 md:gap-6 lg:gap-10">
              <div className="justify-start items-center flex-grow gap-2 w-full">
                <Link
                  className="cursor-pointer"
                  to="/news/lightspeed-newsletter-solana-permissioned-environments-institutions"
                >
                  <img
                    alt="article-image"
                    loading="lazy"
                    width="560"
                    height="315"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-auto mb-2"
                    style={{ color: "transparent" }}
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </Link>
                <div className="gap-1">
                  <p className="flex gap-2 flex-grow">
                    <Link
                      className="text-primary text-xs uppercase"
                      to="/category/analysis"
                    >
                      Analysis
                    </Link>
                  </p>
                </div>
                <div className="mt-1 gap-2.5">
                  <Link
                    className="flex-grow text-lg md:text-xl xl:text-2xl font-headline hover:text-primary"
                    to="/news/lightspeed-newsletter-solana-permissioned-environments-institutions"
                  >
                    Lightspeed Newsletter: Solana Permissioned Environments may
                    help court institutions
                  </Link>
                </div>

                <div className="mt-1 gap-2.5 text-gray-500">
                  Plus, Solana fell roughly 12% on the week, and for some
                  memecoins the drawdown was even more aggressive
                </div>

                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by{" "}
                    <span>
                      <Link className="link-gray" to="/author/jack-kubinec">
                        Jack Kubinec
                      </Link>
                      <span className="ml-1">&amp;</span>
                    </span>
                    <span>
                      <Link className="link-gray" to="/author/jeffrey-albus">
                        Jeff Albus
                      </Link>
                    </span>
                    <span> /</span>
                  </div>
                  <div className="flex justify-start items-start relative gap-1 uppercase">
                    <time>June 24, 2024</time>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center flex-grow gap-2 w-full">
                <Link
                  className="cursor-pointer"
                  to="/news/lightspeed-newsletter-solana-permissioned-environments-institutions"
                >
                  <img
                    alt="article-image"
                    loading="lazy"
                    width="560"
                    height="315"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-auto mb-2"
                    style={{ color: "transparent" }}
                    srcSet=""
                    src="https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F06%2Fbtc-green.jpg&w=768&q=60"
                  />
                </Link>
                <div className="gap-1">
                  <p className="flex gap-2 flex-grow">
                    <Link
                      className="text-primary text-xs uppercase"
                      to="/category/analysis"
                    >
                      Analysis
                    </Link>
                  </p>
                </div>
                <div className="mt-1 gap-2.5">
                  <Link
                    className="flex-grow text-lg md:text-xl xl:text-2xl font-headline hover:text-primary"
                    to="/news/lightspeed-newsletter-solana-permissioned-environments-institutions"
                  >
                    Lightspeed Newsletter: Solana Permissioned Environments may
                    help court institutions
                  </Link>
                </div>

                <div className="mt-1 gap-2.5 text-gray-500">
                  Plus, Solana fell roughly 12% on the week, and for some
                  memecoins the drawdown was even more aggressive
                </div>

                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by{" "}
                    <span>
                      <Link className="link-gray" to="/author/jack-kubinec">
                        Jack Kubinec
                      </Link>
                      <span className="ml-1">&amp;</span>
                    </span>
                    <span>
                      <Link className="link-gray" to="/author/jeffrey-albus">
                        Jeff Albus
                      </Link>
                    </span>
                    <span> /</span>
                  </div>
                  <div className="flex justify-start items-start relative gap-1 uppercase">
                    <time>June 24, 2024</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third part start */}
      <div className="xl:basis-1/4 order-3">
        <div className="flex flex-col md:flex-row xl:flex-col border-t border-gray-200 xl:border-0 items-baseline md:items-stretch xl:items-baseline self-stretch">
          <div className="w-full md:w-1/2 xl:w-full flex flex-col md:flex-col-reverse xl:flex-col bg-white border-gray-200 grow border-b md:border-b-0 md:border-t-1 xl:border-t-0 xl:border-b border-r-0">
            <div className="flex justify-between items-start relative px-10 py-5 border-b border-gray-200 w-full">
              <p className="text-xs uppercase font-semibold">Key metrics</p>
            </div>

            <div className="flex flex-col justify-center items-center self-stretch px-10 pt-5 pb-10">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        <a className="hover:text-primary" href="/prices">
                          Total Crypto Market Cap
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">
                        <a href="/prices">$2.65 T</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        <a className="hover:text-primary" href="/price/btc">
                          Bitcoin Market Cap
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">
                        <a href="/price/btc">$1.32 T</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        <a className="hover:text-primary" href="/price/eth">
                          Ethereum Market Cap
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">
                        <a href="/price/eth">$421.48 B</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        ETH/BTC Ratio
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">0.05</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        Ethereum Gas Price
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">5 gwei</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">DeFi TVL</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">
                        $183.99 B
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        Fear and Greed Index
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">
                        30 (Fear)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        Federal Reserve Balance Sheet
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-primary">$7.25 T</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-4 p-10 border-t md:border-t-0 xl:border-t md:grow xl:shrink md:justify-center grow items-center flex flex-col">
              <div className="flex flex-col justify-start items-start self-stretch gap-2">
                <div className="flex justify-start items-center self-stretch relative gap-1">
                  <p className="flex-grow text-xs uppercase text-primary">
                    <a href="/newsletter">Newsletter</a>
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch relative gap-2.5">
                  <p className="flex-grow text-[22px] text-left">
                    <a href="/newsletter/daily">Blockworks Daily</a>
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch relative gap-2.5">
                  <p className="flex-grow text-sm text-light-gray cursor-default">
                    Get the daily newsletter that helps thousands of investors
                    understand the markets.
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-start items-center self-stretch mt-2">
                  <div className="self-stretch flex-grow bg-white">
                    <input type="hidden" name="verification" value="" />
                    <input
                      className="flex justify-start items-start w-full text-light-gray focus:text-black border focus:outline-none border-r-0 border-gray-200 focus:border-primary p-2 text-xs"
                      placeholder="Email address"
                      value=""
                    />
                  </div>
                  <button className="flex justify-start items-center gap-1 border border-transparent cursor-pointer border-l-0 bg-violet-600 hover:border-gray-800 hover:bg-gray-700 px-4 py-2 text-xs">
                    <span className="text-center uppercase text-white">
                      subscribe
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start self-stretch bg-white border-l xl:border-l-0 md:w-1/2 xl:w-full">
            <div className="flex flex-col justify-start items-start gap-3 w-full p-10">
              <div className="flex flex-col justify-start self-stretch gap-2">
                <div className="min-h-[100px]">
                  <a
                    href="https://app.blockworksresearch.com/research/polygon-protocol-governance-call-ppgc-21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Polygon Call Template (2).png"
                      loading="eager"
                      width="384"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-auto"
                      sizes="(min-width: 60em) 300px, (min-width: 28em) 150px"
                      srcSet="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
                <div className="flex justify-start items-center self-stretch gap-1">
                  <p className="flex-grow text-xs uppercase text-primary">
                    Research
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch gap-2.5">
                  <a
                    href="https://app.blockworksresearch.com/research/polygon-protocol-governance-call-ppgc-21"
                    target="_blank"
                    className="flex-grow text-[22px] font-headline hover:text-primary"
                    rel="noreferrer"
                  >
                    Polygon Protocol Governance Call (PPGC) #21
                  </a>
                </div>
                <div className="flex justify-start items-start self-stretch gap-2.5">
                  <p className="flex-grow text-base text-left text-[#6a6a6a]">
                    A significant portion of the call was dedicated to
                    discussing the proposed ZK-PoS Phase 1, which aims to
                    connect Polygon PoS to the AggLayer using a ZK proof of
                    consensus, in addition to a pessimistic proof. This upgrade
                    is intended to generalize how chains settle while protecting
                    chain health and asset integrity. The implementation will
                    involve deploying new contracts for the LxLy unified bridge
                    for token mapping and migrating existing tokens from the PoS
                    portal to the new deployment.
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch gap-1">
                  <div className="flex justify-start items-start relative">
                    <p className="text-xs uppercase text-light-gray">
                      by{" "}
                      <a
                        href="https://app.blockworksresearch.com/team/boccaccio"
                        className="text-primary hover:text-dark"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Boccaccio
                      </a>
                    </p>
                  </div>
                  <div className="flex justify-start items-start gap-1">
                    <p className="text-xs uppercase text-light-gray">/</p>
                    <p className="text-xs uppercase text-light-gray">
                      <time >
                        18 hours ago
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
