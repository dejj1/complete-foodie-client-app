import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards";
import {} from "react-icons/fa6"
import { FaAngleRight, FaAngleLeft  } from "react-icons/fa";
import PropTypes from "prop-types";

// const SimpleNextArrow = (props) =>{
//     const {className, style, onClick} = props;
//     return(
//         <div className={className} style={{...style, display: "block", background: "whitesmoke"} }onClick={onClick}>NEXT</div>
//     )
// }

// const SimplePrevArrow = (props) => {
//     const {className, style, onClick} = props;
//     return(
//         <div className={className} style={{...style, display: "block", background: "whitesmoke"} }onClick={onClick}>BACK</div>
//     )
// }

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
    .then((res) => res.json())
    .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        // console.log(specials)
        setRecipes(specials);
      })
   
  }, []);

//   settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    // nextArrow: <SimpleNextArrow />,
    // prevArrow: <SimplePrevArrow />,
  };

  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
      </div>

        {/* arrow buttons */}
      <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
        <button onClick={()=> slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5"> <FaAngleLeft className="w-8 h-8 p-1"/></button>
       
        <button onClick={()=> slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5 bg-green">
            <FaAngleRight className="h-8 w-8 p-1"/>
        </button>
      </div>

      <Slider ref={slider} {...settings} className=" mt-10 space-x-5">
        {
        recipes.map((item, i) => (
          <Cards key={i} item={item} />
        ))
        }
      </Slider>
    </div>
  );
};

// SimpleNextArrow.propTypes = {
//   className: PropTypes.node,
//   style: PropTypes.node,
//   onClick: PropTypes.node
// };
// SimplePrevArrow.propTypes = {
//   className: PropTypes.node,
//   style: PropTypes.node,
//   onClick: PropTypes.node
// };

export default SpecialDishes;
