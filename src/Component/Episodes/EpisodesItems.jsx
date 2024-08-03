import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../AppContext";

const EpisodesItems = ({ episode }) => {
  const { setAudioFile, state } = useContext(AppContext);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const options = { month: "long", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };

  const handleListenClick = () => {
    // setAudioFile(`${state.port}/Audio/${episode.audioFile}`);
    setAudioFile(`${episode.audioFile}`);
  };

  return (
    <article
      aria-labelledby={`episode-${episode.uuid}-title`}
      className="py-10 sm:py-12"
    >
      <div className="lg:px-8">
        <div className="w-full lg:max-w-4xl">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div className="flex flex-col items-start">
              <h2
                id={`episode-${episode.uuid}-title`}
                className="mt-2 text-lg font-bold text-slate-900"
              >
                <a
                  className="hover:text-primary"
                  href={`/podcast/bitcoinbuilders/${episode.uuid}`}
                >
                  <span>{episode.title}</span>
                </a>
              </h2>
              <time className="order-first font-mono text-sm leading-7 text-slate-500">
                {formatDateTime(episode.dateAndTime)}
              </time>
              <div className="mt-1 text-base leading-7 text-slate-500 h-30 overflow-hidden">
                <div>{episode.episodesInfo}...</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a
                  className="flex items-center text-sm font-bold leading-6 text-primary hover:text-gray-700 active:text-gray-900 cursor-pointer"
                  aria-label={`Play episode ${episode.title}`}
                  onClick={handleListenClick}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="h-2.5 w-2.5 fill-current"
                  >
                    <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path>
                  </svg>
                  <span className="ml-3" aria-hidden="true">
                    Listen
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

EpisodesItems.propTypes = {
  episode: PropTypes.shape({
    podcastID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    title: PropTypes.string.isRequired,
    episodesInfo: PropTypes.string.isRequired,
    audioFile: PropTypes.string,
    dateAndTime: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EpisodesItems;
