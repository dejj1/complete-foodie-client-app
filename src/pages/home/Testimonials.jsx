/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import anime from "animejs/lib/anime.es.js";
import "../../Testimonials.css";


const Testimonials = () => {
  useEffect(() => {
    anime({
      targets: ".testimonials .texti",
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 3200,
      easing: "easeOutExpo",
      delay: (el, i) => 100 * i,
    });
  }, []);
  return (
    <div className="testimonials section-container bg-gradient rounded-[30px]">
      <div className="texti flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5  leading-[30px] italic">
              “I had the pleasure of dining at Foodie last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>

            {/* avatar */}

            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
              </div>

              <div className=" space-y-1">
                <h5 className="text-md font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />{" "}
                  <span className="font-medium text-sm">4.5</span>{" "}
                  <span className="text-white text-sm">(18.6k reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
