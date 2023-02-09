import React from 'react';
import { PropTypes } from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import './style.css';
import { NavLink } from 'react-router-dom';

const ItemCard = ({
  id, image, name, rank,
}) => (
  <div className="card-wrapper">
    <div className="card-header">
      <NavLink to={`/details/${id}`}>
        <FiArrowRightCircle className="icon" />
      </NavLink>
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
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number,
};

ItemCard.defaultProps = {
  rank: 0,
};

export default ItemCard;
