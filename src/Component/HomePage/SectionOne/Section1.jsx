import Newsletter from "../../Newsletter/Newsletter";
import FristPart from "./FristPart";
import SecondPart from "./SecondPart";

const Section1 = () => {
  return (
    <section className="flex flex-row flex-wrap xl:flex-nowrap overflow-hidden divide-x">
      {/* frist part Start */}
      <FristPart />
      {/* second Part Start */}
      <SecondPart />

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
                        <a className="hover:text-[#5637CD]" href="/prices">
                          Total Crypto Market Cap
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-[#5637CD]">
                        <a href="/prices">$2.65 T</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        <a className="hover:text-[#5637CD]" href="/price/btc">
                          Bitcoin Market Cap
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-[#5637CD]">
                        <a href="/price/btc">$1.32 T</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-center flex-grow h-8 pr-2 max-w-sm">
                    <div className="flex justify-start items-start flex-grow relative gap-2.5">
                      <p className="flex-grow text-sm text-left">
                        <a className="hover:text-[#5637CD]" href="/price/eth">
                          Ethereum Market Cap
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center h-8">
                    <div className="flex justify-start items-center flex-grow relative gap-1 text-right">
                      <p className="flex-grow text-sm text-[#5637CD]">
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
                      <p className="flex-grow text-sm text-[#5637CD]">0.05</p>
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
                      <p className="flex-grow text-sm text-[#5637CD]">5 gwei</p>
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
                      <p className="flex-grow text-sm text-[#5637CD]">
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
                      <p className="flex-grow text-sm text-[#5637CD]">
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
                      <p className="flex-grow text-sm text-[#5637CD]">
                        $7.25 T
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News Letter Email */}
            <Newsletter />
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
                  <p className="flex-grow text-xs uppercase text-[#5637CD]">
                    Research
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch gap-2.5">
                  <a
                    href="https://app.blockworksresearch.com/research/polygon-protocol-governance-call-ppgc-21"
                    target="_blank"
                    className="flex-grow text-[22px] font-headline hover:text-[#5637CD]"
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
                        className="text-[#5637CD] hover:text-dark"
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
                      <time>18 hours ago</time>
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
