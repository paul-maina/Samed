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
    <div className="w-full overflow-hidden">
      <Slider {...settings} className="w-full">
        <div>
          <img
            src="https://i.ibb.co/k6kWX16p/Untitled-design-8.png"
            alt="Samed-Pharmaceutical-2"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/SR6fFJ67/power-enhancer.webp"
            alt="Power Enhancer"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/25Nj3yhB/Samed-Pharmaceutical-1.png"
            alt="Samed Pharmaceutical"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/vZzWb443/Beige-Black-Minimalist-Skincare-Product-Introduction-Poster-1-2.png"
            alt="Skincare Product"
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );

}

export default Introduction;
