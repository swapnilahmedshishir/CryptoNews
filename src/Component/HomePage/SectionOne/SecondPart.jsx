import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SecondPart = () => {
  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogposts, setBlogposts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featureOnePost, setFeatureOnePost] = useState({});
  const [featureTwoPost, setFeatureTwoPost] = useState({});
  const [featureThreePost, setFeatureThreePost] = useState({});
  const [featureFourPost, setFeatureFourPost] = useState({});
  const [featureFivePost, setFeatureFivePost] = useState({});

  // Fetch authors and categories
  useEffect(() => {
    const fetchAuthorsAndCategories = async () => {
      try {
        const [authorResponse, categoryResponse] = await Promise.all([
          axios.get("http://localhost:8080/api/admin/author"),
          axios.get("http://localhost:8080/api/admin/newsCategory"),
        ]);

        if (authorResponse.data.Status && categoryResponse.data.Status) {
          setAuthors(authorResponse.data.Result);
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
      .get("http://localhost:8080/api/admin/blogpost")
      .then((result) => {
        if (result.data.Status) {
          const posts = result.data.Result;
          const filteredPosts = posts.filter((post) => {
            const postDate = new Date(post.dateAndTime);
            const now = new Date();
            const timeDiff = now - postDate;
            const hoursDiff = timeDiff / (1000 * 60 * 60);
            return hoursDiff <= 96;
          });
          setBlogposts(filteredPosts);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Map authors and categories to posts
  useEffect(() => {
    if (blogposts.length > 0 && authors.length > 0 && categories.length > 0) {
      const mapAuthorAndCategory = (post) => {
        const category =
          categories.find((cat) => cat.ID === post.category_id)?.name || "";
        const authorOne =
          authors.find((author) => author.ID === post.author1_id)?.name || "";
        const authorTwo =
          authors.find((author) => author.ID === post.author2_id)?.name || "";
        return { ...post, category, authorOne, authorTwo };
      };

      const mappedPosts = blogposts.map(mapAuthorAndCategory);
      const randomSlices = (array, size) =>
        array.sort(() => 0.5 - Math.random()).slice(0, size);
      const [postOne, postTwo, postThree, postFour, postFive] = randomSlices(
        mappedPosts,
        5
      );

      setFeatureOnePost(postOne);
      setFeatureTwoPost(postTwo);
      setFeatureThreePost(postThree);
      setFeatureFourPost(postFour);
      setFeatureFivePost(postFive);
    }
  }, [blogposts, authors, categories]);

  //   formate Date and time
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const options = { month: "long", day: "2-digit", year: "numeric" };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .toUpperCase();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="order-1 lg:order-2 lg:basis-2/3 xl:basis-1/2 h-full">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
        <div className="hidden sm:flex gap-2.5 px-4 md:px-10 py-5 border-b border-gray-200 w-full">
          <p className="text-xs uppercase font-semibold">featured</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 md:gap-6 lg:gap-10 px-4 md:px-10 py-4 md:py-6 lg:py-8">
          {/* === first featured post === */}
          {featureOnePost && (
            <div className="flex flex-col justify-center items-start self-stretch gap-3">
              <div className="flex flex-col justify-start items-start self-stretch gap-2">
                <div className="flex justify-start items-center relative gap-1">
                  <p>
                    <Link
                      to={`/category/${featureOnePost.category}`}
                      className="text-[#5637CD] text-xs uppercase"
                    >
                      {featureOnePost.category}
                    </Link>
                  </p>
                </div>
                <div className="gap-2.5 font-headline">
                  <Link
                    to={
                      featureOnePost.permalink
                        ? `/news/${featureOnePost.permalink
                            .replaceAll(/ /g, "-")
                            .toLowerCase()}`
                        : "/"
                    }
                    className="flex-grow text-2xl md:text-3xl xl:text-4xl leading-snug hover:text-[#5637CD]"
                  >
                    {featureOnePost.title}
                  </Link>
                </div>
                <div className="gap-2.5">
                  <p className="text-gray-500">{featureOnePost.subtitle}</p>
                </div>
                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by
                    <span>
                      <a className="link-gray" href="/author/benstrack">
                        {featureOnePost.authorOne}
                      </a>
                    </span>
                    <span>
                      <span className="ml-1">&amp;</span>
                      <a className="link-gray" href="/author/casey-wagner">
                        {featureOnePost.authorTwo}
                      </a>
                    </span>
                    <span>/</span>
                    <span>
                      <time>{formatDateTime(featureOnePost.dateAndTime)}</time>
                    </span>
                  </div>
                </div>
                <div className="mt-0.5 w-full">
                  <Link
                    to={
                      featureOnePost.permalink
                        ? `/news/${featureOnePost.permalink
                            .replaceAll(/ /g, "-")
                            .toLowerCase()}`
                        : "/"
                    }
                    className="cursor-pointer"
                  >
                    <img
                      alt="article-image"
                      fetchPriority="high"
                      width="768"
                      height="432"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-auto"
                      loading="lazy"
                      style={{ color: "transparent" }}
                      src={`http://localhost:8080/Images/${featureOnePost.thumble}`}
                      srcSet=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
          {/* === second post === */}
          {featureTwoPost && (
            <div className="flex justify-center items-start self-stretch gap-3">
              <div className="justify-start items-center flex-grow gap-2 w-full">
                <div className="gap-1">
                  <p className="flex gap-2 flex-grow">
                    <Link
                      className="text-[#5637CD] text-xs uppercase"
                      to={`/category/${featureTwoPost.category}`}
                    >
                      {featureTwoPost.category}
                    </Link>
                  </p>
                </div>
                <div className="mt-1 gap-2.5">
                  <Link
                    className="flex-grow text-lg md:text-xl xl:text-2xl font-headline hover:text-[#5637CD]"
                    to={
                      featureTwoPost.permalink
                        ? `/news/${featureTwoPost.permalink
                            .replaceAll(/ /g, "-")
                            .toLowerCase()}`
                        : "/"
                    }
                  >
                    {featureTwoPost.title}
                  </Link>
                </div>
                <div className="mt-1 gap-2.5 text-gray-500">
                  {featureTwoPost.subtitle}
                </div>
                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by{" "}
                    <span>
                      <a className="link-gray" href="/author/benstrack">
                        {featureTwoPost.authorOne}
                      </a>
                    </span>
                    <span>
                      <a className="link-gray" href="/author/benstrack">
                        {featureTwoPost.authorTwo}
                      </a>
                    </span>
                    <span> / </span>
                  </div>
                  <div className="flex justify-start items-start relative gap-1 uppercase">
                    <time>{formatDateTime(featureTwoPost.dateAndTime)}</time>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* === third post === */}
          {featureThreePost && (
            <div className="flex justify-center items-start self-stretch gap-3">
              <div className="justify-start items-center flex-grow gap-2 w-full">
                <div className="gap-1">
                  <p className="flex gap-2 flex-grow">
                    <Link
                      className="text-[#5637CD] text-xs uppercase"
                      to={`/category/${featureThreePost.category}`}
                    >
                      {featureThreePost.category}
                    </Link>
                  </p>
                </div>
                <div className="mt-1 gap-2.5">
                  <Link
                    className="flex-grow text-lg md:text-xl xl:text-2xl font-headline hover:text-[#5637CD]"
                    to={
                      featureThreePost.permalink
                        ? `/news/${featureThreePost.permalink
                            .replaceAll(/ /g, "-")
                            .toLowerCase()}`
                        : "/"
                    }
                  >
                    {featureThreePost.title}
                  </Link>
                </div>
                <div className="mt-1 gap-2.5 text-gray-500">
                  {featureThreePost.subtitle}
                </div>
                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by{" "}
                    <span>
                      <a className="link-gray" href="/author/benstrack">
                        {featureThreePost.authorOne}
                      </a>
                    </span>
                    <span>
                      <a className="link-gray" href="/author/benstrack">
                        {featureThreePost.authorTwo}
                      </a>
                    </span>
                    <span> / </span>
                  </div>
                  <div className="flex justify-start items-start relative gap-1 uppercase">
                    <time>{formatDateTime(featureThreePost.dateAndTime)}</time>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col lg:flex-row justify-start items-start self-stretch gap-4 md:gap-6 lg:gap-10">
            {/* === fourth post === */}
            {featureFourPost && (
              <div className="justify-start items-center flex-grow gap-2 w-full">
                <Link
                  className="cursor-pointer"
                  to={
                    featureFourPost.permalink
                      ? `/news/${featureFourPost.permalink
                          .replaceAll(/ /g, "-")
                          .toLowerCase()}`
                      : "/"
                  }
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
                    src={`http://localhost:8080/Images/${featureFourPost.thumble}`}
                  />
                </Link>
                <div className="gap-1">
                  <p className="flex gap-2 flex-grow">
                    <Link
                      className="text-[#5637CD] text-xs uppercase"
                      to={`/category/${featureFourPost.category}`}
                    >
                      {featureFourPost.category}
                    </Link>
                  </p>
                </div>
                <div className="mt-1 gap-2.5">
                  <Link
                    className="flex-grow text-lg md:text-xl xl:text-2xl font-headline hover:text-[#5637CD]"
                    to={
                      featureFourPost.permalink
                        ? `/news/${featureFourPost.permalink
                            .replaceAll(/ /g, "-")
                            .toLowerCase()}`
                        : "/"
                    }
                  >
                    {featureFourPost.title}
                  </Link>
                </div>

                <div className="mt-1 gap-2.5 text-gray-500">
                  {featureFourPost.subtitle}
                </div>

                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by{" "}
                    <span>
                      <Link className="link-gray" to="/author/jack-kubinec">
                        {featureFourPost.authorOne}
                      </Link>
                      <span className="ml-1">&amp;</span>
                    </span>
                    <span>
                      <Link className="link-gray" to="/author/jeffrey-albus">
                        {featureFourPost.authorTwo}
                      </Link>
                    </span>
                    <span> /</span>
                  </div>
                  <div className="flex justify-start items-start relative gap-1 uppercase">
                    <time>{formatDateTime(featureFourPost.dateAndTime)}</time>
                  </div>
                </div>
              </div>
            )}
            {/* === fifth post === */}
            {featureFivePost && (
              <div className="justify-start items-center flex-grow gap-2 w-full">
                <Link
                  className="cursor-pointer"
                  to={
                    featureFivePost.permalink
                      ? `/news/${featureFivePost.permalink
                          .replaceAll(/ /g, "-")
                          .toLowerCase()}`
                      : "/"
                  }
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
                    src={`http://localhost:8080/Images/${featureFivePost.thumble}`}
                  />
                </Link>
                <div className="gap-1">
                  <p className="flex gap-2 flex-grow">
                    <Link
                      className="text-[#5637CD] text-xs uppercase"
                      to={`/category/${featureFivePost.category}`}
                    >
                      {featureFivePost.category}
                    </Link>
                  </p>
                </div>
                <div className="mt-1 gap-2.5">
                  <Link
                    className="flex-grow text-lg md:text-xl xl:text-2xl font-headline hover:text-[#5637CD]"
                    to={
                      featureFivePost.permalink
                        ? `/news/${featureFivePost.permalink
                            .replaceAll(/ /g, "-")
                            .toLowerCase()}`
                        : "/"
                    }
                  >
                    {featureFivePost.title}
                  </Link>
                </div>

                <div className="mt-1 gap-2.5 text-gray-500">
                  {featureFivePost.subtitle}
                </div>

                <div className="flex flex-wrap justify-start items-start gap-1 mt-2 text-xs">
                  <div className="flex flex-wrap gap-1 uppercase">
                    by{" "}
                    <span>
                      <Link className="link-gray" to="/author/jack-kubinec">
                        {featureFivePost.authorOne}
                      </Link>
                      <span className="ml-1">&amp;</span>
                    </span>
                    <span>
                      <Link className="link-gray" to="/author/jeffrey-albus">
                        {featureFivePost.authorTwo}
                      </Link>
                    </span>
                    <span> /</span>
                  </div>
                  <div className="flex justify-start items-start relative gap-1 uppercase">
                    <time>{formatDateTime(featureFourPost.dateAndTime)}</time>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
