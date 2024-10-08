import { useContext, useEffect, useState } from "react";
import { FaArrowRightLong, FaSpinner } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticalCard from "../Artical/ArticalCard";
import { AppContext } from "../../AppContext";

const Section2 = () => {
  const { state } = useContext(AppContext);
  // state
  const [displayText, setDisplayText] = useState(3);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogposts, setBlogposts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch authors and categories
  useEffect(() => {
    const fetchAuthorsAndCategories = async () => {
      try {
        const [categoryResponse] = await Promise.all([
          axios.get(`${state.port}/api/admin/newsCategory`),
        ]);

        if (categoryResponse.data.Status) {
          setCategories(categoryResponse.data.Result);
        } else {
          setErrorMessage("Failed to fetch authors or categories");
        }
      } catch (err) {
        console.error("Error fetching authors or categories:", err);
      }
    };

    fetchAuthorsAndCategories();
  }, []);

  // Fetch blog posts
  useEffect(() => {
    axios
      .get(`${state.port}/api/admin/blogpost`)
      .then((result) => {
        if (result.data.Status) {
          setBlogposts(result.data.Result);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTextClick = (categoryId) => {
    setDisplayText(categoryId);
  };

  const handleSelectChange = (event) => {
    const selectedText = event.target.value;
    const selectedNumber = Number(selectedText);
    setDisplayText(selectedNumber);
  };

  useEffect(() => {
    setLoading(true);
    const matchProduct = blogposts.filter(
      (article) => article.category_id === displayText
    );
    setArticles(matchProduct.slice(0, 6)); // Limit to 6 articles
    setLoading(false);
  }, [displayText, blogposts]);

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
                className="block w-full capitalize pl-3 pr-10 py-2 text-base border-gray-500 focus:outline-none focus:ring-[#5637CD] focus:border-[#5637CD] sm:text-sm rounded-md"
                onChange={handleSelectChange}
                value={displayText}
              >
                {categories.map((cat) => (
                  <option key={cat.ID} value={cat.ID}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Tablet to desktop device menu bar */}
            <div className="hidden md:block">
              <div className="border-b border-gray-200">
                <nav
                  className="-mb-px absolute px-8 left-0 right-0 h-18 flex flex-row w-full overflow-x-auto no-scrollbar space-x-1 lg:space-x-6 xl:space-x-10 whitespace-nowrap text-xs md:text-xs lg:text-md xl:text-sm font-medium"
                  aria-label="Tabs"
                >
                  {categories.map((cat) => (
                    <span
                      key={cat.ID}
                      className="border-transparent hover:text-gray-700 hover:border-gray-300 pt-4 pb-6 px-1 border-b-2 cursor-pointer"
                      onClick={() => handleTextClick(cat.ID)}
                    >
                      {cat.name}
                    </span>
                  ))}
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
              <ArticalCard key={index} BlogData={article} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Section2;
