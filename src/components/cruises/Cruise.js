import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CruiseItem from './CruiseItem';
import { getAllCruises, postNewCruise, deleteCruise } from '../../redux/Cruises/cruises';
import '../../styles/Cruises.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../styles/destinations.scss';

SwiperCore.use([Navigation, Pagination]);

function Cruise() {
  const dispatch = useDispatch();
  const cruises = useSelector((state) => state.cruisesReducer);
  const [modalState, setModalState] = useState(false);
  const [newCruiseState, setNewCruiseState] = useState({});
  const userId = 1;
  console.log(cruises);
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
    // <div className="cruises-container d-flex-col d-flex-center t-center">
    //   <div className="add-new-container">
    //     <button className="new-cruise-button gold-button-1" id={{ modalState } && 'new-cruise'} type="button" onClick={() => { setModalState(!modalState); }}>
    //       {modalState ? 'Cancel' : 'Add New Cruise' }
    //     </button>
    //   </div>
    //   <div className={modalState ? 'shown new-cruise-container' : 'hidden new-cruise-container'}>
    //     <form id="cruises-form" className="d-flex-col d-flex-center t-center">
    //       <div className="form-element">
    //         <label htmlFor="name">
    //           Cruise Name:
    //           <input
    //             type="text"
    //             name="name"
    //             id="cruise-name"
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </div>
    //       <div className="form-element">
    //         <label htmlFor="description">
    //           Cruise Description:
    //           <input
    //             type="text-area"
    //             name="description"
    //             id="cruise-description"
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </div>
    //       <div className="form-element">
    //         <label htmlFor="image">
    //           Cruise Image Link:
    //           <input
    //             type="text"
    //             name="image"
    //             id="cruise-image"
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </div>
    //       <div className="form-element">
    //         <label htmlFor="daily_price">
    //           Daily Price: 
    //           <input
    //             type="number"
    //             name="daily_price"
    //             id="cruise-price"
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </div>
    //       <div className="form-element">
    //         <button
    //           type="submit"
    //           className="gold-button"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             dispatch(postNewCruise(newCruiseState, userId));
    //             setModalState(!modalState);
    //           }}
    //         >
    //           Save
    //         </button>
    //         <button 
    //         type="button"
    //         className="gold-button"
    //         onClick={() => {
    //           setModalState(!modalState)
    //         }}
    //         >
    //         Cancel
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    //   <div className="cruise-list-container">
    //     <h1 className="gold-text">Cruises</h1>
    //     <ul className="cruise-list d-flex">
    //       {cruises.map((cruise) => (
    //         <CruiseItem
    //           key={cruise.id}
    //           cruise={cruise}
    //           handleDelete={handleDelete}
    //         />
    //       ))}
    //     </ul>
    //   </div>
      <div className="con">
        <div className="title-con">
          <h1>Available Cruises</h1>
        </div>
        <Swiper
          spaceBetween={30}
          // centeredSlides={true}
          navigation={true}
          pagination={{
            type: "fraction",
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          grabCursor={true}
          breakpoints={{
            // when window width is >= 100px
            100: {
              width: 250,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              width: 300,
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              width: 500,
              slidesPerView: 1,
              spaceBetween: 25,
            },
            // when window width is >= 900px
            900: {
              width: 750,
              spaceBetween: 0,
              slidesPerView: 2,
            },
            1000: {
              width: 850,
              slidesPerView: 3,
            },
            1200: {
              width: 950,
              slidesPerView: 4,
            },
            1300: {
              width: 1150,
              slidesPerView: 4,
            },
          }}
          >
          { cruises && cruises.map((cruise) => {
            <SwiperSlide key={cruise.id} className="reservation-list-item" style={{height: '400px'}}>
             <section className="info-con">
              <div className="days"><p>{cruise.name}</p></div>
            </section>
            <section className="b-sect">
              <p className="d-text">{cruise.description}</p>
              <Link to={`/destinations`} className='r-btn'>
               See Destinations
              </Link>
            </section>
            </SwiperSlide>
          })}
        </Swiper>
        </div>
    // </div>
  );
}

export default Cruise;
