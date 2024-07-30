import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticleCard from "../Artical/ArticalCard";
import Newsletter from "./../Newsletter/Newsletter";
import { Link, useParams } from "react-router-dom";

const CategoryNews = () => {
  const { categoryName } = useParams();

  const [blogposts, setBlogposts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryID, setCategoryID] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/newsCategory"
        );
        if (response.data.Status) {
          setCategories(response.data.Result);
          const category = response.data.Result.find(
            (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
          );
          if (category) {
            setCategoryID(category.ID);
          } else {
            setErrorMessage("Category not found");
          }
        } else {
          setErrorMessage("Failed to fetch categories");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setErrorMessage("Error fetching categories");
      }
    };

    fetchCategories();
  }, [categoryName]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/blogpost"
        );
        if (response.data.Status) {
          setBlogposts(response.data.Result);
        } else {
          setErrorMessage(response.data.Error);
        }
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setErrorMessage("Error fetching blog posts");
      }
    };

    fetchBlogPosts();
  }, []);

  const filteredBlogPosts = blogposts.filter(
    (post) => post.category_id === categoryID
  );

  return (
    <section className="flex flex-col lg:flex-row flex-wrap md:flex-nowrap">
      <div className="p-6 lg:p-12 border-b xl:border-none w-full lg:w-8/12 xl:w-9/12">
        <nav aria-label="breadcrumb">
          <ol className="flex flex-row gap-2  text-[#5637CD] uppercase text-sm text-left">
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
            {/* <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
              <Link to="/news">News</Link>
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
            </li> */}
            <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
              <Link to={`/category/${categoryName}`}>{categoryName}</Link>
            </li>
          </ol>
        </nav>
        <div>
          <h1 className="self-stretch flex-grow-0 flex-shrink-0 w-full text-5xl font-semibold text-left text-[#110b29] capitalize py-4 text-center">
            {categoryName}
          </h1>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xl text-left text-[#110b29]">
            Markets are volatile with everyone rushing to get their hands on the
            latest, greatest cryptocurrency. Get ahead of the pack with Tojo
            News premium insights.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredBlogPosts.map((article, index) => (
            <ArticleCard key={index} BlogData={article} />
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {!filteredBlogPosts.length && !loading && (
          <p>No articles found in this category</p>
        )}
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col border-l items-baseline self-stretch flex-1">
        <div className="w-full">
          <Newsletter />
        </div>
        <div className="lg:p-6 lg:pb-12 w-full overflow-hidden relative lg:sticky top-8 justify-center text-center align-middle border-t md:border-t-0 xl:border-t">
          <img src="\Tojo-News-Logo-300px.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CategoryNews;
