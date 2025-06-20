'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';

export default function HeroSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  // Array of slide images
  const slideImages = [
    '/Images/home-img-I.png',
    '/Images/home-img-II.png',
    '/Images/home-img-III.png',
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  if (!mounted) {
    return <div className="h-screen bg-gray-100" />;
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'bullets',
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) => {
              // Add index as a data attribute and optional label
              return `<span class="${className}" data-index="${index}"></span>`;
            },
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex); // Update active index
          }}
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>

      <div className="hero-content">
        <div className="container">
          <h1>Welcome to Our Music School</h1>
          <p>Discover the joy of learning guitar with our expert instructors</p>
          <button className="cta-button">Enroll Now</button>
        </div>
      </div>
    </section>
  );
}