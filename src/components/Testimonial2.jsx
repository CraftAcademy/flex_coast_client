import profile1 from '../assets/social-img-1.jpg'
import profile2 from '../assets/social-img-2.jpg'
import profile3 from '../assets/social-img-3.jpg'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
const Testimonial2 = () => {
  SwiperCore.use([EffectCoverflow, Pagination, Navigation])
  return (
    <Swiper
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        1280: {
          maxWidth: 1280,
          slidesPerView: 3.5,
        },
      }}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      navigation={true}
      pagination={true}
      loop={true}
      className='pagination'>
      <section>
        <SwiperSlide>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='testimonialBox'>
                  <div className='details'>
                    <img
                      className='profile-image'
                      src={profile1}
                      alt='profile'
                    />
                    <h3>Delbert Simonas</h3>
                    <h4>CEO OF FAKE-NEWS</h4>
                  </div>
                  <div className='content'>
                    <p>
                      "Online reviews can make or break a customer's decision to
                      make a purchase. Read about these customer review on site"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='testimonialBox'>
                  <div className='details'>
                    <img
                      className='profile-image'
                      src={profile2}
                      alt='profile'
                    />
                    <h3>Delbert Simonas</h3>
                    <h4>CEO OF FAKE-NEWS</h4>
                  </div>
                  <div className='content'>
                    <p>
                      "Online reviews can make or break a customer's decision to
                      make a purchase. Read about these customer review on site"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='testimonialBox'>
                  <div className='details'>
                    <img
                      className='profile-image'
                      src={profile3}
                      alt='profile'
                    />
                    <h3>Delbert Simonas</h3>
                    <h4>CEO OF FAKE-NEWS</h4>
                  </div>
                  <div className='content'>
                    <p>
                      "Online reviews can make or break a customer's decision to
                      make a purchase. Read about these customer review on site"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </section>
    </Swiper>
  )
}
export default Testimonial2
