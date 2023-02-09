import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangesAsync } from '../../redux/exchange';
import ItemCard from '../ItemCard';
import './style.css';

const ItemList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.exchange);
  const { status, exchanges } = store;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getExchangesAsync());
    }
  }, [dispatch, status]);

  return (
    <div className="list-wrapper">
      <ul>
        {
        exchanges.map((exchange) => (
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
