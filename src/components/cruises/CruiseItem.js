import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CruiseItem({ cruise, handleDelete }) {
  useEffect(() => {}, [cruise]);
  return (
    <li key={cruise.id} className="cruise-list-item">
      <div className="cruises-list-view">
        <img src={cruise.image} alt={cruise.name} className="cruise-image" />
        <h2>{cruise.name}</h2>
        <p>{cruise.description}</p>
        <p>
          Daily Price:
          {cruise.daily_price}
        </p>
      </div>
      <div className="cruises-list-reserve-button-container">
        <Link to={`/cruises/${cruise.id}`} className="gold-button">
          Reserve Now!
        </Link>
      </div>
      <div className="cruise-list-button-container">
        <button
          className="gold-button"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(cruise.user_id, cruise.id);
          }}
          type="submit"
        >
          Delete
        </button>
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
    daily_price: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CruiseItem;
