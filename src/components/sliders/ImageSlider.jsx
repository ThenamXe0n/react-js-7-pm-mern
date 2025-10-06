import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { storeContext } from "../../contextApi/myStateContext";
import TrendingCard from "../TrendingCard";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const { movieList } = useContext(storeContext);

  return (
    <section className="h-full w-full">
      <Slider {...settings}>
        {/* <div className='bg-blue-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 1</div>
            <div className='bg-red-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 2</div>
            <div className='bg-green-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 3</div>
            <div className='bg-blue-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 4</div>
            <div className='bg-red-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 5</div>
            <div className='bg-green-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 6</div>
            <div className='bg-blue-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 7</div>
            <div className='bg-red-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 8</div>
            <div className='bg-green-600 h-96 w-full flex items-center justify-center font-bold text-5xl'>slider 9</div> */}

        <div>
          <TrendingCard srNo={1} imgUrl={movieList[0]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={2} imgUrl={movieList[1]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={3} imgUrl={movieList[2]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={4} imgUrl={movieList[3]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={5} imgUrl={movieList[4]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={6} imgUrl={movieList[4]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={3} imgUrl={movieList[2]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={4} imgUrl={movieList[3]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={5} imgUrl={movieList[4]?.posterUrl} />
        </div>
        <div>
          <TrendingCard srNo={6} imgUrl={movieList[4]?.posterUrl} />
        </div>
      </Slider>
    </section>
  );
};

export default ImageSlider;
