import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDestinations } from '../../redux/Destinations/destinations';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../styles/destinations.scss';

SwiperCore.use([Navigation, Pagination]);

function Destinations() {

  const dispatch = useDispatch();
  // const userId = 1;
  useEffect(() => {
    dispatch(fetchAllDestinations());
  }, []);

  const destinations = useSelector((state) => state.destinationReducer);
  console.log(destinations.data);

  return (
    <div className="con">
      <div className="title-con">
        <h1>Available destinations</h1>
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
      { destinations.data && destinations.data.map((destination) => (
      <SwiperSlide key={destination.id} className="reservation-list-item" style={{backgroundImage: `url(${destination.image})`, height: '400px'}}>
        <section className="info-con">
          <div className="days"><p>{destination.days}</p> <p>days</p></div>
          <p className="d-text">{destination.country}, {destination.city} from {destination.departure_city}</p>
        </section>
        <section className="b-sect">
          <div className="price-con">$ <p>{destination.price}</p><div className="avg"><i>AVG</i><i>PP</i></div></div>
          <Link to={`/cruises/:id/reservation/:id/destination`} className='r-btn'>
           Book
          </Link>
        </section>
    </SwiperSlide>
    ))}
      </Swiper>
    </div>
  );
}

export default Destinations;
