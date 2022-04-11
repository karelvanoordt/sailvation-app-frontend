import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CruiseItem from './CruiseItem';
import { getAllCruises } from '../../redux/Cruises/cruises';

function Cruise() {
  const dispatch = useDispatch();
  const cruises = useSelector((state) => state.cruisesReducer);
  const reduxState = useSelector((state) => state);
  console.log('reduxState', reduxState);
  console.log('Bura', cruises);
  const userId = 1;
  useEffect(() => { dispatch(getAllCruises(userId)); }, []);
  return (
    <div>
      <div>
        button
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
