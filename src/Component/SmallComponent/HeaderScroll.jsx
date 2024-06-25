import React, { useEffect, useRef } from 'react';
import { TimelineMax, Linear } from 'gsap';
import CryptoPrice from './CryptoPrice';

const HeaderScroll = () => {
  const tickerWrapperRef = useRef(null);
  const listRef = useRef(null);
  const clonedListRef = useRef(null);

  const symbols = [
    'BTC', 'ETH', 'BNB', 'ADA', 'SOL', 'DOT', 'AVAX','UNI','ATOM', 'MKR','ARB','OP','AAVE', 'COMP', 'S&P', 'GOLD', 'OIL' ];

  useEffect(() => {
    const $tickerWrapper = tickerWrapperRef.current;
    const $list = listRef.current;
    const $clonedList = clonedListRef.current;

    let listWidth = 0;
    const listItems = $list.querySelectorAll('li');

    listItems.forEach(item => {
      listWidth += item.offsetWidth;
    });

    const endPos = $tickerWrapper.offsetWidth - listWidth;

    [$list, $clonedList].forEach(el => {
      el.style.width = `${listWidth}px`;
    });

    $clonedList.classList.add('cloned');

    const infinite = new TimelineMax({ repeat: -1, paused: true });
    const time = 35;

    infinite
      .fromTo($list, time, { x: 0 }, { x: -listWidth, ease: Linear.easeNone }, 0)
      .fromTo($clonedList, time, { x: listWidth }, { x: 0, ease: Linear.easeNone }, 0)
      .set($list, { x: listWidth }) 
      .to($clonedList, time, { x: -listWidth, ease: Linear.easeNone }, time)
      .to($list, time, { x: 0, ease: Linear.easeNone }, time)
      .progress(1)
      .progress(0)
      .play();

    $tickerWrapper.addEventListener('mouseenter', () => infinite.pause());
    $tickerWrapper.addEventListener('mouseleave', () => infinite.play());

    return () => {
      $tickerWrapper.removeEventListener('mouseenter', () => infinite.pause());
      $tickerWrapper.removeEventListener('mouseleave', () => infinite.play());
    };
  }, []);

  return (
    <div className="relative top-1 left-0 border-gray-100 border-solid border-b-2 bg-white w-full h-12 overflow-hidden cursor-pointer" ref={tickerWrapperRef}>
      <ul className="relative inline-block list-none p-0 m-0 w-full" ref={listRef}>
        {symbols.map((symbol, index) => (
          <li className="float-left pl-4" key={index+ symbols.length}>
            <CryptoPrice symbol={symbol} />
          </li>
        ))}
      </ul>
      <ul className="absolute top-0 left-0 inline-block list-none p-0 m-0 w-full" ref={clonedListRef}>
        {symbols.map((symbol, index) => (
          <li className="float-left pl-4" key={index + symbols.length}>
            <CryptoPrice symbol={symbol} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderScroll;
