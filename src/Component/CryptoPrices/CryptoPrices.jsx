import React, { useEffect, useState } from "react";
import axios from "axios";
import Newsletter from "../Newsletter/Newsletter";
import { Link } from "react-router-dom";
import Section2 from "./../HomePage/Section2";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 80,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        setError("Failed to fetch cryptocurrency data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1e12) {
      return `$ ${(num / 1e12).toFixed(2)}T`;
    } else if (num >= 1e9) {
      return `$ ${(num / 1e9).toFixed(2)}B`;
    } else if (num >= 1e6) {
      return `$ ${(num / 1e6).toFixed(2)}M`;
    } else {
      return `$ ${num.toLocaleString()}`;
    }
  };
  console.log(cryptoData);
  return (
    <>
      <section className="flex flex-row flex-wrap xl:flex-nowrap overflow-hidden">
        <div className="border-r  w-full">
          <div className="h-full p-0 xl:border-r border-b xl:border-b-0">
            <div className="flex flex-col gap-4 border-b p-6 lg:p-10">
              <nav aria-label="breadcrumb">
                <ol className="flex flex-row gap-2 text-[#5637CD] uppercase text-sm text-left">
                  <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                    <Link to="/">home</Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="w-3 h-3 ml-2"
                    >
                      <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                  </li>

                  <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                    <Link to={`/Price`}>Prices</Link>
                  </li>
                </ol>
              </nav>
              <div>
                <h1 className="self-stretch flex-grow-0 flex-shrink-0 w-full text-5xl font-semibold text-left text-[#110b29] capitalize py-4">
                  Today's Cryptocurrency Prices by Market Cap
                </h1>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xl text-left text-[#110b29]">
                  The global crypto market cap is $2.38T, a 6.03% increase over
                  the last day.
                </p>
              </div>
              <div className="mt-12 grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"></div>
            </div>
            {/* table of crypto */}
            <div className="p-6 overflow-x-auto">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        # Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        1h
                      </th> */}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        24h
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Volume (24h)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Market Cap
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cryptoData.map((crypto) => (
                      <tr key={crypto.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {crypto.market_cap_rank}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap overflow-hidden w-[10%]">
                          <div className="flex items-center">
                            <div className="pt-2 h-30 w-30">
                              <img
                                alt=""
                                loading="lazy"
                                className="w=full h-7 mr-2"
                                src={crypto.image}
                              />
                            </div>
                            <div className="ml-4 mr-8 flex-shrink-0 2xl:mr-0">
                              <div>
                                <span className="text-sm font-semibold text-dark">
                                  {crypto.name}
                                </span>
                              </div>
                              <div className="-mt-0.5 text-sm text-gray-600 flex uppercase">
                                <span className="font-normal text-xs text-gray-600 leading-5 mr-2 rounded-md bg-gray-100 px-1.5 lg:hidden">
                                  1
                                </span>
                                {crypto.symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${crypto.current_price.toLocaleString()}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap ${
                            crypto.price_change_percentage_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {crypto.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatNumber(crypto.market_cap_change_24h)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatNumber(crypto.market_cap)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-col w-full xl:w-96 h-full border-t md:border-t-0">
          <div className="w-full">
            <Newsletter />
          </div>
          <div className="lg:p-6 lg:pb-12 w-full overflow-hidden relative lg:sticky top-8 justify-center text-center align-middle border-t md:border-t-0 xl:border-t">
            <img src="\Tojo-News-Logo-300px.png" alt="" />
          </div>
        </div>
      </section>
      <Section2 />
    </>
  );
};

export default CryptoPrices;
