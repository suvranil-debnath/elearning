import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination, EffectCoverflow,Navigation } from 'swiper/modules';

import './Course.css';

import Course1 from './course_image/pic1.png'
import Course2 from './course_image/pic2.png'
import Course3 from './course_image/pic3.png'
import Course4 from './course_image/pic4.png'
import Course5 from './course_image/pic5.png'

const courses = [
  {
    id: 1,
    headline: 'Course Headline 1',
    subhead: 'Course SubHeadline 1',
    description: 'Please add your content here. Keep it short and simple. And smile :)',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
    image: Course1,

  },
  {
    id: 2,
    headline: 'Course Headline 2',
    subhead: 'Course SubHeadline 2',
    description: 'Please add your content here. Keep it short and simple. And smile :)',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
    image: Course2,

  },
  {
    id: 3,
    headline: 'Course Headline 3',
    subhead: 'Course SubHeadline 3',
    description: 'Please add your content here. Keep it short and simple. And smile :)',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
    image: Course3,

  },
  {
    id: 4,
    headline: 'Course Headline 4',
    subhead: 'Course SubHeadline 4',
    description: 'Please add your content here. Keep it short and simple. And smile :)',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
    image: Course4,
  },

  {
    id: 5,
    headline: 'Course Headline 5',
    subhead: 'Course SubHeadline 5',
    description: 'Please add your content here. Keep it short and simple. And smile :)',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
    image: Course5,
  },

  {
    id: 6,
    headline: 'Course Headline 5',
    subhead: 'Course SubHeadline 5',
    description: 'Please add your content here. Keep it short and simple. And smile :)',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
    image: Course1,
  },
];

const Course = () => {

  return (
    <>
    {/* Above the course slide */}
    <div className="container-fluid">
          <div className="row">

            <div className="col-lg-3 col-md-6 col-sm-2 filters">
                <label><h4>Professional Courses</h4></label>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-2 filters">

                  <label>
                    <input type="checkbox" /> Free Courses
                  </label>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-2 filters">
              <label>
                <input type="checkbox" /> Paid Courses
              </label>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-2 filters">
                      <label>

                      <select className="dropdown_content" name="age_value">
                          <option value="Sort">Sort</option>
                          <option value="Popularity">Popularity</option>
                          <option value="low to High">Price- low to High</option>
                          <option value="High to low">Price- High to low</option>
                      </select>
                      </label>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-4 filters">
                  <div className='popular-courses'>
                    <h1 className="popular-courses">Popular Courses</h1>
                  </div>
            </div>
            </div>
          </div>

{/* course slide  */}

      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 2,
            depth: 0,
            modifier: 0,
            slideShadows: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation,EffectCoverflow]}
          className="mySwiper"
        >
        <div className='courses'>

            {courses.map((course) => (
              <div key={course.id} className="course_card_slide">
                <SwiperSlide>
                  <div className="course_card">

                    <div className='image-content'>
                        <div className='overlay'>
                            <div className='card-image'>
                              <img src={course.image} alt={course.headline} className='card-img'></img>
                            </div>
                        </div>
                    </div>

                    <div className='card-content'>
                        <span className="name">{course.headline} </span>
                        <span className='subname'>{course.subhead}</span>
                        <span className='description'>{course.description}</span>
                        <hr></hr>
                        <span className='subname'>Title</span>
                        <div className="buttonTag">
                            {course.tags.map((tag, index) => (
                              <span key={index} className="button">{tag}</span>
                            ))}
                        </div>
                        <div className='buttonside'><button className='buttonSide'>Button</button>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
        </div>
      </Swiper>
    </>
  )
}
export default Course