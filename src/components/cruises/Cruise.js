import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CruiseItem from './CruiseItem';
import { getAllCruises, postNewCruise, deleteCruise } from '../../redux/Cruises/cruises';
import '../../App.css';

function Cruise() {
  const dispatch = useDispatch();
  const cruises = useSelector((state) => state.cruisesReducer);
  const [modalState, setModalState] = useState(false);
  const [newCruiseState, setNewCruiseState] = useState({});
  const userId = 1;
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'daily_price') {
      value = parseInt(value, 10);
      name = 'daily_price';
    }
    setNewCruiseState((prevState) => (
      {
        ...prevState,
        [name]: value,
      }));
  };
  useEffect(() => {
    dispatch(getAllCruises(userId));
  }, []);
  const handleDelete = (userId, cruiseId) => {
    dispatch(deleteCruise(userId, cruiseId));
  };
  return (
    <div>
      <div>
        <button className="new-cruise-button" id={{ modalState } && 'new-cruise'} type="button" onClick={() => { setModalState(!modalState); }}>
          {modalState ? 'Cancel' : 'Add New Cruise' }
        </button>
      </div>
      <div className={modalState ? 'shown new-cruise-container' : 'hidden new-cruise-container'}>
        <form id="cruises-form">
          <div className="from-element">
            <label htmlFor="name">
              Cruise Name:
              <input
                type="text"
                name="name"
                id="cruise-name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-element">
            <label htmlFor="description">
              Cruise Description:
              <input
                type="text-area"
                name="description"
                id="cruise-description"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-element">
            <label htmlFor="image">
              Cruise Image Link:
              <input
                type="text"
                name="image"
                id="cruise-image"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-element">
            <label htmlFor="daily_price">
              Daily Price:
              <input
                type="number"
                name="daily_price"
                id="cruise-price"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-element">
            <button
              type="submit"
              onClick={(e) => {
                // const form = document.getElementById('cruises-form');
                e.preventDefault();
                dispatch(postNewCruise(newCruiseState, userId));
                // form.reset();
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1>Cruise</h1>
        <ul className="cruise-list">
          {cruises.map((cruise) => (
            <CruiseItem
              key={cruise.id}
              cruise={cruise}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cruise;
