import Link from 'next/link';
import { FaBook, FaImage, FaExclamationCircle, FaLightbulb } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles for version 11
import 'swiper/css'; // Base styles
import 'swiper/css/navigation'; // Navigation button styles
import 'swiper/css/pagination'; // Pagination button styles


import { Navigation, Pagination } from 'swiper';

export default function Home() {
  return (
    <>
      <div className="carousel-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop
        >
          <SwiperSlide>
            <img src="/images/image1.png" alt="Image 1" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image2.png" alt="Image 2" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image3.png" alt="Image 3" className="carousel-image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="nav-grid">
        <Link href="/overview">
          <div className="nav-item">
            <FaBook className="nav-item-icon" />
            <span className="nav-item-text">Overview</span>
          </div>
        </Link>
        <Link href="/pengaruh-medsos">
          <div className="nav-item">
            <FaBook className="nav-item-icon" />
            <span className="nav-item-text">Pengaruh Medsos</span>
          </div>
        </Link>
        <Link href="/infografis">
          <div className="nav-item">
            <FaImage className="nav-item-icon" />
            <span className="nav-item-text">Infografis</span>
          </div>
        </Link>
        <Link href="/dampak-buruk">
          <div className="nav-item">
            <FaExclamationCircle className="nav-item-icon" />
            <span className="nav-item-text">Dampak Buruk</span>
          </div>
        </Link>
        <Link href="/cara-mengatasi">
          <div className="nav-item">
            <FaLightbulb className="nav-item-icon" />
            <span className="nav-item-text">Cara Mengatasi</span>
          </div>
        </Link>
      </div>
    </>
  );
}