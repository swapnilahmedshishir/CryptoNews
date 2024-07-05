import React, { useEffect, useState } from "react";
import axios from "axios";

const TickerData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://blockworks.co/api/ticker");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Ticker Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TickerData;
