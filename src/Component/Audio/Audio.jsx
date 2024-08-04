import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../AppContext";
import axios from "axios";
import { Link } from "react-router-dom";

export const Audio = () => {
  const {
    state,
    audioFile,
    setAudioFile,
    isPlaying,
    setIsPlaying,
    setCurrentEpisodeId,
  } = useContext(AppContext);
  const audioRef = useRef(null);

  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [Episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // fetch episodes  data
  useEffect(() => {
    axios
      .get(`${state.port}/api/admin/Episodes`)
      .then((result) => {
        if (result.data.Status) {
          setEpisodes(result.data.Result);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [state.port]);

  // filter data in current data
  useEffect(() => {
    if (audioFile) {
      const episodesForPodcast = Episodes.filter(
        (episode) => episode.audioFile === audioFile
      );
      setFilteredEpisodes(episodesForPodcast[0]);
    }
  }, [audioFile, Episodes]);

  // Set audioRef to updateTime and duration
  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateCurrentTime);
      audio.addEventListener("loadedmetadata", updateDuration);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateCurrentTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
      }
    };
  }, [audioFile]);

  //audio play and pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const fastForward = () => {
    audioRef.current.currentTime += 10;
  };

  const rewind = () => {
    audioRef.current.currentTime -= 10;
  };

  const handlePlaybackRateChange = (rate) => {
    audioRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  if (!audioFile) return null;

  return (
    <>
      <div className="fixed bottom-0 z-10 left-0 right-0">
        <div>{errorMessage}</div>
        <div className="flex relative items-center gap-6 bg-white/80 py-1 px-4 border border-l-0 border-r-0 backdrop-blur-sm md:px-6 mx-auto w-full">
          <button
            className="absolute text-xs flex items-center align-middle right-2 top-2 rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 "
            onClick={() => {
              setAudioFile(null);
              setCurrentEpisodeId(null);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4 h-4"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path>
            </svg>
            CLOSE
          </button>
          <div className="hidden md:block">
            <button
              type="button"
              className="group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700 h-14 w-14 focus:ring-2 focus:ring-offset-2"
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={togglePlayPause}
            >
              <div className="absolute -inset-3 md:hidden"></div>
              <svg
                aria-hidden="true"
                viewBox="0 0 36 36"
                className="fill-white group-active:fill-white/80 h-7 w-7"
              >
                {isPlaying ? (
                  <path d="M12 10h3v16h-3zM21 10h3v16h-3z" />
                ) : (
                  <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
                )}
              </svg>
            </button>
          </div>
          <div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-1 overflow-hidden p-1">
            <Link
              title={filteredEpisodes.title}
              className="truncate text-center text-sm font-bold leading-6 md:text-left"
              to={`${state.port}/bitcoinbuilders/${filteredEpisodes.uuid}`}
            >
              {filteredEpisodes.title}
            </Link>

            <div className="flex justify-between gap-6">
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
                  aria-label="Mute"
                  onClick={toggleMute}
                >
                  <div className="absolute -inset-4 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
                  >
                    {isMuted ? (
                      <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6ZM17 7L19 9M19 15L17 17" />
                    ) : (
                      <>
                        <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
                        <path
                          d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17"
                          fill="none"
                        ></path>
                        <path
                          d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5"
                          fill="none"
                        ></path>
                      </>
                    )}
                  </svg>
                </button>
              </div>
              <div className="flex flex-none items-center gap-4">
                <button
                  type="button"
                  className="group relative rounded-full focus:outline-none"
                  aria-label="Rewind 10 seconds"
                  onClick={rewind}
                >
                  <div className="absolute -inset-4 -right-2 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
                  >
                    <path d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"></path>
                    <path d="M5 15V19"></path>
                    <path d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"></path>
                  </svg>
                </button>

                <button
                  type="button"
                  className="group relative rounded-full focus:outline-none"
                  aria-label={isPlaying ? "Pause" : "Play"}
                  onClick={togglePlayPause}
                >
                  <div className="absolute -inset-4 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-slate-500 group-hover:fill-slate-700"
                  >
                    {isPlaying ? (
                      <path d="M9 6H12V18H9V6ZM13 6H16V18H13V6Z"></path>
                    ) : (
                      <path d="M17 12L7 18V6L17 12Z"></path>
                    )}
                  </svg>
                </button>

                <button
                  type="button"
                  className="group relative rounded-full focus:outline-none"
                  aria-label="Fast forward 10 seconds"
                  onClick={fastForward}
                >
                  <div className="absolute -inset-4 -left-2 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
                  >
                    <path d="M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188"></path>
                    <path d="M13 15V19"></path>
                    <path d="M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z"></path>
                    {/* <path d="M16 5L19 8M19 8L16 11M19 8H13.5C10.1863 8 7.5 10.6863 7.5 14C7.5 17.3137 10.1863 20 13.5 20H15"></path> */}
                  </svg>
                </button>
              </div>
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
                  aria-label="Mute"
                  onClick={toggleMute}
                >
                  <div className="absolute -inset-4 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
                  >
                    {isMuted ? (
                      <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6ZM17 7L19 9M19 15L17 17" />
                    ) : (
                      <>
                        <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
                        <path
                          d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17"
                          fill="none"
                        ></path>
                        <path
                          d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5"
                          fill="none"
                        ></path>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="flex items-center justify-center md:order-none">
                <span className="text-[1rem] leading-none text-slate-500 md:order-none mr-3">
                  {formatTime(currentTime)}
                </span>
              </div>
              <div className="relative flex grow items-center md:order-none">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="any"
                  value={currentTime}
                  onChange={(e) => {
                    const newTime = Number(e.target.value);
                    setCurrentTime(newTime);
                    audioRef.current.currentTime = newTime;
                  }}
                  className="h-2 w-full flex-grow appearance-none cursor-pointer range-slider"
                  style={{
                    background: `linear-gradient(to right,var(--range-filled-color) ${
                      (currentTime / duration) * 100
                    }%,var(--range-track-color) ${
                      (currentTime / duration) * 100
                    }%)`,
                  }}
                />
              </div>
              <div className="flex items-center justify-center md:order-none">
                <span className="text-[1rem] leading-none text-slate-500 md:order-none ml-3">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:order-none">
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  className={`group relative flex items-center justify-center text-xs font-semibold p-1  focus:outline-none  focus:ring-slate-400 focus:ring-offset-2 ${
                    playbackRate === 0.5 ? "bg-slate-500 text-white" : ""
                  }`}
                  onClick={() => handlePlaybackRateChange(0.5)}
                >
                  0.5x
                </button>
                <button
                  type="button"
                  className={`group relative flex items-center justify-center text-xs font-semibold p-1  focus:outline-none  focus:ring-slate-400 focus:ring-offset-2 ${
                    playbackRate === 1 ? "bg-slate-500 text-white" : ""
                  }`}
                  onClick={() => handlePlaybackRateChange(1)}
                >
                  1x
                </button>
                <button
                  type="button"
                  className={`group relative flex items-center justify-center text-xs font-semibold p-1  focus:outline-none  focus:ring-slate-400 focus:ring-offset-2 ${
                    playbackRate === 1.5 ? "bg-slate-500 text-white" : ""
                  }`}
                  onClick={() => handlePlaybackRateChange(1.5)}
                >
                  1.5x
                </button>
                <button
                  type="button"
                  className={`group relative flex items-center justify-center text-xs font-semibold p-1  focus:outline-none  focus:ring-slate-400 focus:ring-offset-2 ${
                    playbackRate === 2 ? "bg-slate-500 text-white" : ""
                  }`}
                  onClick={() => handlePlaybackRateChange(2)}
                >
                  2x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={`${state.port}/Audio/${audioFile}`}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />
    </>
  );
};
