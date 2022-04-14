import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCruises } from '../../redux/Cruises/cruises';
import '../../styles/Cruises.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
SwiperCore.use([Navigation, Pagination]);

function Cruise() {
  const dispatch = useDispatch();
  const cruises = useSelector((state) => state.cruisesReducer);
  const userId = 1
  useEffect(() => {
    dispatch(getAllCruises(userId));
  }, []);
  return (
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
      { cruises && cruises.map((cruise) => (
      <SwiperSlide key={cruise.id} className="reservation-list-item" style={{backgroundImage: `url(${cruise.image})`, height: '400px'}}>
        <section className="info-con">
        <div className="days"><p>{cruise.name}</p></div>
        <p className="d-text">{cruise.description}</p>
        </section>
        <section className="b-sect">
        <div className="price-con"><p className="avg">{cruise.name}</p></div>
          <Link to={`/reservations`} className='r-btn'>
           Reserve
          </Link> 
        </section>
    </SwiperSlide>
    ))}
      </Swiper>
    </div>
  );
}

export default Cruise;
