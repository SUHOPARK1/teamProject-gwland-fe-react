import React, { Fragment } from "react";
import Slider from "react-slick";
import Styles from './HomeStyles.scss'


export default () => {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrows: true,

  };
  return (
    <div>
      <Slider {...settings}>
        <div>
            <img
              src={"https://blog.kakaocdn.net/dn/nHm3q/btq1C1jUdtq/2N2mFGjzI3dEMeJwyZVnz0/img.jpg"}
              width='100%'
              height='100%'
              object-fit='contain' />
        </div>
        <div>
            <img src={"https://blog.kakaocdn.net/dn/cPp5AY/btq1yYvaaRu/5QihdteWmDt4rTcIbyHpm0/img.png"}
              width='100%'
              height='100%'
              object-fit='contain' />
        </div>
        <div>
            <img src={"https://blog.kakaocdn.net/dn/bY9iat/btq1C2C9GQ4/6apHLjAGS9wKwXOMaeiNkk/img.jpg"}
            width='100%'
            height='100%'
            object-fit='contain'/>
        </div>
        <div>
            <img src={"https://blog.kakaocdn.net/dn/QeDHS/btq1ByvvWcY/9bIFmGscYiKD0NdVzR6MgK/img.jpg"}
            width='100%'
            height='100%'
            object-fit='contain' />
        </div>
      </Slider>
    </div>
  );
}