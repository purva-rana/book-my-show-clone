import React from "react";

//Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";


//components
import EntertainmentCardComponent from "../components/Entertainment/EntertainmentCardComponent";
import HeroCarouselComponent from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSliderComponent from "../components/PosterSlider/PosterSlider.Component";


const HomePage = () => {
  return <div>HomePage</div>;
};

export default DefaultLayoutHoc(HomePage);
