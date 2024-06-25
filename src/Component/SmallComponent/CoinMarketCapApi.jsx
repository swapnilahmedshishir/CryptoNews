import React, { useEffect, useState } from 'react';

const CryptoPrice = ({ symbol }) => {
  const [rate, setRate] = useState(null);
  const [lastRate, setLastRate] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol.toLowerCase()}usdt@kline_1d`);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const { k: { p } } = message;
      const newRate = parseFloat(p).toFixed(3);

      // Only update if newRate is a valid number
      if (!isNaN(newRate)) {
        setLastRate(rate);
        setRate(newRate);
      }
    };

    return () => {
      ws.close();
    };
  }, [symbol, rate]);

//   const getRateStyle = () => {
//     if (!rate || !lastRate || rate === lastRate) {
//       return { color: 'black' };
//     } else if (rate > lastRate) {
//       return { color: 'green' };
//     } else {
//       return { color: 'red' };
//     }
//   };

  return (
    <>
      {rate !== null && (
        <span className="text-xs" >{rate}%</span>
      )}
    </>
  );
};

export default CryptoPrice;
