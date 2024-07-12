import { useEffect, useState } from "react";
import Section2 from "../HomePage/Section2";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SocialShare from "./SocialShare";
import DOMPurify from "dompurify";
import ArLeftSide from "./ArLeftSide";
import { IoIosArrowBack } from "react-icons/io";

const ArticalPage = () => {
  const { title } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const [blogpost, setBlogpost] = useState([]);
  const [post, setPost] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/blogpost")
      .then((result) => {
        if (result.data.Status) {
          const posts = result.data.Result;
          setBlogpost(posts);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const sanitizedTitle = title.replaceAll(/-/g, " ").toLowerCase();
    const matchItems = blogpost.filter(
      (art) => art.title.toLowerCase() === sanitizedTitle
    );
    setPost(matchItems);
  }, [blogpost, title]);

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

  const Title = post[0]?.title;
  const subTitle = post[0]?.subtitle;
  const AuthorOne = post[0]?.author1_id;
  const AuthorTwo = post[0]?.author2_id;
  const newsCategory = post[0]?.category_id;
  const Image = post[0]?.thumble;
  const artical = post[0]?.articalpost;
  const dateAndTime = post[0]?.dateAndTime;

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.ID === categoryId);
    return category ? category.name : "";
  };

  const getAuthorName = (authorId) => {
    const author = authors.find((auth) => auth.ID === authorId);
    return author ? author.name : "";
  };
  const articleUrl = `http://localhost:5173/news/${title}`;
  const articleTitle = title;

  return (
    <>
      <section className="flex flex-row flex-wrap lg:flex-nowrap">
        <div className="basis-1/1 lg:basis-4/6  h-full p-5 md:p-8 lg:p-10 border-r-0 lg:border-r border-b lg:border-b-0">
          <artical className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3 w-full">
              <div className="flex w-full">
                <div className="flex-none">
                  <nav aria-label="breadcrumb">
                    <ol className="flex flex-row gap-2 text-[#5637CD] uppercase text-sm text-left">
                      <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                        <Link to="/">home</Link>
                        <IoIosArrowBack className="w-3 h-3 ml-2" />
                      </li>
                      <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                        <Link to="/news">news</Link>
                        <IoIosArrowBack className="w-3 h-3 ml-2" />
                      </li>
                      <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                        <Link to={`/category/${getCategoryName(newsCategory)}`}>
                          {getCategoryName(newsCategory)}
                        </Link>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="grow"></div>
              </div>

              <h1 className="self-stretch flex-grow-0 flex-shrink-0 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-headline text-left text-dark">
                {Title}
              </h1>

              <p className="flex-grow-0 flex-shrink-0 text-md lg:text-lg text-left text-dark">
                {subTitle}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 content-baseline align-middle justify-start">
              <div className="flex flex-wrap justify-start items-start gap-1 text-xs">
                <div className="flex flex-wrap gap-1 uppercase">
                  by{" "}
                  <span>
                    <a className="link-gray" href="/author/benstrack">
                      {getAuthorName(AuthorOne)}
                    </a>
                    <span className="ml-1">&amp;</span>
                  </span>
                  <span>
                    <a className="link-gray" href="/author/casey-wagner">
                      {getAuthorName(AuthorTwo)}
                    </a>
                  </span>
                  <span> /</span>
                </div>
                <div className="flex justify-start items-start relative gap-1 uppercase">
                  <time>{formatDateTime(dateAndTime)}</time>
                </div>
              </div>
            </div>

            <div className="w-full relative">
              <img
                fetchPriority="high"
                width="980"
                height="551.25"
                decoding="async"
                data-nimg="1"
                className="object-cover w-full"
                sizes="100%"
                loading="lazy"
                src={`http://localhost:8080/Images/${Image}`}
                alt={Image}
                style={{ color: "transparent" }}
              />
            </div>

            <div className="flex flex-col flex-wrap xl:flex-row xl:flex-nowrap gap-6 mt-2 md:mt-4 xl:mt-6 w-full">
              {/* socail part */}
              <div className="relative xl:sticky self-start lg:top-8 pb-0 md:pb-4 lg:pb-8 basis-4/4 lg:basis-1/4 w-full">
                <div className="relative flex xl:flex-col gap-4 justify-center align-middle pt-6 md:px-10 md:py-6 md:bg-gray-50 text-gray-600">
                  <span className="mt-0.5 text-sm text-left uppercase text-[#5637CD]">
                    share
                  </span>

                  <SocialShare url={articleUrl} title={articleTitle} />
                </div>
              </div>

              <div className="p-2 basis-4/4 xl:basis-3/4">
                <section className="w-full">
                  <div className="prose prose-purple max-w-none prose-p:text-justify prose-p:mt-0 prose-p:mb-6 prose-h2:text-xl prose-headings:scroll-mt-28 prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-purple-500 prose-a:font-base prose-a:border-none prose-a:hover:border-none prose-a:underline prose-pre:rounded-xl prose-pre:bg-purple-900 prose-pre:shadow-lg">
                    <p className="mb-7">
                      <em>
                        Today, enjoy the On the Margin newsletter on
                        Blockworks.co. Tomorrow, get the news delivered directly
                        to your inbox.&nbsp;
                      </em>
                      <a
                        href="https://blockworks.co/newsletter/onthemargin"
                        rel="nofollow"
                        target="_blank"
                      >
                        <em>Subscribe to the On the Margin newsletter</em>
                      </a>
                    </p>
                    <hr className="wp-block-separator has-alpha-channel-opacity mb-7"></hr>
                    {/* artical text */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(artical),
                      }}
                    ></div>
                  </div>
                </section>
                {/* tag */}
                <section className="flex gap-6 mt-4 py-8 uppercase">
                  <span className="text-gray-800">Tags</span>
                  <ul className="flex flex-row flex-wrap gap-3 divide ">
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/elections"
                      >
                        Elections
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/etfs"
                      >
                        ETFs
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/on-the-margin-newsletter"
                      >
                        On the Margin Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/sec"
                      >
                        SEC
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/solana"
                      >
                        Solana
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/us-politics"
                      >
                        US politics
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </artical>
        </div>

        {/* arical left side content */}
        <ArLeftSide />
      </section>
      <Section2 />
    </>
  );
};

export default ArticalPage;
