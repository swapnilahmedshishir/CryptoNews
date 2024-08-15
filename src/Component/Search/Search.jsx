import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../Artical/ArticalCard";
import { AppContext } from "../../AppContext";

const Search = () => {
  const { state } = useContext(AppContext);
  // State for blog posts, search query, loading, and error message
  const [blogposts, setBlogposts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch data based on search query
  const fetchData = async (query) => {
    try {
      setLoading(true);
      setErrorMessage(null);
      const url = query
        ? `${state.port}/api/admin/blogpost?title=${query}`
        : `${state.port}/api/admin/blogpost`;
      const result = await axios.get(url);

      if (result.data.Status) {
        setBlogposts(result.data.Result);
      } else {
        setErrorMessage(result.data.Error);
      }
    } catch (err) {
      console.log("Error fetching data:", err);
      setErrorMessage("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full flex-col">
      <div className="flex p-6 md:p-10 lg:p-12 bg-gray-50">
        <div className="mx-auto w-full lg:w-[80%]">
          <input
            id="blockworks-search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className="w-full min-w-0 appearance-none rounded-none border border-gray-200 hover:border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-300 focus:border-[#5637CD] focus:outline-none focus:ring-1 focus:ring-[#5637CD]"
          />
        </div>
      </div>

      <div className="p-8">
        {loading ? (
          <div>
            <img
              src="/Images/Animation - 1721126240515.gif"
              alt="data loading time gif"
              className="w-auto h-60"
            />
            <span className="px-24"> Loading...</span>
          </div>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {blogposts.length > 0 ? (
              blogposts
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(search);
                })
                .map((post) => <ArticleCard key={post.ID} BlogData={post} />)
            ) : (
              <h4>No data found</h4>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
