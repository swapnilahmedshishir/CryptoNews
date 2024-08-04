import { FaSpotify } from "react-icons/fa6";
import { SiApplepodcasts } from "react-icons/si";
import EpisodesItems from "./EpisodesItems";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../AppContext";

const Episodes = () => {
  const { id, author } = useParams();
  const { state } = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const [podcasts, setPodcasts] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [filteredPodcast, setFilteredPodcast] = useState(null);
  const [displayCount, setDisplayCount] = useState(7);

  useEffect(() => {
    axios
      .get(`${state.port}/api/admin/Podcasts`)
      .then((result) => {
        if (result.data.Status) {
          setPodcasts(result.data.Result);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [state.port]);

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

  useEffect(() => {
    if (id) {
      const podcast = podcasts.find((pd) => pd.ID === parseInt(id));
      const episodesForPodcast = episodes.filter(
        (episode) => episode.podcastID === parseInt(id)
      );
      setFilteredPodcast(podcast || null);
      setFilteredEpisodes(episodesForPodcast);
    }
  }, [id, podcasts, episodes]);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 7);
  };

  return (
    <main className="border-gray-200 relative w-full">
      <div className="flex flex-col sm:flex-row">
        <div className="lg:inset-y-0 lg:left-0 lg:flex sm:w-4/10 lg:items-start lg:overflow-y-auto sm:border-r">
          <div className="divide-y">
            <ul
              role="list"
              className="leading-7 pt-8 flex justify-center gap-10 text-base font-medium"
            >
              {filteredPodcast && (
                <>
                  <li className="flex">
                    <a
                      href={filteredPodcast.spotify}
                      target="_blank"
                      className="group flex items-center"
                      aria-label="Spotify"
                      rel="noreferrer"
                    >
                      <span className="flex whitespace-nowrap">
                        <FaSpotify className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                        <span className="hidden lg:ml-2 lg:block">Spotify</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href={filteredPodcast.apple}
                      target="_blank"
                      className="group flex items-center"
                      aria-label="Apple"
                      rel="noreferrer"
                    >
                      <span className="flex whitespace-nowrap">
                        <SiApplepodcasts className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                        <span className="hidden lg:ml-2 lg:block">Apple</span>
                      </span>
                    </a>
                  </li>
                </>
              )}
            </ul>
            <div className="mt-8 pt-8 z-10 mx-auto pb-4 md:max-w-2xl lg:min-h-full lg:flex-auto">
              <div className="px-4 sm:px-6 md:px-4 lg:px-8 xl:px-12">
                {filteredPodcast && (
                  <a
                    className="relative mx-auto block w-48 overflow-hidden bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 lg:w-auto"
                    aria-label={filteredPodcast.name}
                    href="/"
                  >
                    <div className="block lg:hidden">
                      <img
                        alt={filteredPodcast.name}
                        fetchPriority="high"
                        width="128"
                        height="128"
                        decoding="async"
                        data-nimg="1"
                        className="w-full"
                        sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
                        src={`${state.port}/Images/${filteredPodcast.image}`}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <img
                        alt={filteredPodcast.name}
                        fetchPriority="high"
                        width="350"
                        height="350"
                        decoding="async"
                        data-nimg="1"
                        className="w-full"
                        sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
                        srcSet=""
                        src={`${state.port}/Images/${filteredPodcast.image}`}
                      />
                    </div>
                  </a>
                )}
                <div className="mt-10 text-center lg:mt-12 lg:text-left">
                  {filteredPodcast && (
                    <>
                      <h1 className="text-xl font-bold text-slate-900">
                        <a href="/">{filteredPodcast.name}</a>
                      </h1>
                      <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
                        {filteredPodcast.hostedInfo}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <section className="mt-10 lg:mt-12 w-full">
                <aside className="inline-flex flex-col items-start justify-start border-t-[1px] border-slate bg-white w-full">
                  <div className="flex flex-col items-start justify-start w-full ">
                    <div className="inline-flex items-center justify-start w-full px-4 sm:px-6 md:px-4 lg:px-8 xl:px-12 py-5 border-b-[1px] border-slate">
                      <p className="text-base font-halbfett tracking-widest font-semibold leading-none text-black uppercase">
                        follow
                      </p>
                    </div>
                    <div className="flex flex-col space-y-10 items-start justify-start w-full py-10 px-4 sm:px-6 md:px-4 lg:px-8 xl:px-12">
                      {filteredPodcast && (
                        <ul
                          role="list"
                          className="flex lg:flex-col justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:gap-[40px]"
                        >
                          <li className="flex">
                            <a
                              href={filteredPodcast.spotify}
                              target="_blank"
                              className="group flex items-center"
                              aria-label="Spotify"
                              rel="noreferrer"
                            >
                              <span className="flex">
                                <FaSpotify className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                                <span className="hidden lg:ml-3 lg:block font-medium">
                                  Spotify
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="flex">
                            <a
                              href={filteredPodcast.apple}
                              target="_blank"
                              className="group flex items-center"
                              aria-label="RSS Feed"
                              rel="noreferrer"
                            >
                              <span className="flex">
                                <SiApplepodcasts className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                                <span className="hidden lg:ml-3 lg:block font-medium">
                                  Apple Podcasts
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </aside>
              </section>
            </div>
          </div>
        </div>

        <div className="border-t lg:relative lg:mb-28 sm:border-t-0 sm:w-full ">
          <div className="relative">
            <div>
              <div className="lg:px-8 flex flex-col border-b lg:border-0 pt-8 pb-9">
                <div className="w-full lg:max-w-4xl">
                  <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <h1 className="text-2xl font-bold leading-7 text-slate-900 p-0 m-0">
                      Episodes
                    </h1>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-slate-100 sm:pt-4 lg:pt-5 lg:border-t">
                <span>{errorMessage}</span>
                {filteredEpisodes.length > 0 ? (
                  filteredEpisodes
                    .slice(0, displayCount)
                    .map((episode) => (
                      <EpisodesItems
                        key={episode.ID}
                        episode={episode}
                        author={author}
                      />
                    ))
                ) : (
                  <p className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    No episodes found.
                  </p>
                )}
                {displayCount < filteredEpisodes.length && (
                  <div className="lg:px-8 py-12 px-2 xl:px-0">
                    <div className="w-full lg:max-w-4xl">
                      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                        <button
                          onClick={handleLoadMore}
                          className="relative flex justify-center items-center hover:text-white gap-2 px-5 py-4 text-[#5637CD] hover:bg-[#5637CD] hover:border-[#5637CD] border bg-white"
                        >
                          <p className="text-sm text-center uppercase">
                            load more
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Episodes;
