import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CruiseItem({ cruise }) {
  return (
    <li key={cruise.id} className="cruise-list-item">
      <div>
        <h2>{cruise.name}</h2>
        <img src={cruise.image} alt={cruise.name} />
        <p>{cruise.daily_price}</p>
        <p>{cruise.description}</p>
      </div>
      <div>
        <Link to={`/cruises/${cruise.id}`}>
          Reserve Now!
        </Link>
      </div>
    </li>
  );
}

CruiseItem.propTypes = {
  cruise: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    daily_price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CruiseItem;
