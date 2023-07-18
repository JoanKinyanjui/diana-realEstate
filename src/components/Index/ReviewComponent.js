import React, { Component } from "react";
import Slider from "react-slick";
import { testimonials } from "../data/testimonials";
import styles from '../../styles/review.module.css';
import {BsFillAwardFill} from 'react-icons/bs'

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
        <Slider {...settings} className="w-screen flex place-content-center  items text-center h-[13vh] items-center">
        {testimonials.map((item)=>(
            <div className={`${styles.TestimonialDivCircle} mx-auto`}>
                <BsFillAwardFill  className={`${styles.IconReactSlick} mx-auto text-xl`}/>
              <p className="w-[100%] md:w-[80%] mx-auto text-gray-400 font-medium uppercase">{item.title}</p>
            </div>
        ))}
        </Slider>
      </div>
    );
  }

