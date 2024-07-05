import { useEffect, useState, useRef } from "react";
import { TimelineMax, Linear } from "gsap";
import CryptoPrice from "./CryptoPrice";
import { Link } from "react-router-dom";

const HeaderScroll = () => {
  const tickerWrapperRef = useRef(null);
  const listRef = useRef(null);
  const clonedListRef = useRef(null);

  const symbols = [
    "BTC",
    "ETH",
    "BNB",
    "ADA",
    "SOL",
    "DOT",
    "AVAX",
    "UNI",
    "ATOM",
    "MKR",
    "ARB",
    "OP",
    "AAVE",
    "COMP",
  ];

  useEffect(() => {
    const $tickerWrapper = tickerWrapperRef.current;
    const $list = listRef.current;
    const $clonedList = clonedListRef.current;

    const listItemWidth = 155;
    const listWidth = listItemWidth * symbols.length;

    [$list, $clonedList].forEach((el) => {
      el.style.width = `${listWidth}px`;
    });

    $clonedList.classList.add("cloned");

    const infinite = new TimelineMax({ repeat: -1, paused: true });
    const time = 25;

    infinite
      .fromTo(
        $list,
        time,
        { x: 0 },
        { x: -listWidth, ease: Linear.easeNone },
        0
      )
      .fromTo(
        $clonedList,
        time,
        { x: listWidth },
        { x: 0, ease: Linear.easeNone },
        0
      )
      .set($list, { x: listWidth })
      .to($clonedList, time, { x: -listWidth, ease: Linear.easeNone }, time)
      .to($list, time, { x: 0, ease: Linear.easeNone }, time)
      .progress(1)
      .progress(0)
      .play();

    $tickerWrapper.addEventListener("mouseenter", () => infinite.pause());
    $tickerWrapper.addEventListener("mouseleave", () => infinite.play());

    return () => {
      $tickerWrapper.removeEventListener("mouseenter", () => infinite.pause());
      $tickerWrapper.removeEventListener("mouseleave", () => infinite.play());
    };
  }, [symbols.length]);

  return (
    <div
      className="relative top-1 left-0 pb-1 border-gray-100 border-solid border-b-2 bg-white w-full overflow-hidden cursor-pointer"
      ref={tickerWrapperRef}
    >
      <ul className="flex p-0 m-0 w-full" ref={listRef}>
        {symbols.map((symbol, index) => (
          <li
            className="ml-1"
            style={{ width: "155px", display: "inline-block" }}
            key={index}
          >
            <CryptoPrice symbol={symbol} />
          </li>
        ))}
      </ul>
      <ul
        className="flex p-0 m-0 w-full absolute top-0 left-0"
        ref={clonedListRef}
      >
        {symbols.map((symbol, index) => (
          <li
            className="ml-1"
            style={{ width: "155px", display: "inline-block" }}
            key={index + symbols.length}
          >
            <CryptoPrice symbol={symbol} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderScroll;
