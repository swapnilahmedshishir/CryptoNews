import Section2 from "./../HomePage/Section2";

const ArticalPage = () => {
  return (
    <>
      <section className="flex flex-row flex-wrap lg:flex-nowrap">
        <div className="basis-1/1 lg:basis-4/6  h-full p-5 md:p-8 lg:p-10 border-r-0 lg:border-r border-b lg:border-b-0">
          <artical className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3 w-full">
              <div className="flex w-full">
                <div className="flex-none">
                  <nav aria-label="breadcrumb">
                    <ol className="flex flex-row gap-2 text-[#5637CD] uppercase text-sm text-left">
                      <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                        <a href="/">home</a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-3 h-3 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                        <a href="/news">news</a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-3 h-3 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
                        <a href="/category/analysis">Analysis</a>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="grow"></div>
              </div>

              <h1 className="self-stretch flex-grow-0 flex-shrink-0 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-headline text-left text-dark">
                On the Margin Newsletter: Crypto ETF filings are only ramping up
              </h1>

              <p className="flex-grow-0 flex-shrink-0 text-md lg:text-lg text-left text-dark">
                With US ETH ETFs imminent, more firms are joining the paperwork
                party
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 content-baseline align-middle justify-start">
              <div className="flex flex-wrap justify-start items-start gap-1 text-xs">
                <div className="flex flex-wrap gap-1 uppercase">
                  by{" "}
                  <span>
                    <a className="link-gray" href="/author/benstrack">
                      Ben Strack
                    </a>
                    <span className="ml-1">&amp;</span>
                  </span>
                  <span>
                    <a className="link-gray" href="/author/casey-wagner">
                      Casey Wagner
                    </a>
                  </span>
                  <span> /</span>
                </div>
                <div className="flex justify-start items-start relative gap-1 uppercase">
                  <time>June 28, 2024 03:30 pm</time>
                </div>
              </div>
            </div>

            <div className="w-full relative">
              <img
                alt="article-image"
                fetchPriority="high"
                width="980"
                height="551.25"
                decoding="async"
                data-nimg="1"
                className="object-cover w-full"
                sizes="100%"
                srcSet=""
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ color: "transparent" }}
              />
              <div className="absolute w-full text-right mt-1 mb-0 pb-0 leading-1 text-xxs text-gray-500">
                <p>ddRender/Shutterstock modified by Blockworks</p>
              </div>
            </div>

            <div className="flex flex-col flex-wrap xl:flex-row xl:flex-nowrap gap-6 mt-2 md:mt-4 xl:mt-6 w-full">
              <div className="relative xl:sticky self-start lg:top-8 pb-0 md:pb-4 lg:pb-8 basis-4/4 lg:basis-1/4 w-full">
                <div className="relative flex xl:flex-col gap-4 justify-center align-middle pt-6 md:px-10 md:py-6 md:bg-gray-50 text-gray-600">
                  <span className="mt-0.5 text-sm text-left uppercase text-[#5637CD]">
                    share
                  </span>
                  <div className="flex flex-row gap-4">
                    <a
                      className="cursor-pointer hover:text-[#5637CD]"
                      href="https://twitter.com/intent/tweet?text=On the Margin Newsletter: Crypto ETF filings are only ramping up&amp;url=https://www.blockworks.co/news/on-the-margin-newsletter-crypto-etf-filing-frenzy&amp;via=Blockworks_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M20 8.3374C19.4 8.6374 18.8 8.7374 18.1 8.8374C18.8 8.4374 19.3 7.8374 19.5 7.0374C18.9 7.4374 18.2 7.6374 17.4 7.8374C16.8 7.2374 15.9 6.8374 15 6.8374C13.3 6.8374 11.8 8.3374 11.8 10.1374C11.8 10.4374 11.8 10.6374 11.9 10.8374C9.2 10.7374 6.7 9.4374 5.1 7.4374C4.8 7.9374 4.7 8.4374 4.7 9.1374C4.7 10.2374 5.3 11.2374 6.2 11.8374C5.7 11.8374 5.2 11.6374 4.7 11.4374C4.7 13.0374 5.8 14.3374 7.3 14.6374C7 14.7374 6.7 14.7374 6.4 14.7374C6.2 14.7374 6 14.7374 5.8 14.6374C6.2 15.9374 7.4 16.9374 8.9 16.9374C7.8 17.8374 6.4 18.3374 4.8 18.3374C4.5 18.3374 4.3 18.3374 4 18.3374C5.5 19.2374 7.2 19.8374 9 19.8374C15 19.8374 18.3 14.8374 18.3 10.5374C18.3 10.4374 18.3 10.2374 18.3 10.1374C19 9.6374 19.6 9.0374 20 8.3374Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="cursor-pointer hover:text-[#5637CD]"
                      href="http://www.linkedin.com/sharing/share-offsite/?url=https://www.blockworks.co/news/on-the-margin-newsletter-crypto-etf-filing-frenzy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M19.3 4.8374H4.7C4.3 4.8374 4 5.1374 4 5.5374V20.2374C4 20.5374 4.3 20.8374 4.7 20.8374H19.4C19.8 20.8374 20.1 20.5374 20.1 20.1374V5.5374C20 5.1374 19.7 4.8374 19.3 4.8374ZM8.7 18.4374H6.4V10.8374H8.8V18.4374H8.7ZM7.6 9.8374C6.8 9.8374 6.2 9.1374 6.2 8.4374C6.2 7.6374 6.8 7.0374 7.6 7.0374C8.4 7.0374 9 7.6374 9 8.4374C8.9 9.1374 8.3 9.8374 7.6 9.8374ZM17.6 18.4374H15.2V14.7374C15.2 13.8374 15.2 12.7374 14 12.7374C12.8 12.7374 12.6 13.7374 12.6 14.7374V18.5374H10.2V10.8374H12.5V11.8374C12.8 11.2374 13.6 10.6374 14.7 10.6374C17.1 10.6374 17.5 12.2374 17.5 14.2374V18.4374H17.6Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="cursor-pointer hover:text-[#5637CD]"
                      href="https://t.me/share/url?url=https://www.blockworks.co/news/on-the-margin-newsletter-crypto-etf-filing-frenzy&amp;text=Blockworks:%20On the Margin Newsletter: Crypto ETF filings are only ramping up"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="mt-1"
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3158 0.996943C15.109 1.00765 14.9143 1.07457 14.7411 1.14952H14.7387C14.5632 1.22715 13.7289 1.61797 12.4618 2.20955C11.1947 2.80381 9.55008 3.57474 7.9175 4.34032C4.65716 5.8688 1.45212 7.37319 1.45212 7.37319L1.49059 7.35713C1.49059 7.35713 1.26938 7.43743 1.03856 7.6141C0.920749 7.69976 0.790912 7.81754 0.677906 8.00224C0.5649 8.18695 0.473533 8.47069 0.507195 8.76247C0.562496 9.25768 0.851022 9.55481 1.0578 9.7181C1.26698 9.88407 1.46654 9.96169 1.46654 9.96169H1.47135L4.47683 11.0886C4.61148 11.5705 5.3929 14.4293 5.58044 15.0879C5.69105 15.4813 5.79924 15.7276 5.93389 15.915C5.99881 16.0114 6.07575 16.0917 6.16711 16.1559C6.20318 16.18 6.24165 16.1987 6.28012 16.2148C6.29214 16.2228 6.30416 16.2255 6.31859 16.2282L6.28733 16.2202C6.29695 16.2228 6.30416 16.2309 6.31138 16.2335C6.33542 16.2416 6.35225 16.2442 6.38351 16.2496C6.85957 16.4102 7.24187 16.081 7.24187 16.081L7.26351 16.0622L9.03795 14.2634L12.0122 16.8037L12.0795 16.8358C12.6998 17.1383 13.3274 16.9697 13.6592 16.6725C13.9934 16.3727 14.1232 15.9899 14.1232 15.9899L14.1449 15.9284L16.4434 2.81987C16.5084 2.49598 16.5252 2.19349 16.4531 1.89904C16.3809 1.60459 16.1958 1.32887 15.9722 1.18165C15.7462 1.03174 15.5226 0.986236 15.3158 0.996943ZM15.2533 2.40229C15.2509 2.44512 15.2581 2.43976 15.2413 2.52274V2.53077L12.9643 15.5028C12.9547 15.5215 12.9379 15.5617 12.8922 15.6018C12.8441 15.6446 12.8056 15.6714 12.6061 15.5831L8.96822 12.4779L6.77061 14.7077L7.23225 11.4259C7.23225 11.4259 12.9306 5.51278 13.1759 5.25848C13.4211 5.00418 13.3394 4.95064 13.3394 4.95064C13.3562 4.64013 12.9691 4.85963 12.9691 4.85963L5.47465 10.0286L5.47225 10.0152L1.8801 8.66878V8.6661C1.87769 8.6661 1.87288 8.66343 1.87048 8.66343C1.87288 8.66343 1.88972 8.65539 1.88972 8.65539L1.90895 8.64469L1.92819 8.63666C1.92819 8.63666 5.13563 7.13227 8.39598 5.60379C10.0286 4.83821 11.6732 4.06728 12.9379 3.47302C14.2026 2.88144 15.1379 2.44779 15.1908 2.4237C15.2413 2.40229 15.2172 2.40229 15.2533 2.40229Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="cursor-pointer hover:text-[#5637CD]"
                      href="mailto:?subject=On the Margin Newsletter: Crypto ETF filings are only ramping up&amp;body=https://www.blockworks.co/news/on-the-margin-newsletter-crypto-etf-filing-frenzy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M19.15 6.25H6.35C5.47 6.25 4.758 6.97 4.758 7.85L4.75 17.45C4.75 18.33 5.47 19.05 6.35 19.05H19.15C20.03 19.05 20.75 18.33 20.75 17.45V7.85C20.75 6.97 20.03 6.25 19.15 6.25ZM20.75 7.85L12.75 13.45L4.758 7.85C4.77224 7.35781 4.88776 7.11994 5.25 6.75L12.75 11.85L20.25 6.75L20.75 7.85Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <span className="cursor-pointer hover:text-[#5637CD]">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6.5 h-6.5 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M3.9 12.25C3.9 10.54 5.29 9.15 7 9.15H11V7.25H7C4.24 7.25 2 9.49 2 12.25C2 15.01 4.24 17.25 7 17.25H11V15.35H7C5.29 15.35 3.9 13.96 3.9 12.25ZM8 13.25H16V11.25H8V13.25ZM17 7.25H13V9.15H17C18.71 9.15 20.1 10.54 20.1 12.25C20.1 13.96 18.71 15.35 17 15.35H13V17.25H17C19.76 17.25 22 15.01 22 12.25C22 9.49 19.76 7.25 17 7.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2 basis-4/4 xl:basis-3/4">
                <section className="w-full">
                  <div className="prose prose-purple max-w-none prose-p:text-justify prose-p:mt-0 prose-p:mb-6 prose-h2:text-xl prose-headings:scroll-mt-28 prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-purple-500 prose-a:font-base prose-a:border-none prose-a:hover:border-none prose-a:underline prose-pre:rounded-xl prose-pre:bg-purple-900 prose-pre:shadow-lg">
                    <p className="mb-7">
                      <em>
                        Today, enjoy the On the Margin newsletter on
                        Blockworks.co. Tomorrow, get the news delivered directly
                        to your inbox.&nbsp;
                      </em>
                      <a
                        href="https://blockworks.co/newsletter/onthemargin"
                        rel="nofollow"
                        target="_blank"
                      >
                        <em>Subscribe to the On the Margin newsletter</em>
                      </a>
                    </p>
                    <hr className="wp-block-separator has-alpha-channel-opacity mb-7"></hr>
                    {/* artical text */}
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque veritatis exercitationem dicta. Quaerat numquam
                      laboriosam velit odit voluptatum. Reprehenderit
                      perspiciatis quia amet nihil, tenetur qui! Sequi
                      dignissimos laborum expedita nemo veniam optio nobis.
                      Dicta culpa fugiat at possimus eum quas ad et neque
                      debitis sunt? Mollitia doloribus magnam voluptatibus
                      delectus saepe aliquam voluptates expedita, deserunt
                      quisquam eligendi quod numquam tempora animi accusamus
                      maiores quidem error accusantium dolor molestias optio qui
                      odit? Commodi nihil, in inventore aut porro tenetur
                      tempore corrupti harum, beatae asperiores illo ut dolores,
                      alias repellat. Officia, aspernatur magni! Eum adipisci
                      rerum unde quod ducimus nostrum veritatis expedita quaerat
                      iure ex, ratione iste quisquam sunt aliquam cum sed est
                      temporibus facere, non quo. Nam excepturi omnis expedita
                      doloribus, itaque, veniam non minima dicta quas magnam
                      illum repellendus, deleniti suscipit laudantium aut
                      aliquid minus accusamus eius nobis possimus nesciunt
                      architecto! Natus, illum iusto porro ut animi quia
                      repellendus odio voluptatibus, tempore nobis maxime
                      provident, voluptatem numquam minus sit sapiente dicta
                      dolore perferendis sunt enim vel pariatur in soluta sequi!
                      Reprehenderit, necessitatibus magnam iure quaerat
                      deleniti, ducimus consectetur, sed beatae error sint optio
                      officiis reiciendis quisquam voluptatum est repellat quae
                      dolorem a quos adipisci nostrum! Iure, obcaecati. Modi
                      necessitatibus eius amet ab laudantium quibusdam placeat
                      aliquid. Voluptates ipsa quo quod cupiditate quae? Aut
                      vero, assumenda adipisci doloribus harum ipsam? Fugiat hic
                      temporibus accusamus autem fuga nemo sequi. Veritatis ab
                      iure mollitia deleniti pariatur repudiandae consequuntur
                      eaque aspernatur, suscipit ducimus atque magnam tempora
                      culpa in a? Quos a possimus totam nulla. Doloremque
                      officia explicabo autem similique adipisci distinctio,
                      nemo veniam ipsa omnis odit voluptas? Unde porro aperiam
                      soluta, similique eaque reiciendis molestiae atque odio
                      tenetur voluptatibus veniam consequuntur aut! Ex, aliquam
                      rem. Doloremque, ut necessitatibus? Doloremque optio
                      voluptatem, aliquid alias vitae facilis quibusdam odit
                      aperiam sunt ratione quas maxime voluptate placeat
                      temporibus perferendis, excepturi ducimus porro deserunt
                      reiciendis. Iusto magni perspiciatis eveniet ut sequi
                      incidunt hic excepturi. Aliquam nulla provident minima
                      magni ullam inventore est dolores sapiente eveniet cum,
                      recusandae similique enim vero incidunt fugiat molestias
                      vitae! Minus vitae tempore esse animi excepturi quo!
                      Aperiam at quas eligendi id vero tempore, nihil sit. Sequi
                      debitis excepturi, numquam eaque accusamus quaerat
                      aspernatur sit provident perspiciatis, incidunt deserunt
                      assumenda aperiam error! Ratione iste soluta ut distinctio
                      omnis sapiente? Vel voluptas unde enim ipsa architecto
                      voluptate assumenda quidem est minima temporibus
                      asperiores esse, autem suscipit dolorem non voluptatibus
                      dignissimos deleniti voluptatem sequi excepturi.
                      Praesentium sapiente natus quas totam blanditiis,
                      temporibus voluptates culpa quibusdam incidunt aspernatur?
                      Quis, libero sapiente quasi quibusdam voluptatum voluptas
                      unde assumenda quaerat quo inventore nihil alias numquam.
                      Dicta, nihil sint officia nulla, assumenda id pariatur
                      similique tempore ex neque illum? Aut distinctio ea
                      deleniti cupiditate accusantium aspernatur explicabo, sit
                      iure alias, cumque iste possimus aliquid voluptate
                      reiciendis veritatis illo beatae omnis ipsa autem. Hic ad
                      iusto quisquam aliquam harum veniam laudantium dolore
                      mollitia nulla voluptatem! Accusamus iste nesciunt
                      corrupti soluta totam ex adipisci incidunt sed, omnis
                      deleniti veniam eos perferendis cum reprehenderit odio
                      officia suscipit dolorum? Ratione blanditiis explicabo
                      veniam qui?
                    </div>
                  </div>
                </section>
                {/* tag */}
                <section className="flex gap-6 mt-4 py-8 uppercase">
                  <span className="text-gray-800">Tags</span>
                  <ul className="flex flex-row flex-wrap gap-3 divide ">
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/elections"
                      >
                        Elections
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/etfs"
                      >
                        ETFs
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/on-the-margin-newsletter"
                      >
                        On the Margin Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/sec"
                      >
                        SEC
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/solana"
                      >
                        Solana
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#5637CD] hover:text-gray-800"
                        href="/tag/us-politics"
                      >
                        US politics
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </artical>
        </div>
        <div className="basis-1/1 lg:basis-2/6 min-w-[300px]">
          <div>
            <div className="gap-4 p-10">
              <div className="flex flex-col justify-start items-start self-stretch gap-2">
                <div className="flex justify-start items-center self-stretch relative gap-1">
                  <p className="flex-grow text-xs uppercase text-[#5637CD]">
                    <a href="/newsletter">Newsletter</a>
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch relative gap-2.5">
                  <p className="flex-grow text-[22px] text-left">
                    <a href="/newsletter/daily">Blockworks Daily</a>
                  </p>
                </div>
                <div className="flex justify-start items-start self-stretch relative gap-2.5">
                  <p className="flex-grow text-sm text-light-gray cursor-default"></p>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-start items-center self-stretch mt-2">
                  <div className="self-stretch flex-grow bg-white">
                    <input type="hidden" name="verification" value="" />
                    <input
                      className="flex justify-start items-start w-full text-light-gray focus:text-black border focus:outline-none border-r-0 border-gray-200 focus:border-primary p-2 text-xs"
                      placeholder="Email address"
                      value=""
                    />
                  </div>
                  <button className="flex justify-start items-center gap-1 border border-transparent cursor-pointer border-l-0 bg-violet-600 hover:border-gray-800 hover:bg-gray-700 px-4 py-2 text-xs">
                    <span className="text-center uppercase text-white">
                      Subscribe
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="divide-y border-y">
              <div className="flex justify-start items-center px-10 py-5 w-full">
                <div className="gap-2.5">
                  <p className="font-semibold text-left uppercase text-dark">
                    Upcoming Events
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div className="flex flex-col justify-start items-start gap-4 p-10">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex justify-start items-start relative">
                      <p className="flex-grow text-2xl text-left font-semibold text-dark hover:text-gray-800">
                        <a href="/event/permissionless-iii-hackathon">
                          Permissionless III Hackathon
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col justify-start relative text-gray-700">
                      <div className="flex justify-start items-center relative gap-1 text-gray-700">
                        <svg
                          width="8"
                          height="10"
                          viewBox="0 0 8 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.65685 6.65685C6.03287 7.28084 4.31371 9 4.31371 9C4.31371 9 2.64066 7.32695 1.97056 6.65685C0.676479 5.36277 0.676479 3.26465 1.97056 1.97056C3.26465 0.676479 5.36277 0.676479 6.65685 1.97056C7.95094 3.26465 7.95094 5.36277 6.65685 6.65685Z"
                            stroke="#111827"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M5.55635 4.31371C5.55635 5 5 5.55635 4.31371 5.55635C3.62742 5.55635 3.07107 5 3.07107 4.31371C3.07107 3.62742 3.62742 3.07107 4.31371 3.07107C5 3.07107 5.55635 3.62742 5.55635 4.31371Z"
                            stroke="#111827"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="flex justify-start items-center relative text-sm text-left uppercase whitespace-nowrap">
                          Salt Lake City, UT
                        </span>
                      </div>
                      <div className="flex justify-start items-center relative gap-1">
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.84918 2.77778V1M6.40473 2.77778V1M2.40473 4.55556H6.84918M1.51584 9H7.73806C8.22898 9 8.62695 8.60203 8.62695 8.11111V2.77778C8.62695 2.28686 8.22898 1.88889 7.73806 1.88889H1.51584C1.02492 1.88889 0.626953 2.28686 0.626953 2.77778V8.11111C0.626953 8.60203 1.02492 9 1.51584 9Z"
                            stroke="#110B29"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <div className="flex justify-start items-center relative gap-1">
                          <p className="text-sm text-left uppercase">
                            MON - TUES, OCT. 7 - 8, 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start self-stretch relative gap-2.5">
                    <p className="flex-grow text-base text-left text-[#6a6a6a]">
                      Blockworks and Bankless in collaboration with buidlbox are
                      excited to announce the second installment of the
                      Permissionless Hackathon – taking place October 7-8 in
                      Salt Lake City, Utah. We’ve partnered with buidlbox to
                      bring together the brightest minds in crypto for […]
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-start items-start self-stretch gap-3">
                    <a
                      href="/event/permissionless-iii-hackathon"
                      className="inline-flex items-center text-left cursor-pointer bg-gray-50 text-gray-900 border border-gray-100 hover:border-gray-200 hover:bg-white hover:text-black uppercase text-base px-3 py-1.5"
                    >
                      learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div className="flex flex-col justify-start items-start gap-4 p-10">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex justify-start items-start relative">
                      <p className="flex-grow text-2xl text-left font-semibold text-dark hover:text-gray-800">
                        <a href="/event/permissionless-iii">
                          Permissionless III
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col justify-start relative text-gray-700">
                      <div className="flex justify-start items-center relative gap-1 text-gray-700">
                        <svg
                          width="8"
                          height="10"
                          viewBox="0 0 8 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.65685 6.65685C6.03287 7.28084 4.31371 9 4.31371 9C4.31371 9 2.64066 7.32695 1.97056 6.65685C0.676479 5.36277 0.676479 3.26465 1.97056 1.97056C3.26465 0.676479 5.36277 0.676479 6.65685 1.97056C7.95094 3.26465 7.95094 5.36277 6.65685 6.65685Z"
                            stroke="#111827"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M5.55635 4.31371C5.55635 5 5 5.55635 4.31371 5.55635C3.62742 5.55635 3.07107 5 3.07107 4.31371C3.07107 3.62742 3.62742 3.07107 4.31371 3.07107C5 3.07107 5.55635 3.62742 5.55635 4.31371Z"
                            stroke="#111827"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="flex justify-start items-center relative text-sm text-left uppercase whitespace-nowrap">
                          Salt Lake City, UT
                        </span>
                      </div>
                      <div className="flex justify-start items-center relative gap-1">
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M2.84918 2.77778V1M6.40473 2.77778V1M2.40473 4.55556H6.84918M1.51584 9H7.73806C8.22898 9 8.62695 8.60203 8.62695 8.11111V2.77778C8.62695 2.28686 8.22898 1.88889 7.73806 1.88889H1.51584C1.02492 1.88889 0.626953 2.28686 0.626953 2.77778V8.11111C0.626953 8.60203 1.02492 9 1.51584 9Z"
                            stroke="#110B29"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <div className="flex justify-start items-center relative gap-1">
                          <p className="text-sm text-left uppercase">
                            WED - FRI, OCTOBER 9 - 11, 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start self-stretch relative gap-2.5">
                    <p className="flex-grow text-base text-left text-[#6a6a6a]">
                      Pack your bags, anon — we’re heading west! Join us in the
                      beautiful Salt Lake City for the third installment of
                      Permissionless. Come for the alpha, stay for the fresh
                      air. Permissionless III promises unforgettable panels,
                      killer networking opportunities, and mountains […]
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-start items-start self-stretch gap-3">
                    <a
                      href="/event/permissionless-iii"
                      className="inline-flex items-center text-left cursor-pointer bg-gray-50 text-gray-900 border border-gray-100 hover:border-gray-200 hover:bg-white hover:text-black uppercase text-base px-3 py-1.5"
                    >
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="items-start">
              <div className="flex justify-start items-center px-10 py-5 w-full border-b">
                <div className="gap-2.5">
                  <p className="font-semibold text-left uppercase text-dark">
                    recent research
                  </p>
                </div>
              </div>
              <div className="pt-10 px-10">
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="flex flex-col justify-start self-stretch gap-2">
                    <div className="min-h-[100px]">
                      <a
                        href="https://app.blockworksresearch.com/research/ton-not-right-now"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="TON.png"
                          loading="eager"
                          width="384"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-auto"
                          sizes="(min-width: 60em) 300px, (min-width: 28em) 150px"
                          srcSet=""
                          src=""
                        />
                      </a>
                    </div>
                    <div className="flex justify-start items-center self-stretch gap-1">
                      <p className="flex-grow text-xs uppercase text-[#5637CD]">
                        Research
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch gap-2.5">
                      <a
                        href="https://app.blockworksresearch.com/research/ton-not-right-now"
                        target="_blank"
                        className="flex-grow text-[22px] font-headline hover:text-[#5637CD]"
                        rel="noreferrer"
                      >
                        TON: NOT Right Now
                      </a>
                    </div>
                    <div className="flex justify-start items-start self-stretch gap-2.5">
                      <p className="flex-grow text-base text-left text-[#6a6a6a]">
                        We acknowledge TON’s highly unique distribution
                        relationship with Telegram, Telegram’s ambitions as a
                        super app and developer platform rivaling the scale of
                        WeChat as a TON growth driver, and the TON chain’s
                        relatively high scale and speed versus popular EVM
                        chains today. However, we believe the TON ecosystem is
                        at a very early stage, its native smart contract
                        language may be prohibitive to attracting meaningful
                        developer activity, and that Telegram’s distribution is
                        overstated and its viability as a developer platform and
                        super app is far more challenged than the market
                        appreciates.{" "}
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch gap-1">
                      <div className="flex justify-start items-start relative">
                        <p className="text-xs uppercase text-light-gray">
                          by{" "}
                          <a
                            href="https://app.blockworksresearch.com/team/ryan-connor"
                            className="text-[#5637CD] hover:text-dark"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ryan Connor
                          </a>
                        </p>
                      </div>
                      <div className="flex justify-start items-start gap-1">
                        <p className="text-xs uppercase text-light-gray">/</p>
                        <p className="text-xs uppercase text-light-gray">
                          <time>2 days ago</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section2 />
    </>
  );
};

export default ArticalPage;
