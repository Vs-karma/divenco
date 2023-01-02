import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProductCarousel from "../components/product-page/productCarousel";
import ProductDetail from "../components/product-page/productPageDetail";
import Link from "next/link";
import pp from "../styles/productpage.module.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// react carousel
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function ProductPage() {
  const img = [1, 2, 3, 4, 5, 6];
  return (
    <div className={pp.productPage}>
      <Link href="#">
        <a className="goBackLink"> Go Back </a>
      </Link>
      <div className={pp.car}>
        <CarouselProvider
          step={1}
          naturalSlideWidth={100}
          naturalSlideHeight={80}
          totalSlides={3}
          infinite
        >
          <Slider>
            {img.map((e, i) => {
              <Slide index={i}>
                <ImageWithZoom
                  src="/adidasbrand.png"
                  alt="shoe"
                  className={pp.imgWithZoomStyle}
                />
              </Slide>;
            })}
            <Slide index={0}>
              <ImageWithZoom
                src="/adidasbrand.png"
                alt="shoe"
                className={pp.imgWithZoomStyle}
              />
            </Slide>
            <Slide index={1}>
              <ImageWithZoom
                src="/adidasbrand.png"
                alt="sho"
                width={550}
                height={500}
              />
            </Slide>
            <Slide index={2}>
              <ImageWithZoom
                src="/adidasbrand.png"
                alt="sho"
                width={500}
                height={500}
              />
            </Slide>
          </Slider>
          <ButtonBack className={`${pp.carouselLeftBtn} ${pp.carouselBtn}`}>
            <AiOutlineLeft size={30} />
          </ButtonBack>
          <ButtonNext className={`${pp.carouselRightBtn} ${pp.carouselBtn}`}>
            <AiOutlineRight size={30} />
          </ButtonNext>
          <DotGroup />
        </CarouselProvider>
        <div className="productDetails" />
      </div>
    </div>
  );
}

export default ProductPage;
