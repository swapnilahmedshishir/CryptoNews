import React from "react";

const Advertise = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10 bg-[#f7f7f7] py-12">
        <picture className="max-h-[450px] relative">
          <img
            src="/Images/template-1599667_1280.png"
            className="object-cover"
            alt="advertise-header-image"
            style={{ height: " 250px" }}
          />
        </picture>
        <div className="flex flex-col justify-between items-center relative text-center lg:text-left ">
          <div className="flex flex-col justify-start items-start gap-4 max-w-lg px-6 lg:py-24">
            <p className="w-full text-sm uppercase text-[#5637cd]">advertise</p>
            <div className="flex flex-col justify-start items-start gap-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl max-w-4xl font-semibold text-[#110b29]">
                We believe digital assets will revolutionize finance, society
                and culture.
              </h1>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-lg text-[#110b29]">
              <div>
                We help the brands of tomorrow educate &amp; inspire the
                institutional and retail investors of today.
              </div>
            </p>
            <div className="flex flex-row gap-4 mb-12 mx-auto lg:mx-0">
              <a
                href="#get-in-touch"
                target=""
                rel="noreferrer"
                className="inline-flex items-center text-left cursor-pointer bg-[#5637CD] text-white border border-transparent hover:border-[#5637CD] hover:bg-white hover: text-[#5637CD] uppercase text-base px-3 py-1.5"
              >
                get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10 px-4 md:px-8 lg:px-12 xl:px-24 py-20 border-t border-b">
        <div className="flex flex-col justify-center items-center relative gap-3">
          <p className="text-sm text-center uppercase text-[#5637cd]">
            audience
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl max-w-4xl font-semibold text-center text-[#110b29]">
            We help crypto investors and professionals make better decisions.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap flex-row justify-start items-start self-stretch gap-5">
          <div className="flex flex-col justify-start items-start flex-grow relative gap-1 p-10 border border-[#b4b4b4]/[0.35]">
            <p className="w-full whitespace-nowrap text-xl text-center font-semibold">
              Crypto Decision Makers
            </p>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-4">
              <p className="flex-grow-0 flex-shrink-0 text-3xl text-[#5637cd]">
                55%
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-[#110b29] text-center">
                decision makers
              </p>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-4">
              <p className="flex-grow-0 flex-shrink-0 text-3xl text-[#5637cd]">
                45%
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-[#110b29] text-center">
                director level and above
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative gap-1 p-10 border border-[#b4b4b4]/[0.35]">
            <p className="w-full whitespace-nowrap text-xl text-center font-semibold">
              Seasoned Investors
            </p>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-4">
              <p className="flex-grow-0 flex-shrink-0 text-3xl text-[#5637cd]">
                65%
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-[#110b29] text-center">
                age 35 and above
              </p>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-4">
              <p className="flex-grow-0 flex-shrink-0 text-3xl text-[#5637cd]">
                10-18x
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-[#110b29] text-center">
                more likely to visit ETF, Stock and htmlForex sites
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative gap-1 p-10 border border-[#b4b4b4]/[0.35]">
            <p className="w-full whitespace-nowrap text-xl text-center font-semibold">
              High Earners
            </p>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-4">
              <p className="flex-grow-0 flex-shrink-0 text-3xl text-[#5637cd]">
                71%
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-[#110b29] text-center">
                have bachelor’s degree or higher
              </p>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-4">
              <p className="flex-grow-0 flex-shrink-0 text-3xl text-[#5637cd]">
                45%
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-[#110b29] text-center">
                have a household income higher than 100K
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center self-stretch gap-10 px-6 md:px-12 lg:px-24 py-20 bg-[#f7f7f7]">
        <div className="flex flex-col justify-center items-center relative gap-3">
          <p className="text-sm text-center uppercase text-[#5637cd]">reach</p>
          <p className="text-2xl md:text-3xl lg:text-4xl max-w-4xl font-semibold text-center text-[#110b29]">
            Blockworks is crypto’s most trusted source of news, research, and
            insights.
          </p>
        </div>
        <div className="justify-center items-center self-stretch grid grid-cols-2 lg:grid-cols-4 text-center space-y-4 lg:space-y-0">
          <div className="flex flex-col flex-grow relative gap-2 px-5">
            <p className="text-3xl text-[#5637cd]">7k+</p>
            <p className="self-stretch text-xl text-[#110b29]">
              conference attendees
            </p>
          </div>
          <div className="flex flex-col flex-grow relative gap-2 px-5">
            <p className="text-3xl text-[#5637cd]">600K+</p>
            <p className="self-stretch text-xl text-[#110b29]">
              social media followers
            </p>
          </div>
          <div className="flex flex-col flex-grow relative gap-2 px-5">
            <p className="text-3xl text-[#5637cd]">2M+</p>
            <p className="self-stretch text-xl text-[#110b29]">
              monthly podcast listeners
            </p>
          </div>
          <div className="flex flex-col flex-grow relative gap-2 px-5">
            <p className="text-3xl text-[#5637cd]">175K+</p>
            <p className="self-stretch text-xl text-[#110b29]">
              newsletter susbcribers
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 px-6 md:px-12 lg:px-24 py-20">
        <div className="flex flex-col justify-center items-center relative gap-3">
          <p className="text-sm text-center uppercase text-[#5637cd]">
            channels
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl max-w-4xl font-semibold text-center text-[#110b29]">
            Our content provides investors with the critical analysis and
            information they need to make smarter decisions about digital
            assets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow relative gap-5 p-10 border border-[#b4b4b4]/[0.35]">
            <svg
              width="85"
              height="82"
              viewBox="0 0 85 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[82.32px] h-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M46.3009 14.2805V1H55.9595V14.2805L51.1302 9.85367L46.3009 14.2805Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M9.22287 62.9182L28.891 47.9705M66.7143 62.9182L47.0462 47.9705M47.0462 47.9705L37.9686 41.0715L28.891 47.9705M47.0462 47.9705L63.2648 39.2237M74.7631 33.0227V27.2736L63.2648 18.0749M74.7631 33.0227L63.2648 39.2237M74.7631 33.0227V68.6674L1.17407 69.8172V33.0227M63.2648 18.0749V39.2237M63.2648 18.0749V1H56.3658H43.7177H12.6724V18.3009M12.6724 39.2237L28.891 47.9705M12.6724 39.2237L1.17407 33.0227M12.6724 39.2237V18.3009M1.17407 33.0227V26.1237L12.6724 18.3009M51.7665 30.7805H20.7211M20.7211 20.4321H36.2438H51.7665M20.7211 11.291H33.3693"
                stroke="#110B29"
              ></path>
              <path
                d="M83.4925 46.5914L74.047 81L63.9269 74.5599L54.4814 81V68.1811L42.3372 62.109L83.4925 46.5914Z"
                fill="white"
              ></path>
              <path
                d="M54.4814 81L59.2041 71.5545M54.4814 81V68.1811L42.3372 62.109L83.4925 46.5914L74.047 81L63.9269 74.5599M54.4814 81L63.9269 74.5599M59.2041 71.5545L63.9269 74.5599M59.2041 71.5545L79.4445 51.3142L59.2041 65.4824"
                stroke="#5637CD"
              ></path>
            </svg>
            <div className="flex flex-col justify-center items-start self-stretch relative gap-3">
              <p className="self-stretch text-[32px] text-center text-[#110b29]">
                Newsletter
              </p>
              <p className="self-stretch text-lg text-center text-[#110b29]">
                With more than 160,000 subscribers and a +45% open rate, our
                daily newsletter helps investors understand the day-to-day
                progress of the industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch relative gap-5 p-10 border border-[#b4b4b4]/[0.35]">
            <svg
              width="87"
              height="82"
              viewBox="0 0 87 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[84.48px] h-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M60.1335 73.96H54.0535M15.8135 73.96H16.0535H22.2935M22.2935 73.96L27.0935 59.88M22.2935 73.96H54.0535M27.0935 59.88H48.9335M27.0935 59.88C27.0935 59.88 9.25347 59.88 5.17348 59.88C1.09348 59.88 1.09352 59.88 1.09348 56.68C1.09344 53.48 1.09348 50.28 1.09348 50.28M48.9335 59.88L54.0535 73.96M48.9335 59.88H63.4135M76.2135 43.32C76.2135 43.32 76.2135 7.88 76.2135 4.52C76.2135 1.16 76.2135 1.15999 72.6135 1.16C69.0135 1.16001 6.69326 1 3.89348 1C1.0937 0.999995 1.0937 1 1.09348 4.6C1.09326 8.2 1.09348 50.28 1.09348 50.28M76.2135 43.32C76.2135 43.32 81.4133 43.32 83.4933 43.32C85.5733 43.32 85.5733 43.32 85.5733 45.08C85.5733 46.84 85.5733 48.84 85.5733 48.84M76.2135 43.32C76.2135 43.32 67.7335 43.32 65.5735 43.32C63.4135 43.32 63.4135 43.32 63.4135 45.08C63.4135 46.84 63.4135 48.84 63.4135 48.84M63.4135 48.84H85.5733M63.4135 48.84V50.28M85.5733 48.84V75.88M85.5733 75.88C85.5733 75.88 85.5733 75.88 85.5733 78.44C85.5733 81 85.5733 81 83.4933 81C81.4133 81 67.7335 81 65.5735 81C63.4135 81 63.4135 81 63.4135 78.44C63.4135 75.88 63.4135 75.88 63.4135 75.88M85.5733 75.88H63.4135M63.4135 75.88V59.88M63.4135 50.28H1.09348M63.4135 50.28V59.88M23.7335 14.52H53.4135M53.4135 19.72H23.7335M5.25348 24.84H53.4135M23.7335 9.04H53.4135M67.4137 59.88H81.6537M57.2535 26.44V21.72H72.2135V26.44H57.2535ZM57.2535 18.6H63.2535V13.24H57.2535V18.6ZM66.2935 18.6V13.24H72.2135V18.6H66.2935ZM72.2135 10.2V5.56H57.2535V10.2H72.2135ZM5.25348 20.36H20.2937V5.47999H5.25348V20.36ZM67.4137 71.96V63.08H81.6537V71.96H67.4137Z"
                stroke="#110B29"
              ></path>
              <path
                d="M5.41418 29.48V45.48L54.2142 45.64V29.48H5.41418Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M57.3342 29.48V40.36H72.2141V29.48H57.3342Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M67.2542 53V55.8H81.7341V53H67.2542Z"
                stroke="#5637CD"
              ></path>
            </svg>
            <div className="flex flex-col justify-center items-start self-stretch relative gap-3">
              <p className="self-stretch text-[32px] text-center text-[#110b29]">
                Display Ads
              </p>
              <p className="self-stretch text-lg text-center text-[#110b29]">
                Prominent branding opportunities to our 1M+ monthly website
                visitors through a variety of placements through our flagship
                website.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch relative gap-5 p-10 border border-[#b4b4b4]/[0.35]">
            <svg
              width="120"
              height="82"
              viewBox="0 0 120 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[117.28px] h-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M103.631 1.00177C95.3563 0.878396 88.4526 7.23031 88.1769 15.5014C87.8921 24.0444 95.0844 31.1287 103.631 31.0011C112.053 30.8754 118.912 23.9201 118.631 15.5014C118.359 7.35878 111.777 1.12322 103.631 1.00177Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M100.45 33.7283V66.4548H17.7241V20.0922H85.9044V13.2742H17.7241L14.0878 16.9105V66.4548L17.7241 72.8183M17.7241 72.8183L100.45 72.3638M17.7241 72.8183H1.36084L7.72434 80.9999H109.54L116.813 72.8183L100.45 72.3638M100.45 72.3638L103.631 66.4548V33.7283M52.7233 16.9105H64.5413M67.2685 16.9105H70.4502M72.7229 76H45.4508M96.3587 62.8185V48.2734H74.541V62.8185H96.3587Z"
                stroke="#110B29"
              ></path>
              <path
                d="M47.2683 55.0915C47.2688 46.4553 54.5412 42.3645 58.6317 42.3645M58.6317 42.3645C62.6482 42.3683 70.4496 45.0917 70.4496 55.0915M58.6317 42.3645C62.6482 42.3604 65.9002 39.1084 65.9043 35.0919C65.9082 31.1989 62.9717 28.0627 59.0862 27.8193C54.9504 27.5604 51.3552 30.948 51.3591 35.0919C51.3629 39.1084 54.6152 42.3607 58.6317 42.3645Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M81.3591 62.364C81.3593 58.9113 84.2668 57.2759 85.9022 57.2759M85.9022 57.2759C87.508 57.2774 90.6269 58.3662 90.6269 62.364M85.9022 57.2759C87.508 57.2742 88.8081 55.9741 88.8097 54.3683C88.8113 52.8119 87.6373 51.558 86.0839 51.4608C84.4304 51.3572 82.9931 52.7116 82.9946 54.3683C82.9961 55.9741 84.2964 57.2743 85.9022 57.2759Z"
                stroke="#5637CD"
              ></path>
            </svg>
            <div className="flex flex-col justify-center items-start self-stretch relative gap-3">
              <p className="self-stretch text-[32px] text-center text-[#110b29]">
                Roundtables
              </p>
              <p className="self-stretch text-lg text-center text-[#110b29]">
                Underwrite thoughtful conversations while driving warm leads
                through your sales funnel. Blockworks will spearhead content
                curation, source speakers, handle all operations &amp; logistics
                and secure an engaged audience.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch relative gap-5 p-10 border border-[#b4b4b4]/[0.35]">
            <svg
              width="102"
              height="82"
              viewBox="0 0 102 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[100.6px] h-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M91.0082 13.9321H95.6565V67.0552H6.34336V13.9321H71.4191M14.262 57.0946H70.1408M14.262 49.7902H70.1408M70.1408 42.8178H14.262M70.1408 35.8454H14.262M14.262 30.2509V20.5725H70.1408V30.2509H14.262ZM0.699032 72.3675C0.699032 72.3675 0.698903 77.0158 0.699032 79.0079C0.699162 81 0.699137 81 3.02317 81C5.34719 81 95.9885 81 98.6447 81C101.301 81 101.301 81 101.301 79.0079C101.301 77.0158 101.301 72.3675 101.301 72.3675H67.1029L64.4467 75.3557H38.2172L34.897 72.3675H0.699032Z"
                stroke="black"
              ></path>
              <path
                d="M88.024 10.2799H76.7354V48.4621H88.024V10.2799Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M88.024 7.64038H76.7354C76.7354 7.64038 76.4034 1 82.3797 1C88.356 1 88.024 7.64038 88.024 7.64038Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M88.3726 51.4503H76.7354L82.3796 62.2658L88.3726 51.4503Z"
                stroke="#5637CD"
              ></path>
            </svg>
            <div className="flex flex-col justify-center items-start self-stretch relative gap-3">
              <p className="self-stretch text-[32px] text-center text-[#110b29]">
                Branded Content
              </p>
              <p className="self-stretch text-lg text-center text-[#110b29]">
                Work with our content team to create specialized content htmlFor
                your brand. You can create a custom guide or sponsor a guide, or
                you can create branded content pieces.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch relative gap-5 p-10 border border-[#b4b4b4]/[0.35]">
            <svg
              width="89"
              height="81"
              viewBox="0 0 89 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[86.56px] h-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M71.104 38.4913V5.89017H14.867V38.4913H29.5375H30.76M71.104 38.4913H67.8438H61.9349H71.104ZM32.4227 42.5665H29.5375H27.0924H17.3121H9.97681V36.0462V1H76.8092V42.5665H71.104H60.6879"
                stroke="#110B29"
              ></path>
              <path
                d="M34.5012 37.1629H32.4229V32.5906H60.688V37.1629H58.1941M34.5012 37.1629V46.7232M34.5012 37.1629H58.1941M58.1941 37.1629V45.8918"
                stroke="#110B29"
              ></path>
              <path
                d="M40.7358 31.7593C40.7361 27.5494 44.2812 25.5552 46.2752 25.5552M46.2752 25.5552C48.2332 25.557 52.0361 26.8846 52.0361 31.7593M46.2752 25.5552C48.2332 25.5532 49.8184 23.9679 49.8204 22.01C49.8223 20.1122 48.3908 18.5834 46.4968 18.4648C44.4807 18.3385 42.7281 19.9899 42.73 22.01C42.7319 23.9679 44.3172 25.5533 46.2752 25.5552Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M58.6097 32.1749V28.8496L57.7784 28.0182L57.3627 28.4339M57.3627 28.4339L58.194 27.6026L56.9471 26.3556L56.1157 27.1869L57.3627 28.4339Z"
                stroke="#110B29"
              ></path>
              <path
                d="M23.5346 57.1695C26.7679 57.1663 29.3858 54.5484 29.389 51.3151C29.3922 48.1812 27.0283 45.6565 23.9005 45.4607C20.5711 45.2522 17.677 47.9792 17.6802 51.3151C17.6832 54.5484 20.3013 57.1665 23.5346 57.1695ZM23.5346 57.1695C22.4852 57.1695 21.1757 57.504 19.8784 58.1847M23.5346 57.1695C24.6684 57.1706 26.1769 57.4409 27.6578 58.1385"
                stroke="#5637CD"
              ></path>
              <path
                d="M44.9218 57.1695C48.1551 57.1663 50.773 54.5484 50.7762 51.3151C50.7794 48.1812 48.4155 45.6565 45.2877 45.4607C41.9584 45.2522 39.0642 47.9792 39.0674 51.3151C39.0704 54.5484 41.6885 57.1665 44.9218 57.1695ZM44.9218 57.1695C43.8724 57.1695 42.5629 57.504 41.2656 58.1847M44.9218 57.1695C46.0556 57.1706 47.5641 57.4409 49.045 58.1385"
                stroke="#110B29"
              ></path>
              <path
                d="M66.3085 57.1695C69.5418 57.1663 72.1597 54.5484 72.163 51.3151C72.1661 48.1812 69.8022 45.6565 66.6744 45.4607C63.3451 45.2522 60.4509 47.9792 60.4541 51.3151C60.4572 54.5484 63.0752 57.1665 66.3085 57.1695ZM66.3085 57.1695C65.2591 57.1695 63.9496 57.504 62.6523 58.1847M66.3085 57.1695C67.4423 57.1706 68.9508 57.4409 70.4317 58.1385"
                stroke="#5637CD"
              ></path>
              <path
                d="M1.38867 81.0001C1.38909 72.9385 8.17764 69.1199 11.996 69.1199M11.996 69.1199C15.7453 69.1234 23.0276 71.6656 23.0276 81.0001M11.996 69.1199C15.7453 69.1161 18.7809 66.0805 18.7846 62.3312C18.7883 58.6972 16.0472 55.7697 12.4203 55.5425C8.55961 55.3008 5.20364 58.463 5.2073 62.3312C5.21085 66.0805 8.24669 69.1163 11.996 69.1199Z"
                stroke="#110B29"
              ></path>
              <path
                d="M23.0278 81.0001C23.0282 72.9385 29.8168 69.1199 33.6351 69.1199M33.6351 69.1199C37.3844 69.1234 44.6667 71.6656 44.6667 81.0001M33.6351 69.1199C37.3844 69.1161 40.42 66.0805 40.4238 62.3312C40.4275 58.6972 37.6863 55.7697 34.0594 55.5425C30.1988 55.3008 26.8428 58.463 26.8465 62.3312C26.85 66.0805 29.8859 69.1163 33.6351 69.1199Z"
                stroke="#5637CD"
              ></path>
              <path
                d="M44.6665 81.0001C44.6669 72.9385 51.4555 69.1199 55.2738 69.1199M55.2738 69.1199C59.0231 69.1234 66.3054 71.6656 66.3054 81.0001M55.2738 69.1199C59.0231 69.1161 62.0587 66.0805 62.0625 62.3312C62.0661 58.6972 59.325 55.7697 55.6981 55.5425C51.8374 55.3008 48.4815 58.463 48.4851 62.3312C48.4887 66.0805 51.5245 69.1163 55.2738 69.1199Z"
                stroke="#110B29"
              ></path>
              <path
                d="M66.3054 81.0001C66.3058 72.9385 73.0944 69.1199 76.9127 69.1199M76.9127 69.1199C80.662 69.1234 87.9443 71.6656 87.9443 81.0001M76.9127 69.1199C80.662 69.1161 83.6976 66.0805 83.7014 62.3312C83.7051 58.6972 80.9639 55.7697 77.337 55.5425C73.4764 55.3008 70.1204 58.463 70.124 62.3312C70.1276 66.0805 73.1634 69.1163 76.9127 69.1199Z"
                stroke="#110B29"
              ></path>
            </svg>
            <div className="flex flex-col justify-center items-start self-stretch relative gap-3">
              <p className="self-stretch text-[32px] text-center text-[#110b29]">
                Conferences
              </p>
              <p className="self-stretch text-lg text-center text-[#110b29]">
                Join us at Digital Asset Summit and Permissionless htmlFor
                multi-day, in-person events that bring investors together to
                discuss how digital assets will create opportunities to invest
                and impact the future.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center self-stretch relative gap-5 p-10 border border-[#b4b4b4]/[0.35]">
            <svg
              width="77"
              height="82"
              viewBox="0 0 77 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[75.66px] h-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M9.56806 76.4547H4.11374L1.8411 56.4555M9.56806 76.4547L10.054 80.7156L19.5389 80.0909L16.3572 50.0922L7.29543 51.4557L7.69413 56.001M9.56806 76.4547L7.69413 56.001M7.69413 56.001L4.07733 56.2819M7.69413 56.001L1.8411 56.4555M1.8411 56.4555L4.07733 56.2819M69.9862 56.001L70.4747 50.5467L60.4751 50.0922L58.2312 80.0909L67.7475 81L68.1546 76.4547M69.9862 56.001L68.1546 76.4547M69.9862 56.001L72.0486 56.001L73.1731 56.001M68.1546 76.4547L73.6564 77.3638L76.4123 56.001C76.4123 56.001 74.0821 56.001 73.1731 56.001M73.1731 56.001C73.1731 56.001 78.7317 38.7349 75.4745 28.4781C70.0875 11.5148 56.9092 1.21389 39.1123 1.00324C21.031 0.78922 7.14039 11.1894 1.8411 28.4781C-1.35131 38.8932 4.07733 56.2819 4.07733 56.2819M11.1111 68.9928L12.0489 76.4547M13.9246 76.0265L13.4556 72.7441"
                stroke="#110B29"
              ></path>
              <path
                d="M29.5093 80.4457H39.4091M49.3089 80.4457H39.4091M39.4091 80.4457C39.4091 80.4457 39.4091 73.8374 39.4091 69.6031M29.5093 55.932C29.5093 54.7599 29.5093 55.2184 29.5093 54.0463M29.5093 55.932C29.5093 55.1956 29.5093 54.0463 29.5093 54.0463M29.5093 55.932C30.0294 61.1196 34.1955 64.8889 39.4091 64.8889C44.6228 64.8889 48.8123 61.1219 49.3089 55.932C49.379 55.1989 49.3089 55.2087 49.3089 54.0463M39.4091 69.6031C53.5516 69.6031 53.5516 55.4606 53.5516 55.4606M39.4091 69.6031C24.7952 69.6031 24.7952 55.4606 24.7952 55.4606M29.5093 54.0463H35.1664M29.5093 54.0463C29.5093 52.5644 29.5093 50.3496 29.5093 47.9179M29.5093 47.9179H35.1664M29.5093 47.9179C29.5093 45.9261 29.5093 43.7888 29.5093 41.7894M29.5093 47.9179V41.7894M29.5093 41.7894C29.5093 41.1433 29.5093 40.5116 29.5093 39.9038C29.5093 33.304 33.9416 30.004 39.4091 30.004C44.8766 30.004 49.3089 34.7182 49.3089 39.9038C49.3089 40.4717 49.3089 41.1075 49.3089 41.7894M29.5093 41.7894H34.6949M43.1805 41.7894H49.3089M49.3089 41.7894C49.3089 43.637 49.3089 45.8235 49.3089 47.9179M49.3089 47.9179H43.1805M49.3089 47.9179C49.3089 50.286 49.3089 52.5365 49.3089 54.0463M49.3089 47.9179V54.0463M49.3089 54.0463H43.1805"
                stroke="#5637CD"
              ></path>
            </svg>
            <div className="flex flex-col justify-center items-start self-stretch relative gap-3">
              <p className="self-stretch text-[32px] text-center text-[#110b29]">
                Podcasts
              </p>
              <p className="self-stretch text-lg text-center text-[#110b29]">
                The world’s largest crypto and macro podcast network. Through
                partnerships with our podcast hosts, we’ll make your brand a
                household name.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 px-6 xs:px-0 py-20">
        <p className="text-xl text-left uppercase text-[#110b29]">clients</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 xl:gap-10">
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]">
            <img
              alt="coinbase"
              loading="lazy"
              width="180"
              height="125"
              decoding="async"
              data-nimg="1"
              className="object-cover"
              src="https://blockworks.co/images/advertise/clients/coinbase.svg"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
          <div className="flex justify-center items-center border p-6 w-[200px] h-[140px]"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 px-6 md:px-12 lg:px-24 py-20">
        <div className="w-full lg:w-[75%] p-6 border">
          <h3 className="lg:text-center text-4xl lg:text-5xl  text-[#110b29] border-b-4 border-[#5637CD] mb-12 lg:w-72">
            Get in Touch
          </h3>
          <div id="get-in-touch" className="scroll-mt-48">
            <div>
              <div className="w-full relative">
                <div className="form-wrapper" id="gravity_form_103">
                  <form className="" noValidate="">
                    <div></div>
                    <div className="form-wrapper">
                      <div className="form-fields">
                        <div className="form-field ">
                          <div className="name">
                            <label
                              htmlFor="input_103_5.3"
                              className="gf-label "
                            >
                              First<abbr>*</abbr>
                            </label>
                            <input
                              id="input_103_5.3"
                              name="input_5.3"
                              type="name"
                              maxLength=""
                              required=""
                              aria-label="First"
                              aria-describedby="error_103_5.3"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                          <div className="name">
                            <label
                              htmlFor="input_103_5.6"
                              className="gf-label "
                            >
                              Last<abbr>*</abbr>
                            </label>
                            <input
                              id="input_103_5.6"
                              name="input_5.6"
                              type="name"
                              maxLength=""
                              required=""
                              aria-label="Last"
                              aria-describedby="error_103_5.6"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="form-field ">
                          <div className="text">
                            <label htmlFor="input_103_3" className="gf-label ">
                              Company<abbr>*</abbr>
                            </label>
                            <input
                              id="input_103_3"
                              name="input_3"
                              type="text"
                              placeholder=""
                              maxLength=""
                              required=""
                              aria-label="Company"
                              aria-describedby="error_103_3"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="form-field ">
                          <div className="text">
                            <label htmlFor="input_103_4" className="gf-label ">
                              Title<abbr>*</abbr>
                            </label>
                            <input
                              id="input_103_4"
                              name="input_4"
                              type="text"
                              placeholder=""
                              maxLength=""
                              required=""
                              aria-label="Title"
                              aria-describedby="error_103_4"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="form-field ">
                          <div className="email">
                            <label htmlFor="input_103_6" className="gf-label ">
                              Work Email<abbr>*</abbr>
                            </label>
                            <input
                              id="input_103_6"
                              name="input_6"
                              type="email"
                              placeholder=""
                              maxLength=""
                              required=""
                              aria-label="Work Email"
                              aria-describedby="error_103_6"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="form-field ">
                          <div className="text">
                            <label htmlFor="input_103_16" className="gf-label ">
                              Website<abbr>*</abbr>
                            </label>
                            <input
                              id="input_103_16"
                              name="input_16"
                              type="text"
                              placeholder=""
                              maxLength=""
                              required=""
                              aria-label="Website"
                              aria-describedby="error_103_16"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="form-field ">
                          <div className="text">
                            <label htmlFor="input_103_18" className="gf-label ">
                              Calendly/Calendar Link
                            </label>
                            <input
                              id="input_103_18"
                              name="input_18"
                              type="text"
                              placeholder=""
                              maxLength=""
                              aria-label="Calendly/Calendar Link"
                              aria-describedby="error_103_18"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="form-field ">
                          <div className="text">
                            <label htmlFor="input_103_13" className="gf-label ">
                              Anything else we should know? (marketing goals,
                              target audience, etc.)
                            </label>
                            <input
                              id="input_103_13"
                              name="input_13"
                              type="text"
                              placeholder=""
                              maxLength=""
                              aria-label="Anything else we should know? (marketing goals, target audience, etc.)"
                              aria-describedby="error_103_13"
                              aria-invalid="false"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="form-field gform_validation_container">
                          <label htmlFor="input_19" className="gf-label ">
                            Comments
                          </label>
                          <input
                            type="text"
                            name="input_19"
                            id="input_19"
                            autocomplete="off"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="footer">
                        <input type="hidden" name="nonce" value="" />
                        <button
                          type="submit"
                          className="relative mt-8 inline-flex justify-center rounded-none border border-transparent bg-indigo-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
