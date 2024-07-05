import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import CryptoPriceRate from './CoinMarketCapApi';

const CryptoPrice = (props) => {
  const { symbol } = props;
  const [price, setPrice] = useState(null);
  const [PriceParcent, setPriceParcent] = useState(null);
  const [lastPrice, setLastPrice] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://fstream.binance.com/ws/${symbol.toLowerCase()}usdt@ticker`
    );

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // console.log(message);
      const newPrice = parseFloat(message.c).toFixed(2);
      const priceParcent = parseFloat(message.P).toFixed(2);
      setPriceParcent(priceParcent);

      setLastPrice(price);
      setPrice(newPrice);
    };

    return () => {
      ws.close();
    };
  }, [symbol, price]);

  // console.log(symbol, PriceParcent);

  const getPriceStyle = () => {
    if (!price || !lastPrice || price === lastPrice) {
      return "text-black";
    } else if (price > lastPrice) {
      return "text-green-500";
    } else {
      return "text-red-500";
    }
  };

  return (
    <>
      {price ? (
        <Link to={`/price/${symbol.toLowerCase()}`}>
          <span className={`text-sm ${getPriceStyle()}`}>
            {symbol} ${price} {PriceParcent}%
          </span>
        </Link>
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
