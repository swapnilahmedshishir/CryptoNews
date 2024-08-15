import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const ArticleCard = ({ BlogData }) => {
  const { state } = useContext(AppContext);

  // Destructure props
  const {
    thumble,
    title,
    permalink,
    category_id,
    subtitle,
    dateAndTime,
    author1_id,
    author2_id,
  } = BlogData;

  // State
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch authors and categories
  useEffect(() => {
    const fetchAuthorsAndCategories = async () => {
      try {
        const [authorResponse, categoryResponse] = await Promise.all([
          axios.get(`${state.port}/api/admin/author`),
          axios.get(`${state.port}/api/admin/newsCategory`),
        ]);

        if (authorResponse.data.Status && categoryResponse.data.Status) {
          setAuthors(authorResponse.data.Result);
          setCategories(categoryResponse.data.Result);
        } else {
          setErrorMessage("Failed to fetch authors or categories");
        }
      } catch (err) {
        console.error("Error fetching authors or categories:", err);
        setErrorMessage("An error occurred while fetching data.");
      }
    };

    fetchAuthorsAndCategories();
  }, []);

  // Get category name
  const getCategoryName = useMemo(
    () => (categoryId) => {
      const category = categories.find((cat) => cat.ID === categoryId);
      return category ? category.name : "";
    },
    [categories]
  );

  // Get author name
  const getAuthorName = useMemo(
    () => (authorId) => {
      const author = authors.find((auth) => auth.ID === authorId);
      return author ? author.name : "";
    },
    [authors]
  );

  // Format date and time
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const options = { month: "long", day: "2-digit", year: "numeric" };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .toUpperCase();
    return `${formattedDate}`;
  };

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="flex flex-col justify-start self-stretch flex-grow gap-2 w-full">
      <Link
        className="cursor-pointer"
        to={
          permalink
            ? `/news/${permalink.replaceAll(/ /g, "-").toLowerCase()}`
            : "/"
        }
      >
        <img
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="w-full h-auto"
          src={`${state.port}/Images/${thumble}`}
          alt={thumble}
          style={{ color: "transparent" }}
        />
      </Link>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
        <p className="flex whitespace-nowrap overflow-auto scrollbar-hide flex-grow text-[10px] text-left uppercase text-[#5637CD] gap-2">
          {getCategoryName(category_id)}
        </p>
      </div>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
        <Link
          className="font-headline flex-grow text-base font-semibold leading-snug hover:text-[#5637CD]"
          to={
            permalink
              ? `/news/${permalink.replaceAll(/ /g, "-").toLowerCase()}`
              : "/"
          }
        >
          {title}
        </Link>
      </div>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
        <p className="flex-grow text-xs text-left text-light-gray text-light-gray">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-wrap justify-start items-start gap-1 text-xs">
        <div className="flex flex-wrap gap-1 uppercase">
          by <span>{getAuthorName(author1_id)}</span>&
          <span>{getAuthorName(author2_id)}</span>
          <span> /</span>
        </div>
        <div className="flex justify-start items-start relative gap-1 uppercase">
          <time>{formatDateTime(dateAndTime)}</time>
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  BlogData: PropTypes.shape({
    thumble: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
    subtitle: PropTypes.string,
    dateAndTime: PropTypes.string.isRequired,
    author1_id: PropTypes.number,
    author2_id: PropTypes.number,
  }).isRequired,
};

export default ArticleCard;
