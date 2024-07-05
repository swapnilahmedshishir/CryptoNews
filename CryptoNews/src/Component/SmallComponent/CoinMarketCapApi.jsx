// CryptoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace this URL with the API endpoint you want to use
    const apiURL = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL, {
          headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
          }
        });
        setCryptoData(response.data.data);
        setLoading(false);
      } catch (ex) {
        console.error(ex);
        setError(ex);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(cryptoData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
     {cryptoData.map(crypto => (
          <span key={crypto.id}>
            {/* {crypto.name} */}
            {crypto.name} ({crypto.symbol}): ${crypto.quote.USD.price.toFixed(2)}
          </span>
        ))}
    </>
  );
};

export default CryptoList;
