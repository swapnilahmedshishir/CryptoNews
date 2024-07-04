import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import fackData from "../../Fackdate/News/donationNews.json";
import { FaSpinner } from "react-icons/fa";

const Section2 = () => {
  const [displayText, setDisplayText] = useState("defi");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTextClick = (event) => {
    const buttonText = event.target.textContent;
    setDisplayText(buttonText);
  };

  const handleSelectChange = (event) => {
    const selectedText = event.target.value;
    setDisplayText(selectedText);
  };

  useEffect(() => {
    setLoading(true);
    const matchProduct = fackData.articles.filter(
      (article) => article.topic.toLowerCase() === displayText.toLowerCase()
    );
    setArticles(matchProduct.slice(0, 6)); // Limit to 6 articles
    setLoading(false);
  }, [displayText]);

  console.log(fackData);

  return (
    <section>
      <div className="md:mt-0 md:flex md:justify-between md:items-center w-full px-10 py-5 border-b border-t">
        <div className="flex justify-start items-center gap-3">
          <div className="relative">
            <h2 className="text-base uppercase text-dark font-semibold">
              <Link to="/news">news</Link>
            </h2>
          </div>
          <div className="hidden md:flex justify-start items-start text-center md:text-left relative gap-2.5">
            <p className="text-light-gray">
              Breaking headlines across our core coverage categories.
            </p>
          </div>
        </div>
        <div>
          <Link
            className="text-sm text-center md:text-left uppercase text-[#5637CD]"
            to="/news"
          >
            <span className="flex align-middle">
              more from news
              <FaArrowRightLong className="ml-1 mt-1" width="8" height="4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5 px-10 pb-5 w-full">
        <div>
          <div className="uppercase py-8 lg:py-4">
            {/* Mobile to tablet device menu bar */}
            <div className="md:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                onChange={handleSelectChange}
                value={displayText}
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
            {/* Tablet to desktop device menu bar */}
            <div className="hidden md:block">
              <div className="border-b border-gray-200">
                <nav
                  className="-mb-px absolute px-8 left-0 right-0 h-18 flex flex-row w-full overflow-x-auto no-scrollbar space-x-1 lg:space-x-6 xl:space-x-10 whitespace-nowrap text-xs md:text-xs lg:text-md xl:text-sm font-medium"
                  aria-label="Tabs"
                >
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Markets
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Finance
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Policy
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    DeFi
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Business
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Web3
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Opinion
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    People
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Podcast
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Sponsored
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Analysis
                  </span>
                  <span
                    className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                    onClick={handleTextClick}
                  >
                    Education
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Articles section */}
        <div className="mt-0 md:mt-6 lg:mt-12 grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {loading ? (
            <div className="flex justify-center items-center w-full">
              <FaSpinner className="animate-spin text-3xl" />
            </div>
          ) : (
            articles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full"
              >
                <Link className="cursor-pointer" to={`/news/${article.slug}`}>
                  <img
                    alt="article-image"
                    loading="lazy"
                    width="768"
                    height="432"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-auto"
                    src={article.media}
                    // src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ color: "transparent" }}
                  />
                </Link>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
                  <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-[#5637CD] gap-2">
                    <Link to={`/category/${article.topic.toLowerCase()}`}>
                      {article.topic}
                    </Link>
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                  <Link
                    className="font-headline flex-grow text-base font-semibold leading-snug hover:text-[#5637CD]"
                    to={`/news/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                  <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
                    {article.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-start items-start gap-1 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by{" "}
                    <span>
                      <Link
                        className="link-gray"
                        to={`/author/${article.author
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {article.author}
                      </Link>
                    </span>
                    <span> /</span>
                  </div>
                  <div className="flex justify-start items-start relative gap-1 uppercase">
                    <time>{article.date}</time>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Section2;
