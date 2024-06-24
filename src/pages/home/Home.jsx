import React, { useEffect, useRef, Suspense, lazy } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "../../Home.css";
import LoadingSpinner from '../../components/LoadingSpinner';

// import Banner from "../../components/Banner";
// import Categories from "./Categories";
// import SpecialDishes from "./SpecialDishes";
// import Testimonials from "./Testimonials";
// import OurServices from "./OurServices";

const Banner = lazy(() => import("../../components/Banner"));
const Categories = lazy(() => import("./Categories"));
const SpecialDishes = lazy(() => import("./SpecialDishes"));
const Testimonials = lazy(() => import("./Testimonials"));
const OurServices = lazy(() => import("./OurServices"));

// eslint-disable-next-line react/prop-types
const LazyComponent = ({ component: Component, fallback }) => {
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div ref={elementRef}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <LazyComponent component={Banner} fallback={<LoadingSpinner />} />
      <LazyComponent component={Categories} fallback={<LoadingSpinner />} />
      <LazyComponent
        component={SpecialDishes}
        fallback={<LoadingSpinner />}
      />
      <LazyComponent
        component={Testimonials}
        fallback={<LoadingSpinner />}
      />
      <LazyComponent component={OurServices} fallback={<LoadingSpinner />} />
    </div>
  );
};

export default Home;
