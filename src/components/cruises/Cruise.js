import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CruiseItem from './CruiseItem';
import { getAllCruises, postNewCruise } from '../../redux/Cruises/cruises';
import '../../App.css';

function Cruise() {
  const dispatch = useDispatch();
  const cruises = useSelector((state) => state.cruisesReducer);
  const [modalState, setModalState] = useState(false);
  const [newCruiseState, setNewCruiseState] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCruiseState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const userId = 1;
  console.log(cruises);
  useEffect(() => { dispatch(getAllCruises(userId)); }, [dispatch]);
  return (
    <div>
      <div>
        <button className="new-cruise-button" id={{ modalState } && 'new-cruise'} type="button" onClick={() => { setModalState(!modalState); }}>
          {modalState ? 'Cancel' : 'Add New Cruise' }
        </button>
      </div>
      <div className={modalState ? 'shown new-cruise-container' : 'hidden new-cruise-container'}>
        <form>
          <div className="from-element">
            <label htmlFor="name">
              Cruise Name:
              <input
                type="text"
                name="name"
                id="cruise-name"
                // value={newCruiseState.name}
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
                // value={newCruiseState.description}
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
                // value={newCruiseState.image}
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
                // value={newCruiseState.dailyPrice}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-element">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(newCruiseState);
                dispatch(postNewCruise(newCruiseState, userId));
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
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cruise;
