import React, { Component } from "react";
import Slider from "react-slick";
import { testimonials } from "../data/testimonials";
import styles from '../../styles/review.module.css'

export default function ReviewComponent() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-play
        autoplaySpeed: 5000, // Delay between slides in milliseconds
        cssEase: "linear", // Use linear easing for smooth continuous scrolling
        arrows: false, // Remove navigation arrows
        responsive: [
            {
                breakpoint: 1200, // Adjust the number of slides shown at different screen sizes
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
          {
            breakpoint: 768, // Adjust the number of slides shown at different screen sizes
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
      <div className={`${styles.TestimonialDiv}`} >
        {/* <Slider {...settings} className="w-screen flex place-content-center text-center">
        {testimonials.map((item)=>(
            <div className={`${styles.TestimonialDiv} text-center px-8 `}>
                <div>
                    <img src='/images/call.jpg' className="my-2 w-[60px] h-[60px] rounded-full mx-auto shadow-md shadow-black" />
                </div>
              <p className=" text-neutral-800 mt-1">Working with [Consultancy Name] was an exceptional experience. Their expertise in both immigration and real estate allowed us to seamlessly transition to a new country and find our dream home. Their attention to detail and personalized approach made all the difference</p>
              <div className="flex items-center justify-between py-4">
                    <p className="text-sm text-neutral-500 italic">John Doe</p>
                   <img src='/images/stars.png' />
                  </div>
            </div>
        ))}
        </Slider> */}
      </div>
    );
  }

