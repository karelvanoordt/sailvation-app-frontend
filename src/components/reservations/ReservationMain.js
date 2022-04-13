import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchAllDestinations} from '../../redux/Destinations/destinations';
import { getAllCruises} from '../../redux/Cruises/cruises'
import { postNewReservations } from '../../redux/Reservations/reservations';

const ReservationMain = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  const { cruiseid } = useParams();
  let { userid } = useParams();;
  userid = parseInt(userid, 10)


  useEffect(() => {
    dispatch(getAllCruises(userid));
    dispatch(fetchAllDestinations());
  }, []);

  const cruises = useSelector((state) => state.cruisesReducer);
  const destinations = useSelector((state) => state.destinationReducer.data);
  const reservationPost = useSelector((state) => state.reservationReducer);


  const [cruiseId, setCruiseId] = useState(cruiseid);
  const [destinationId, setDestinationId] = useState(0);

  let image = '';

  const [title, setTitle] = useState('Location');

    if (cruises){
      cruises.map((element) => {
        if (element.id === parseInt(cruiseId, 10)) {
          image = element.image;
        }
        return image
      })
    }    


  const createReservation = () => {
    const postData = {
      reservation:
      {
        user_id: userid,
        cruise_id: parseInt(cruiseId, 10),
        start_date: startDate.toLocaleDateString(),
        destination_id: parseInt(destinationId, 10),
      },
    };
    console.log('postData', postData);

    dispatch(postNewReservations(postData, userid));
  };

  console.log(startDate, userid)


  return (
    <>
      <div
        className="reservations-container"
        style={{
          backgroundImage: `linear-gradient(
          325deg,
          rgba(87, 111, 1, 0.777) 0%,
          rgba(150, 191, 2, 0.93) 100%
          ),url(${(image)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
         <div className="reservation-header-links">
          <Link to={`/${userid}`}><FaArrowLeft style={{ color: '#fff', fontSize: '1.2rem', margin: '5px' }} /></Link>
        </div>
        <div className="reservations-description">
          <div className="reservations-header">
            <h1>Book the Cruise</h1>
          </div>
          <p>
            Pick a Cruise to Reserve!
          </p>
          {
           parseInt(cruiseId, 10) === 0 && destinations && (
           <select
             onChange={(e) => setCruiseId(e.target.value)}
             align="end"
             style={{
               outline: 'none',
               width: '95%',
               borderRadius: '2px',
             }}
             placeholder="Choose a House you want to reserve."
             id="dropdown-menu-align-end"
           >
             <option disabled defaultValue>
               Choose a Cruise you want to reserve
             </option>
             { cruises.map((cruise) => (
               <option key={cruise.id} value={cruise.id}>
                 {cruise.name}
               </option>
             ))}

           </select>
           )
          }
          <div className="reservations-buttons">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            
            <select align="end" title={title} id="dropdown-menu-align-end"  onChange={(e) => setDestinationId(e.target.value)} >
            <option disabled defaultValue>
              {title}
             </option>
             { destinations && destinations.map((destination) => (
               <option key={destination.id} value={destination.id}>{destination.city}</option>
             ))}
              
            </select>
           

            <button type="submit" onClick={createReservation} className="book-btn">Book now</button>
          </div>
           {  reservationPost[0] && reservationPost[0].status === 201
            && <p>Reservation was successful!</p>} 
        </div> 

      </div>
    </>
  );
};

export default ReservationMain;