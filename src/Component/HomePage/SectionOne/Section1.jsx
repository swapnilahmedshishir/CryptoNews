import React, { useEffect, useState } from "react";
import axios from "axios";
import Newsletter from "../../Newsletter/Newsletter";
import FristPart from "./FristPart";
import SecondPart from "./SecondPart";

const Section1 = () => {
  const [latestVideoUrl, setLatestVideoUrl] = useState("");

  useEffect(() => {
    const API_KEY = "AIzaSyANo2qrDnEzB68qkNvUH_D4ufpIESoZQ_Y"; // Replace with your YouTube API key
    const CHANNEL_ID = "UCsgyweRgipGDhwD-3HA-IVA"; // Replace with your YouTube channel ID

    const fetchLatestVideo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${CHANNEL_ID}&maxResults=1&key=${API_KEY}`
        );
        const latestVideoId = response.data.items[0].id.videoId;
        setLatestVideoUrl(
          `https://www.youtube.com/embed/${latestVideoId}?autoplay=1`
        );
      } catch (error) {
        console.error("Error fetching latest video:", error);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <section className="flex flex-row flex-wrap xl:flex-nowrap overflow-hidden divide-x">
      {/* First part Start */}
      <FristPart />
      {/* Second Part Start */}
      <SecondPart />

      {/* Third part start */}
      <div className="xl:basis-1/4 order-3">
        <div className="flex flex-col md:flex-row xl:flex-col border-t border-gray-200 xl:border-0 items-baseline md:items-stretch xl:items-baseline self-stretch">
          <div className="w-full md:w-1/2 xl:w-full flex flex-col md:flex-col-reverse xl:flex-col bg-white border-gray-200 grow border-b md:border-b-0 md:border-t-1 xl:border-t-0 xl:border-b border-r-0">
            {/* Newsletter Email */}
            <Newsletter />
          </div>

          <div className="flex flex-col justify-start self-stretch bg-white border-l xl:border-l-0 md:w-1/2 xl:w-full">
            <div className="flex flex-col justify-start items-start gap-3 w-full p-2">
              <div className="flex flex-col justify-start self-stretch gap-2">
                <div className="border-b border-gray-200 w-full my-5 text-center">
                  <p className="text-2xl uppercase font-semibold text-gray-700 my-2">
                    Watch Market Today
                  </p>
                </div>
                <div className="min-h-[200px]">
                  <iframe
                    className="w-full h-auto md:w-[450px] md:h-[315px]"
                    src={latestVideoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
