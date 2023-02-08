import React from 'react';
import { PropTypes } from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import './style.css';

const ItemCard = ({ image, name, rank }) => (
  <div className="card-wrapper">
    <div className="card-header">
      <FiArrowRightCircle className="icon" />
    </div>
    <div className="card-body">
      <img src={image} alt={name} />
    </div>
    <div className="card-footer">
      <p>{name}</p>
      <p>
        Rating:
        {rank}
      </p>
    </div>
  </div>
);

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number,
};

ItemCard.defaultProps = {
  rank: 0,
};

export default ItemCard;
