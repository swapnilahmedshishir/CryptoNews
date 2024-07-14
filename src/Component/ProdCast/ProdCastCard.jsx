import React from "react";
import { FaSpotify } from "react-icons/fa6";
import { SiApplepodcasts } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProdCastCard = () => {
  return (
    <>
      <div>
        <div className="w-full overflow-hidden">
          <a href="/podcast/0xresearch">
            <img
              alt="0xResearch"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              data-nimg="1"
              className="w-full object-cover"
              srcSet=""
              src="https://images.pexels.com/photos/765139/pexels-photo-765139.jpeg?auto=compress&cs=tinysrgb&w=400"
              style={{ color: "transparent" }}
            />
          </a>
        </div>
      </div>
      <div className="gap-4 p-5">
        <div className="gap-6">
          <div className="gap-2">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <a
                className="py-1.5 font-semibold text-xl text-left text-dark hover:text-[#5637CD]"
                href="/podcast/0xresearch"
              >
                0xResearch
              </a>
            </div>
            <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
              <div className="flex-grow text-sm font-thin text-left text-light-gray">
                <p>
                  0xResearch is the show for those who want to step up their
                  game and think like a crypto analyst. We bring on crypto's
                  best to uncover the latest research, explore protocol
                  developments and identify new narratives. We are full-time
                  crypto analysts who read white papers, governance forums and
                  research pieces for fun (normal, right?). Join us as we
                  combine crypto's top talent with our countless hours of
                  research to create the best content in the space.&nbsp;
                </p>
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
                  href="https://open.spotify.com/show/0rGocvZ7oZR6vuy0UHKAON"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow 0xResearch on Spotify"
                >
                  <FaSpotify className="flex-grow-0 flex-shrink-0 w-3 h-3 relative text-gray-500 hover:text-gray-950" />
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/0xresearch/id1651683074"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow 0xResearch on iTunes"
                >
                  <SiApplepodcasts className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative text-gray-500 hover:text-gray-950" />
                </a>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <Link
                  className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-gray-500"
                  aria-label="All 0xResearch Episodes"
                  to="/podcast/0xresearch"
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

export default ProdCastCard;
