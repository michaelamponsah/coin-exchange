import React from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import './style.css';

const Details = () => {
  const store = useSelector((state) => state.exchange);
  const { exchanges } = store;
  const { id } = useParams();

  const data = exchanges.filter((exchange) => exchange.id === id);

  if (data.length > 0) {
    window.localStorage.setItem('details', JSON.stringify(data[0]));
  }

  const items = JSON.parse(window.localStorage.getItem('details'));

  const {
    name,
    image,
    url,
    year_established: year,
    trade_volume_24h_btc: volume,
    trust_score: trust,
    trust_score_rank: rank,
    has_trading_incentive: hasIncentive,
    country,
  } = items;

  return (
    <section>
      <div className="head">
        <NavLink to="/">
          <FiArrowLeftCircle className="icon details-icon" />
        </NavLink>
      </div>
      <div className="img-wrapper">
        <img className="detail-img" src={image} alt={name} />
      </div>
      <ul className="detail-list">
        <li>
          <span>Name: </span>
          <span>{name}</span>
        </li>
        <li>
          <span>URL: </span>
          <span>{url}</span>
        </li>
        <li>
          <span>Year established: </span>
          <span>{year}</span>
        </li>
        <li>
          <span>Country: </span>
          <span>{country}</span>
        </li>
        <li>
          <span>Trade Volume in 24 hrs (BTC): </span>
          <span>{volume}</span>
        </li>
        <li>
          <span>Has trading incentive: </span>
          <span>{hasIncentive ? 'True' : 'False'}</span>
        </li>
        <li>
          <span>Trust score: </span>
          <span>{trust}</span>
        </li>
        <li>
          <span>Trust score rank: </span>
          <span>{rank}</span>
        </li>
      </ul>
    </section>
  );
};

export default Details;
