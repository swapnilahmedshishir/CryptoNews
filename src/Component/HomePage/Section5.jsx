import React from "react";

const Section5 = () => {
  return (
    <section>
      <div className="md:mt-0 md:flex md:justify-between md:items-center w-full px-10 py-5 border-b border-t">
        <div className="flex justify-start items-center gap-3">
          <div className="relative">
            <h2 className="text-base uppercase text-dark font-semibold">
              <a href="/podcasts">podcasts</a>
            </h2>
          </div>
          <div className="hidden md:flex justify-start items-start text-center md:text-left relative gap-2.5">
            <p className="text-light-gray">
              Your favorite crypto and macro podcasts in one place.
            </p>
          </div>
        </div>
        <div>
          <a
            className="text-sm text-center md:text-left uppercase text-[#5637CD]"
            href="/podcasts"
          >
            <span className="flex align-middle">
              explore the network
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 mt-1.5"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.005 1.5H0V2.5H6.005V4L8 2L6.005 0V1.5Z"
                  fill="#5637CD"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="relative w-full md:h-[445pt]">
        <div className="gap-10 p-10 touch-scroll md:absolute md:left-0 md:right-0 flex flex-col md:flex-row overflow-x-auto px-8 w-full">
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
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
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                        0xResearch is the show for those who want to step up
                        their game and think like a crypto analyst. We bring on
                        crypto's best to uncover the latest research, explore
                        protocol developments and identify new narratives. We
                        are full-time crypto analysts who read white papers,
                        governance forums and research pieces for fun (normal,
                        right?). Join us as we combine crypto's top talent with
                        our countless hours of research to create the best
                        content in the space.&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
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
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/0xresearch/id1651683074"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow 0xResearch on iTunes"
                      >
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M5.02862 12.4717C4.56776 12.3069 4.46907 12.083 4.27983 10.7701C4.06012 9.24447 4.01213 8.30011 4.13949 8.00102C4.3082 7.60445 4.76665 7.3793 5.40708 7.37689C6.04299 7.37417 6.50536 7.60143 6.67468 8.00102C6.80264 8.29951 6.75465 9.24447 6.53464 10.7701C6.38524 11.8361 6.30315 12.1056 6.09702 12.2867C5.81392 12.5375 5.41221 12.6069 5.03103 12.472L5.02862 12.4717ZM3.06023 10.9062C1.4688 10.1233 0.44929 8.799 0.0786701 7.03705C-0.0139848 6.58223 -0.0296789 5.49783 0.0578453 5.08013C0.289634 3.96012 0.732687 3.08428 1.4688 2.30984C2.52965 1.19134 3.89442 0.600098 5.41342 0.600098C6.91703 0.600098 8.27637 1.18047 9.31157 2.26547C10.0993 3.08428 10.542 3.95077 10.7687 5.0925C10.846 5.47248 10.846 6.50858 10.7738 6.93594C10.5334 8.29498 9.78852 9.51306 8.68834 10.3464C8.29599 10.6418 7.33926 11.1579 7.18473 11.1579C7.12799 11.1579 7.12286 11.0994 7.14882 10.8619C7.19499 10.4807 7.24147 10.4016 7.45756 10.3108C7.80283 10.1668 8.38985 9.74849 8.75021 9.38692C9.37859 8.75889 9.82518 7.97241 10.0425 7.11099C10.1765 6.58072 10.1612 5.40155 10.0124 4.85558C9.54245 3.11868 8.12697 1.7696 6.39188 1.40924C5.88696 1.30603 4.97037 1.30603 4.46031 1.40924C2.7044 1.7696 1.2524 3.18568 0.808441 4.96725C0.690132 5.45015 0.690132 6.63052 0.808441 7.11461C1.1021 8.29378 1.86477 9.37515 2.86315 10.0189C3.03283 10.1323 3.21011 10.2338 3.39372 10.3228C3.60982 10.4155 3.6563 10.4927 3.69734 10.8736C3.723 11.1054 3.71787 11.1724 3.66143 11.1724C3.62521 11.1724 3.36264 11.0592 3.08467 10.9252L3.06023 10.9062ZM3.08075 8.81198C2.54504 8.38462 2.07151 7.62648 1.87563 6.88313C1.75732 6.43404 1.75732 5.58022 1.88076 5.13264C2.20521 3.9236 3.09614 2.98619 4.33205 2.54585C4.75458 2.39676 5.69018 2.36477 6.2114 2.47794C8.00323 2.87633 9.27535 4.67088 9.02938 6.45094C8.93159 7.16834 8.68441 7.75746 8.24679 8.30464C8.0304 8.5811 7.50525 9.04528 7.4126 9.04528C7.3972 9.04528 7.38241 8.87023 7.38241 8.65685V8.26873L7.65042 7.94941C8.65966 6.74037 8.58753 5.05206 7.48563 3.94322C7.05827 3.51194 6.56391 3.25842 5.92529 3.14162C5.51332 3.06526 5.4258 3.06526 4.99331 3.13649C4.33657 3.24363 3.82803 3.49866 3.37622 3.94473C2.26708 5.03939 2.19495 6.73826 3.20449 7.94821L3.47008 8.26873V8.66108C3.47008 8.87747 3.45288 9.05343 3.43175 9.05343C3.41063 9.05343 3.26183 8.95051 3.10218 8.82164L3.08075 8.81198ZM4.86745 6.70959C4.40931 6.49621 4.16213 6.0942 4.157 5.56996C4.157 5.09884 4.41957 4.68778 4.87258 4.44724C5.16111 4.29634 5.67086 4.29634 5.95909 4.44724C6.2791 4.62004 6.51921 4.91071 6.6285 5.25759C6.92729 6.27317 5.85104 7.1629 4.87802 6.70838L4.86745 6.70959Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.49366 6.90987C6.2029 6.90987 6.77786 6.33492 6.77786 5.62568C6.77786 4.91644 6.2029 4.34149 5.49366 4.34149C4.78442 4.34149 4.20947 4.91644 4.20947 5.62568C4.20947 6.33492 4.78442 6.90987 5.49366 6.90987Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.61537 7.40701C5.761 7.42364 5.9049 7.45293 6.04545 7.49454C6.1992 7.54351 6.34439 7.61611 6.47583 7.70973C6.5893 7.79212 6.6717 7.87753 6.72301 7.98135C6.77431 8.08517 6.80027 8.20892 6.81566 8.41143C6.82592 8.61424 6.82592 8.89432 6.77974 9.42067C6.73357 9.94703 6.64061 10.7121 6.56848 11.2038C6.49635 11.6954 6.44504 11.9145 6.37804 12.0742C6.33324 12.1992 6.25721 12.3108 6.15716 12.3982C6.05711 12.4856 5.93637 12.546 5.80642 12.5737C5.70833 12.5943 5.6081 12.6029 5.50793 12.5993C5.40767 12.6025 5.30739 12.5939 5.20914 12.5737C5.09083 12.5477 4.93751 12.5015 4.82282 12.4089C4.70452 12.3162 4.62725 12.1822 4.56538 12.0072C4.50351 11.8321 4.45734 11.6209 4.39547 11.1986C4.33359 10.7764 4.2512 10.1483 4.19989 9.66936C4.14859 9.19039 4.12776 8.86082 4.12354 8.63929C4.11931 8.41777 4.12867 8.3073 4.15372 8.20167C4.17772 8.10072 4.21952 8.00486 4.27716 7.91858C4.33431 7.83774 4.40388 7.76644 4.48329 7.70731C4.55614 7.65114 4.6377 7.6073 4.72474 7.57753C4.83088 7.53655 4.94061 7.50554 5.0525 7.48488C5.1862 7.45923 5.34073 7.43357 5.4201 7.42301C5.47542 7.41122 5.53259 7.41122 5.58791 7.42301L5.61537 7.40701Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/0xresearch"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for 0xResearch"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All 0xResearch Episodes"
                        href="/podcast/0xresearch"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/bellcurve">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/bellcurve"
                    >
                      Bell Curve
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        Bell Curve breaks down the most important themes in
                        crypto for people who, like us, are confined to the
                        middle of the bell curve. Each season explores a
                        different thesis that we'll test and refine through
                        debate with crypto's best. If you're a crypto native,
                        degen or investooor, this podcast is for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/3uMWirMj2hc7IQYEUeBTyT"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Bell Curve on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/bell-curve/id1641356619"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Bell Curve on iTunes"
                      >
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M5.02862 12.4717C4.56776 12.3069 4.46907 12.083 4.27983 10.7701C4.06012 9.24447 4.01213 8.30011 4.13949 8.00102C4.3082 7.60445 4.76665 7.3793 5.40708 7.37689C6.04299 7.37417 6.50536 7.60143 6.67468 8.00102C6.80264 8.29951 6.75465 9.24447 6.53464 10.7701C6.38524 11.8361 6.30315 12.1056 6.09702 12.2867C5.81392 12.5375 5.41221 12.6069 5.03103 12.472L5.02862 12.4717ZM3.06023 10.9062C1.4688 10.1233 0.44929 8.799 0.0786701 7.03705C-0.0139848 6.58223 -0.0296789 5.49783 0.0578453 5.08013C0.289634 3.96012 0.732687 3.08428 1.4688 2.30984C2.52965 1.19134 3.89442 0.600098 5.41342 0.600098C6.91703 0.600098 8.27637 1.18047 9.31157 2.26547C10.0993 3.08428 10.542 3.95077 10.7687 5.0925C10.846 5.47248 10.846 6.50858 10.7738 6.93594C10.5334 8.29498 9.78852 9.51306 8.68834 10.3464C8.29599 10.6418 7.33926 11.1579 7.18473 11.1579C7.12799 11.1579 7.12286 11.0994 7.14882 10.8619C7.19499 10.4807 7.24147 10.4016 7.45756 10.3108C7.80283 10.1668 8.38985 9.74849 8.75021 9.38692C9.37859 8.75889 9.82518 7.97241 10.0425 7.11099C10.1765 6.58072 10.1612 5.40155 10.0124 4.85558C9.54245 3.11868 8.12697 1.7696 6.39188 1.40924C5.88696 1.30603 4.97037 1.30603 4.46031 1.40924C2.7044 1.7696 1.2524 3.18568 0.808441 4.96725C0.690132 5.45015 0.690132 6.63052 0.808441 7.11461C1.1021 8.29378 1.86477 9.37515 2.86315 10.0189C3.03283 10.1323 3.21011 10.2338 3.39372 10.3228C3.60982 10.4155 3.6563 10.4927 3.69734 10.8736C3.723 11.1054 3.71787 11.1724 3.66143 11.1724C3.62521 11.1724 3.36264 11.0592 3.08467 10.9252L3.06023 10.9062ZM3.08075 8.81198C2.54504 8.38462 2.07151 7.62648 1.87563 6.88313C1.75732 6.43404 1.75732 5.58022 1.88076 5.13264C2.20521 3.9236 3.09614 2.98619 4.33205 2.54585C4.75458 2.39676 5.69018 2.36477 6.2114 2.47794C8.00323 2.87633 9.27535 4.67088 9.02938 6.45094C8.93159 7.16834 8.68441 7.75746 8.24679 8.30464C8.0304 8.5811 7.50525 9.04528 7.4126 9.04528C7.3972 9.04528 7.38241 8.87023 7.38241 8.65685V8.26873L7.65042 7.94941C8.65966 6.74037 8.58753 5.05206 7.48563 3.94322C7.05827 3.51194 6.56391 3.25842 5.92529 3.14162C5.51332 3.06526 5.4258 3.06526 4.99331 3.13649C4.33657 3.24363 3.82803 3.49866 3.37622 3.94473C2.26708 5.03939 2.19495 6.73826 3.20449 7.94821L3.47008 8.26873V8.66108C3.47008 8.87747 3.45288 9.05343 3.43175 9.05343C3.41063 9.05343 3.26183 8.95051 3.10218 8.82164L3.08075 8.81198ZM4.86745 6.70959C4.40931 6.49621 4.16213 6.0942 4.157 5.56996C4.157 5.09884 4.41957 4.68778 4.87258 4.44724C5.16111 4.29634 5.67086 4.29634 5.95909 4.44724C6.2791 4.62004 6.51921 4.91071 6.6285 5.25759C6.92729 6.27317 5.85104 7.1629 4.87802 6.70838L4.86745 6.70959Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.49366 6.90987C6.2029 6.90987 6.77786 6.33492 6.77786 5.62568C6.77786 4.91644 6.2029 4.34149 5.49366 4.34149C4.78442 4.34149 4.20947 4.91644 4.20947 5.62568C4.20947 6.33492 4.78442 6.90987 5.49366 6.90987Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.61537 7.40701C5.761 7.42364 5.9049 7.45293 6.04545 7.49454C6.1992 7.54351 6.34439 7.61611 6.47583 7.70973C6.5893 7.79212 6.6717 7.87753 6.72301 7.98135C6.77431 8.08517 6.80027 8.20892 6.81566 8.41143C6.82592 8.61424 6.82592 8.89432 6.77974 9.42067C6.73357 9.94703 6.64061 10.7121 6.56848 11.2038C6.49635 11.6954 6.44504 11.9145 6.37804 12.0742C6.33324 12.1992 6.25721 12.3108 6.15716 12.3982C6.05711 12.4856 5.93637 12.546 5.80642 12.5737C5.70833 12.5943 5.6081 12.6029 5.50793 12.5993C5.40767 12.6025 5.30739 12.5939 5.20914 12.5737C5.09083 12.5477 4.93751 12.5015 4.82282 12.4089C4.70452 12.3162 4.62725 12.1822 4.56538 12.0072C4.50351 11.8321 4.45734 11.6209 4.39547 11.1986C4.33359 10.7764 4.2512 10.1483 4.19989 9.66936C4.14859 9.19039 4.12776 8.86082 4.12354 8.63929C4.11931 8.41777 4.12867 8.3073 4.15372 8.20167C4.17772 8.10072 4.21952 8.00486 4.27716 7.91858C4.33431 7.83774 4.40388 7.76644 4.48329 7.70731C4.55614 7.65114 4.6377 7.6073 4.72474 7.57753C4.83088 7.53655 4.94061 7.50554 5.0525 7.48488C5.1862 7.45923 5.34073 7.43357 5.4201 7.42301C5.47542 7.41122 5.53259 7.41122 5.58791 7.42301L5.61537 7.40701Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/bellcurve"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for Bell Curve"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All Bell Curve Episodes"
                        href="/podcast/bellcurve"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/bitcoinbuilders">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/bitcoinbuilders"
                    >
                      Bitcoin Builders
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        Development, entrepreneurship and creation around
                        Bitcoin, the Lightning Network and other freedom tech is
                        exploding. This show digs into the Bitcoin ecosystem
                        through the lens of the Cambrian explosion of creativity
                        around it. This podcast is part of Blockworks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/3KZWFhhqWnNnyssI90zchN"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Bitcoin Builders on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/bitcoinbuilders"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for Bitcoin Builders"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All Bitcoin Builders Episodes"
                        href="/podcast/bitcoinbuilders"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/empire">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/empire"
                    >
                      Empire
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        Empire features interviews with top crypto founders to
                        get the real stories that aren’t shared elsewhere.
                        Empire is your look behind the curtain of the crypto
                        industry.
                      </p>
                      <p>
                        We release two episodes per week: guest interviews on
                        Tuesday and a weekly roundup on Friday.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/4UTePv1CR3APdKOiosR3Iq"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Empire on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/empire/id1554930038"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Empire on iTunes"
                      >
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M5.02862 12.4717C4.56776 12.3069 4.46907 12.083 4.27983 10.7701C4.06012 9.24447 4.01213 8.30011 4.13949 8.00102C4.3082 7.60445 4.76665 7.3793 5.40708 7.37689C6.04299 7.37417 6.50536 7.60143 6.67468 8.00102C6.80264 8.29951 6.75465 9.24447 6.53464 10.7701C6.38524 11.8361 6.30315 12.1056 6.09702 12.2867C5.81392 12.5375 5.41221 12.6069 5.03103 12.472L5.02862 12.4717ZM3.06023 10.9062C1.4688 10.1233 0.44929 8.799 0.0786701 7.03705C-0.0139848 6.58223 -0.0296789 5.49783 0.0578453 5.08013C0.289634 3.96012 0.732687 3.08428 1.4688 2.30984C2.52965 1.19134 3.89442 0.600098 5.41342 0.600098C6.91703 0.600098 8.27637 1.18047 9.31157 2.26547C10.0993 3.08428 10.542 3.95077 10.7687 5.0925C10.846 5.47248 10.846 6.50858 10.7738 6.93594C10.5334 8.29498 9.78852 9.51306 8.68834 10.3464C8.29599 10.6418 7.33926 11.1579 7.18473 11.1579C7.12799 11.1579 7.12286 11.0994 7.14882 10.8619C7.19499 10.4807 7.24147 10.4016 7.45756 10.3108C7.80283 10.1668 8.38985 9.74849 8.75021 9.38692C9.37859 8.75889 9.82518 7.97241 10.0425 7.11099C10.1765 6.58072 10.1612 5.40155 10.0124 4.85558C9.54245 3.11868 8.12697 1.7696 6.39188 1.40924C5.88696 1.30603 4.97037 1.30603 4.46031 1.40924C2.7044 1.7696 1.2524 3.18568 0.808441 4.96725C0.690132 5.45015 0.690132 6.63052 0.808441 7.11461C1.1021 8.29378 1.86477 9.37515 2.86315 10.0189C3.03283 10.1323 3.21011 10.2338 3.39372 10.3228C3.60982 10.4155 3.6563 10.4927 3.69734 10.8736C3.723 11.1054 3.71787 11.1724 3.66143 11.1724C3.62521 11.1724 3.36264 11.0592 3.08467 10.9252L3.06023 10.9062ZM3.08075 8.81198C2.54504 8.38462 2.07151 7.62648 1.87563 6.88313C1.75732 6.43404 1.75732 5.58022 1.88076 5.13264C2.20521 3.9236 3.09614 2.98619 4.33205 2.54585C4.75458 2.39676 5.69018 2.36477 6.2114 2.47794C8.00323 2.87633 9.27535 4.67088 9.02938 6.45094C8.93159 7.16834 8.68441 7.75746 8.24679 8.30464C8.0304 8.5811 7.50525 9.04528 7.4126 9.04528C7.3972 9.04528 7.38241 8.87023 7.38241 8.65685V8.26873L7.65042 7.94941C8.65966 6.74037 8.58753 5.05206 7.48563 3.94322C7.05827 3.51194 6.56391 3.25842 5.92529 3.14162C5.51332 3.06526 5.4258 3.06526 4.99331 3.13649C4.33657 3.24363 3.82803 3.49866 3.37622 3.94473C2.26708 5.03939 2.19495 6.73826 3.20449 7.94821L3.47008 8.26873V8.66108C3.47008 8.87747 3.45288 9.05343 3.43175 9.05343C3.41063 9.05343 3.26183 8.95051 3.10218 8.82164L3.08075 8.81198ZM4.86745 6.70959C4.40931 6.49621 4.16213 6.0942 4.157 5.56996C4.157 5.09884 4.41957 4.68778 4.87258 4.44724C5.16111 4.29634 5.67086 4.29634 5.95909 4.44724C6.2791 4.62004 6.51921 4.91071 6.6285 5.25759C6.92729 6.27317 5.85104 7.1629 4.87802 6.70838L4.86745 6.70959Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.49366 6.90987C6.2029 6.90987 6.77786 6.33492 6.77786 5.62568C6.77786 4.91644 6.2029 4.34149 5.49366 4.34149C4.78442 4.34149 4.20947 4.91644 4.20947 5.62568C4.20947 6.33492 4.78442 6.90987 5.49366 6.90987Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.61537 7.40701C5.761 7.42364 5.9049 7.45293 6.04545 7.49454C6.1992 7.54351 6.34439 7.61611 6.47583 7.70973C6.5893 7.79212 6.6717 7.87753 6.72301 7.98135C6.77431 8.08517 6.80027 8.20892 6.81566 8.41143C6.82592 8.61424 6.82592 8.89432 6.77974 9.42067C6.73357 9.94703 6.64061 10.7121 6.56848 11.2038C6.49635 11.6954 6.44504 11.9145 6.37804 12.0742C6.33324 12.1992 6.25721 12.3108 6.15716 12.3982C6.05711 12.4856 5.93637 12.546 5.80642 12.5737C5.70833 12.5943 5.6081 12.6029 5.50793 12.5993C5.40767 12.6025 5.30739 12.5939 5.20914 12.5737C5.09083 12.5477 4.93751 12.5015 4.82282 12.4089C4.70452 12.3162 4.62725 12.1822 4.56538 12.0072C4.50351 11.8321 4.45734 11.6209 4.39547 11.1986C4.33359 10.7764 4.2512 10.1483 4.19989 9.66936C4.14859 9.19039 4.12776 8.86082 4.12354 8.63929C4.11931 8.41777 4.12867 8.3073 4.15372 8.20167C4.17772 8.10072 4.21952 8.00486 4.27716 7.91858C4.33431 7.83774 4.40388 7.76644 4.48329 7.70731C4.55614 7.65114 4.6377 7.6073 4.72474 7.57753C4.83088 7.53655 4.94061 7.50554 5.0525 7.48488C5.1862 7.45923 5.34073 7.43357 5.4201 7.42301C5.47542 7.41122 5.53259 7.41122 5.58791 7.42301L5.61537 7.40701Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/empire"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for Empire"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All Empire Episodes"
                        href="/podcast/empire"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/expansion">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/expansion"
                    >
                      Expansion{" "}
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        The podcast on Modular. Exploring a refreshed vision for
                        building in crypto.
                      </p>
                      <p>
                        <br />
                      </p>
                      <p>
                        Expansion is a podcast exploring the intersection of
                        modular blockchain design and abundant blockspace.
                      </p>
                      <p>
                        We’ll bring on the leading voices from the modular
                        ecosystem to discuss blockchain design, specialization,
                        applications, and the possibilities that cheap, secure
                        blockspace unlocks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/5ZZIFIltH9gphj8I5wO60P"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Expansion  on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/expansion"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for Expansion "
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All Expansion  Episodes"
                        href="/podcast/expansion"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/forwardguidance">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/forwardguidance"
                    >
                      Forward Guidance
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        The laws of macro investing are being re-written, and
                        investors who fail to adapt to the rapidly changing
                        monetary environment will struggle to keep pace. Jack
                        Farley interviews the brightest minds in finance about
                        which asset classes they think will thrive in the
                        financial future that they envision.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/4YWyPCna1Sg50fmRJGF0LV"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Forward Guidance on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/forward-guidance/id1592743188"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Forward Guidance on iTunes"
                      >
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M5.02862 12.4717C4.56776 12.3069 4.46907 12.083 4.27983 10.7701C4.06012 9.24447 4.01213 8.30011 4.13949 8.00102C4.3082 7.60445 4.76665 7.3793 5.40708 7.37689C6.04299 7.37417 6.50536 7.60143 6.67468 8.00102C6.80264 8.29951 6.75465 9.24447 6.53464 10.7701C6.38524 11.8361 6.30315 12.1056 6.09702 12.2867C5.81392 12.5375 5.41221 12.6069 5.03103 12.472L5.02862 12.4717ZM3.06023 10.9062C1.4688 10.1233 0.44929 8.799 0.0786701 7.03705C-0.0139848 6.58223 -0.0296789 5.49783 0.0578453 5.08013C0.289634 3.96012 0.732687 3.08428 1.4688 2.30984C2.52965 1.19134 3.89442 0.600098 5.41342 0.600098C6.91703 0.600098 8.27637 1.18047 9.31157 2.26547C10.0993 3.08428 10.542 3.95077 10.7687 5.0925C10.846 5.47248 10.846 6.50858 10.7738 6.93594C10.5334 8.29498 9.78852 9.51306 8.68834 10.3464C8.29599 10.6418 7.33926 11.1579 7.18473 11.1579C7.12799 11.1579 7.12286 11.0994 7.14882 10.8619C7.19499 10.4807 7.24147 10.4016 7.45756 10.3108C7.80283 10.1668 8.38985 9.74849 8.75021 9.38692C9.37859 8.75889 9.82518 7.97241 10.0425 7.11099C10.1765 6.58072 10.1612 5.40155 10.0124 4.85558C9.54245 3.11868 8.12697 1.7696 6.39188 1.40924C5.88696 1.30603 4.97037 1.30603 4.46031 1.40924C2.7044 1.7696 1.2524 3.18568 0.808441 4.96725C0.690132 5.45015 0.690132 6.63052 0.808441 7.11461C1.1021 8.29378 1.86477 9.37515 2.86315 10.0189C3.03283 10.1323 3.21011 10.2338 3.39372 10.3228C3.60982 10.4155 3.6563 10.4927 3.69734 10.8736C3.723 11.1054 3.71787 11.1724 3.66143 11.1724C3.62521 11.1724 3.36264 11.0592 3.08467 10.9252L3.06023 10.9062ZM3.08075 8.81198C2.54504 8.38462 2.07151 7.62648 1.87563 6.88313C1.75732 6.43404 1.75732 5.58022 1.88076 5.13264C2.20521 3.9236 3.09614 2.98619 4.33205 2.54585C4.75458 2.39676 5.69018 2.36477 6.2114 2.47794C8.00323 2.87633 9.27535 4.67088 9.02938 6.45094C8.93159 7.16834 8.68441 7.75746 8.24679 8.30464C8.0304 8.5811 7.50525 9.04528 7.4126 9.04528C7.3972 9.04528 7.38241 8.87023 7.38241 8.65685V8.26873L7.65042 7.94941C8.65966 6.74037 8.58753 5.05206 7.48563 3.94322C7.05827 3.51194 6.56391 3.25842 5.92529 3.14162C5.51332 3.06526 5.4258 3.06526 4.99331 3.13649C4.33657 3.24363 3.82803 3.49866 3.37622 3.94473C2.26708 5.03939 2.19495 6.73826 3.20449 7.94821L3.47008 8.26873V8.66108C3.47008 8.87747 3.45288 9.05343 3.43175 9.05343C3.41063 9.05343 3.26183 8.95051 3.10218 8.82164L3.08075 8.81198ZM4.86745 6.70959C4.40931 6.49621 4.16213 6.0942 4.157 5.56996C4.157 5.09884 4.41957 4.68778 4.87258 4.44724C5.16111 4.29634 5.67086 4.29634 5.95909 4.44724C6.2791 4.62004 6.51921 4.91071 6.6285 5.25759C6.92729 6.27317 5.85104 7.1629 4.87802 6.70838L4.86745 6.70959Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.49366 6.90987C6.2029 6.90987 6.77786 6.33492 6.77786 5.62568C6.77786 4.91644 6.2029 4.34149 5.49366 4.34149C4.78442 4.34149 4.20947 4.91644 4.20947 5.62568C4.20947 6.33492 4.78442 6.90987 5.49366 6.90987Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.61537 7.40701C5.761 7.42364 5.9049 7.45293 6.04545 7.49454C6.1992 7.54351 6.34439 7.61611 6.47583 7.70973C6.5893 7.79212 6.6717 7.87753 6.72301 7.98135C6.77431 8.08517 6.80027 8.20892 6.81566 8.41143C6.82592 8.61424 6.82592 8.89432 6.77974 9.42067C6.73357 9.94703 6.64061 10.7121 6.56848 11.2038C6.49635 11.6954 6.44504 11.9145 6.37804 12.0742C6.33324 12.1992 6.25721 12.3108 6.15716 12.3982C6.05711 12.4856 5.93637 12.546 5.80642 12.5737C5.70833 12.5943 5.6081 12.6029 5.50793 12.5993C5.40767 12.6025 5.30739 12.5939 5.20914 12.5737C5.09083 12.5477 4.93751 12.5015 4.82282 12.4089C4.70452 12.3162 4.62725 12.1822 4.56538 12.0072C4.50351 11.8321 4.45734 11.6209 4.39547 11.1986C4.33359 10.7764 4.2512 10.1483 4.19989 9.66936C4.14859 9.19039 4.12776 8.86082 4.12354 8.63929C4.11931 8.41777 4.12867 8.3073 4.15372 8.20167C4.17772 8.10072 4.21952 8.00486 4.27716 7.91858C4.33431 7.83774 4.40388 7.76644 4.48329 7.70731C4.55614 7.65114 4.6377 7.6073 4.72474 7.57753C4.83088 7.53655 4.94061 7.50554 5.0525 7.48488C5.1862 7.45923 5.34073 7.43357 5.4201 7.42301C5.47542 7.41122 5.53259 7.41122 5.58791 7.42301L5.61537 7.40701Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/forwardguidance"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for Forward Guidance"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All Forward Guidance Episodes"
                        href="/podcast/forwardguidance"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/lightspeed">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/lightspeed"
                    >
                      Lightspeed
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        Lightspeed is a podcast for those interested in how
                        crypto can solve real problems and create products users
                        love. It's a callback to the garage days of Silicon
                        Valley, where builders pushed the limits of hardware and
                        software to build world-changing products. We interview
                        the projects and founders that will make this same
                        impact today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/6JWaXUZF24H0joX1e30GYi"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Lightspeed on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/lightspeed"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for Lightspeed"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All Lightspeed Episodes"
                        href="/podcast/lightspeed"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/onthemargin">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/onthemargin"
                    >
                      On The Margin
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        The worlds of macro finance and crypto are continuing to
                        draw closer together. On the Margin will host some of
                        the greatest minds in the world of asset management,
                        markets, and discuss how ideas that were once on the
                        margin are now becoming mainstream.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/2yFL2nSsQucf1rzdEKbFZY"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow On The Margin on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/on-the-margin/id1558223079"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow On The Margin on iTunes"
                      >
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M5.02862 12.4717C4.56776 12.3069 4.46907 12.083 4.27983 10.7701C4.06012 9.24447 4.01213 8.30011 4.13949 8.00102C4.3082 7.60445 4.76665 7.3793 5.40708 7.37689C6.04299 7.37417 6.50536 7.60143 6.67468 8.00102C6.80264 8.29951 6.75465 9.24447 6.53464 10.7701C6.38524 11.8361 6.30315 12.1056 6.09702 12.2867C5.81392 12.5375 5.41221 12.6069 5.03103 12.472L5.02862 12.4717ZM3.06023 10.9062C1.4688 10.1233 0.44929 8.799 0.0786701 7.03705C-0.0139848 6.58223 -0.0296789 5.49783 0.0578453 5.08013C0.289634 3.96012 0.732687 3.08428 1.4688 2.30984C2.52965 1.19134 3.89442 0.600098 5.41342 0.600098C6.91703 0.600098 8.27637 1.18047 9.31157 2.26547C10.0993 3.08428 10.542 3.95077 10.7687 5.0925C10.846 5.47248 10.846 6.50858 10.7738 6.93594C10.5334 8.29498 9.78852 9.51306 8.68834 10.3464C8.29599 10.6418 7.33926 11.1579 7.18473 11.1579C7.12799 11.1579 7.12286 11.0994 7.14882 10.8619C7.19499 10.4807 7.24147 10.4016 7.45756 10.3108C7.80283 10.1668 8.38985 9.74849 8.75021 9.38692C9.37859 8.75889 9.82518 7.97241 10.0425 7.11099C10.1765 6.58072 10.1612 5.40155 10.0124 4.85558C9.54245 3.11868 8.12697 1.7696 6.39188 1.40924C5.88696 1.30603 4.97037 1.30603 4.46031 1.40924C2.7044 1.7696 1.2524 3.18568 0.808441 4.96725C0.690132 5.45015 0.690132 6.63052 0.808441 7.11461C1.1021 8.29378 1.86477 9.37515 2.86315 10.0189C3.03283 10.1323 3.21011 10.2338 3.39372 10.3228C3.60982 10.4155 3.6563 10.4927 3.69734 10.8736C3.723 11.1054 3.71787 11.1724 3.66143 11.1724C3.62521 11.1724 3.36264 11.0592 3.08467 10.9252L3.06023 10.9062ZM3.08075 8.81198C2.54504 8.38462 2.07151 7.62648 1.87563 6.88313C1.75732 6.43404 1.75732 5.58022 1.88076 5.13264C2.20521 3.9236 3.09614 2.98619 4.33205 2.54585C4.75458 2.39676 5.69018 2.36477 6.2114 2.47794C8.00323 2.87633 9.27535 4.67088 9.02938 6.45094C8.93159 7.16834 8.68441 7.75746 8.24679 8.30464C8.0304 8.5811 7.50525 9.04528 7.4126 9.04528C7.3972 9.04528 7.38241 8.87023 7.38241 8.65685V8.26873L7.65042 7.94941C8.65966 6.74037 8.58753 5.05206 7.48563 3.94322C7.05827 3.51194 6.56391 3.25842 5.92529 3.14162C5.51332 3.06526 5.4258 3.06526 4.99331 3.13649C4.33657 3.24363 3.82803 3.49866 3.37622 3.94473C2.26708 5.03939 2.19495 6.73826 3.20449 7.94821L3.47008 8.26873V8.66108C3.47008 8.87747 3.45288 9.05343 3.43175 9.05343C3.41063 9.05343 3.26183 8.95051 3.10218 8.82164L3.08075 8.81198ZM4.86745 6.70959C4.40931 6.49621 4.16213 6.0942 4.157 5.56996C4.157 5.09884 4.41957 4.68778 4.87258 4.44724C5.16111 4.29634 5.67086 4.29634 5.95909 4.44724C6.2791 4.62004 6.51921 4.91071 6.6285 5.25759C6.92729 6.27317 5.85104 7.1629 4.87802 6.70838L4.86745 6.70959Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.49366 6.90987C6.2029 6.90987 6.77786 6.33492 6.77786 5.62568C6.77786 4.91644 6.2029 4.34149 5.49366 4.34149C4.78442 4.34149 4.20947 4.91644 4.20947 5.62568C4.20947 6.33492 4.78442 6.90987 5.49366 6.90987Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.61537 7.40701C5.761 7.42364 5.9049 7.45293 6.04545 7.49454C6.1992 7.54351 6.34439 7.61611 6.47583 7.70973C6.5893 7.79212 6.6717 7.87753 6.72301 7.98135C6.77431 8.08517 6.80027 8.20892 6.81566 8.41143C6.82592 8.61424 6.82592 8.89432 6.77974 9.42067C6.73357 9.94703 6.64061 10.7121 6.56848 11.2038C6.49635 11.6954 6.44504 11.9145 6.37804 12.0742C6.33324 12.1992 6.25721 12.3108 6.15716 12.3982C6.05711 12.4856 5.93637 12.546 5.80642 12.5737C5.70833 12.5943 5.6081 12.6029 5.50793 12.5993C5.40767 12.6025 5.30739 12.5939 5.20914 12.5737C5.09083 12.5477 4.93751 12.5015 4.82282 12.4089C4.70452 12.3162 4.62725 12.1822 4.56538 12.0072C4.50351 11.8321 4.45734 11.6209 4.39547 11.1986C4.33359 10.7764 4.2512 10.1483 4.19989 9.66936C4.14859 9.19039 4.12776 8.86082 4.12354 8.63929C4.11931 8.41777 4.12867 8.3073 4.15372 8.20167C4.17772 8.10072 4.21952 8.00486 4.27716 7.91858C4.33431 7.83774 4.40388 7.76644 4.48329 7.70731C4.55614 7.65114 4.6377 7.6073 4.72474 7.57753C4.83088 7.53655 4.94061 7.50554 5.0525 7.48488C5.1862 7.45923 5.34073 7.43357 5.4201 7.42301C5.47542 7.41122 5.53259 7.41122 5.58791 7.42301L5.61537 7.40701Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/onthemargin"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for On The Margin"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All On The Margin Episodes"
                        href="/podcast/onthemargin"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/on-the-other-side">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/on-the-other-side"
                    >
                      On The Other Side
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        Exploring the intersection of society, culture, and
                        crypto.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/3N9UiYP9Nfp1UzjHOPNDlu"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow On The Other Side on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/on-the-other-side"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for On The Other Side"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All On The Other Side Episodes"
                        href="/podcast/on-the-other-side"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/thebreakdown">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      href="/podcast/thebreakdown"
                    >
                      The Breakdown
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      <p>
                        A daily analysis of macroeconomics, bitcoin, geopolitics
                        and big picture power shifts, hosted by Nathaniel
                        Whittemore @nlw. The Breakdown is part of Blockworks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/538vuul1PuorUDwgkC8JWF"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow The Breakdown on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/thebreakdown"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for The Breakdown"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All The Breakdown Episodes"
                        href="/podcast/thebreakdown"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <div>
              <div className="w-full overflow-hidden">
                <a href="/podcast/empire">
                  <img
                    alt="0xResearch"
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover h-32"
                    srcSet=""
                    src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ color: "transparent" }}
                  />{" "}
                </a>
              </div>
            </div>
            <div className="gap-4 p-5">
              <div className="gap-6">
                <div className="gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <a
                      className="py-1.5 font-semibold text-xl text-left text-dark hover:text-[#5637CD]"
                      href="/podcast/empire"
                    >
                      1000x
                    </a>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div className="flex-grow text-sm font-thin text-left text-light-gray">
                      1000x is a crypto markets podcast hosted by professional
                      traders Avi Felman and Jonah Van Bourg. We bring on
                      experts to dive deep into the macro and micro factors that
                      represent the lifeblood of digital money and web3. As an
                      increasing share of economic activity and attention
                      migrates online, tokenomics and price action is
                      increasingly relevant to everyone. If you’re interested in
                      the future of markets and crypto, this show is for you.
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1.5">
                      <p className="pt-0.5 text-xxs text-left uppercase text-gray-500 font-light">
                        follow
                      </p>
                    </div>
                    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-2">
                      <a
                        href="https://open.spotify.com/show/4UTePv1CR3APdKOiosR3Iq"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow 1000x on Spotify"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M6 0.600098C2.7 0.600098 0 3.3001 0 6.6001C0 9.9001 2.7 12.6001 6 12.6001C9.3 12.6001 12 9.9001 12 6.6001C12 3.3001 9.3 0.600098 6 0.600098ZM8.775 9.3001C8.625 9.4501 8.475 9.5251 8.25 9.4501C6.825 8.5501 5.1 8.4001 3 8.8501C2.775 8.9251 2.625 8.7751 2.55 8.5501C2.475 8.3251 2.625 8.1751 2.85 8.1001C5.1 7.5751 7.125 7.8001 8.7 8.7751C8.85 8.8501 8.85 9.0751 8.775 9.3001ZM9.45 7.6501C9.3 7.8751 9 7.9501 8.85 7.8001C7.2 6.8251 4.8 6.5251 2.85 7.1251C2.625 7.1251 2.4 7.0501 2.325 6.7501C2.25 6.5251 2.4 6.3001 2.625 6.2251C4.8 5.5501 7.5 5.9251 9.375 7.0501C9.525 7.1251 9.6 7.4251 9.45 7.6501ZM9.525 5.9251C7.575 4.8001 4.425 4.6501 2.55 5.2501C2.25 5.3251 1.95 5.1751 1.875 4.8751C1.8 4.5751 1.95 4.2751 2.25 4.2001C4.35 3.6001 7.875 3.6751 10.125 5.0251C10.425 5.1751 10.5 5.5501 10.35 5.7751C10.2 6.0001 9.825 6.0751 9.525 5.9251Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/empire/id1554930038"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow 1000x on iTunes"
                      >
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-[10.83px] h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M5.02862 12.4717C4.56776 12.3069 4.46907 12.083 4.27983 10.7701C4.06012 9.24447 4.01213 8.30011 4.13949 8.00102C4.3082 7.60445 4.76665 7.3793 5.40708 7.37689C6.04299 7.37417 6.50536 7.60143 6.67468 8.00102C6.80264 8.29951 6.75465 9.24447 6.53464 10.7701C6.38524 11.8361 6.30315 12.1056 6.09702 12.2867C5.81392 12.5375 5.41221 12.6069 5.03103 12.472L5.02862 12.4717ZM3.06023 10.9062C1.4688 10.1233 0.44929 8.799 0.0786701 7.03705C-0.0139848 6.58223 -0.0296789 5.49783 0.0578453 5.08013C0.289634 3.96012 0.732687 3.08428 1.4688 2.30984C2.52965 1.19134 3.89442 0.600098 5.41342 0.600098C6.91703 0.600098 8.27637 1.18047 9.31157 2.26547C10.0993 3.08428 10.542 3.95077 10.7687 5.0925C10.846 5.47248 10.846 6.50858 10.7738 6.93594C10.5334 8.29498 9.78852 9.51306 8.68834 10.3464C8.29599 10.6418 7.33926 11.1579 7.18473 11.1579C7.12799 11.1579 7.12286 11.0994 7.14882 10.8619C7.19499 10.4807 7.24147 10.4016 7.45756 10.3108C7.80283 10.1668 8.38985 9.74849 8.75021 9.38692C9.37859 8.75889 9.82518 7.97241 10.0425 7.11099C10.1765 6.58072 10.1612 5.40155 10.0124 4.85558C9.54245 3.11868 8.12697 1.7696 6.39188 1.40924C5.88696 1.30603 4.97037 1.30603 4.46031 1.40924C2.7044 1.7696 1.2524 3.18568 0.808441 4.96725C0.690132 5.45015 0.690132 6.63052 0.808441 7.11461C1.1021 8.29378 1.86477 9.37515 2.86315 10.0189C3.03283 10.1323 3.21011 10.2338 3.39372 10.3228C3.60982 10.4155 3.6563 10.4927 3.69734 10.8736C3.723 11.1054 3.71787 11.1724 3.66143 11.1724C3.62521 11.1724 3.36264 11.0592 3.08467 10.9252L3.06023 10.9062ZM3.08075 8.81198C2.54504 8.38462 2.07151 7.62648 1.87563 6.88313C1.75732 6.43404 1.75732 5.58022 1.88076 5.13264C2.20521 3.9236 3.09614 2.98619 4.33205 2.54585C4.75458 2.39676 5.69018 2.36477 6.2114 2.47794C8.00323 2.87633 9.27535 4.67088 9.02938 6.45094C8.93159 7.16834 8.68441 7.75746 8.24679 8.30464C8.0304 8.5811 7.50525 9.04528 7.4126 9.04528C7.3972 9.04528 7.38241 8.87023 7.38241 8.65685V8.26873L7.65042 7.94941C8.65966 6.74037 8.58753 5.05206 7.48563 3.94322C7.05827 3.51194 6.56391 3.25842 5.92529 3.14162C5.51332 3.06526 5.4258 3.06526 4.99331 3.13649C4.33657 3.24363 3.82803 3.49866 3.37622 3.94473C2.26708 5.03939 2.19495 6.73826 3.20449 7.94821L3.47008 8.26873V8.66108C3.47008 8.87747 3.45288 9.05343 3.43175 9.05343C3.41063 9.05343 3.26183 8.95051 3.10218 8.82164L3.08075 8.81198ZM4.86745 6.70959C4.40931 6.49621 4.16213 6.0942 4.157 5.56996C4.157 5.09884 4.41957 4.68778 4.87258 4.44724C5.16111 4.29634 5.67086 4.29634 5.95909 4.44724C6.2791 4.62004 6.51921 4.91071 6.6285 5.25759C6.92729 6.27317 5.85104 7.1629 4.87802 6.70838L4.86745 6.70959Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.49366 6.90987C6.2029 6.90987 6.77786 6.33492 6.77786 5.62568C6.77786 4.91644 6.2029 4.34149 5.49366 4.34149C4.78442 4.34149 4.20947 4.91644 4.20947 5.62568C4.20947 6.33492 4.78442 6.90987 5.49366 6.90987Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M5.61537 7.40701C5.761 7.42364 5.9049 7.45293 6.04545 7.49454C6.1992 7.54351 6.34439 7.61611 6.47583 7.70973C6.5893 7.79212 6.6717 7.87753 6.72301 7.98135C6.77431 8.08517 6.80027 8.20892 6.81566 8.41143C6.82592 8.61424 6.82592 8.89432 6.77974 9.42067C6.73357 9.94703 6.64061 10.7121 6.56848 11.2038C6.49635 11.6954 6.44504 11.9145 6.37804 12.0742C6.33324 12.1992 6.25721 12.3108 6.15716 12.3982C6.05711 12.4856 5.93637 12.546 5.80642 12.5737C5.70833 12.5943 5.6081 12.6029 5.50793 12.5993C5.40767 12.6025 5.30739 12.5939 5.20914 12.5737C5.09083 12.5477 4.93751 12.5015 4.82282 12.4089C4.70452 12.3162 4.62725 12.1822 4.56538 12.0072C4.50351 11.8321 4.45734 11.6209 4.39547 11.1986C4.33359 10.7764 4.2512 10.1483 4.19989 9.66936C4.14859 9.19039 4.12776 8.86082 4.12354 8.63929C4.11931 8.41777 4.12867 8.3073 4.15372 8.20167C4.17772 8.10072 4.21952 8.00486 4.27716 7.91858C4.33431 7.83774 4.40388 7.76644 4.48329 7.70731C4.55614 7.65114 4.6377 7.6073 4.72474 7.57753C4.83088 7.53655 4.94061 7.50554 5.0525 7.48488C5.1862 7.45923 5.34073 7.43357 5.4201 7.42301C5.47542 7.41122 5.53259 7.41122 5.58791 7.42301L5.61537 7.40701Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://feeds.megaphone.fm/empire"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download Podcast Feed for 1000x"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.50838 12.6001C3.4369 12.6001 4.18962 11.8474 4.18962 10.9189C4.18962 9.99034 3.4369 9.23763 2.50838 9.23763C1.57986 9.23763 0.827148 9.99034 0.827148 10.9189C0.827148 11.8474 1.57986 12.6001 2.50838 12.6001Z"
                            fill="#6A6A6A"
                          ></path>
                          <path
                            d="M0.827148 0.600098V2.78262C6.24874 2.78262 10.6446 7.1785 10.6446 12.6001H12.8271C12.8271 5.97542 7.45183 0.600098 0.827148 0.600098ZM0.827148 4.96514V7.14766C3.83486 7.14766 6.27959 9.59239 6.27959 12.6001H8.46211C8.46211 8.38159 5.04566 4.96514 0.827148 4.96514Z"
                            fill="#6A6A6A"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <a
                        className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#5637CD] hover:text-light-gray"
                        aria-label="All 1000x Episodes"
                        href="/podcast/empire"
                      >
                        all episodes
                      </a>
                    </div>
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6.67067 5.18344H1.6665V6.01677H6.67067V7.26677L8.33317 5.60011L6.67067 3.93344V5.18344Z"
                        fill="#5637CD"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
