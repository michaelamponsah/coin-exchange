import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangesAsync } from '../../redux/exchange';
import ItemCard from '../ItemCard';
import './style.css';

const ItemList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.exchange);
  const { status, exchanges } = store;

  const [exchangeData, setExchangesData] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getExchangesAsync());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (exchanges.length > 0) {
      setExchangesData(exchanges);
    }
  }, [exchanges]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length > 0) {
      const filtered = exchanges.filter((item) => item.name.toLowerCase().includes(query));
      setExchangesData(filtered);
    }
  };

  return (
    <div className="list-wrapper">
      <input
        type="search"
        className="search"
        onChange={handleChange}
        placeholder="Search exchanges"
      />
      <ul>
        {
          exchangeData.map((exchange) => (
            <li key={exchange.id}>
              <ItemCard
                id={exchange.id}
                image={exchange.image}
                name={exchange.name}
                rank={exchange.trust_score_rank}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ItemList;
