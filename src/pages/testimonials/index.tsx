import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import SectionHeader from "../../ui/SectionHeader";
import TestimonialCard from "../../ui/Cards/TestimonialCard";
import React from "react";
import { ITestimonial } from "../../lib/interface";

const Testimonials: React.FC<ITestimonial> = ({ data }) => {
  return (
    <section id="testimonials">
      <div className="container">
        <SectionHeader
          title="Testimonials"
          subTitle="Here is our few testimonials"
          className="section-header"
        />
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            className="mySwiper"
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {data.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard data={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
