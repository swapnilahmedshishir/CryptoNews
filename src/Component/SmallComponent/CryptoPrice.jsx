import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
// import CryptoPriceRate from './CoinMarketCapApi';

const CryptoPrice = (props) => {
  const { symbol } = props;
  const [price, setPrice] = useState(null);
  const [lastPrice, setLastPrice] = useState(null);

  useEffect(() => {   
    const ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol.toLowerCase()}usdt@aggTrade`);
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // console.log(message);
      const newPrice = parseFloat(message.p).toFixed(2);
      
      setLastPrice(price);
      setPrice(newPrice);
    };

    return () => {
      ws.close();
    };
  }, [symbol, price]);

  const getPriceStyle = () => {
    if (!price || !lastPrice || price === lastPrice) {
      return 'text-black';
    } else if (price > lastPrice) {
      return 'text-green-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <>
      {price ? (
        <span className={`text-sm ${getPriceStyle()}`}>{symbol} ${price} -0.10 % </span>
      ) : (
        <p className="text-xs">Loading...</p>
      )}
    </>
  );
};

CryptoPrice.PropTypes = {
    symbol: PropTypes.string.isRequired,

};


export default CryptoPrice;
