import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import '../Banner.css';

const Banner = () => {
  useEffect(() => {
    anime({
      targets: ".banner .texti",
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 3000,
      easing: "easeOutExpo",
      delay: (el, i) => 200 * i,
    });
  }, []);
 
  return (
    <div className="banner section-container ">
      <div className="texti py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* {image} */}
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div  className="flex bg-[#F8F8E8] py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                </div>
                <p className="text-red"> $14.00</p>
              </div>
            </div>
            <div  className="sm:flex hidden bg-[#f8f8e8fc] py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Italian noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                </div>
                <p className="text-red"> $12.00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* {text} */}
        <div className="md:w-1/2 space-y-7 sm:space-y-5 px-4">
          <h2 className=" md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="texti text-xl text-lowercase ">
            Where each plate weaves a story of culinary mastery and passionate
            craftsmanship!
          </p>
          <a href="/menu" className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
