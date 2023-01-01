import Link from "next/link";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  ImageWithZoom,
  Slide,
  Slider,
  Image
} from "pure-react-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowDimensions from "../../hooks/getWindowsInfo";
import pp from "../../styles/productpage.module.css";

import adidasBrandShoe from "../../public/adidasbrand.png"


function ProductCarousel() {
  const { height, width } = useWindowDimensions();
  return (
    <div className={pp.productPage}>
      <Image src="../../public/adidasbrand.png" alt="yeah" />
      <Link href="#">
        <a className="goBackLink"> Go Back asdf</a>
      </Link>
      <div className={pp.car}>
        <CarouselProvider
          step={1}
          naturalSlideWidth={width >= 1024 ? 100 : 170}
          naturalSlideHeight={width >= 1024 ? 55 : 100}
          totalSlides={3}
          infinite
        >
          <Slider>
            <Slide index={0}>
              <ImageWithZoom src={adidasBrandShoe} alt="shoe" />
            </Slide>
            <Slide index={1}>
              <ImageWithZoom src={adidasBrandShoe} alt="shoe" />
            </Slide>
            <Slide index={2}>
              <ImageWithZoom src={adidasBrandShoe} alt="shoe" />
            </Slide>
          </Slider>
          <ButtonBack className={`${pp.carouselLeftBtn} ${pp.carouselBtn}`}>
            <AiOutlineLeft size={30} />
          </ButtonBack>
          <ButtonNext className={`${pp.carouselRightBtn} ${pp.carouselBtn}`}>
            <AiOutlineRight size={30} />
          </ButtonNext>
          <div className={pp.imgShow}>
            <Dot className={pp.imgPreview} slide={0}>
              <Image src={adidasBrandShoe} alt="shoe" />
            </Dot>
            <Dot className={pp.imgPreview} slide={1}>
              <Image src={adidasBrandShoe} alt="shoe" />
            </Dot>
            <Dot className={pp.imgPreview} slide={2}>
              <Image src={adidasBrandShoe} alt="shoe" />
            </Dot>
          </div>
        </CarouselProvider>
        <div className="productDetails" />
      </div>
      yeah
    </div>
  );
}

export default ProductCarousel;
