import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsNav from "../../Navbars/NewsNav";
import axios from "axios";

const FristPart = () => {
  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogpost, setBlogpost] = useState([]);

  // fetch data
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/blogpost")
      .then((result) => {
        if (result.data.Status) {
          const posts = result.data.Result;
          const filteredPosts = posts.filter((post) => {
            const postDate = new Date(post.dateAndTime);
            const now = new Date();
            const timeDiff = now - postDate;
            const hoursDiff = timeDiff / (1000 * 60 * 60);
            return hoursDiff <= 24;
          });
          const slicedPosts = filteredPosts.slice(0, 6);
          setBlogpost(slicedPosts);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="order-2 lg:order-1 h-full w-full lg:basis-1/3 xl:basis-1/4">
        <div className="flex flex-row justify-between gap-2.5 px-10 py-5 border-b w-full">
          <p className="text-xs uppercase font-semibold">
            <a href="/news">latest news</a>
          </p>
          <NewsNav />
        </div>

        <div className="gap-10 px-10 py-5 divide-y divide-gray-200 w-full">
          {blogpost.length > 0 ? (
            blogpost.map((blog, index) => (
              <section className="flex gap-3 py-5 w-full" key={index}>
                <div className="item-center py-1.5 w-1/12 flex">
                  <p className="text-xs uppercase text-[#5637CD]">
                    {Math.round(
                      (new Date() - new Date(blog.dateAndTime)) /
                        (1000 * 60 * 60)
                    )}
                    h
                  </p>
                </div>
                <div className="flex items-center w-11/12">
                  <Link
                    to={
                      blog.title
                        ? `/news/${blog.title
                            .replaceAll(/ /g, "-")
                            .toLowerCase()}`
                        : "/fallback-url"
                    }
                  >
                    <span className="text-sm font-semibold font-headline visited:text-gray-700 hover:text-[#5637CD] whitespace-normal">
                      {blog.title}
                    </span>
                  </Link>
                </div>
              </section>
            ))
          ) : (
            <p>No latest news in the last 24 hours</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FristPart;
