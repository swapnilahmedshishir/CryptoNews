import { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

const EpisodesItems = ({ episode, author }) => {
  const {
    setAudioFile,
    isPlaying,
    setIsPlaying,
    currentEpisodeId,
    setCurrentEpisodeId,
  } = useContext(AppContext);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const options = { month: "long", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };

  const handleListenClick = () => {
    const audio = document.querySelector("audio");

    if (currentEpisodeId === episode.uuid) {
      // Pause current episode
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } else {
      // Play new episode
      setAudioFile(episode.audioFile);
      setCurrentEpisodeId(episode.uuid);
      setIsPlaying(true);
      if (audio) {
        audio.pause();
      }
      // Wait for audio file to load, then play
      setTimeout(() => {
        const newAudio = document.querySelector("audio");
        if (newAudio) {
          newAudio.play();
        }
      }, 0);
    }
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
                <Link
                  className="hover:text-[#5637CD]"
                  to={`/podcast/${author}/${episode.uuid}`}
                >
                  <span>{episode.title}</span>
                </Link>
              </h2>
              <time className="order-first font-mono text-sm leading-7 text-slate-500">
                {formatDateTime(episode.dateAndTime)}
              </time>
              <div className="mt-1 text-base leading-7 text-slate-500 h-30 overflow-hidden">
                <div>{episode.episodesInfo}...</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a
                  className="flex items-center text-sm font-bold leading-6 text-[#5637CD] hover:text-gray-700 active:text-gray-900 cursor-pointer"
                  aria-label={
                    currentEpisodeId === episode.uuid && isPlaying
                      ? "Pause"
                      : "Play"
                  }
                  onClick={handleListenClick}
                >
                  <div className="absolute -inset-4 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-slate-500 group-hover:fill-slate-700"
                  >
                    {currentEpisodeId === episode.uuid && isPlaying ? (
                      <path d="M9 6H12V18H9V6ZM13 6H16V18H13V6Z"></path>
                    ) : (
                      <path d="M17 12L7 18V6L17 12Z"></path>
                    )}
                  </svg>
                  <span className="ml-3" aria-hidden="true">
                    {currentEpisodeId === episode.uuid && isPlaying
                      ? "Pause"
                      : "Play"}
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
  author: PropTypes.string.isRequired,
};

export default EpisodesItems;
