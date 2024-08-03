import React from "react";
import { FaSpotify } from "react-icons/fa6";
import { SiApplepodcasts } from "react-icons/si";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const ProdCastCard = ({ prodCastCard }) => {
  const { state } = useContext(AppContext);

  if (!prodCastCard) {
    return null; // or return some fallback UI
  }

  return (
    <>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <div className="w-full overflow-hidden">
          <Link
            to={`/podcasts/${prodCastCard.ID}/${prodCastCard.name
              .replaceAll(/ /g, "")
              .toLowerCase()}`}
          >
            <img
              alt={prodCastCard.name}
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              data-nimg="1"
              className="w-full object-cover"
              src={`${state.port}/Images/${prodCastCard.image}`}
              style={{ color: "transparent" }}
            />
          </Link>
        </div>
      </div>
      <div className="gap-4 p-5">
        <div className="gap-6">
          <div className="gap-2">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <Link
                className="py-1.5 font-semibold text-xl text-left text-dark hover:text-[#5637CD]"
                to={`/podcasts/${prodCastCard.ID}/${prodCastCard.name
                  .replaceAll(/ /g, "")
                  .toLowerCase()}`}
              >
                {prodCastCard.name}
              </Link>
            </div>
            <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
              <div className="flex-grow text-sm font-thin text-left text-light-gray">
                <p>{prodCastCard.hostedInfo}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                <p className="pt-0.5 text-xs text-left uppercase text-gray-500 font-light">
                  follow
                </p>
              </div>
              <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                <a
                  href={prodCastCard.spotify}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow ${prodCastCard.name} on Spotify`}
                >
                  <FaSpotify className="flex-grow-0 flex-shrink-0 w-3 h-3 relative text-gray-500 hover:text-gray-950" />
                </a>
                <a
                  href={prodCastCard.apple}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow ${prodCastCard.name} on iTunes`}
                >
                  <SiApplepodcasts className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative text-gray-500 hover:text-gray-950" />
                </a>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <Link
                  className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-gray-500"
                  aria-label={`All ${prodCastCard.name} Episodes`}
                  to={`/podcasts/${prodCastCard.ID}/${prodCastCard.name
                    .replaceAll(/ /g, "")
                    .toLowerCase()}`}
                >
                  all episodes
                </Link>
              </div>
              <FaLongArrowAltRight className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative text-[#5637CD]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProdCastCard.propTypes = {
  prodCastCard: PropTypes.shape({
    ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    hostedInfo: PropTypes.string.isRequired,
    image: PropTypes.string,
    spotify: PropTypes.string.isRequired,
    apple: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProdCastCard;
