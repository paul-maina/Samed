import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Introduction() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
  };

  return (
    <div className="relative">
      <div>
        <div className="bg-cyan-400/50 font-serif absolute inset-0 z-10 flex flex-col justify-center items-center text-center ">
            <h1 className="text-blue-700 font-bold text-5xl md:text-4xl">
              Welcome to SAMED<br/> Pharmaceutical 
            </h1>
            <p className="text-red-50 rounded-2xl text-2xl font-semibold mt-2 max-w-xl">
              We’re more than just a pharmacy — we’re your health partner. With
              quality medications, expert advice, and reliable service, we help you
              live better every day.
            </p>
        </div>
      </div>
            
      <div className="overflow-hidden flex justify-center items-center w-auto h-99">
        <Slider {...settings} className="w-full">
          <div>
            <img src="https://i.imgur.com/xe6OIx5.jpeg" alt="" className="w-full h-[500px] object-cover" />
          </div>
          <div>
            <img src="https://i.imgur.com/i8cqZpJ.jpeg" alt="" className="w-full h-[500px] object-cover" />
          </div>
          <div>
            <img src="https://i.imgur.com/OXGee7o.jpeg" alt="" className="w-full h-[500px] object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Introduction;
